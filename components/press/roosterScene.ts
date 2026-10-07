// The rooster print for the printing demo, taken apart the way the village takes it apart:
// one black key block plus one block per colour.
//
// Shapes are listed back to front. A shape's colour is printed only where no later shape sits on
// top of it, and its outline is carved only where it is not hidden, so the blocks never overlap and
// can be pressed in any order. That is what the masks in PrintPress do with this list.

export type Ink = "yellow" | "red" | "green" | "indigo";

export type Shape = {
  d: string;
  /** which colour block prints it; "paper" is bare sheet (it still hides what lies behind it) */
  fill: Ink | "paper";
  /** outline width on the black block */
  sw: number;
};

/** A line that only exists on the black block. `after` is the index of the shape it was drawn on top of. */
export type Line = { d: string; w: number; after: number };

const circle = (cx: number, cy: number, r: number) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`;

export const SHAPES: Shape[] = [
  /* 0 */ { d: circle(96, 86, 34), fill: "red", sw: 5.5 },
  // tail feathers
  /* 1 */ { d: "M300 262C318 190 350 120 384 62C416 126 398 214 338 284Z", fill: "green", sw: 6 },
  /* 2 */ { d: "M296 252C282 184 292 124 318 74C346 128 346 200 314 268Z", fill: "indigo", sw: 6 },
  /* 3 */ { d: "M318 288C358 236 396 192 422 160C428 220 388 286 336 308Z", fill: "red", sw: 6 },
  /* 4 */ { d: "M326 312C368 288 400 266 424 244C420 300 384 336 338 338Z", fill: "yellow", sw: 6 },
  /* 5 */ { d: "M270 244C250 190 252 140 270 100C300 140 306 200 286 252Z", fill: "red", sw: 6 },
  // body and wing
  /* 6 */ { d: "M142 232C144 190 214 184 266 208C330 238 344 306 294 346C250 378 170 356 150 306C140 282 140 252 142 232Z", fill: "yellow", sw: 7 },
  /* 7 */ { d: "M196 252C236 238 292 258 296 300C262 332 206 322 188 288C182 272 186 260 196 252Z", fill: "paper", sw: 6 },
  /* 8 */ { d: "M222 272c16-4 34 2 46 12c-14 10-36 12-52 6z", fill: "green", sw: 3.5 },
  // neck and head
  /* 9 */ { d: "M148 236C132 206 128 176 142 150C160 130 192 138 190 168C188 200 186 222 196 244Z", fill: "yellow", sw: 7 },
  /* 10 */ { d: circle(154, 150, 30), fill: "yellow", sw: 7 },
  /* 11 */ { d: "M134 128c-8-20 6-32 18-24c2-18 24-18 28-2c16-4 22 14 8 26c-12 6-40 10-54 0z", fill: "red", sw: 6 },
  /* 12 */ { d: "M126 146L90 156L126 168Z", fill: "yellow", sw: 6 },
  /* 13 */ { d: "M130 172c-6 18 2 30 12 28c8-4 8-18 2-30z", fill: "red", sw: 5.5 },
  // flowers and grass on the ground
  /* 14 */ { d: circle(120, 476, 6), fill: "yellow", sw: 3.5 },
  /* 15 */ { d: circle(320, 472, 7), fill: "yellow", sw: 3.5 },
  /* 16 */ { d: circle(352, 484, 5), fill: "yellow", sw: 3.5 },
  /* 17 */ { d: "M44 448c-6-26-2-44 6-56 4 20 10 36 6 56z", fill: "green", sw: 4.5 },
  /* 18 */ { d: "M60 448c2-22 14-38 28-46-4 18-6 34-12 46z", fill: "green", sw: 4.5 },
  /* 19 */ { d: "M396 448c6-26 2-44-6-56-4 20-10 36-6 56z", fill: "green", sw: 4.5 },
  /* 20 */ { d: "M380 448c-2-22-14-38-28-46 4 18 6 34 12 46z", fill: "green", sw: 4.5 },
];

export const LINES: Line[] = [
  // veins of the tail feathers
  { d: "M312 266C336 196 360 130 384 70", w: 3.5, after: 1 },
  { d: "M300 254C296 190 304 130 318 82", w: 3.5, after: 2 },
  { d: "M326 292C362 244 394 204 418 168", w: 3.5, after: 3 },
  { d: "M334 318C368 296 398 276 420 252", w: 3.5, after: 4 },
  { d: "M274 246C262 190 266 140 272 108", w: 3.5, after: 5 },
  // legs start inside the body: the body hides that part
  {
    d: "M200 350L190 430M190 430l-26 8M190 430l4 18M190 430l22 4M246 352L252 428M252 428l-24 10M252 428l8 18M252 428l24 0",
    w: 7.5,
    after: 0,
  },
  // feather marks on the wing
  { d: "M206 266c26-6 54 4 70 22M200 284c26-4 52 6 66 22M206 302c20-2 38 6 50 16", w: 4, after: 7 },
  // the ground
  { d: "M28 448H412", w: 5.5, after: 20 },
];

export const EYE = { cx: 148, cy: 148, r: 8 };
