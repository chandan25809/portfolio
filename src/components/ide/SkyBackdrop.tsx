/**
 * Minecraft-style sky gradient + endlessly scrolling voxel clouds
 * (passing-cloud vibe — original pixel shapes, no game assets).
 */

const CLOUD_VARIANTS = [
  [
    "....######.....",
    "..###########..",
    ".##############.",
    "################",
    ".##############.",
    "..###########..",
  ],
  [
    "...######...",
    ".###########.",
    "##############",
    ".###########.",
    "...######...",
  ],
  [
    ".....#####.....",
    "...###########.",
    "..#############",
    ".###############.",
    "..#############.",
    "...###########.",
  ],
] as const;

function padRow(row: string, w: number) {
  return row.length >= w ? row : row.padEnd(w, ".");
}

function PixelCloudSvg({ patternIndex, scale = 1 }: { patternIndex: number; scale?: number }) {
  const pattern = CLOUD_VARIANTS[patternIndex % CLOUD_VARIANTS.length];
  const h = pattern.length;
  const w = Math.max(...pattern.map((row) => row.length));
  const px = 5 * scale;

  return (
    <svg
      width={w * px}
      height={h * px}
      viewBox={`0 0 ${w} ${h}`}
      shapeRendering="crispEdges"
      className="shrink-0 drop-shadow-[4px_4px_0_rgba(26,43,61,0.16)] opacity-[0.96]"
      aria-hidden
    >
      {pattern.flatMap((row, y) =>
        [...padRow(row, w)].map((cell, x) =>
          cell === "#" ? (
            <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill="#fdfdfd" />
          ) : null,
        ),
      )}
    </svg>
  );
}

function CloudMarquee({
  duration,
  top,
  opacity = 1,
  scale = 1,
}: {
  duration: number;
  top: string;
  opacity?: number;
  scale?: number;
}) {
  const clouds = Array.from({ length: 10 }, (_, i) => (
    <PixelCloudSvg key={i} patternIndex={(i % 3) + (duration % 2)} scale={scale} />
  ));

  return (
    <div
      className="pointer-events-none absolute left-0 right-0 overflow-hidden"
      style={{ top, opacity }}
    >
      <div className="mc-marquee-track" style={{ animationDuration: `${duration}s` }}>
        <div className="mc-marquee-chunk">{clouds}</div>
        <div className="mc-marquee-chunk" aria-hidden>
          {clouds}
        </div>
      </div>
    </div>
  );
}

export function SkyBackdrop() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 mc-sky-band" aria-hidden />
      <div className="pointer-events-none absolute inset-0 mc-sky-pixel-veil" aria-hidden />

      {/* depth parallax — three speeds / heights */}
      <CloudMarquee duration={145} top="6%" opacity={1} scale={1.05} />
      <CloudMarquee duration={220} top="20%" opacity={0.92} scale={0.9} />
      <CloudMarquee duration={72} top="38%" opacity={0.72} scale={0.75} />
    </>
  );
}
