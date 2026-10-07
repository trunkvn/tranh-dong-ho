import { C, INK } from "../art/woodcut";
import { LINES, SHAPES } from "../press/roosterScene";

// Small animated drawings laid over the sheet in section 07, one per kind of work.
// All motion is CSS (see the "motion" block in globals.css) and is switched off for people who ask for less.
// Everything is drawn in the same 440 x 520 space as the rooster, so it lines up with the sheet.

const W = 440;
const H = 520;

const PIGMENT_BOWLS = [C.yellow, C.red, C.green, C.indigo, INK];

function Sparkle({
  x,
  y,
  s = 1,
  d = 0,
}: {
  x: number;
  y: number;
  s?: number;
  d?: number;
}) {
  return (
    <path
      className="sa-twinkle"
      style={{ animationDelay: `${d}s` }}
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0-10C1-3 3-1 10 0C3 1 1 3 0 10C-1 3-3 1-10 0C-3-1-1-3 0-10Z"
      fill="#fff"
      stroke="#e8d9a8"
      strokeWidth="0.8"
    />
  );
}

// a flat brush, handle up, bristles down, tip at (0,0)
function Brush({ tone }: { tone: string }) {
  return (
    <g strokeLinejoin="round" strokeLinecap="round">
      <rect
        x="-9"
        y="-92"
        width="18"
        height="62"
        rx="7"
        fill="#8a5a36"
        stroke={INK}
        strokeWidth="3.5"
      />
      <rect
        x="-14"
        y="-34"
        width="28"
        height="12"
        fill="#c9a24a"
        stroke={INK}
        strokeWidth="3"
      />
      <path
        d="M-15-22H15L12 4L0 10L-12 4Z"
        fill={tone}
        stroke={INK}
        strokeWidth="3.5"
      />
    </g>
  );
}

function Design() {
  // the design drawn in ink: every outline of the rooster, one after another
  return (
    <g
      fill="none"
      stroke={INK}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.9"
    >
      {SHAPES.map((s, i) => (
        <path
          key={`s${i}`}
          className="sa-draw"
          pathLength={1}
          d={s.d}
          strokeWidth="2.4"
          style={{ animationDelay: `${i * 0.16}s` }}
        />
      ))}
      {LINES.map((l, i) => (
        <path
          key={`l${i}`}
          className="sa-draw"
          pathLength={1}
          d={l.d}
          strokeWidth="2.4"
          style={{ animationDelay: `${(SHAPES.length + i) * 0.16}s` }}
        />
      ))}
    </g>
  );
}

function Carve() {
  return (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* the plank */}
      <rect
        x="26"
        y="34"
        width="388"
        height="452"
        rx="10"
        fill="#a06c43"
        stroke={INK}
        strokeWidth="5"
      />
      <g fill="none" stroke="#6c4326" strokeWidth="2.4" opacity=".5">
        {[70, 118, 170, 222, 274, 326, 378, 430].map((y, i) => (
          <path
            key={y}
            d={`M32 ${y}C140 ${y + (i % 2 ? 7 : -7)} 300 ${y + (i % 3 ? -6 : 6)} 408 ${y}`}
          />
        ))}
      </g>
      <rect
        x="40"
        y="48"
        width="360"
        height="424"
        fill="#c79862"
        opacity=".5"
      />
      {/* the grooves, mirrored as they are cut into the wood */}
      <g
        transform={`translate(${W} 0) scale(-1 1)`}
        fill="none"
        stroke="#2a160b"
        strokeWidth="4.5"
      >
        {SHAPES.map((s, i) => (
          <path
            key={i}
            className="sa-draw slow"
            pathLength={1}
            d={s.d}
            style={{ animationDelay: `${i * 0.22}s` }}
          />
        ))}
      </g>
      {/* wood chips thrown up by the chisel */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          className="sa-chip"
          x={110 + i * 46}
          y={170 + ((i * 53) % 190)}
          width="9"
          height="5"
          rx="1.5"
          fill="#e8c28f"
          stroke="#6c4326"
          strokeWidth="1"
          style={{ animationDelay: `${i * 0.5}s` }}
        />
      ))}
      {/* the chisel, moving over the plank */}
      <g className="sa-chisel">
        <g transform="rotate(-28)">
          <rect
            x="-8"
            y="-82"
            width="16"
            height="56"
            rx="6"
            fill="#8a5a36"
            stroke={INK}
            strokeWidth="3.5"
          />
          <path
            d="M-9-26H9L9-8L0 16L-9-8Z"
            fill="#cfd3d6"
            stroke={INK}
            strokeWidth="3.5"
          />
        </g>
      </g>
    </g>
  );
}

function Coat({ pearl }: { pearl: boolean }) {
  // a wet band spreads down the sheet behind a sweeping brush
  return (
    <g>
      <rect
        className="sa-wash"
        x="0"
        y="0"
        width={W}
        height={H}
        fill={pearl ? "rgba(255,252,240,.62)" : "rgba(255,255,255,.34)"}
      />
      {pearl && (
        <g>
          <Sparkle x={90} y={110} d={0.3} />
          <Sparkle x={330} y={170} s={0.8} d={1.1} />
          <Sparkle x={160} y={280} s={1.2} d={2} />
          <Sparkle x={310} y={360} d={0.7} />
          <Sparkle x={80} y={430} s={0.9} d={1.6} />
          <Sparkle x={250} y={70} s={0.7} d={2.4} />
        </g>
      )}
      <g className="sa-brush-y">
        <g className="sa-brush-x">
          <Brush tone={pearl ? "#f6f1e0" : "#efe3c3"} />
        </g>
      </g>
    </g>
  );
}

function Pots() {
  return (
    <g strokeLinejoin="round" strokeLinecap="round">
      {PIGMENT_BOWLS.map((col, i) => {
        const x = 54 + i * 83;
        return (
          <g key={i} transform={`translate(${x} 394)`}>
            <path
              d="M-30 0H30C28 30 14 42 0 42C-14 42-28 30-30 0Z"
              fill="#b58b5c"
              stroke={INK}
              strokeWidth="4"
            />
            <ellipse
              cx="0"
              cy="0"
              rx="30"
              ry="9"
              fill={col}
              stroke={INK}
              strokeWidth="4"
            />
            <ellipse
              className="sa-ripple"
              style={{ animationDelay: `${i * 0.45}s` }}
              cx="0"
              cy="0"
              rx="14"
              ry="4"
              fill="none"
              stroke={col === INK ? "#f4ebd7" : "#fff"}
              strokeWidth="2"
            />
          </g>
        );
      })}
    </g>
  );
}

export function StepArt({ id }: { id: string }) {
  let body: React.ReactNode = null;
  if (id === "design") body = <Design />;
  else if (id === "carve") body = <Carve />;
  else if (id === "paste") body = <Coat pearl={false} />;
  else if (id === "diep") body = <Coat pearl />;
  else if (id === "colours") body = <Pots />;
  if (!body) return null;
  return (
    <svg className="stepart" viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
      {body}
    </svg>
  );
}
