import {
  PORTFOLIO_REPOS,
  WORK_SHOWCASES,
  PROFILE,
  worldZoneSubtitle,
} from "@/data/career";

export default function ProjectsPage() {
  return (
    <div className="space-y-10 text-left pb-8">
      <header>
        <h1 className="ide-page-title">Projects</h1>
        <p className="ide-page-sub mb-2">{worldZoneSubtitle("/projects")}</p>
      </header>

      <section aria-labelledby="work-showcase">
        <h2 id="work-showcase" className="font-bold text-xl text-chunk-ink mb-4">
          Work-adjacent samples
        </h2>
        <div className="space-y-4">
          {WORK_SHOWCASES.map((w) => (
            <article key={w.id} className="card-journal p-5">
              <h3 className="font-bold text-lg text-chunk-grass">{w.name}</h3>
              <p className="text-sm mt-2">{w.blurb}</p>
              <ul className="mt-3 font-mono text-[11px] space-y-1 list-disc list-inside">
                {w.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <p className="font-mono text-[10px] text-ink-muted mt-3">{w.tech.join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="github-public">
        <h2 id="github-public" className="font-bold text-xl text-chunk-ink mb-4">
          Public repos
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {PORTFOLIO_REPOS.map((p) => (
            <article key={p.id} className="card-journal p-5 flex flex-col tape-corner">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-xl text-chunk-ink leading-tight">{p.name}</h3>
                <span className="text-xl shrink-0" aria-hidden>
                  {p.accent}
                </span>
              </div>
              <p className="font-mono text-[11px] text-accent-gold italic mt-1">{p.hook}</p>
              <p className="text-sm mt-3 flex-1">{p.summary}</p>
              <ul className="mt-3 font-mono text-[11px] space-y-1 list-disc list-inside marker:text-accent-coral flex-1">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <p className="font-mono text-[10px] text-chunk-ink/65 mt-4 pt-2 border-t border-dashed border-chunk-ink/25">
                {p.tech.join(" · ")}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-journal-primary text-[11px] py-2 px-3 flex-1 text-center justify-center sm:flex-none"
                >
                  GitHub →
                </a>
                {p.demoUrl ? (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-journal text-[11px] py-2 px-3 flex-1 text-center justify-center sm:flex-none"
                  >
                    Demo / video
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <p className="font-mono text-xs text-chunk-ink/70 text-center">
        More repos on{" "}
        <a href={PROFILE.github} className="underline decoration-dotted" target="_blank" rel="noopener noreferrer">
          {PROFILE.github.replace("https://", "")}
        </a>
      </p>
    </div>
  );
}
