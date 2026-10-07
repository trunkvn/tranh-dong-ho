"use client";

import { useId } from "react";
import { INK } from "../art/woodcut";
import { EYE, LINES, SHAPES, type Ink } from "./roosterScene";

// The rooster as printed blocks: four colour layers and the black key layer, drawn inside an <svg>
// with viewBox "0 0 440 520". Shared by the printing demo (03) and the colour mixer (05).

export type Id = Ink | "key";

export const COLOURS: Ink[] = ["yellow", "red", "green", "indigo"];

// When a block is set a few millimetres off, each colour slips its own way.
const SLIP: Record<Ink, [number, number]> = { yellow: [7, -5], green: [-7, 4], red: [5, 7], indigo: [-5, -7] };

type Props = {
  /** which blocks have been pressed */
  done: readonly Id[];
  paint: Record<Ink, string>;
  slip?: boolean;
  /** show one block at full strength and the other colours faded; "key" fades every colour */
  spotlight?: Ink | "key" | null;
};

export function RoosterLayers({ done, paint, slip = false, spotlight = null }: Props) {
  // each instance gets its own mask ids, so two on one page never clash
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const mask = (i: number) => `url(#${uid}m${i})`;

  return (
    <>
      <defs>
        {/* mask i hides everything that a later shape covers: no colour or line is printed under another */}
        {SHAPES.map((_, i) => (
          <mask key={i} id={`${uid}m${i}`} maskUnits="userSpaceOnUse" x="0" y="0" width="440" height="520">
            <rect width="440" height="520" fill="#fff" />
            {SHAPES.slice(i + 1).map((s, j) => (
              <path key={j} d={s.d} fill="#000" />
            ))}
          </mask>
        ))}
      </defs>

      {COLOURS.map((ink) => (
        <g
          key={ink}
          className={`layer${done.includes(ink) ? " on" : ""}${spotlight && spotlight !== ink ? " dim" : ""}`}
          style={slip ? { transform: `translate(${SLIP[ink][0]}px, ${SLIP[ink][1]}px)` } : undefined}
        >
          {SHAPES.map((s, i) => (s.fill === ink ? <path key={i} d={s.d} fill={paint[ink]} mask={mask(i)} /> : null))}
        </g>
      ))}

      <g
        className={`layer key${done.includes("key") ? " on" : ""}`}
        fill="none"
        stroke={INK}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <rect x="21" y="21" width="398" height="478" strokeWidth="2.5" />
        {SHAPES.map((s, i) => (
          <path key={i} d={s.d} strokeWidth={s.sw} mask={mask(i)} />
        ))}
        {LINES.map((l, i) => (
          <path key={i} d={l.d} strokeWidth={l.w} mask={mask(l.after)} />
        ))}
        <circle cx={EYE.cx} cy={EYE.cy} r={EYE.r} fill={INK} stroke="none" />
      </g>
    </>
  );
}
