// The yin-yang pig (Lợn âm dương) taken apart into blocks the same way as roosterScene.ts, so the colour
// mixer can show it with any pigments. Drawn after the animated PigPrint in components/art, with two changes
// that keep it to the four colour blocks: the snout is red (not pink), and the yin half of the swirl and the
// hooves are indigo.

import type { Ink, Line, Scene, Shape } from "./roosterScene";

const shapes: Shape[] = [];
const lines: Line[] = [];

/** Adds a shape (back to front) and returns its index, for the lines that sit on top of it. */
const add = (d: string, fill: Ink | "paper", sw: number) => shapes.push({ d, fill, sw }) - 1;
const line = (d: string, w: number, after: number, dash?: string) => lines.push({ d, w, after, dash });

const f = (n: number) => +n.toFixed(1);
const circle = (cx: number, cy: number, r: number) => `M${f(cx - r)} ${f(cy)}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`;
const ellipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy}a${rx} ${ry} 0 1 0 ${2 * rx} 0a${rx} ${ry} 0 1 0 ${-2 * rx} 0Z`;
const rrect = (x: number, y: number, w: number, h: number, r: number) =>
  `M${x + r} ${y}H${x + w - r}a${r} ${r} 0 0 1 ${r} ${r}V${y + h - r}a${r} ${r} 0 0 1 ${-r} ${r}H${x + r}a${r} ${r} 0 0 1 ${-r} ${-r}V${y + r}a${r} ${r} 0 0 1 ${r} ${-r}Z`;

// sun and clouds
add(circle(338, 96, 38), "red", 5.5);
add(circle(338, 96, 15), "yellow", 3.5);
add("M70 92c12-22 40-22 50-4 14-8 32 2 28 18H62c-6-4-5-10 8-14z", "paper", 4.5);
add("M170 122c8-14 26-14 32-2 10-4 20 4 17 13h-56c-4-3-3-8 7-11z", "paper", 4);

// legs, behind the body, each with an indigo hoof
let lastHoof = 0;
for (const x of [148, 198, 306, 356]) {
  add(rrect(x, 326, 34, 78, 13), "paper", 6.5);
  lastHoof = add(`M${x + 1} 388h32v4a12 12 0 0 1-12 12h-8a12 12 0 0 1-12-12z`, "indigo", 3);
}

// the tail starts inside the body: the body hides that part
line("M392 252c28-6 34-38 14-46-16-6-28 10-16 20 8 6 18 2 18-8", 7, lastHoof);

const body = add("M118 232C140 164 250 140 332 164c56 17 80 74 62 130-14 42-62 58-114 58H152c-34-12-44-82-34-120z", "paper", 7);
line("M170 168l-4-14M196 158l-1-15M224 154v-15M252 155l2-15M282 160l4-14M312 168l6-13", 4.5, body); // bristles
line("M150 330h16M178 336h16M330 334h16M358 326h14", 4, body); // belly dashes

// the yin-yang swirl, tilted 24° about the middle of the body
const [cx, cy, tilt] = [256, 248, (-24 * Math.PI) / 180];
const at = (x: number, y: number) => [f(cx + x * Math.cos(tilt) - y * Math.sin(tilt)), f(cy + x * Math.sin(tilt) + y * Math.cos(tilt))];
const p = (x: number, y: number) => at(x, y).join(" ");
add(circle(cx, cy, 66), "indigo", 6);
add(`M${p(0, -66)}A66 66 0 0 1 ${p(0, 66)}A33 33 0 0 1 ${p(0, 0)}A33 33 0 0 0 ${p(0, -66)}Z`, "red", 4.5);
add(circle(...(at(0, 33) as [number, number]), 10), "indigo", 3.5);
const swirl = add(circle(...(at(0, -33) as [number, number]), 10), "red", 3.5);
line(circle(cx, cy, 80), 3.5, swirl, "2 8");

// ear, then the head over it
const ear = add("M112 212C118 168 160 160 176 180C166 198 144 214 126 218Z", "yellow", 6.5);
line("M130 200c8-14 22-18 32-10", 3.5, ear);
add("M128 206C94 190 52 206 38 242C28 270 38 300 64 310C92 322 124 314 142 296Z", "paper", 7);
add(ellipse(42, 272, 23, 27), "red", 6.5); // snout
const cheek = add(circle(104, 282, 15), "red", 0);
line("M66 304q16 9 34 2", 4.5, cheek); // mouth

// grass and little flowers on the ground
for (const d of [
  "M50 404c-6-26-2-44 6-56 4 20 10 36 6 56z",
  "M66 404c2-22 14-38 28-46-4 18-6 34-12 46z",
  "M392 404c6-26 2-44-6-56-4 20-10 36-6 56z",
  "M376 404c-2-22-14-38-28-46 4 18 6 34 12 46z",
]) {
  add(d, "green", 4.5);
}
for (const [x, y, r] of [[262, 436, 7], [292, 448, 6], [170, 444, 6], [140, 430, 7]]) {
  add(circle(x, y, r), "yellow", 3.5);
}

line("M28 404H412", 5.5, shapes.length - 1); // the ground

export const PIG: Scene = {
  shapes,
  lines,
  dots: [
    { cx: 92, cy: 244, r: 9 }, // eye
    { cx: 36, cy: 262, r: 5 }, // nostrils
    { cx: 36, cy: 282, r: 5 },
  ],
};
