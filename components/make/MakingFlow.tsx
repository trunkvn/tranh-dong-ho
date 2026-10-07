"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { C, INK } from "../art/woodcut";
import { RoosterLayers, type Id } from "../press/RoosterLayers";
import type { Ink } from "../press/roosterScene";
import { StepArt } from "./StepArt";
import { fmt } from "@/lib/i18n/fmt";
import type { Dict } from "@/lib/i18n";

// 07 · From drawing to dry print. Steps are chosen by clicking (not by scrolling: they are short and close
// together, so a scroll-linked version skips past them). The steps follow what the sources describe, not a clock:
//   UNESCO: design drawn in ink on paper; image carved onto woodblocks; natural pigments prepared; printed on
//   paper coated with seashell powder; colours in a set order, black outline last; designing and carving take
//   years to master.
// The order of the colours here (yellow, red, green, indigo) is our own choice for this rooster: the sources say
// only that colours go on in a set order.
//   Báo Đầu tư (an artisan's account): paste brushed on and dried in the sun; điệp coat brushed on and dried
//   again; "if there are 5 colours, 5 printings, and every printing is one drying"; production starts each
//   year in July and August.
//   Things Asian: black and indigo/yellow dyes left to settle for a year or more before use.
// The tally of sunny dryings is simple arithmetic on that account: 2 coats + 5 printings = 7.

// What each step does to the sheet. The words (title, text) come from the dictionary, same order.
// `ink`: the colour block pressed at this step. `sun`: sunny dryings completed once the step is done.
type Step = { id: string; sun: number; ink?: Ink; key?: true };

const STEPS: Step[] = [
  { id: "design", sun: 0 },
  { id: "carve", sun: 0 },
  { id: "paste", sun: 1 },
  { id: "diep", sun: 2 },
  { id: "colours", sun: 2 },
  { id: "yellow", sun: 3, ink: "yellow" },
  { id: "red", sun: 4, ink: "red" },
  { id: "green", sun: 5, ink: "green" },
  { id: "indigo", sun: 6, ink: "indigo" },
  { id: "outline", sun: 7, key: true },
];

const SUNS = 7;

// a heading before the step at this index
const PHASE_AT: Record<number, "getting" | "printing"> = {
  0: "getting",
  5: "printing",
};

const PAINT = {
  yellow: C.yellow,
  red: C.red,
  green: C.green,
  indigo: C.indigo,
};

export function MakingFlow({ t }: { t: Dict["make"]["flow"] }) {
  const [active, setActive] = useState(0);
  // The drawings are one-shot animations (the design is drawn stroke by stroke), so they must not start
  // before the visitor can see them: mount them only once the sheet has come into view.
  const [seen, setSeen] = useState(false);
  const panel = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = panel.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const step = STEPS[active];
  const words = t.steps[active];
  const coated = active >= 3;
  // every colour block pressed up to and including the current step, plus the outline once it is reached
  const done: Id[] = STEPS.slice(0, active + 1).flatMap((st) =>
    st.ink ? [st.ink] : st.key ? ["key" as const] : [],
  );
  const go = (n: number) =>
    setActive(Math.min(STEPS.length - 1, Math.max(0, n)));

  return (
    <div className="makebox wrap">
      <div className="msteps-wrap">
        <ol className="msteps">
          {STEPS.map((s, i) => (
            <Fragment key={s.id}>
              {PHASE_AT[i] && (
                <li className="phase" role="presentation">
                  {t.phases[PHASE_AT[i]]}
                </li>
              )}
              <li
                className={
                  i === active ? "on" : i < active ? "past" : undefined
                }
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={i === active}
                  aria-current={i === active ? "step" : undefined}
                >
                  <b className="node" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </b>
                  <span className="disp">{t.steps[i].title}</span>
                </button>
                {i === active && <p className="stext">{t.steps[i].text}</p>}
              </li>
            </Fragment>
          ))}
        </ol>
        <p className="mseason">
          <span aria-hidden="true">☀</span> {t.season}
        </p>
      </div>

      <aside className="mpanel" ref={panel} aria-label={t.panelAria}>
        <div className={`sheetframe${coated ? " diep" : " plain"}`}>
          <svg
            className="artsvg"
            viewBox="0 0 440 520"
            role="img"
            aria-label={fmt(t.sheetAria, { n: active + 1, title: words.title })}
          >
            <RoosterLayers done={done} paint={PAINT} />
          </svg>
          {/* the work being done at this step; remounted on every step so its animation starts again */}
          {seen && <StepArt key={step.id} id={step.id} />}
          {seen && (step.ink || step.key) && (
            <div
              key={`press-${step.id}`}
              className="flyblock go"
              style={
                {
                  "--pig": step.key ? INK : PAINT[step.ink!],
                } as React.CSSProperties
              }
              aria-hidden="true"
            />
          )}
        </div>
        <div
          className="suns"
          role="img"
          aria-label={fmt(t.sunsAria, { n: step.sun, total: SUNS })}
        >
          {Array.from({ length: SUNS }, (_, i) => (
            <i key={i} className={i < step.sun ? "lit" : undefined} />
          ))}
        </div>
        <p className="suncap">
          {t.suncap} <b>{step.sun}</b> / {SUNS}
        </p>
        <div className="mnav">
          <button
            className="btn ghost"
            type="button"
            onClick={() => go(active - 1)}
            disabled={active === 0}
          >
            {t.back}
          </button>
          <span aria-live="polite">
            {fmt(t.stepOf, { n: active + 1, total: STEPS.length })}
          </span>
          <button
            className="btn"
            type="button"
            onClick={() => go(active + 1)}
            disabled={active === STEPS.length - 1}
          >
            {t.next}
          </button>
        </div>
      </aside>
    </div>
  );
}
