import { INK } from "../art/woodcut";
import { RoosterLayers } from "../press/RoosterLayers";

// A carved key block, inked: the rooster's outline mirrored, as it is cut into the wood, on a plank.
const PAINT = { yellow: "#000", red: "#000", green: "#000", indigo: "#000" };

export function BlockArt({ label }: { label: string }) {
  return (
    <svg className="blockart" viewBox="-20 -20 480 560" role="img" aria-label={label}>
      <rect x="-12" y="-12" width="464" height="544" rx="10" fill="#a06c43" stroke={INK} strokeWidth="6" />
      {/* grain */}
      <g fill="none" stroke="#6c4326" strokeWidth="2.4" opacity=".55">
        {[30, 74, 118, 168, 214, 262, 308, 356, 402, 452, 498].map((y, i) => (
          <path key={y} d={`M-6 ${y}C120 ${y + (i % 2 ? 7 : -7)} 300 ${y + (i % 3 ? -6 : 6)} 446 ${y}`} />
        ))}
      </g>
      <rect x="6" y="6" width="428" height="508" fill="#c79862" opacity=".55" />
      <g transform="translate(440 0) scale(-1 1)">
        <RoosterLayers done={["key"]} paint={PAINT} />
      </g>
    </svg>
  );
}
