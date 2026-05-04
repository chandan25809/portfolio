import { PROFILE, worldZoneSubtitle } from "@/data/career";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="text-left space-y-6">
      <header>
        <h1 className="ide-page-title">About</h1>
        <p className="ide-page-sub">{worldZoneSubtitle("/about")}</p>
      </header>

      <div className="card-journal p-6 space-y-4 font-mono text-xs sm:text-sm leading-relaxed">
        <p>
          I&apos;m <strong>{PROFILE.name}</strong> — {PROFILE.title}. {PROFILE.tagline}
        </p>
        <p className="text-ink-muted">
          Most of my hands-on <strong>LLM, RAG, and agentic orchestration</strong> work has shipped inside
          companies (UF&apos;s multi-agent assistant stack, Cogoport&apos;s RAG + booking bot, Infinite
          Analytics&apos; streaming RAG + LLM code review, etc.). Public GitHub is where I keep{" "}
          <strong>systems & product engineering</strong> artifacts — interpreters, P2P protocols, full-stack
          apps, and event-driven backends.
        </p>
        <p>
          {PROFILE.education.degree} @ {PROFILE.education.school} — GPA {PROFILE.education.gpa} (
          {PROFILE.education.dates}). Based in {PROFILE.location}.
        </p>
      </div>

      <div className="card-journal p-6">
        <h2 className="font-bold text-lg text-chunk-ink mb-3">Highlights</h2>
        <ul className="grid sm:grid-cols-2 gap-2 font-mono text-xs sm:text-sm leading-relaxed list-disc list-inside marker:text-accent-gold">
          {PROFILE.fastFacts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <p className="font-mono text-xs text-center">
        Curious for more detail? Open{" "}
        <Link href="/experience" className="underline underline-offset-4 decoration-dotted">
          Experience
        </Link>
        {" · "}
        <Link href="/projects" className="underline underline-offset-4 decoration-dotted">
          Projects
        </Link>
        {" · or ask "}
        <strong>Quill</strong> bottom-right 🤖
      </p>
    </div>
  );
}
