import { cloneElement, type ReactElement, type SVGProps } from "react";

// Shared pieces for the woodblock look of the two hero prints.

export const INK = "#1b0c0e";

// Natural pigments only: sappanwood red, pagoda-tree yellow, bamboo-leaf green, indigo (chàm).
// Deliberately duller than the UI colours: a bright screen blue has no place on a Đông Hồ print.
export const C = {
  red: "#b93a2c",
  yellow: "#dfae3b",
  green: "#587a49",
  indigo: "#29354f",
  pink: "#d98b79",
  orange: "#d9822b",
  paper: "#f4ebd7",
} as const;

// Each colour was cut on its own block and registered by eye, so every colour sits a little
// off the black key lines, each in its own direction. Paper-white is the bare sheet: no shift.
const OFFSET: Record<string, [number, number]> = {
  [C.red]: [3.5, 3],
  [C.yellow]: [-3.5, 3],
  [C.green]: [3, -3],
  [C.indigo]: [-3, -3.5],
  [C.pink]: [3.5, 3.5],
  [C.orange]: [-3.5, -2.5],
};

// Draws one shape the way it is printed: the colour block (shifted), then the black line over it.
// `sw` 0 means a colour-only patch with no outline.
export function Shape({ fill, sw = 6, children }: { fill: string; sw?: number; children: ReactElement<SVGProps<SVGElement>> }) {
  const shift = OFFSET[fill];
  if (!shift) return cloneElement(children, { fill, stroke: INK, strokeWidth: sw });
  return (
    <>
      <g transform={`translate(${shift[0]} ${shift[1]})`}>{cloneElement(children, { fill, stroke: "none" })}</g>
      {sw > 0 && cloneElement(children, { fill: "none", stroke: INK, strokeWidth: sw })}
    </>
  );
}

// Small deterministic PRNG so server and client always draw the same texture.
function rng(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const n1 = (v: number) => v.toFixed(1);

// Paper-coloured marks laid over the art: they only show where there is ink or colour, so they read
// as the wood grain and the specks where the block did not take the ink.
export function WoodTexture({ seed, w = 440, h = 520 }: { seed: number; w?: number; h?: number }) {
  const r = rng(seed);
  const area = (w * h) / (440 * 520); // bigger pictures get proportionally more marks

  // specks of dropout
  let specks = "";
  for (let i = 0; i < Math.round(180 * area); i++) {
    const x = 26 + r() * (w - 52);
    const y = 26 + r() * (h - 52);
    const k = 0.5 + r() ** 3 * 2;
    specks += `M${n1(x - k)} ${n1(y)}a${n1(k)} ${n1(k)} 0 1 0 ${n1(2 * k)} 0a${n1(k)} ${n1(k)} 0 1 0 ${n1(-2 * k)} 0`;
  }

  // broken streaks of grain, all running the same way like planks
  const grain = Array.from({ length: Math.round(22 * Math.sqrt(area)) }, () => {
    const y = 34 + r() * (h - 68);
    const d = `M26 ${n1(y)}C${n1(w * 0.3)} ${n1(y + (r() - 0.5) * 14)} ${n1(w * 0.64)} ${n1(y + (r() - 0.5) * 14)} ${n1(w - 26)} ${n1(y + (r() - 0.5) * 8)}`;
    return {
      d,
      w: 0.7 + r() * 1.9,
      o: 0.2 + r() * 0.25,
      dash: `${n1(30 + r() * 110)} ${n1(14 + r() * 90)}`,
      off: n1(r() * 200),
    };
  });

  // pale patches where a colour went on thin
  const patches = Array.from({ length: Math.round(16 * area) }, () => ({
    x: 40 + r() * (w - 80),
    y: 40 + r() * (h - 80),
    rx: 10 + r() * 26,
    ry: 6 + r() * 14,
    o: 0.07 + r() * 0.1,
    rot: r() * 180,
  }));

  return (
    <g fill={C.paper} stroke={C.paper} aria-hidden="true">
      {patches.map((p, i) => (
        <ellipse
          key={i}
          cx={n1(p.x)}
          cy={n1(p.y)}
          rx={n1(p.rx)}
          ry={n1(p.ry)}
          opacity={p.o}
          stroke="none"
          transform={`rotate(${n1(p.rot)} ${n1(p.x)} ${n1(p.y)})`}
        />
      ))}
      {grain.map((g, i) => (
        <path key={i} d={g.d} fill="none" strokeWidth={g.w} opacity={g.o} strokeDasharray={g.dash} strokeDashoffset={g.off} />
      ))}
      <path d={specks} stroke="none" opacity={0.85} />
    </g>
  );
}
