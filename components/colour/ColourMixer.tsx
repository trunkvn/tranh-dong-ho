"use client";

import { useState } from "react";
import { C, INK } from "../art/woodcut";
import { RoosterLayers, type Id } from "../press/RoosterLayers";
import type { Ink } from "../press/roosterScene";
import { fmt } from "@/lib/i18n/fmt";
import type { Dict } from "@/lib/i18n";

// 05 · Colour from nature. Pick where a colour comes from and the rooster changes.
//
// Sources: "đen (than xoan hay than lá tre), xanh (gỉ đồng, lá chàm), vàng (hoa hòe), đỏ (sỏi son,
// gỗ vang)" (Doanh nghiệp & Hội nhập); black from the ash of burnt bamboo leaves, and the yellow and
// the indigo soaked in an earthenware pot for a couple of years (Things Asian); every pigment is
// blended with a little sticky-rice flour before printing. The exact shades below are approximate:
// each family had its own recipe.

type OptionId = keyof Dict["colour"]["mixer"]["options"];
type RowId = keyof Dict["colour"]["mixer"]["rows"];

// the colours of each choice; every word is in the dictionary
type RowDef = {
  id: RowId;
  ink: Ink | "black";
  options: { id: OptionId; color: string }[];
};

const ALL: Id[] = ["yellow", "red", "green", "indigo", "key"];

const ROWS: RowDef[] = [
  {
    id: "yellow",
    ink: "yellow",
    options: [{ id: "hoa-hoe", color: C.yellow }],
  },
  {
    id: "red",
    ink: "red",
    options: [
      { id: "soi-son", color: C.red },
      { id: "go-vang", color: "#962a3a" },
    ],
  },
  {
    id: "green",
    ink: "green",
    options: [
      { id: "indigo-leaf", color: C.green },
      { id: "copper", color: "#3a8a76" },
    ],
  },
  { id: "indigo", ink: "indigo", options: [{ id: "indigo", color: C.indigo }] },
  { id: "black", ink: "black", options: [{ id: "bamboo", color: INK }] },
];

export function ColourMixer({ t }: { t: Dict["colour"]["mixer"] }) {
  // the chosen option of each colour that has a choice
  const [choice, setChoice] = useState<Record<string, string>>({
    yellow: "hoa-hoe",
    red: "soi-son",
    green: "indigo-leaf",
    indigo: "indigo",
    black: "bamboo",
  });
  const [spot, setSpot] = useState<Ink | "key" | null>(null);

  const picked = (r: RowDef) =>
    r.options.find((o) => o.id === choice[r.ink]) ?? r.options[0];
  const paint = {
    yellow: picked(ROWS[0]).color,
    red: picked(ROWS[1]).color,
    green: picked(ROWS[2]).color,
    indigo: picked(ROWS[3]).color,
  } satisfies Record<Ink, string>;

  const red = t.options[picked(ROWS[1]).id];
  const green = t.options[picked(ROWS[2]).id];

  return (
    <div className="mixbox wrap">
      <div className="mixlist">
        {ROWS.map((r) => {
          const target = r.ink === "black" ? "key" : r.ink;
          const on = spot === target;
          const o = picked(r);
          const row = t.rows[r.id];
          const label = t.options[o.id].label;
          return (
            <div
              className={`pg${on ? " spot" : ""}`}
              key={r.ink}
              style={{ "--sw": o.color } as React.CSSProperties}
            >
              <span className="swatch" aria-hidden="true" />
              <div className="pg-main">
                <h3 className="disp">
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => setSpot(on ? null : target)}
                  >
                    {row.name}
                  </button>
                </h3>
                <p className="from">{label}</p>
                {r.options.length > 1 && (
                  <div
                    className="opts"
                    role="group"
                    aria-label={fmt(t.groupAria, {
                      name: row.name.toLowerCase(),
                    })}
                  >
                    {r.options.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        className="opt"
                        aria-pressed={choice[r.ink] === opt.id}
                        onClick={() =>
                          setChoice((c) => ({ ...c, [r.ink]: opt.id }))
                        }
                      >
                        {t.options[opt.id].name}
                      </button>
                    ))}
                  </div>
                )}
                <details className="how">
                  <summary>{t.howSummary}</summary>
                  <p>{row.how}</p>
                </details>
              </div>
            </div>
          );
        })}

        <div
          className="pg white"
          style={{ "--sw": C.paper } as React.CSSProperties}
        >
          <span className="swatch" aria-hidden="true" />
          <div className="pg-main">
            <h3 className="disp">{t.white.name}</h3>
            <p className="from">{t.white.from}</p>
          </div>
        </div>

        <p className="mixnote">{t.note}</p>
      </div>

      <div className="preview">
        <div className="sheetframe diep">
          <svg
            className="artsvg"
            viewBox="0 0 440 520"
            role="img"
            aria-label={t.previewAria}
          >
            <RoosterLayers done={ALL} paint={paint} spotlight={spot} />
          </svg>
        </div>
        <p className="pcap" aria-live="polite">
          {fmt(t.caption, {
            red: red.name.toLowerCase(),
            green: green.name.toLowerCase(),
          })}
        </p>
      </div>
    </div>
  );
}
