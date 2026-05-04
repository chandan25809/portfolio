"use client";

import { usePathname } from "next/navigation";
import { SkyBackdrop } from "@/components/ide/SkyBackdrop";
import { PrevNext } from "@/components/journal/PrevNext";
import { McHotbar } from "./McHotbar";
import { McTerrain } from "./McTerrain";
import { PROFILE } from "@/data/career";
import { worldZoneSubtitle } from "@/data/site-nav";

export function MinecraftShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="mc-world-root relative flex min-h-screen flex-col">
      <SkyBackdrop />
      <McTerrain />

      {/* overflow-x only here so full-bleed terrain + fixed villager are not clipped by the root */}
      <div className="relative z-[1] mx-auto flex w-full min-w-0 max-w-4xl flex-1 flex-col overflow-x-hidden px-3 pb-[8.25rem] pt-3 sm:px-5 sm:pb-[8.75rem] md:px-10 lg:max-w-5xl">
        <p className="text-center font-mono text-[10px] text-[#17324d] mb-3 drop-shadow-[0_1px_0_rgba(255,255,255,0.75)] px-2">
          Tip: Passing clouds overhead — talk to villager{" "}
          <strong className="text-[#1d5f1f] font-semibold">Quill</strong> (grounded assistant).
          Press <kbd className="mx-px px-1.5 py-0.5 rounded border-[2px] border-[#2c1810]/40 bg-white/65 text-[10px]">Esc</kbd>{" "}
          to close chat.
        </p>

        {/* HUD — one title, no faux IDE */}
        <header className="mb-3 px-3 py-3 sm:py-3.5 border-[4px] border-[#2c1810] rounded-lg bg-[#c8bba4]/92 shadow-[4px_4px_0_#1f120c] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-center sm:text-left">
            <div className="font-pixel text-[10px] sm:text-[11px] text-[#2c1810] leading-relaxed uppercase tracking-[0.04em]">
              {`${PROFILE.shortName}'s`}
            </div>
            <div className="font-pixel text-xs sm:text-sm text-[#1a4820] leading-snug uppercase tracking-[0.02em] mt-1">
              Overworld
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 sm:justify-end" aria-hidden>
            <span className="text-red-600 drop-shadow-[1px_1px_0_#fff]">
              ♥ ♥ ♥
            </span>
            <span className="text-[#5a4a38] opacity-85 font-mono text-[9px] hidden md:inline whitespace-nowrap">
              · fullstack · GenAI · systems
            </span>
          </div>
        </header>

        {/* Global hotbar — this *is* the menu */}
        <div className="mb-4 px-2 py-2.5 border-[4px] border-[#4a3020] rounded-xl bg-gradient-to-b from-[#8b6f4d] to-[#5c432f] shadow-[4px_4px_0_#2a1a12]">
          <p className="font-mono text-[9px] text-[#f0e6d4]/90 uppercase tracking-[0.22em] text-center sm:text-left mb-2 pl-1">
            Hotbar · waypoints
          </p>
          <McHotbar />
        </div>

        {/* Single inventory-style GUI */}
        <div className="mc-gui-shell flex flex-col flex-1 min-h-[min(68vh,640px)] border-[6px] border-[#383028] rounded-lg shadow-[8px_8px_0_#1f1810] overflow-hidden">
          <div className="shrink-0 px-4 py-2.5 bg-[#696158] border-b-[4px] border-[#2c1810] flex items-center justify-between gap-2">
            <span className="font-pixel text-[8px] sm:text-[10px] text-[#eae2d8] truncate uppercase tracking-widest drop-shadow-[1px_1px_0_#00000055]">
              Current zone
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-[#f5edd6] truncate text-right drop-shadow-[1px_1px_0_#00000044]">
              {worldZoneSubtitle(pathname)}
            </span>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto bg-[#efeadf] px-4 py-5 sm:px-8 sm:py-7">
            {children}
          </div>
          <PrevNext />
        </div>
      </div>
    </div>
  );
}
