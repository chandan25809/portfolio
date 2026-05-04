"use client";

import { useState } from "react";
import type { Role } from "@/data/career";

export function RoleCard({ role }: { role: Role }) {
  const [open, setOpen] = useState(false);
  const preview = role.highlights.slice(0, 2);
  const rest = role.highlights.slice(2);

  return (
    <article className="card-journal p-5 text-left">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-bold text-xl sm:text-2xl text-chunk-grass">{role.title}</h2>
        <span className="font-mono text-[11px] text-chunk-ink/65">
          {role.start} – {role.end}
        </span>
      </div>
      <p className="font-mono text-sm font-medium mt-1">{role.company}</p>
      <p className="font-mono text-[11px] text-chunk-ink/60">{role.location}</p>

      <p className="font-sans text-sm mt-4 text-chunk-ink">{role.blurb}</p>

      <ul className="mt-4 space-y-2 font-mono text-[12px] leading-snug list-disc list-inside marker:text-accent-gold">
        {(open ? role.highlights : preview).map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      {rest.length > 0 ? (
        <button type="button" className="btn-journal mt-5 text-xs py-2 px-4" onClick={() => setOpen((o) => !o)}>
          {open ? "Show less ↑" : `Read more (${rest.length} bullets) ↓`}
        </button>
      ) : null}

      <p className="font-mono text-[10px] text-chunk-ink/65 mt-4 pt-3 border-t border-dashed border-chunk-ink/25">
        Stack: {role.tech.join(" · ")}
      </p>
    </article>
  );
}
