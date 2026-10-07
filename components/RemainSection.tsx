import { BlockArt } from "./remain/BlockArt";
import { ThenNow } from "./remain/ThenNow";
import type { Dict } from "@/lib/i18n";

// 06 · What remains. Text from the dictionary. Every figure and date comes from a named report (see Footer):
//   - about 17 family lines and some 180 households once made prints; today 3 families, about 30
//     people in 4 generations, after many turned to paper votive objects (Báo Văn hóa)
//   - only two households in the village still keep the centuries-old carved blocks (Mekong ASEAN, 16 Feb 2026)
//   - Bắc Ninh protection plan 2014 to 2020, extended to 2030 (Báo Văn hóa)
//   - UNESCO urgent safeguarding list, 9 Dec 2025, 20th session, New Delhi, Viet Nam's 17th element (Vietnam News)
//   - Bắc Ninh project, reported 14 Aug 2026: US$5.24 million, to 2035, completion expected by 2040 (Vietnam News)

// the UNESCO event (4th) is the highlighted one
const NOW = 3;

export function RemainSection({ t }: { t: Dict }) {
  const r = t.remain;
  return (
    <section className="diep remain" id="remain" aria-labelledby="remain-title">
      <div className="wrap">
        <header className="dh">
          <span className="seal" aria-hidden="true">
            07
          </span>
          <div>
            <p className="eyebrow">{r.eyebrow}</p>
            <h2 className="disp mis" id="remain-title">
              {r.title}
            </h2>
            {r.titleVi}
          </div>
        </header>
        <p className="lede">{r.lede}</p>

        <ThenNow t={r.thennow} />

        <div className="oldblocks">
          <BlockArt label={t.art.block} />
          <div>
            <h3 className="disp">{r.oldblocks.h}</h3>
            <p>{r.oldblocks.p}</p>
          </div>
        </div>

        <ol className="events" aria-label={r.timelineAria}>
          {r.events.map((e, i) => (
            <li key={i} className={i === NOW ? "now" : undefined}>
              <b className="disp">{e.when}</b>
              <p>{e.what}</p>
            </li>
          ))}
        </ol>

        <div className="twocol">
          <div>
            <h3 className="disp">{r.faded.h}</h3>
            <ul>
              {r.faded.items.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="disp">{r.done.h}</h3>
            <ul>
              {r.done.items.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
