"use client";

import { useEffect, useRef, useState } from "react";
import { C, INK } from "../art/woodcut";
import { COLOURS, RoosterLayers, type Id } from "./RoosterLayers";
import { fmt } from "@/lib/i18n/fmt";
import type { Dict } from "@/lib/i18n";

// 03 · Printing a Gà đại cát. Text from the dictionary. Four colour blocks (any order) and the black outline block (always last).
// Facts used: each colour has its own woodblock; the black outline block is printed last; yellow is from
// pagoda-tree flowers (hoa hòe), red from the soft red stone sỏi son, blue from indigo leaves (lá chàm),
// black from the ash of burnt bamboo leaves.

const ORDER: Id[] = [...COLOURS, "key"]; // the order "Print it all" follows

const PAINT: Record<Id, string> = { yellow: C.yellow, red: C.red, green: C.green, indigo: C.indigo, key: INK };

const WOOD = "#3a2113";

// the carving on the face of each block (the words come from the dictionary)
const CARVE: Record<Id, string> = {
  yellow: `radial-gradient(circle, ${WOOD} 0 2px, transparent 2.5px) 0 0 / 8px 8px`,
  red: `repeating-radial-gradient(circle at 50% 50%, ${WOOD} 0 2px, transparent 2px 6px)`,
  green: `repeating-linear-gradient(135deg, ${WOOD} 0 2px, transparent 2px 7px)`,
  indigo: `repeating-linear-gradient(0deg, ${WOOD} 0 2px, transparent 2px 6px)`,
  key: `linear-gradient(${WOOD}, ${WOOD}) center / 100% 3px no-repeat, linear-gradient(90deg, ${WOOD}, ${WOOD}) center / 3px 100% no-repeat`,
};

export function PrintPress({ t }: { t: Dict["press"]["app"] }) {
  const [done, setDone] = useState<Id[]>([]);
  const [fly, setFly] = useState<{ n: number; id: Id } | null>(null);
  const [slip, setSlip] = useState(false);
  const [auto, setAuto] = useState(false);
  const timers = useRef<number[]>([]);
  const presses = useRef(0); // a fresh key each press, so the falling block restarts

  useEffect(() => {
    const t = timers.current;
    return () => t.forEach((id) => window.clearTimeout(id));
  }, []);

  function press(id: Id) {
    setDone((prev) => {
      if (prev.includes(id)) return prev;
      // the outline block is never pressed before all four colours are on
      if (id === "key" && !COLOURS.every((c) => prev.includes(c))) return prev;
      return [...prev, id];
    });
    setFly({ n: ++presses.current, id });
  }

  function reset() {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    setDone([]);
    setFly(null);
    setAuto(false);
  }

  function printAll() {
    const todo = ORDER.filter((id) => !done.includes(id));
    if (!todo.length) return;
    setAuto(true);
    todo.forEach((id, i) => {
      timers.current.push(window.setTimeout(() => press(id), 250 + i * 1500));
    });
    timers.current.push(window.setTimeout(() => setAuto(false), 250 + todo.length * 1500));
  }

  const coloursDone = COLOURS.every((c) => done.includes(c));
  const finished = done.length === ORDER.length;
  const next = ORDER.find((id) => !done.includes(id));
  const last = done[done.length - 1];
  const panel = last ? t.blocks[last] : t.intro;

  return (
    <div className="table wrap">
      {/* the blocks, ready to be pressed */}
      <aside className="tray" aria-label={t.trayAria}>
        <p className="tlabel">{t.trayLabel}</p>
        <div className="blocks">
          {ORDER.map((id) => {
            const b = t.blocks[id];
            const isDone = done.includes(id);
            const locked = id === "key" && !coloursDone;
            return (
              <button
                key={id}
                type="button"
                className={`blk${isDone ? " done" : ""}${!auto && next === id ? " next" : ""}`}
                style={{ "--pig": PAINT[id], "--carve": CARVE[id] } as React.CSSProperties}
                disabled={isDone || locked || auto}
                onClick={() => press(id)}
              >
                <span className="face" aria-hidden="true" />
                <span>
                  <b>{b.name}</b>
                  <small>{locked ? t.locked : b.source}</small>
                </span>
                <i className="dot" aria-hidden="true" />
              </button>
            );
          })}
        </div>
        <button className="reset" type="button" onClick={reset}>
          {t.reset}
        </button>
      </aside>

      {/* the bench: a sheet of paper and the print appearing on it */}
      <div className="bench">
        <div className={`sheetframe diep${slip ? " misreg" : ""}`}>
          <svg
            className="artsvg"
            viewBox="0 0 440 520"
            role="img"
            aria-label={fmt(t.sheetAria, { n: done.length, total: ORDER.length })}
          >
            <RoosterLayers done={done} paint={PAINT} slip={slip} />
          </svg>
          {fly && (
            <div
              key={fly.n}
              className="flyblock go"
              style={{ "--pig": PAINT[fly.id] } as React.CSSProperties}
              aria-hidden="true"
              onAnimationEnd={() => setFly(null)}
            />
          )}
        </div>
        <div className="steps" aria-hidden="true">
          {ORDER.map((id) => (
            <i key={id} className={done.includes(id) ? "on" : undefined} />
          ))}
        </div>
      </div>

      {/* what is happening, and the way to spoil it */}
      <aside className="panel" aria-live="polite">
        <p className="tlabel">
          {t.step} <b>{done.length}</b> / <span>{ORDER.length}</span>
        </p>
        <h3 className="disp">{panel.title}</h3>
        <p>{panel.text}</p>
        <label className="switch">
          <input type="checkbox" checked={slip} onChange={(e) => setSlip(e.target.checked)} />
          <span className="knob" />
          <span>
            <b>{t.slipTitle}</b>
            <small>{t.slipHint}</small>
          </span>
        </label>
        <button className="btn" type="button" onClick={finished ? reset : printAll} disabled={auto}>
          {auto ? t.printing : finished ? t.again : t.printAll}
        </button>
      </aside>
    </div>
  );
}
