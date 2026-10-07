"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { C, INK } from "../art/woodcut";
import type { Dict } from "@/lib/i18n";

// Đông Hồ vs Hàng Trống, one question at a time. Pick a criterion in the tab bar and both prints answer it
// side by side, each with a small picture of its own (the same five questions as the dictionary rows).
// Tabs follow the ARIA tab pattern: arrow keys move between them.

type T = Dict["market"]["compare"];

// ── small pictures, one per question ──────────────────────────────────────────

function Pin({ place }: { place: string }) {
  return (
    <div className="vz vz-place">
      <svg viewBox="0 0 40 52" aria-hidden="true">
        <path
          d="M20 3C10 3 4 10 4 19c0 11 16 29 16 29s16-18 16-29C36 10 30 3 20 3z"
          fill={C.red}
          stroke={INK}
          strokeWidth="3"
        />
        <circle
          cx="20"
          cy="19"
          r="6"
          fill={C.paper}
          stroke={INK}
          strokeWidth="3"
        />
      </svg>
      <b className="disp">{place}</b>
    </div>
  );
}

// a row of woodblocks: Đông Hồ cuts one per colour, Hàng Trống only one, for the outline
function Blocks({ who }: { who: "a" | "b" }) {
  const cols = who === "a" ? [C.yellow, C.red, C.green, C.indigo, INK] : [INK];
  return (
    <div className="vz vz-blocks" aria-hidden="true">
      {cols.map((c, i) => (
        <span key={i} className="blockchip" style={{ background: "#a06c43" }}>
          <i style={{ background: c }} />
        </span>
      ))}
      {who === "b" && (
        <svg viewBox="0 0 120 40" className="brushdabs">
          <path
            d="M6 30C20 8 34 8 48 26"
            fill="none"
            stroke={INK}
            strokeWidth="3"
            strokeLinecap="round"
          />
          {[C.red, C.yellow, C.green, C.indigo].map((c, i) => (
            <circle
              key={i}
              cx={62 + i * 16}
              cy={20}
              r="6"
              fill={c}
              stroke={INK}
              strokeWidth="2"
            />
          ))}
        </svg>
      )}
    </div>
  );
}

// a close-up of the real print, to see how the colour lies on the paper
function Zoom({
  src,
  x,
  y,
  size,
}: {
  src: string;
  x: string;
  y: string;
  size: string;
}) {
  return (
    <div
      className="vz vz-zoom"
      aria-hidden="true"
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: `${x} ${y}`,
        backgroundSize: size,
      }}
    />
  );
}

// two sheets drawn to scale against each other
function Sheets({ who }: { who: "a" | "b" }) {
  const big = who === "b";
  return (
    <div className="vz vz-sheets" aria-hidden="true">
      <span className="sheet-ref" style={{ width: 54, height: 72 }} />
      <span
        className="sheet-main"
        style={{ width: big ? 96 : 54, height: big ? 128 : 72 }}
      />
    </div>
  );
}

function Wall({ who }: { who: "a" | "b" }) {
  // Đông Hồ: pasted on a wall for the new year; Hàng Trống: on an altar for worship and Tết
  return (
    <div className="vz vz-use" aria-hidden="true">
      {who === "a" ? (
        <svg viewBox="0 0 120 70">
          <rect
            x="4"
            y="4"
            width="112"
            height="62"
            fill="#d8c7a4"
            stroke={INK}
            strokeWidth="3"
          />
          {[18, 52, 86].map((x, i) => (
            <rect
              key={x}
              x={x}
              y={14 + (i % 2) * 6}
              width="22"
              height="30"
              fill={C.paper}
              stroke={INK}
              strokeWidth="2.5"
              transform={`rotate(${i - 1} ${x + 11} 30)`}
            />
          ))}
        </svg>
      ) : (
        <svg viewBox="0 0 120 70">
          <rect
            x="30"
            y="6"
            width="60"
            height="38"
            fill={C.paper}
            stroke={INK}
            strokeWidth="3"
          />
          <rect
            x="14"
            y="48"
            width="92"
            height="12"
            fill="#a06c43"
            stroke={INK}
            strokeWidth="3"
          />
          <path
            d="M44 48v-8h8v8M68 48v-6h8v6"
            fill={C.red}
            stroke={INK}
            strokeWidth="2.5"
          />
          <circle
            cx="60"
            cy="25"
            r="9"
            fill={C.yellow}
            stroke={INK}
            strokeWidth="2.5"
          />
        </svg>
      )}
    </div>
  );
}

export function Compare({ t }: { t: T }) {
  const [i, setI] = useState(1); // open on "how it is made": the difference that matters most
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function move(to: number) {
    const n = (to + t.rows.length) % t.rows.length;
    setI(n);
    tabs.current[n]?.focus();
  }

  const row = t.rows[i];

  const visual = (who: "a" | "b") => {
    if (i === 0) return <Pin place={who === "a" ? "Bắc Ninh" : "Hà Nội"} />;
    if (i === 1) return <Blocks who={who} />;
    // the body of the rooster (flat colour, black line) against the body of the central tiger (soft shading)
    if (i === 2)
      return who === "a" ? (
        <Zoom src="/prints/vinh-hoa.jpg" x="92%" y="80%" size="150%" />
      ) : (
        <Zoom src="/prints/hang-trong-ngu-ho.jpg" x="50%" y="46%" size="150%" />
      );
    if (i === 3) return <Sheets who={who} />;
    return <Wall who={who} />;
  };

  const panel = (who: "a" | "b") => (
    <article className={`cpanel ${who}`} key={who}>
      <header>
        <div className="print cpic">
          <Image
            src={
              who === "a"
                ? "/prints/vinh-hoa.jpg"
                : "/prints/hang-trong-ngu-ho.jpg"
            }
            alt={who === "a" ? t.aAlt : t.bAlt}
            width={who === "a" ? 400 : 620}
            height={who === "a" ? 548 : 760}
            sizes="90px"
          />
        </div>
        <div>
          <p className="dueltag">{who === "a" ? t.cols.a : t.cols.b}</p>
          <p className="duelcap">{who === "a" ? t.aCaption : t.bCaption}</p>
        </div>
      </header>
      {visual(who)}
      <p className="canswer">{who === "a" ? row.a : row.b}</p>
    </article>
  );

  return (
    <div className="cmpx">
      <div className="ctabs" role="tablist" aria-label={t.tabsAria}>
        {t.rows.map((r, n) => (
          <button
            key={r.label}
            ref={(el) => {
              tabs.current[n] = el;
            }}
            type="button"
            role="tab"
            id={`ctab-${n}`}
            aria-selected={n === i}
            aria-controls="cstage"
            tabIndex={n === i ? 0 : -1}
            onClick={() => setI(n)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                e.preventDefault();
                move(n + 1);
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                move(n - 1);
              }
            }}
          >
            <b aria-hidden="true">{n + 1}</b>
            {r.label}
          </button>
        ))}
      </div>

      <div
        className="cstage"
        id="cstage"
        role="tabpanel"
        aria-labelledby={`ctab-${i}`}
        key={i}
      >
        {panel("a")}
        <span className="vs" aria-hidden="true">
          VS
        </span>
        {panel("b")}
      </div>
    </div>
  );
}
