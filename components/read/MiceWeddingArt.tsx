// An illustration after the folk print "Đám cưới chuột" (The Mice's Wedding), drawn in the same
// woodblock style as the other prints. It follows the print as described in the sources:
// the groom on a red horse leads, the bride's palanquin follows, relatives, horns, drums, flags and
// fans come with them, and at the right edge a fierce old cat is offered a carp and a dove.
// It is not a copy of any one original.
//
// Returns a <g> for a 1500 x 410 viewBox (y from 30); the reader draws the svg and the numbered hotspots around it.
import { C, INK, Shape, WoodTexture } from "../art/woodcut";

const GROUND = 372;

type MouseProps = {
  x: number;
  y?: number;
  s?: number;
  robe?: string;
  hat?: boolean;
  legs?: boolean;
  worried?: boolean;
  children?: React.ReactNode;
};

/** A mouse in a robe, facing right, feet at (0, 0). */
function Mouse({ x, y = GROUND, s = 1, robe = C.red, hat = false, legs = true, worried = false, children }: MouseProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-18 -20C-46 -16 -54 -48 -34 -58" fill="none" stroke={INK} strokeWidth={5} />
      {legs && <path d="M-8 -18V-2M10 -18V-2" stroke={INK} strokeWidth={7} />}
      <Shape fill={robe} sw={5}>
        <path d="M-24 -14C-30 -50 -14 -68 2 -68C18 -68 30 -50 24 -14Z" />
      </Shape>
      <Shape fill={C.paper} sw={5}>
        <circle cx="6" cy="-80" r="15" />
      </Shape>
      <Shape fill={C.paper} sw={4.5}>
        <path d="M17 -86L42 -76L17 -68Z" />
      </Shape>
      <circle cx="42" cy="-76" r="3.2" fill={INK} />
      <Shape fill={C.pink} sw={4}>
        <circle cx="-4" cy="-94" r="8" />
      </Shape>
      <circle cx="12" cy="-84" r="3" fill={INK} />
      {worried && (
        <>
          <path d="M6 -92L18 -88" stroke={INK} strokeWidth={3} />
          <Shape fill={C.indigo} sw={2.5}>
            <path d="M-18 -104c5 7 7 11 0 13c-7-2-5-6 0-13z" />
          </Shape>
        </>
      )}
      {hat && (
        <g>
          <path d="M-8 -93L-6 -107H18L20 -93Z" fill={INK} />
          <path d="M-6 -101H-26M18 -101H38" stroke={INK} strokeWidth={4} />
        </g>
      )}
      {children}
    </g>
  );
}

function Cloud({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <Shape fill={C.paper} sw={4.5}>
        <path d="M0 0c12-22 40-22 50-4 14-8 32 2 28 18H-8c-6-4-5-10 8-14z" />
      </Shape>
    </g>
  );
}

export function MiceWeddingArt() {
  return (
    <g strokeLinejoin="round" strokeLinecap="round">
      <rect x="21" y="42" width="1458" height="388" fill="none" stroke={INK} strokeWidth="2.5" />

      {/* sky */}
      <Shape fill={C.red} sw={5.5}>
        <circle cx="610" cy="96" r="34" />
      </Shape>
      <circle cx="610" cy="96" r="21" fill="none" stroke={C.yellow} strokeWidth="3.5" strokeDasharray="3 7" />
      <Cloud x={190} y={96} />
      <Cloud x={1020} y={92} s={0.85} />

      {/* ground */}
      <path d="M28 372H1472" stroke={INK} strokeWidth="5.5" />
      {[44, 548, 870, 1250].map((gx) => (
        <Shape key={gx} fill={C.green} sw={4}>
          <path d={`M${gx} 372c-6-24-2-40 6-52 4 18 10 32 6 52z`} />
        </Shape>
      ))}

      {/* 1 · relatives, looking about nervously */}
      <Mouse x={76} robe={C.yellow} s={0.92} worried />
      <Mouse x={146} robe={C.green} s={0.82} worried />
      <Mouse x={214} robe={C.indigo} s={0.96} worried />

      {/* 2 · the bride's palanquin and its two bearers */}
      <Mouse x={296} robe={C.indigo} hat />
      <Mouse x={512} robe={C.indigo} hat />
      <path d="M250 304H548" stroke={INK} strokeWidth="8" />
      <path d="M356 298V304M444 298V304" stroke={INK} strokeWidth="4" />
      <Shape fill={C.red} sw={6}>
        <rect x="340" y="224" width="112" height="74" rx="6" />
      </Shape>
      <Shape fill={C.yellow} sw={6}>
        <path d="M324 226Q396 168 468 226Z" />
      </Shape>
      <Shape fill={C.paper} sw={4.5}>
        <rect x="364" y="242" width="64" height="40" rx="4" />
      </Shape>
      <Shape fill={C.paper} sw={4}>
        <circle cx="396" cy="266" r="14" />
      </Shape>
      <Shape fill={C.red} sw={3.5}>
        <path d="M382 258h28l-5-14h-18z" />
      </Shape>
      <circle cx="401" cy="266" r="2.4" fill={INK} />
      <Shape fill={C.yellow} sw={3}>
        <circle cx="330" cy="240" r="6" />
      </Shape>
      <Shape fill={C.yellow} sw={3}>
        <circle cx="462" cy="240" r="6" />
      </Shape>

      {/* 3 · the groom on a red horse */}
      {[640, 668, 742, 768].map((lx) => (
        <g key={lx}>
          <Shape fill={C.pink} sw={5}>
            <rect x={lx} y="304" width="15" height="62" rx="6" />
          </Shape>
          <path d={`M${lx} 360h15v10h-15z`} fill={INK} />
        </g>
      ))}
      <path d="M626 288C600 292 590 326 604 346" fill="none" stroke={INK} strokeWidth="7" />
      <Shape fill={C.pink} sw={6.5}>
        <ellipse cx="704" cy="296" rx="80" ry="34" />
      </Shape>
      <Shape fill={C.pink} sw={6.5}>
        <path d="M758 276C774 236 790 216 806 208L836 224C820 238 812 262 806 296Z" />
      </Shape>
      <Shape fill={C.pink} sw={6}>
        <path d="M802 204L850 214L862 246L838 254L814 232Z" />
      </Shape>
      <Shape fill={C.indigo} sw={4}>
        <path d="M776 232C788 212 800 204 806 206L810 222C800 226 790 236 786 250Z" />
      </Shape>
      <circle cx="830" cy="226" r="3.5" fill={INK} />
      <Shape fill={C.red} sw={5}>
        <path d="M672 262h64l8 22h-80z" />
      </Shape>
      <Mouse x={706} y={266} s={0.78} robe={C.red} hat legs={false} />

      {/* 4 · banner, horn and drum */}
      <Mouse x={936} robe={C.red}>
        <path d="M14 -52L50 -62" stroke={INK} strokeWidth="5" />
        <path d="M50 -50V-330" stroke={INK} strokeWidth="6" />
        <Shape fill={C.indigo} sw={5}>
          <path d="M52 -326H124L114 -292L124 -258H52Z" />
        </Shape>
        <Shape fill={C.yellow} sw={3.5}>
          <circle cx="88" cy="-292" r="12" />
        </Shape>
      </Mouse>
      <Mouse x={1020} robe={C.indigo} hat>
        <path d="M42 -76L66 -83" stroke={INK} strokeWidth="8" />
        <Shape fill={C.yellow} sw={5}>
          <path d="M64 -92L90 -103V-65L64 -75Z" />
        </Shape>
      </Mouse>
      <Mouse x={1130} robe={C.yellow}>
        <Shape fill={C.red} sw={5}>
          <rect x="10" y="-62" width="48" height="36" rx="6" />
        </Shape>
        <path d="M24 -62V-26M44 -62V-26" stroke={INK} strokeWidth="3" />
        <path d="M30 -70L52 -88M46 -70L68 -84" stroke={INK} strokeWidth="4" />
      </Mouse>

      {/* 5 · the offering: a carp and a dove */}
      <Mouse x={1232} robe={C.green} worried>
        <path d="M14 -52L40 -68" stroke={INK} strokeWidth="5" />
        <g transform="translate(58 -96) rotate(-12)">
          <Shape fill={C.yellow} sw={4.5}>
            <ellipse cx="0" cy="0" rx="28" ry="13" />
          </Shape>
          <Shape fill={C.red} sw={4}>
            <path d="M26 0L48 -14V14Z" />
          </Shape>
          <circle cx="-14" cy="-3" r="2.6" fill={INK} />
          <path d="M-4 -10C2 -2 2 4 -4 10M8 -10C14 -2 14 4 8 10" fill="none" stroke={INK} strokeWidth="2.5" />
        </g>
        <g transform="translate(-6 -124)">
          <Shape fill={C.paper} sw={4.5}>
            <ellipse cx="0" cy="0" rx="19" ry="12" />
          </Shape>
          <Shape fill={C.paper} sw={4}>
            <circle cx="17" cy="-9" r="8" />
          </Shape>
          <path d="M24 -9L33 -7L24 -5Z" fill={C.orange} stroke={INK} strokeWidth="2.5" />
          <circle cx="19" cy="-10" r="1.8" fill={INK} />
          <Shape fill={C.indigo} sw={3.5}>
            <path d="M-12 -4C-26 -20 -34 -10 -26 4C-20 8 -12 6 -8 4Z" />
          </Shape>
        </g>
      </Mouse>

      {/* 6 · the old cat */}
      <g transform="translate(260 0)">
      <path d="M1176 360C1210 336 1204 280 1168 268" fill="none" stroke={INK} strokeWidth="9" />
      <Shape fill={C.yellow} sw={7}>
        <path d="M1084 372C1080 306 1100 266 1136 262C1172 266 1194 304 1190 372Z" />
      </Shape>
      <path d="M1130 290l12 -4M1124 312l16 -3M1128 334l16 -2" stroke={INK} strokeWidth="4" />
      <Shape fill={C.yellow} sw={6}>
        <path d="M1088 202L1086 150L1120 180Z" />
      </Shape>
      <Shape fill={C.yellow} sw={6}>
        <path d="M1154 182L1180 148L1182 204Z" />
      </Shape>
      <Shape fill={C.yellow} sw={7}>
        <circle cx="1134" cy="224" r="46" />
      </Shape>
      <Shape fill={C.paper} sw={4}>
        <ellipse cx="1116" cy="216" rx="11" ry="8" />
      </Shape>
      <Shape fill={C.paper} sw={4}>
        <ellipse cx="1152" cy="216" rx="11" ry="8" />
      </Shape>
      <path d="M1116 207V225M1152 207V225" stroke={INK} strokeWidth="4" />
      <path d="M1100 198L1128 210M1170 198L1142 210" stroke={INK} strokeWidth="5" />
      <path d="M1120 188V200M1134 184V198M1148 188V200" stroke={INK} strokeWidth="3.5" />
      <Shape fill={C.red} sw={4.5}>
        <path d="M1114 242Q1134 268 1154 242Z" />
      </Shape>
      <path d="M1122 244l4 8l4-8M1138 244l4 8l4-8" fill={C.paper} stroke={INK} strokeWidth="2" />
      <path d="M1128 230h12l-6 7z" fill={C.pink} stroke={INK} strokeWidth="3" />
      <path d="M1100 232L1082 226M1100 240L1080 242M1100 248L1084 258M1168 232L1186 226M1168 240L1188 242M1168 248L1184 258" stroke={INK} strokeWidth="2.8" />
      <Shape fill={C.yellow} sw={6}>
        <ellipse cx="1082" cy="322" rx="16" ry="22" />
      </Shape>
      <path d="M1074 340l-4 10M1082 342v10M1090 340l4 10" stroke={INK} strokeWidth="3.5" />

      </g>

      <WoodTexture seed={47} w={1500} h={440} />
    </g>
  );
}
