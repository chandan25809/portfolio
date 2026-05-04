import Link from "next/link";
import {
  PROFILE,
  ROLES,
  PORTFOLIO_REPOS,
  SKILLS,
  worldZoneSubtitle,
  RESUME_PDF_HREF,
  RESUME_SNAPSHOT_BULLETS,
} from "@/data/career";
import { ResumeActions } from "./ResumeActions";

const CATS = ["language", "framework", "cloud", "database", "tool", "concept"] as const;

/** Typography on this page avoids em/en dashes (user preference). */
function resumeDash(s: string): string {
  return s
    .replace(/\u2014/g, " - ")
    .replace(/\u2013/g, " - ");
}

/** Role row uses mdash as “no single date”; collapse to readable copy. */
function formatRoleDates(start: string, end: string): string {
  const isPlaceholder = (x: string) => x.trim() === "\u2014";
  const s = isPlaceholder(start) ? null : resumeDash(start);
  const e = isPlaceholder(end) ? null : resumeDash(end);
  if (s == null && e == null) return "Various dates";
  if (s == null) return e ?? "";
  if (e == null) return s;
  return `${s} - ${e}`;
}

export default function ResumePage() {
  return (
    <div className="max-w-2xl mx-auto text-left space-y-10 pb-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="ide-page-sub !mt-0 !mb-1">{resumeDash(worldZoneSubtitle("/resume"))}</p>
          <h1 className="ide-page-title !text-2xl sm:!text-3xl">{PROFILE.name}</h1>
          <p className="font-mono text-sm mt-1 text-chunk-ink">{PROFILE.title}</p>
          <p className="text-sm text-chunk-ink/80 mt-3 max-w-xl">{resumeDash(PROFILE.tagline)}</p>
          <div className="font-mono text-[11px] mt-4 space-y-0.5 text-chunk-ink/70">
            <a href={`mailto:${PROFILE.email}`} className="block hover:text-accent-coral underline decoration-dotted">
              {PROFILE.email}
            </a>
            <p>{PROFILE.phone}</p>
            <p>{PROFILE.location}</p>
            <div className="flex gap-3 pt-2 flex-wrap">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="underline">
                GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="underline">
                LinkedIn
              </a>
              <Link href={RESUME_PDF_HREF} target="_blank" className="underline" download>
                Download résumé PDF ↓
              </Link>
            </div>
          </div>
        </div>
        <ResumeActions />
      </div>

      <p className="text-sm">
        {PROFILE.education.degree} · {PROFILE.education.school} · GPA {PROFILE.education.gpa} ·{" "}
        {resumeDash(PROFILE.education.dates)}.
      </p>

      <section>
        <h2 className="font-bold text-xl border-b-[3px] border-chunk-ink pb-1 mb-3 text-chunk-ink">
          Snapshot (from résumé)
        </h2>
        <ul className="list-disc pl-5 text-sm space-y-2 text-chunk-ink/95">
          {RESUME_SNAPSHOT_BULLETS.map((line) => (
            <li key={line}>{resumeDash(line)}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-bold text-xl border-b-[3px] border-chunk-ink pb-1 mb-3 text-chunk-ink">
          Experience
        </h2>
        <div className="space-y-6">
          {ROLES.map((r) => (
            <article key={r.id}>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                <h3 className="font-semibold">{r.company}</h3>
                <span className="text-chunk-ink/70 text-sm">{r.title}</span>
              </div>
              <p className="font-mono text-[11px] text-chunk-ink/65">
                {formatRoleDates(r.start, r.end)} · {resumeDash(r.location)}
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                {r.highlights.map((h, i) => (
                  <li key={i}>{resumeDash(h)}</li>
                ))}
              </ul>
              <p className="font-mono text-[10px] text-chunk-ink/60 mt-2">{r.tech.join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-bold text-xl border-b-[3px] border-chunk-ink pb-1 mb-3 text-chunk-ink">
          Highlighted GitHub: what shipped
        </h2>
        <ul className="space-y-6">
          {PORTFOLIO_REPOS.map((p) => (
            <li key={p.id} className="text-sm">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="font-semibold underline text-base">
                {p.name}
              </a>
              <p className="mt-1 text-chunk-ink/90 leading-relaxed">{resumeDash(p.resumeStory)}</p>
              <ul className="mt-2 list-disc pl-5 text-[13px] text-chunk-ink/85 space-y-1">
                {p.bullets.map((b) => (
                  <li key={b}>{resumeDash(b)}</li>
                ))}
              </ul>
              <p className="font-mono text-[10px] text-chunk-ink/55 mt-2">
                Stack: {p.tech.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-bold text-xl border-b-[3px] border-chunk-ink pb-1 mb-3 text-chunk-ink">
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs">
          {CATS.map((cat) => {
            const items = SKILLS.filter((s) => s.category === cat);
            if (!items.length) return null;
            return (
              <div key={cat}>
                <p className="font-semibold capitalize mb-1">{cat}s</p>
                <ul>
                  {items.map((s) => (
                    <li key={s.name}>{s.name}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <p className="font-mono text-[10px] text-chunk-ink/65">
        <Link href="/" className="underline">
          ← Spawn (home)
        </Link>
      </p>
    </div>
  );
}
