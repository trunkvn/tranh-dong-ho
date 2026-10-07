"use client";

import { useRef, useState } from "react";
import { fmt } from "@/lib/i18n/fmt";
import type { Dict } from "@/lib/i18n";

// Reading "Đám cưới chuột": six numbered details on the print, read one at a time.
//
// What the sources agree on: the mouse groom rides a red horse at the head of the procession, the
// bride follows in a palanquin, with a crowd of mouse relatives; there are horns and drums, flags
// and fans, ceremonial hats and belts; the mice look fearful and glance about; in the right corner a
// fierce old cat is offered a carp and a dove. Read as satire, the cat stands for the ruling class
// and officials and the mice for ordinary people who must pay to be left in peace.

// where each numbered mark sits on the print (the titles and texts are in the dictionary, same order)
const SPOTS = [
  { x: 150, y: 238 }, // the relatives
  { x: 396, y: 150 }, // the bride's palanquin
  { x: 706, y: 142 }, // the groom on a red horse
  { x: 1050, y: 190 }, // banner, horn and drum
  { x: 1248, y: 176 }, // the offering
  { x: 1394, y: 132 }, // the old cat
];

const W = 1500;
const H = 410; // the viewBox starts at y = 30, so the sky is not too tall

export function MiceReader({
  art,
  t,
}: {
  art: React.ReactNode;
  t: Dict["read"]["reader"];
}) {
  const DETAILS = t.details.map((d, n) => ({ ...d, ...SPOTS[n] }));
  const [i, setI] = useState(0);
  const box = useRef<HTMLDivElement>(null);

  function go(n: number) {
    const next = (n + DETAILS.length) % DETAILS.length;
    setI(next);
    // on a narrow screen the print scrolls sideways: bring the chosen detail into the middle
    const el = box.current;
    if (el && el.scrollWidth > el.clientWidth) {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      el.scrollTo({
        left: (DETAILS[next].x / W) * el.scrollWidth - el.clientWidth / 2,
        behavior: reduce ? "auto" : "smooth",
      });
    }
  }

  const d = DETAILS[i];

  return (
    <div
      className="wrap readbox"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(i + 1);
        if (e.key === "ArrowLeft") go(i - 1);
      }}
    >
      <div className="scroll" ref={box} tabIndex={0} aria-label={t.scrollAria}>
        <svg
          className="artwide"
          viewBox={`0 30 ${W} ${H}`}
          role="img"
          aria-label={t.svgAria}
        >
          {art}
          {DETAILS.map((h, n) => (
            <g
              key={h.title}
              className={`hot${n === i ? " on" : ""}`}
              transform={`translate(${h.x} ${h.y})`}
              role="button"
              tabIndex={0}
              aria-label={fmt(t.detailAria, {
                n: n + 1,
                total: DETAILS.length,
                title: h.title,
              })}
              aria-pressed={n === i}
              onClick={() => go(n)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  go(n);
                }
              }}
            >
              <circle className="ring" r="27" />
              <circle r="18" />
              <text y="7.5">{n + 1}</text>
            </g>
          ))}
        </svg>
      </div>

      <div className="reader">
        <button
          className="arrow"
          type="button"
          onClick={() => go(i - 1)}
          aria-label={t.prev}
        >
          ‹
        </button>
        <div className="rtext" aria-live="polite">
          <p className="rno">
            <b>{i + 1}</b> / <span>{DETAILS.length}</span>
          </p>
          <h3 className="disp">{d.title}</h3>
          <p>{d.text}</p>
        </div>
        <button
          className="arrow"
          type="button"
          onClick={() => go(i + 1)}
          aria-label={t.next}
        >
          ›
        </button>
      </div>

      <p className="rnote">{t.note}</p>
    </div>
  );
}
