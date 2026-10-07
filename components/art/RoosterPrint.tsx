// "Gà đại cát" (rooster of great fortune), same woodblock treatment as the pig.
import { C, INK, Shape, WoodTexture } from "./woodcut";

// Tail feathers: [outline path, centre vein, fill].
const FEATHERS: [string, string, string][] = [
  ["M300 262C318 190 350 120 384 62C416 126 398 214 338 284Z", "M312 266C336 196 360 130 384 70", C.green],
  ["M296 252C282 184 292 124 318 74C346 128 346 200 314 268Z", "M300 254C296 190 304 130 318 82", C.indigo],
  ["M318 288C358 236 396 192 422 160C428 220 388 286 336 308Z", "M326 292C362 244 394 204 418 168", C.red],
  ["M326 312C368 288 400 266 424 244C420 300 384 336 338 338Z", "M334 318C368 296 398 276 420 252", C.yellow],
  ["M270 244C250 190 252 140 270 100C300 140 306 200 286 252Z", "M274 246C262 190 266 140 272 108", C.red],
];

export function RoosterPrint({ label = "Rooster of great fortune woodblock print" }: { label?: string }) {
  return (
    <svg viewBox="0 0 440 520" role="img" aria-label={label} className="art">
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* inner keyline (the print's outer border is CSS) */}
        <rect x="21" y="21" width="398" height="478" fill="none" stroke={INK} strokeWidth="2.5" />

        {/* sun */}
        <g className="a-pulse">
          <Shape fill={C.red} sw={5.5}>
            <circle cx="96" cy="86" r="34" />
          </Shape>
        </g>
        <circle className="a-spin" cx="96" cy="86" r="21" fill="none" stroke={C.yellow} strokeWidth="3.5" strokeDasharray="3 7" />

        {/* tail feathers */}
        {FEATHERS.map(([d, vein, fill], i) => (
          <g key={i} className="a-feather" style={{ animationDelay: `${-i * 0.9}s`, animationDuration: `${4.6 + i * 0.5}s` }}>
            <Shape fill={fill} sw={6}>
              <path d={d} />
            </Shape>
            <path d={vein} fill="none" stroke={INK} strokeWidth="3.5" />
          </g>
        ))}

        {/* legs */}
        <g stroke={INK} strokeWidth="7.5" fill="none">
          <path d="M200 350L190 430M190 430l-26 8M190 430l4 18M190 430l22 4" />
          <path d="M246 352L252 428M252 428l-24 10M252 428l8 18M252 428l24 0" />
        </g>

        {/* body */}
        <Shape fill={C.yellow} sw={7}>
          <path d="M142 232C144 190 214 184 266 208C330 238 344 306 294 346C250 378 170 356 150 306C140 282 140 252 142 232Z" />
        </Shape>
        {/* wing */}
        <Shape fill={C.paper} sw={6}>
          <path d="M196 252C236 238 292 258 296 300C262 332 206 322 188 288C182 272 186 260 196 252Z" />
        </Shape>
        <g fill="none" stroke={INK} strokeWidth="4">
          <path d="M206 266c26-6 54 4 70 22M200 284c26-4 52 6 66 22M206 302c20-2 38 6 50 16" />
        </g>
        <Shape fill={C.green} sw={3.5}>
          <path d="M222 272c16-4 34 2 46 12c-14 10-36 12-52 6z" />
        </Shape>

        {/* neck + head: the whole group pecks from the base of the neck */}
        <g className="a-peck">
          <Shape fill={C.yellow} sw={7}>
            <path d="M148 236C132 206 128 176 142 150C160 130 192 138 190 168C188 200 186 222 196 244Z" />
          </Shape>
          <Shape fill={C.yellow} sw={7}>
            <circle cx="154" cy="150" r="30" />
          </Shape>
          {/* comb */}
          <Shape fill={C.red} sw={6}>
            <path d="M134 128c-8-20 6-32 18-24c2-18 24-18 28-2c16-4 22 14 8 26c-12 6-40 10-54 0z" />
          </Shape>
          {/* beak */}
          <Shape fill={C.orange} sw={6}>
            <path d="M126 146L90 156L126 168Z" />
          </Shape>
          {/* wattle */}
          <Shape fill={C.red} sw={5.5}>
            <path d="M130 172c-6 18 2 30 12 28c8-4 8-18 2-30z" />
          </Shape>
          {/* eye */}
          <g className="a-blink">
            <circle cx="148" cy="148" r="8" fill={INK} />
            <circle cx="145.5" cy="145.5" r="2.4" fill={C.paper} />
          </g>
        </g>

        {/* ground */}
        <path d="M28 448H412" stroke={INK} strokeWidth="5.5" />
        {[
          { d: "M44 448c-6-26-2-44 6-56 4 20 10 36 6 56z", delay: "0s" },
          { d: "M60 448c2-22 14-38 28-46-4 18-6 34-12 46z", delay: "-1.7s" },
          { d: "M396 448c6-26 2-44-6-56-4 20-10 36-6 56z", delay: "-0.9s" },
          { d: "M380 448c-2-22-14-38-28-46 4 18 6 34 12 46z", delay: "-2.4s" },
        ].map((g) => (
          <g key={g.d} className="a-sway" style={{ animationDelay: g.delay }}>
            <Shape fill={C.green} sw={4.5}>
              <path d={g.d} />
            </Shape>
          </g>
        ))}
        <Shape fill={C.yellow} sw={3.5}>
          <circle cx="120" cy="476" r="6" />
        </Shape>
        <Shape fill={C.yellow} sw={3.5}>
          <circle cx="320" cy="472" r="7" />
        </Shape>
        <Shape fill={C.yellow} sw={3.5}>
          <circle cx="352" cy="484" r="5" />
        </Shape>

        <WoodTexture seed={29} />
      </g>
    </svg>
  );
}
