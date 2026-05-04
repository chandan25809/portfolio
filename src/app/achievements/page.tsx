import { ACHIEVEMENT_SHOWCASE, worldZoneSubtitle } from "@/data/career";

export default function AchievementsPage() {
  return (
    <div className="space-y-6 text-left pb-8">
      <header>
        <h1 className="ide-page-title">Achievements</h1>
        <p className="ide-page-sub">{worldZoneSubtitle("/achievements")}</p>
      </header>

      <div className="space-y-4">
        {ACHIEVEMENT_SHOWCASE.map((e) => (
          <article key={e.title} className="card-journal p-5">
            <h2 className="font-bold text-lg text-chunk-grass">{e.title}</h2>
            <p className="text-sm mt-2">{e.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
