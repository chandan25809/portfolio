"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PROFILE, RESUME_PDF_HREF } from "@/data/career";
import { Reveal } from "@/components/Reveal";

const STAT_TILES = [
  { label: "Pipelines", value: "~10M evt/day-class", accent: "#c9a227" },
  { label: "API reach", value: "1M+ users · tight tails", accent: "#4a8575" },
  { label: "Digital twin", value: "250K+ buildings (UF)", accent: "#5fa84a" },
  { label: "Finance APIs", value: "$2B+ flows · Azure", accent: "#e85d4c" },
] as const;

/** Lightweight typewriter — no extra deps */
function Typewriter({ text }: { text: string }) {
  const [len, setLen] = useState(0);
  useEffect(() => setLen(0), [text]);
  useEffect(() => {
    if (len >= text.length) return;
    const ms = text[len] === " " ? 45 : 15 + Math.round(Math.random() * 32);
    const id = window.setTimeout(() => setLen((n) => n + 1), ms);
    return () => clearTimeout(id);
  }, [len, text]);

  const done = len >= text.length;
  return (
    <span className="font-mono text-sm sm:text-base text-chunk-ink/92 leading-relaxed inline-block">
      {text.slice(0, len)}
      {!done ? <span className="text-chunk-grass animate-pulse font-bold"> █</span> : null}
    </span>
  );
}

/** Decorative pixel sun (overworld / daytime motif) beside the headline — not interactive. */
function HeroPixelSun() {
  return (
    <span
      className="absolute -right-1 -top-2 sm:right-4 sm:-top-1 opacity-[0.9] landing-hero-float pointer-events-none"
      title="Decorative pixel sun — overworld / daytime motif"
    >
      <svg
        width={72}
        height={72}
        viewBox="0 0 12 12"
        shapeRendering="crispEdges"
        className="block"
        aria-hidden
        focusable="false"
      >
      {[
        [4, 0, 4, 4],
        [3, 4, 6, 3],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill="#ffe066" opacity={i === 0 ? 1 : 0.95} />
      ))}
      {[
        [5, 2, 2, 6],
        [2, 5, 8, 2],
      ].map(([x, y, w, h], i) => (
        <rect key={`r-${i}`} x={x} y={y} width={w} height={h} fill="#ffc933" />
      ))}
    </svg>
    </span>
  );
}

export function HomeLanding() {
  const nameParts = PROFILE.name.split(" ");
  const typingStart = Math.min(nameParts.length + 4, 10);
  const typeDelayMs = typingStart * 90 + 400;

  return (
    <div className="w-full max-w-2xl mx-auto text-left pb-8 relative">
      <section className="relative mb-9 pt-2 sm:pr-14">
        <HeroPixelSun />

        <p
          className="landing-pop-in font-mono uppercase text-[10px] tracking-[0.28em] text-chunk-grass mb-5"
          style={{ animationDelay: "0ms" }}
        >
          spawn · fullstack · agents · LLMs
        </p>

        <h1 className="font-pixel text-[clamp(11px,2.8vw,18px)] sm:text-xl leading-snug mb-6 text-[#1f3d2f] tracking-tight min-h-[2.75em] flex flex-wrap gap-x-4 gap-y-2">
          {nameParts.map((word, wi) => (
            <span
              key={`${wi}-${word}`}
              className="landing-pop-in inline-block"
              style={{ animationDelay: `${80 + wi * 140}ms` }}
            >
              {word.toUpperCase()}
            </span>
          ))}
        </h1>

        <p
          className="landing-pop-in font-semibold text-chunk-ink text-base sm:text-lg mb-4 max-w-prose text-balance"
          style={{ animationDelay: `${100 + nameParts.length * 110}ms` }}
        >
          {PROFILE.title}
        </p>

        <div
          className="landing-pop-in mb-10 min-h-[4.75rem]"
          style={{ animationDelay: `${160 + nameParts.length * 110}ms` }}
        >
          <DelayedMount delayMs={typeDelayMs}>
            <Typewriter text={PROFILE.tagline} />
          </DelayedMount>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-11">
          {STAT_TILES.map((s, si) => (
            <div
              key={s.label}
              className="landing-slot chunk-panel px-4 py-3 border-[3px] border-chunk-ink rounded-xl bg-[#fffefb]/97 flex flex-col gap-1 hover:-translate-y-1 hover:shadow-chunk transition-transform duration-300"
              style={{ animationDelay: `${320 + si * 90}ms` }}
            >
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider opacity-65">
                {s.label}
              </span>
              <span className="font-mono text-xs sm:text-sm font-semibold" style={{ color: s.accent }}>
                {s.value}
              </span>
            </div>
          ))}
        </div>

        <p
          className="landing-slot text-center font-mono text-[10px] text-chunk-ink/75 mt-2 mb-8"
          style={{ animationDelay: `${0.75}s` }}
        >
          Use the <strong>hotbar above</strong> to travel zones — Résumé is the last slot.
        </p>
      </section>

      <Reveal className="w-full mb-8" threshold={0.08}>
        <div className="border-[3px] border-chunk-ink shadow-chunk-sm bg-chunk-panel/98 px-5 py-4 font-mono text-[11px] sm:text-[12px] text-chunk-ink rounded-xl">
          <div className="text-chunk-ink/60 text-[10px] uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="text-sm" aria-hidden>
              📡
            </span>
            contact / ping
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <a href={`mailto:${PROFILE.email}`} className="underline decoration-from-font hover:text-accent-coral">
              {PROFILE.email}
            </a>
            <span className="text-chunk-ink/35">·</span>
            <span className="text-chunk-ink/70">{PROFILE.phone}</span>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-chunk-grass underline decoration-dotted"
            >
              github/{PROFILE.github.split("/").pop()}
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-gold underline decoration-dotted"
            >
              LinkedIn
            </a>
            <Link href={RESUME_PDF_HREF} target="_blank" className="underline decoration-dotted hover:text-accent-coral" download>
              résumé PDF →
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal className="text-center font-mono text-[10px] text-chunk-ink/72" threshold={0.15}>
        Voxel clouds over the biome • Ask villager{" "}
        <strong className="text-chunk-ink">Quill</strong> for recruiter FAQs.
      </Reveal>
    </div>
  );
}

function DelayedMount({ delayMs, children }: { delayMs: number; children: React.ReactNode }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setOn(true), delayMs);
    return () => window.clearTimeout(id);
  }, [delayMs]);
  if (!on) return null;
  return children;
}
