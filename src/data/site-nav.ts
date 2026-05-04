/** Hotbar / prev-next routes + zone captions — standalone so client bundles don’t depend on heavier career data. */

export const JOURNAL_PAGES = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/achievements", label: "Achievements" },
  { href: "/resume", label: "Résumé" },
] as const;

const WORLD_ZONE: Record<
  "/" | "/about" | "/experience" | "/projects" | "/skills" | "/achievements" | "/resume",
  string
> = {
  "/": "🌅 Spawn — hub",
  "/about": "📜 Book & Quill — about",
  "/experience": "⚔ Adventure log — experience",
  "/projects": "📦 Builds & loot — projects",
  "/skills": "🔧 Enchantment table — skills",
  "/achievements": "🏆 Trophies wall — achievements",
  "/resume": "📋 Character sheet — résumé",
};

export function worldZoneSubtitle(pathname: string): string {
  if (pathname in WORLD_ZONE) return WORLD_ZONE[pathname as keyof typeof WORLD_ZONE];
  return "🗺 Uncharted — keep exploring";
}
