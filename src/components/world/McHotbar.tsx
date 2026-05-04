"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JOURNAL_PAGES } from "@/data/site-nav";

/** Small icons for each waypoint — original UI, not Mojang assets */
const SLOT_ICON: Record<(typeof JOURNAL_PAGES)[number]["href"], string> = {
  "/": "🏠",
  "/about": "📜",
  "/experience": "⚔",
  "/projects": "📦",
  "/skills": "🔧",
  "/achievements": "🏆",
  "/resume": "📋",
};

export function McHotbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Waypoints"
      className="flex flex-wrap gap-2 justify-center sm:justify-start sm:gap-2.5 pb-1"
    >
      {JOURNAL_PAGES.map((p) => {
        const active = pathname === p.href;
        return (
          <Link
            key={p.href}
            href={p.href}
            prefetch={false}
            className={`group flex items-center gap-1.5 px-2 sm:px-3 py-2 min-h-[44px] border-[3px] border-[#2c1810] rounded-md font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wide shadow-[3px_3px_0_#1a0f0a] transition-transform select-none ${
              active
                ? "bg-[#3d8c3d] text-[#f6ffef] ring-2 ring-[#7cff7c]/50 -translate-y-0.5"
                : "bg-[#d4c4a8] text-[#2c1810] hover:bg-[#e8dcc4] hover:-translate-y-0.5 active:translate-y-0"
            }`}
            title={p.label}
          >
            <span className="text-base sm:text-lg leading-none drop-shadow-sm" aria-hidden>
              {SLOT_ICON[p.href]}
            </span>
            <span className="hidden sm:inline">{p.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
