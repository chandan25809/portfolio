import { McTerrainVillager } from "./McTerrainVillager";

/** Blocky grass + dirt bottom strip (CSS only — original) + ambient villager. */
export function McTerrain() {
  return (
    <div className="mc-terrain-root fixed bottom-0 left-0 right-0 z-[18] h-14 sm:h-16 overflow-visible">
      <div
        className="mc-terrain-grass pointer-events-none absolute top-0 left-0 right-0 h-[36%] border-b-[3px] border-[#34692a] overflow-hidden"
        aria-hidden
        style={{
          background: "linear-gradient(180deg, #7cbf4a 0%, #5a9835 65%, #4a7f2e 100%)",
        }}
      >
        {/* Subtle blade / tuft lines so grass reads less “flat poster” in screenshots */}
        <div
          className="mc-terrain-grass-tufts pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.35]"
          aria-hidden
        />
      </div>
      <div
        className="mc-terrain-dirt pointer-events-none absolute top-[36%] left-0 right-0 bottom-0 border-t border-[#2a4a1f]/40"
        aria-hidden
        style={{
          background: `repeating-linear-gradient(
            92deg,
            #684530 0px,
            #684530 14px,
            #5c3e2a 14px,
            #5c3e2a 26px,
            #4f3624 26px,
            #4f3624 38px
          )`,
        }}
      />
      <McTerrainVillager />
    </div>
  );
}
