"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JOURNAL_PAGES } from "@/data/site-nav";

/** Sits inside the Minecraft GUI panel (normal flow — avoids overlapping scroll content). */
export function PrevNext() {
  const pathname = usePathname();
  const entries = [...JOURNAL_PAGES];
  const idx = entries.findIndex((p) => p.href === pathname);
  if (idx === -1) return null;

  const prev = idx > 0 ? entries[idx - 1] : null;
  const next = idx < entries.length - 1 ? entries[idx + 1] : null;

  return (
    <nav
      aria-label="Zone navigation"
      className="shrink-0 border-t-[4px] border-[#2c1810] bg-[#d5ccb6] px-2 py-2 sm:px-3"
    >
      <div className="mx-auto flex w-full max-w-xl items-center justify-between gap-3 border-[4px] border-[#3d2918] bg-[#c9bc9f]/98 px-3 py-2 font-mono text-[11px] shadow-[5px_5px_0_#2a1810] rounded-md">
        {prev ? (
          <Link
            href={prev.href}
            prefetch={false}
            className="shrink-0 whitespace-nowrap rounded-sm border-[3px] border-[#2c1810] bg-[#e4dcc8] px-3 py-2 font-bold uppercase tracking-tight shadow-[3px_3px_0_#1f120c] transition-transform hover:-translate-y-0.5 hover:bg-[#f0eadc] active:translate-y-0"
          >
            ◀ {prev.label}
          </Link>
        ) : (
          <span className="text-[#4a3928]/55">◇</span>
        )}
        {next ? (
          <Link
            href={next.href}
            prefetch={false}
            className="shrink-0 whitespace-nowrap rounded-sm border-[3px] border-[#2c1810] bg-[#3d963d] px-3 py-2 font-bold uppercase tracking-tight text-[#fdfef8] shadow-[3px_3px_0_#1f120c] transition-transform hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0"
          >
            {next.label} ▶
          </Link>
        ) : (
          <span className="text-[10px] uppercase text-[#4a3928]/55">
            End of map
          </span>
        )}
      </div>
    </nav>
  );
}
