import { NextRequest } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT, buildContents } from "@/lib/prompts";

export const runtime = "nodejs";

type Body = {
  message: string;
  history?: { role: "user" | "model"; text: string }[];
};

/** Short, readable API errors (avoid dumping megabytes of RPC JSON into the UI). */
function humanizeChatApiFailure(err: unknown): { httpStatus: number; message: string } {
  const raw = err instanceof Error ? err.message : String(err);

  const isQuota =
    /429|\bToo Many Requests\b|\bquota\b|\bQuota exceeded\b|free_tier|rate.?limit/i.test(
      raw,
    );

  if (isQuota) {
    const secs =
      /\bretry in\s+([\d.]+)\s*s/i.exec(raw)?.[1] ||
      /"retryDelay"\s*:\s*"(\d+)s/i.exec(raw)?.[1];
    const wait = secs ? ` Wait ~${Math.ceil(Number(secs))}s and try again.` : "";
    const used = /\/models\/([^/:?\s]+)/i.exec(raw)?.[1];

    const msg =
      `Chat API rate limit / quota exceeded (429).${wait}` +
      (used ? ` This deployment was targeting \`${used}\`.` : "") +
      ` Try: (1) set a lighter \`GEMINI_MODEL\` in .env.local (see .env.local.example),` +
      ` (2) reduce how often users press Send, or` +
      " (3) check quota / billing with your API provider.";

    return { httpStatus: 429, message: msg };
  }

  const isModelMissing = /not found|404/i.test(raw) && /model/i.test(raw);
  if (isModelMissing) {
    return {
      httpStatus: 503,
      message: `${raw}. Adjust GEMINI_MODEL in .env.local to a supported model id (see .env.local.example).`,
    };
  }

  return { httpStatus: 500, message: raw };
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error:
          "Chat assistant API key missing. Set GEMINI_API_KEY from .env.local.example in .env.local. Quill stays offline until then.",
      }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  }
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  const { message, history = [] } = body;
  if (!message || typeof message !== "string") {
    return new Response(JSON.stringify({ error: "Missing message" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  // Cap history to avoid runaway prompts.
  const trimmedHistory = history.slice(-10);

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const modelName = (process.env.GEMINI_MODEL || "gemini-2.5-flash")
      .trim()
      .replace(/^models\//, "");
    const model = genAI.getGenerativeModel({
      model: modelName,
      systemInstruction: SYSTEM_PROMPT,
      generationConfig: {
        temperature: 0.85,
        maxOutputTokens: 4096,
      },
    });
    const stream = await model.generateContentStream({
      contents: buildContents(trimmedHistory, message),
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream.stream) {
            type Part = { text?: string };
            type Cand = {
              content?: { parts?: Part[] };
              finishReason?: string;
            };
            const cChunk = chunk as {
              candidates?: Cand[];
              promptFeedback?: { blockReason?: string };
            };
            const blockReason = cChunk.promptFeedback?.blockReason;
            if (blockReason) {
              controller.enqueue(
                encoder.encode(
                  `\n\n[Quill stopped: prompt blocked (${blockReason})]`,
                ),
              );
              continue;
            }
            const parts =
              cChunk.candidates?.[0]?.content?.parts ?? ([] as Part[]);
            let piece = "";
            for (const p of parts) {
              if (typeof p?.text === "string" && p.text.length > 0) piece += p.text;
            }
            if (!piece.length) {
              try {
                piece = chunk.text();
              } catch {
                piece = "";
              }
            }
            if (piece) controller.enqueue(encoder.encode(piece));
          }
          controller.close();
        } catch (err) {
          const note = humanizeChatApiFailure(err);
          controller.enqueue(encoder.encode(`\n\n⚠ ${note.message}`));
          controller.close();
        }
      },
    });
    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (err) {
    const { httpStatus, message } = humanizeChatApiFailure(err);
    return new Response(JSON.stringify({ error: message }), {
      status: httpStatus,
      headers: { "Content-Type": "application/json" },
    });
  }
}
