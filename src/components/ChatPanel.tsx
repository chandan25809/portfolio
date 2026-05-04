"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "model"; text: string };

type Props = {
  open: boolean;
  onClose: () => void;
};

const WELCOME =
  "Hey, I'm Quill. Ask me anything grounded in Chandan's profile: roles, digital twin and GenAI-heavy tooling, RAG wins, or highlighted GitHub work. Short, plain English, no fluff walls.";

const SUGGESTIONS = [
  "Pitch Chandan as a backend + GenAI engineer in 60 seconds.",
  "What did he ship at UF? Digital twins and multi-agent assistants.",
  "What scale or reliability angles should I stress for his API and pipeline work?",
  "Which GitHub repos best argue systems depth for a recruiter?",
  "How should I phrase his Pascal interpreter on a hiring panel?",
];

export function ChatPanel({ open, onClose }: Props) {
  /** Omit leading UI welcome; the API expects the transcript to begin with a user turn. */
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  async function send(message: string) {
    if (!message.trim() || loading) return;
    setError(null);

    const historyForApi = messages
      .filter((m) => m.text.trim().length > 0)
      .slice(-10)
      .map((m) => ({ role: m.role, text: m.text }));

    const userMsg: Msg = { role: "user", text: message.trim() };
    setMessages((m) => [...m, userMsg, { role: "model", text: "" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: message.trim(),
          history: historyForApi.slice(-8),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `HTTP ${res.status}`);
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No response stream");
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = m.slice();
          const last = copy[copy.length - 1];
          if (last && last.role === "model") copy[copy.length - 1] = { role: "model", text: acc };
          return copy;
        });
      }
      acc += decoder.decode();
      setMessages((m) => {
        const copy = m.slice();
        const last = copy[copy.length - 1];
        if (last && last.role === "model") copy[copy.length - 1] = { role: "model", text: acc };
        return copy;
      });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      setError(msg);
      setMessages((m) => {
        const copy = m.slice();
        const last = copy[copy.length - 1];
        if (last && last.role === "model" && !last.text) copy.pop();
        return copy;
      });
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-chunk-ink/45 backdrop-blur-sm p-4">
      <div className="chunk-panel w-full max-w-lg max-h-[min(580px,85vh)] flex flex-col bg-chunk-panel overflow-hidden">
        <header className="flex items-center gap-3 px-4 py-3 border-b-[3px] border-chunk-ink bg-chunk-cream/95">
          <div className="w-11 h-11 border-[3px] border-chunk-ink rounded-xl bg-chunk-sky/40 flex items-center justify-center text-lg font-bold text-chunk-ink shrink-0">
            Q
          </div>
          <div className="min-w-0">
            <div className="font-bold text-lg leading-tight text-chunk-ink tracking-tight">
              Quill
            </div>
            <div className="font-mono text-[10px] text-chunk-ink/65 truncate">
              Streaming replies · grounded in résumé
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="ml-auto px-3 py-1.5 btn-journal text-[10px] shrink-0"
            aria-label="Close chat"
          >
            ESC
          </button>
        </header>

        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-[200px]"
        >
          <div className="flex justify-start">
            <div className="max-w-[90%] px-3 py-2 text-sm leading-relaxed border-[3px] border-chunk-ink rounded-xl bg-chunk-cream/90">
              {WELCOME}
            </div>
          </div>

          {messages.map((m, i) => (
            <div
              key={`${m.role}-${i}`}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[90%] px-3 py-2 text-sm leading-relaxed border-[3px] border-chunk-ink rounded-xl ${
                  m.role === "user"
                    ? "bg-chunk-sky/35 font-mono shadow-chunk-sm"
                    : "bg-chunk-cream/90"
                }`}
              >
                {m.text ||
                  (loading && i === messages.length - 1 ? <TypingDots /> : "…")}
              </div>
            </div>
          ))}
          {error ? (
            <p className="text-xs font-mono text-accent-coral leading-relaxed whitespace-pre-wrap">
              ⚠ {error}
              {/503|API key|missing/i.test(error) ? (
                <span className="block mt-2 text-chunk-ink/80 font-sans">
                  Add the chat API keys from <code className="font-mono text-[10px]">.env.local.example</code> to{" "}
                  <code className="font-mono text-[10px]">.env.local</code> and restart{" "}
                  <code className="font-mono text-[10px]">npm run dev</code>.
                </span>
              ) : null}
              {/\b429\b|quota|Too Many Requests/i.test(error) ? (
                <span className="block mt-2 text-[11px] text-chunk-ink/75 font-sans">
                  Restart <code className="font-mono">npm run dev</code> after editing <code className="font-mono">.env.local</code>.
                </span>
              ) : null}
              {/(model|404|not found)/i.test(error) && !/429|quota/i.test(error) ? (
                <span className="block mt-2 text-chunk-ink/80 font-sans text-[11px]">
                  In <code className="font-mono">.env.local</code>, try a lighter model id for the assistant
                  (see commented options in{" "}
                  <code className="font-mono">.env.local.example</code>).
                </span>
              ) : null}
            </p>
          ) : null}
        </div>

        <div className="px-3 py-2 flex flex-wrap gap-1 border-t border-dashed border-chunk-ink/35">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => send(s)}
              disabled={loading}
              className="text-[10px] px-2 py-1 border-[2px] border-chunk-ink/25 rounded-lg hover:border-chunk-ink hover:bg-chunk-cream text-chunk-ink/80 disabled:opacity-50"
            >
              {s}
            </button>
          ))}
        </div>

        <form
          className="p-3 flex gap-2 border-t-[3px] border-chunk-ink bg-chunk-cream/90"
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Quill..."
            className="flex-1 bg-chunk-panel px-3 py-2 text-sm border-[3px] border-chunk-ink rounded-xl focus:outline-none focus:ring-0 font-mono placeholder:text-chunk-ink/50"
            disabled={loading}
          />
          <button
            type="submit"
            className="btn-journal-primary px-4 shrink-0"
            disabled={loading || !input.trim()}
          >
            {loading ? "..." : "SEND"}
          </button>
        </form>
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 bg-chunk-ink/45 rounded-full animate-pulse inline-block"
          style={{ animationDelay: `${i * 120}ms` }}
        />
      ))}
    </span>
  );
}
