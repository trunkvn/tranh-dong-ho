"use client";

import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/lib/i18n";

// "About 180 households once made prints. Today three families still can."
// One square per household. When the block scrolls into view, all but three of them fade away.
// The final state is what is rendered by default, so it reads correctly without JavaScript and for
// people who ask for less motion; the fade only plays when the section is first seen.

const TOTAL = 180;
const KEEP = new Set([37, 101, 152]); // the three that remain, scattered

type Phase = "final" | "full";

export function ThenNow({ t }: { t: Dict["remain"]["thennow"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("final");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    setPhase("full"); // start with every household present, then let them go
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setPhase("final");
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="thennow" ref={ref}>
      <div className="dots" data-phase={phase} role="img" aria-label={t.aria}>
        {Array.from({ length: TOTAL }, (_, i) => (
          <i
            key={i}
            className={KEEP.has(i) ? "keep" : undefined}
            style={{
              transitionDelay: `${(i % 60) * 22 + Math.floor(i / 60) * 180}ms`,
            }}
          />
        ))}
      </div>

      <div className="tn-stats">
        <p className="tn-then">
          <b className="disp">{t.thenBig}</b>
          <span>{t.thenText}</span>
        </p>
        <p className="tn-now">
          <b className="disp">{t.nowBig}</b>
          <span>{t.nowText}</span>
        </p>
        <p className="tn-note">{t.note}</p>
      </div>
    </div>
  );
}
