/** Six-segment “XP / hunger” style bar — level 1–6 fills left-to-right with MC-ish colors. */
export function McXpBar({ level }: { level: number }) {
  const fills = ["#ffd43b", "#c084fc", "#38bdf8", "#4ade80", "#fb923c", "#f87171"];
  const clamped = Math.max(0, Math.min(6, level));

  return (
    <div
      className="flex gap-px shrink-0 items-end h-6 px-px py-px border-[2px] border-[#2c1810] bg-[#1c1410] rounded-sm"
      style={{ imageRendering: "pixelated" }}
      aria-hidden
    >
      {fills.map((color, i) => (
        <div
          key={i}
          className="w-2 sm:w-2.5 h-[18px] sm:h-5 first:rounded-l last:rounded-r"
          style={{
            background: i < clamped ? color : "#3a3532",
            boxShadow:
              i < clamped ? "inset 0 -2px 0 rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.15)" : "none",
          }}
        />
      ))}
    </div>
  );
}
