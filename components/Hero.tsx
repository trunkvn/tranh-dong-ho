import { PigPrint } from "./art/PigPrint";
import { RoosterPrint } from "./art/RoosterPrint";
import { Seals } from "./Seals";
import type { Dict } from "@/lib/i18n";

// All text comes from the dictionary (lib/i18n). The epigraph is Hoàng Cầm's original Vietnamese in both
// languages: it is a quotation, not a translation.
//
// The main sheet has three tiers: the title (with one supporting line), our own one-sentence
// lead, and a short epigraph from Hoàng Cầm quoted in the original Vietnamese only.

// Slow-falling blossom petals behind the prints. Fixed values (no Math.random) so server and
// client markup match.
const PETALS = [
  { x: 6, d: 0, t: 17, s: 14, c: "gold" },
  { x: 15, d: 6, t: 21, s: 10, c: "red" },
  { x: 26, d: 11, t: 19, s: 12, c: "gold" },
  { x: 38, d: 3, t: 23, s: 9, c: "red" },
  { x: 52, d: 9, t: 18, s: 13, c: "gold" },
  { x: 63, d: 14, t: 22, s: 10, c: "red" },
  { x: 74, d: 5, t: 20, s: 12, c: "gold" },
  { x: 84, d: 12, t: 24, s: 9, c: "red" },
  { x: 92, d: 2, t: 18, s: 14, c: "gold" },
];

function Tape({ className }: { className: string }) {
  return <span className={`tape ${className}`} aria-hidden="true" />;
}

export function Hero({ t }: { t: Dict }) {
  return (
    <>
      <a className="brand" href="#top" aria-label={t.brand.aria}>
        <b>ĐH</b>
        <span>
          {t.brand.a}
          <br />
          {t.brand.b}
          <small lang={t.lang === "en" ? "vi" : "en"}>{t.brand.sub}</small>
        </span>
      </a>
      <Seals aria={t.nav.aria} items={t.nav.items} />

      <section className="wall hero" id="top" aria-labelledby="hero-title">
        <div className="petals" aria-hidden="true">
          {PETALS.map((p, i) => (
            <i
              key={i}
              className={p.c}
              style={{
                left: `${p.x}%`,
                width: p.s,
                height: p.s * 1.5,
                animationDelay: `-${p.d}s`,
                animationDuration: `${p.t}s`,
              }}
            />
          ))}
        </div>

        <div className="hero-wall">
          <figure className="print side l diep">
            <Tape className="a" />
            <PigPrint label={t.art.pig} />
            <figcaption>{t.hero.pig}</figcaption>
          </figure>

          <article className="print main diep" aria-labelledby="hero-title">
            <Tape className="a" />
            <Tape className="b" />

            {/* tier 1: what this page is */}
            <h1 className="title disp" id="hero-title">
              {t.hero.title}
            </h1>
            <p className="subtitle">{t.hero.subtitle}</p>

            {/* tier 2: the one-sentence promise */}
            <p className="lead">{t.hero.lead}</p>

            {/* tier 3: epigraph and the way in */}
            <figure className="epigraph">
              <blockquote lang="vi">
                <p>Quê hương ta lúa nếp thơm nồng</p>
                <p>Tranh Đông Hồ gà lợn nét tươi trong</p>
                <p>Màu dân tộc sáng bừng trên giấy điệp</p>
              </blockquote>
              <figcaption>
                Hoàng Cầm, <cite lang="vi">Bên kia sông Đuống</cite>, 1948
              </figcaption>
            </figure>

            <a className="cue" href="#press">
              <span>{t.hero.cue}</span>
              <i aria-hidden="true">
                <svg viewBox="0 0 12 12" width="10" height="10">
                  <path
                    d="M6 1.5v9M2 6.8l4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
            </a>
          </article>

          <figure className="print side r diep">
            <Tape className="b" />
            <RoosterPrint label={t.art.rooster} />
            <figcaption>{t.hero.rooster}</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
