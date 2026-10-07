"use client";

import { useEffect, useState } from "react";
import { C } from "./art/woodcut";
import { RoosterLayers, type Id } from "./press/RoosterLayers";

// The loading screen: a sheet of điệp paper on the red wall, with the rooster being printed block by block
// while the page loads. It is part of the server-rendered HTML (so it is on screen from the first byte) and
// is taken away by this component once the page, its images and fonts are ready.
//
// - It stays long enough to show a whole print being made (CYCLE), so it never flashes up and vanishes;
//   the animation in globals.css (ld-*, 3.4 s) must match CYCLE.
// - After the first time in a session it is a little shorter (switching language reloads the page).
// - Without JavaScript a <noscript> rule hides it, so it can never trap anyone.
// - For visitors who ask for less motion the finished print is shown still.

const CYCLE = 3400; // one whole print: five blocks, then a pause on the finished picture
const MIN_FIRST = CYCLE;
const MIN_REPEAT = 2000;
const FADE = 500;

const ALL: Id[] = ["yellow", "red", "green", "indigo", "key"];
const PAINT = {
  yellow: C.yellow,
  red: C.red,
  green: C.green,
  indigo: C.indigo,
};

export function Loader({ label }: { label: string }) {
  const [phase, setPhase] = useState<"on" | "leaving" | "gone">("on");

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("dh-loaded") === "1";
      sessionStorage.setItem("dh-loaded", "1");
    } catch {
      /* private mode: just use the long version */
    }
    const min = seen ? MIN_REPEAT : MIN_FIRST;

    let timer = 0;
    let cancelled = false;

    const ready = Promise.all([
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((r) =>
            window.addEventListener("load", () => r(), { once: true }),
          ),
      document.fonts
        ? document.fonts.ready.then(() => undefined)
        : Promise.resolve(),
    ]);
    // never wait forever on a slow image or font
    const cap = new Promise<void>((r) => window.setTimeout(r, 8000));

    Promise.race([ready, cap]).then(() => {
      if (cancelled) return;
      const wait = Math.max(0, min - performance.now());
      timer = window.setTimeout(() => {
        setPhase("leaving");
        timer = window.setTimeout(() => setPhase("gone"), FADE);
      }, wait);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <>
      <noscript>
        <style>{".loader{display:none!important}"}</style>
      </noscript>
      <div
        className={`loader wall${phase === "leaving" ? " leaving" : ""}`}
        role="status"
        aria-live="polite"
      >
        <div className="ld-stage" aria-hidden="true">
          <span className="tape a" />
          <span className="tape b" />
          <div className="ld-sheet diep">
            <svg viewBox="0 0 440 520" className="ld-art">
              <RoosterLayers done={ALL} paint={PAINT} />
            </svg>
            <div className="ld-block" />
          </div>
        </div>
        <p className="ld-brand" aria-hidden="true">
          <b>ĐH</b>
          <span>Đông Hồ Prints</span>
        </p>
        <p className="ld-label">{label}</p>
      </div>
    </>
  );
}
