import { SKILLS, worldZoneSubtitle } from "@/data/career";
import { McXpBar } from "@/components/skills/McXpBar";

const ORDER = ["language", "framework", "cloud", "database", "tool", "concept"] as const;

const LABEL: Record<(typeof ORDER)[number], string> = {
  language: "Languages",
  framework: "Frameworks & runtimes",
  cloud: "Cloud & infra",
  database: "Data stores",
  tool: "Tools & messaging",
  concept: "Concepts",
};

export default function SkillsPage() {
  return (
    <div className="space-y-6 text-left pb-8">
      <header>
        <h1 className="ide-page-title">Skills</h1>
        <p className="ide-page-sub">{worldZoneSubtitle("/skills")}</p>
        <p className="font-mono text-xs text-chunk-ink/70 mt-2">
          Indexed from résumé data — not a buzzword dump.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {ORDER.map((cat) => {
          const items = SKILLS.filter((s) => s.category === cat);
          if (!items.length) return null;
          return (
            <section key={cat} className="card-journal p-5">
              <h2 className="font-bold text-lg text-chunk-grass mb-3">{LABEL[cat]}</h2>
              <ul className="space-y-1.5 font-mono text-xs sm:text-sm">
                {items.map((s) => (
                  <li key={s.name} className="flex items-center justify-between gap-3">
                    <span>{s.name}</span>
                    <McXpBar level={s.level} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
