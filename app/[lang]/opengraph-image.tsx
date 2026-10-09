import { ImageResponse } from "next/og";
import { C, INK } from "@/components/art/woodcut";
import { EYE, LINES, SHAPES } from "@/components/press/roosterScene";
import { getDictionary, hasLocale } from "@/lib/i18n";

// The picture shown when the link is shared: the rooster print on the red wall, with the title.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { meta } = getDictionary(hasLocale(lang) ? lang : "en");

  // the shapes are listed back to front, so painting them in order hides what lies behind;
  // each line is painted right after the shape it was drawn on top of
  const parts: React.ReactNode[] = [];
  SHAPES.forEach((s, i) => {
    parts.push(
      <path key={`s${i}`} d={s.d} fill={s.fill === "paper" ? C.paper : C[s.fill]} stroke={INK} strokeWidth={s.sw} strokeLinejoin="round" />,
    );
    LINES.forEach((l, j) => {
      if (l.after === i) parts.push(<path key={`l${j}`} d={l.d} fill="none" stroke={INK} strokeWidth={l.w} strokeLinecap="round" strokeLinejoin="round" />);
    });
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 72,
          background: "linear-gradient(#5b2314, #2a0307)",
          color: "#f7efe0",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 560 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 84,
              height: 84,
              background: "#aa101e",
              border: "4px solid #f7efe0",
              fontSize: 40,
              fontWeight: 900,
            }}
          >
            ĐH
          </div>
          <div style={{ display: "flex", marginTop: 36, fontSize: 76, fontWeight: 900, lineHeight: 1.05 }}>{meta.siteName}</div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 28, lineHeight: 1.35, color: "#dccdb4" }}>
            {lang === "vi" ? "Tranh khắc gỗ dân gian của Bắc Ninh" : "The woodblock folk art of Bắc Ninh, Vietnam"}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 400,
            height: 473,
            background: C.paper,
            border: `6px solid ${INK}`,
            transform: "rotate(-2deg)",
            boxShadow: "0 30px 40px rgba(0,0,0,0.6)",
          }}
        >
          <svg width="388" height="461" viewBox="0 0 440 520">
            <rect x="21" y="21" width="398" height="478" fill="none" stroke={INK} strokeWidth="2.5" />
            {parts}
            <circle cx={EYE.cx} cy={EYE.cy} r={EYE.r} fill={INK} />
          </svg>
        </div>
      </div>
    ),
    size,
  );
}
