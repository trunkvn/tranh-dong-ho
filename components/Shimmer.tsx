"use client";

import { useEffect, useRef } from "react";
import { C, INK, Shape } from "./art/woodcut";
import type { Dict } from "@/lib/i18n";

// One sheet, two papers: plain dó on the left, dó brushed with điệp on the right, with the same
// little print running across both. Only the coated half has the shell glint.
//
// The glint drifts by itself while the sheet is on screen (so touch screens and people who never
// hover still see it), and follows the pointer or a dragging finger as soon as they take over.
// Position is written straight to CSS variables, so nothing here re-renders React.
type T = Dict["paper"]["shimmer"];

export function Shimmer({ t }: { t: T }) {
  const ref = useRef<HTMLDivElement>(null);
  const resume = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // only drift while it can be seen
    const io = new IntersectionObserver(([e]) => el.classList.toggle("live", e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(resume.current);
    };
  }, []);

  function track(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    el.classList.add("touched");
    window.clearTimeout(resume.current);
  }

  function release() {
    // hand control back to the slow drift after a short pause
    window.clearTimeout(resume.current);
    resume.current = window.setTimeout(() => ref.current?.classList.remove("touched"), 1800);
  }

  return (
    <div
      ref={ref}
      className="shimmer"
      role="img"
      aria-label={t.aria}
      onPointerMove={track}
      onPointerDown={track}
      onPointerUp={release}
      onPointerLeave={release}
      onPointerCancel={release}
    >
      <div className="paper-plain" />
      <div className="paper-coated diep" />

      {/* the same print on both halves: only the coated side catches the light */}
      <svg className="motif" viewBox="0 0 300 400" aria-hidden="true">
        <g strokeLinejoin="round" strokeLinecap="round">
          <Shape fill={C.indigo} sw={5}>
            <path d="M28 96c6-26 42-28 54-6 16-8 38 4 32 22H32c-8-4-8-10-4-16z" />
          </Shape>
          <Shape fill={C.red} sw={6}>
            <circle cx="170" cy="136" r="58" />
          </Shape>
          <circle cx="170" cy="136" r="38" fill="none" stroke={C.yellow} strokeWidth="4" strokeDasharray="3 8" />
          <path d="M24 318H276" stroke={INK} strokeWidth="5" />
          <Shape fill={C.green} sw={4.5}>
            <path d="M54 318c-8-30-3-54 8-70 6 24 14 46 8 70z" />
          </Shape>
          <Shape fill={C.green} sw={4.5}>
            <path d="M246 318c8-30 3-54-8-70-6 24-14 46-8 70z" />
          </Shape>
          {[104, 148, 196].map((x, i) => (
            <Shape key={x} fill={C.yellow} sw={4}>
              <circle cx={x} cy={346 + (i % 2) * 8} r="10" />
            </Shape>
          ))}
        </g>
      </svg>

      <div className="glint" />

      <p className="half-tag plain-tag">
        {t.plain.name}
        <small>{t.plain.note}</small>
      </p>
      <p className="half-tag coated-tag">
        {t.coated.name}
        <small>{t.coated.note}</small>
      </p>

      <p className="shimmer-hint">
        <span className="hint-hover">{t.hintHover}</span>
        <span className="hint-touch">{t.hintTouch}</span>
      </p>

      <span className="tape a" aria-hidden="true" />
      <span className="tape b" aria-hidden="true" />
    </div>
  );
}
