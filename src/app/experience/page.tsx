import { ROLES, worldZoneSubtitle } from "@/data/career";
import { RoleCard } from "@/components/experience/RoleCard";

export default function ExperiencePage() {
  return (
    <div className="space-y-6 text-left pb-8">
      <header>
        <h1 className="ide-page-title">Experience</h1>
        <p className="ide-page-sub">{worldZoneSubtitle("/experience")}</p>
      </header>

      <div className="space-y-6">
        {ROLES.map((r) => (
          <RoleCard key={r.id} role={r} />
        ))}
      </div>
    </div>
  );
}
