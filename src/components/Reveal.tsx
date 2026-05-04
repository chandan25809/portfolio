"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  distance?: number;
  delayMs?: number;
  onVisible?: () => void;
};

/** Scroll-reveal through IntersectionObserver + CSS transitions (dependency-free). */
export function Reveal({
  children,
  className = "",
  threshold = 0.12,
  distance = 32,
  delayMs = 0,
  onVisible,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      el.classList.add("reveal-visible");
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    el.style.setProperty("--reveal-dist", `${distance}px`);
    if (delayMs) el.style.setProperty("--reveal-delay", `${delayMs}ms`);

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          obs.unobserve(entry.target);
          onVisible?.();
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, distance, delayMs, onVisible]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
