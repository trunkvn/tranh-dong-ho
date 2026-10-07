// "Lợn âm dương" (yin-yang pig), drawn as a woodblock print:
// a heavy black key block, with each colour block sitting slightly off its lines.
import { C, INK, Shape, WoodTexture } from "./woodcut";

export function PigPrint({ label = "Yin-yang pig woodblock print" }: { label?: string }) {
  return (
    <svg viewBox="0 0 440 520" role="img" aria-label={label} className="art">
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* inner keyline (the print's outer border is CSS) */}
        <rect x="21" y="21" width="398" height="478" fill="none" stroke={INK} strokeWidth="2.5" />

        {/* sun and clouds */}
        <g className="a-pulse">
          <Shape fill={C.red} sw={5.5}>
            <circle cx="338" cy="96" r="38" />
          </Shape>
        </g>
        <circle className="a-spin" cx="338" cy="96" r="24" fill="none" stroke={C.yellow} strokeWidth="3.5" strokeDasharray="3 7" />
        <g className="a-drift">
          <Shape fill={C.paper} sw={4.5}>
            <path d="M70 92c12-22 40-22 50-4 14-8 32 2 28 18H62c-6-4-5-10 8-14z" />
          </Shape>
        </g>
        <g className="a-drift" style={{ animationDelay: "-5s", animationDuration: "13s" }}>
          <Shape fill={C.paper} sw={4}>
            <path d="M170 122c8-14 26-14 32-2 10-4 20 4 17 13h-56c-4-3-3-8 7-11z" />
          </Shape>
        </g>

        {/* legs (behind the body) */}
        {[148, 198, 306, 356].map((x) => (
          <g key={x}>
            <Shape fill={C.paper} sw={6.5}>
              <rect x={x} y="326" width="34" height="78" rx="13" />
            </Shape>
            <path d={`M${x + 1} 388h32v4a12 12 0 0 1-12 12h-8a12 12 0 0 1-12-12z`} fill={INK} />
          </g>
        ))}

        {/* tail */}
        <path className="a-wag" d="M392 252c28-6 34-38 14-46-16-6-28 10-16 20 8 6 18 2 18-8" fill="none" stroke={INK} strokeWidth="7" />

        {/* body */}
        <Shape fill={C.paper} sw={7}>
          <path d="M118 232C140 164 250 140 332 164c56 17 80 74 62 130-14 42-62 58-114 58H152c-34-12-44-82-34-120z" />
        </Shape>

        {/* bristles along the back */}
        <g stroke={INK} strokeWidth="4.5" fill="none">
          <path d="M170 168l-4-14M196 158l-1-15M224 154v-15M252 155l2-15M282 160l4-14M312 168l6-13" />
        </g>

        {/* yin-yang swirl */}
        <g transform="translate(256 248) rotate(-24)">
          {/* the outer group only positions; the inner one spins (CSS rotate would fight the transform attribute) */}
          <g className="a-spin slow">
            <circle r="80" fill="none" stroke={INK} strokeWidth="3.5" strokeDasharray="2 8" />
            <Shape fill={C.paper} sw={6}>
              <circle r="66" />
            </Shape>
            <Shape fill={C.red} sw={4.5}>
              <path d="M0-66A66 66 0 0 1 0 66A33 33 0 0 1 0 0A33 33 0 0 0 0-66Z" />
            </Shape>
            <Shape fill={C.paper} sw={3.5}>
              <circle cy="33" r="10" />
            </Shape>
            <Shape fill={C.red} sw={3.5}>
              <circle cy="-33" r="10" />
            </Shape>
          </g>
        </g>

        {/* belly shading dashes */}
        <g stroke={INK} strokeWidth="4" fill="none">
          <path d="M150 330h16M178 336h16M330 334h16M358 326h14" />
        </g>

        {/* ear */}
        <g className="a-twitch">
          <Shape fill={C.red} sw={6.5}>
            <path d="M112 212C118 168 160 160 176 180C166 198 144 214 126 218Z" />
          </Shape>
          <path d="M130 200c8-14 22-18 32-10" fill="none" stroke={INK} strokeWidth="3.5" />
        </g>

        {/* head */}
        <Shape fill={C.paper} sw={7}>
          <path d="M128 206C94 190 52 206 38 242C28 270 38 300 64 310C92 322 124 314 142 296Z" />
        </Shape>
        {/* snout */}
        <Shape fill={C.pink} sw={6.5}>
          <ellipse cx="42" cy="272" rx="23" ry="27" />
        </Shape>
        <ellipse cx="36" cy="262" rx="4.5" ry="6.5" fill={INK} />
        <ellipse cx="36" cy="282" rx="4.5" ry="6.5" fill={INK} />
        {/* eye, cheek, mouth */}
        <g className="a-blink">
          <circle cx="92" cy="244" r="9" fill={INK} />
          <circle cx="89.5" cy="241.5" r="2.5" fill={C.paper} />
        </g>
        <Shape fill={C.red} sw={0}>
          <circle cx="104" cy="282" r="15" />
        </Shape>
        <path d="M66 304q16 9 34 2" fill="none" stroke={INK} strokeWidth="4.5" />

        {/* ground and plants */}
        <path d="M28 404H412" stroke={INK} strokeWidth="5.5" />
        {[
          { d: "M50 404c-6-26-2-44 6-56 4 20 10 36 6 56z", delay: "0s" },
          { d: "M66 404c2-22 14-38 28-46-4 18-6 34-12 46z", delay: "-1.3s" },
          { d: "M392 404c6-26 2-44-6-56-4 20-10 36-6 56z", delay: "-2.1s" },
          { d: "M376 404c-2-22-14-38-28-46 4 18 6 34 12 46z", delay: "-0.6s" },
        ].map((g) => (
          <g key={g.d} className="a-sway" style={{ animationDelay: g.delay }}>
            <Shape fill={C.green} sw={4.5}>
              <path d={g.d} />
            </Shape>
          </g>
        ))}
        {/* little yellow flowers */}
        <Shape fill={C.yellow} sw={3.5}>
          <circle cx="262" cy="436" r="7" />
        </Shape>
        <Shape fill={C.yellow} sw={3.5}>
          <circle cx="292" cy="448" r="6" />
        </Shape>
        <Shape fill={C.yellow} sw={3.5}>
          <circle cx="170" cy="444" r="6" />
        </Shape>
        <Shape fill={C.yellow} sw={3.5}>
          <circle cx="140" cy="430" r="7" />
        </Shape>

        <WoodTexture seed={11} />
      </g>
    </svg>
  );
}
