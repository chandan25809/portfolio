"use client";

const OPEN_QUILL = "portfolio:open-quill";

/** Ambient overworld figure: feet on grass/dirt seam (mostly in green), patrol + bob; click opens Quill. */
export function McTerrainVillager() {
  return (
    <div
      className="mc-terrain-villager-patrol pointer-events-auto absolute bottom-[64%] left-3 z-[2] flex w-[110px] items-end overflow-visible sm:left-8 sm:w-[130px]"
    >
      <button
        type="button"
        className="mc-terrain-villager-hit relative flex min-h-[44px] min-w-[44px] cursor-pointer items-end justify-start rounded-md border-0 bg-transparent p-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c1810] focus-visible:ring-offset-2 focus-visible:ring-offset-[#7cbf4a]"
        aria-label="Open Quill career assistant"
        title="Stands on the grass above the dirt. Click to open Quill (same as Villager Quill)."
        onClick={() => {
          window.dispatchEvent(new CustomEvent(OPEN_QUILL));
        }}
      >
        <span className="mc-terrain-villager-bob pointer-events-none inline-flex h-10 items-end sm:h-11">
          <svg
            className="mc-terrain-villager-sprite h-full w-auto max-w-[2rem] drop-shadow-[2px_2px_0_rgba(26,18,12,0.55)] sm:max-w-[2.25rem]"
            viewBox="0 0 10 14"
            preserveAspectRatio="xMidYMax meet"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <g className="mc-terrain-villager-frame-a">
              <rect x="3" y="0" width="4" height="3" fill="#c49a6c" />
              <rect x="2" y="3" width="6" height="5" fill="#4a7aa8" />
              <rect x="1" y="4" width="1" height="3" fill="#4a7aa8" />
              <rect x="8" y="4" width="1" height="3" fill="#4a7aa8" />
              <rect x="3" y="8" width="2" height="4" fill="#2c1810" />
              <rect x="5" y="8" width="2" height="4" fill="#2c1810" />
              <rect x="3" y="12" width="2" height="2" fill="#1a120c" />
              <rect x="5" y="12" width="2" height="2" fill="#1a120c" />
              <rect x="4" y="1" width="1" height="1" fill="#2c1810" />
              <rect x="6" y="1" width="1" height="1" fill="#2c1810" />
            </g>
            <g className="mc-terrain-villager-frame-b">
              <rect x="3" y="0" width="4" height="3" fill="#c49a6c" />
              <rect x="2" y="3" width="6" height="5" fill="#4a7aa8" />
              <rect x="0" y="4" width="1" height="3" fill="#4a7aa8" />
              <rect x="9" y="4" width="1" height="3" fill="#4a7aa8" />
              <rect x="3" y="8" width="2" height="4" fill="#2c1810" />
              <rect x="5" y="8" width="2" height="4" fill="#2c1810" />
              <rect x="3" y="12" width="2" height="2" fill="#1a120c" />
              <rect x="5" y="12" width="2" height="2" fill="#1a120c" />
              <rect x="4" y="1" width="1" height="1" fill="#2c1810" />
              <rect x="6" y="1" width="1" height="1" fill="#2c1810" />
            </g>
          </svg>
        </span>
      </button>
    </div>
  );
}
