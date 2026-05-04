# Field Notes — Chandan Abhishek’s portfolio

Light **Field Journal** aesthetic (graph paper + hand-lettering + chunky borders) inspired by playbook sites like Abheeshta’s — minus the Minecraft skin. Multi-page routing, printable résumé, and **Quill**, an LLM-powered assistant anchored to `src/data/career.ts`.

## Pages

| Path | Contents |
|---|---|
| `/` | Hero + nav stickers + contact ribbon |
| `/about` | Positioning · SWE vs public GitHub vs employer GenAI |
| `/experience` | Expandable role cards (`Read more`) |
| `/projects` | UF digital twin summary + highlighted GitHub repos (Pascal, P2P, Crypto-Alerts, GeneViz, Impacta, StreamLite) |
| `/skills` | Grouped proficiency bars |
| `/achievements` | Fast facts + LeetCode + founding-engineer framing |
| `/resume` | Print-friendly distill + `/Chandan-Abhishek-Resume.pdf` link |
| `/api/chat` | Streaming assistant completions |

## Local dev

```bash
npm install
cp .env.local.example .env.local   # add API keys for Quill
npm run dev
```

Without the chat API keys in `.env.local`, the site still runs — chat shows a graceful error banner.

## Customise

Single source of truth: **`src/data/career.ts`**

Update `PROFILE`, `ROLES`, `PORTFOLIO_REPOS`, `WORK_SHOWCASES`, `SKILLS` — navigation order lives in `JOURNAL_PAGES`.

Hero portrait: **`public/portrait.jpg`** (`next/image`, paper frame + scroll-reveal).

Résumé PDF: **`public/Chandan-Abhishek-Resume.pdf`**.

LinkedIn URL lives in `PROFILE.linkedin` (`src/data/career.ts`).

## Deploy (Vercel)

Import repo → add variables from `.env.local.example` in Project → Environment Variables.

## Stack

Next.js 14 App Router · TypeScript · Tailwind · `@google/generative-ai`

---

MIT — author Chandan Abhishek Muchukota.
