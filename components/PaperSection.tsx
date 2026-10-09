import { C, INK } from "./art/woodcut";
import { Shimmer } from "./Shimmer";
import type { Dict } from "@/lib/i18n";

// 03 · Why giấy điệp. Text from the dictionary.
//
// Facts: dó paper is made from dó bark; the coat is powdered seashell (điệp) mixed with a
// sticky-rice paste; the shells are sea shells brought to the village; each colour has its own
// block and the black outline block is printed last. Pigments: black from burnt bamboo leaves,
// red from sỏi son (a soft red stone), yellow from hoa hòe (pagoda-tree) flowers, blue-green from
// lá chàm (indigo leaves), white from the shell itself.

// swatch colours, in the same order as dict.paper.pigments
const SWATCHES = [INK, C.red, C.yellow, C.indigo, C.paper];

export function PaperSection({ t }: { t: Dict }) {
  const p = t.paper;
  return (
    <section className="diep why" id="paper" aria-labelledby="paper-title">
      <div className="wrap why-grid">
        <div className="sheetwrap">
          <Shimmer t={p.shimmer} />
        </div>

        <div className="why-body">
          <header className="dh">
            <span className="seal" aria-hidden="true">
              03
            </span>
            <div>
              <p className="eyebrow">{p.eyebrow}</p>
              <h2 className="disp mis" id="paper-title">
                {p.title}
              </h2>
              {p.titleSay}
            </div>
          </header>

          <ol className="why-list">
            {p.reasons.map((r, i) => (
              <li key={i}>
                <b aria-hidden="true">{String(i + 1).padStart(2, "0")}</b>
                <div>
                  <h3>{r.h}</h3>
                  <p>{r.p}</p>
                  {i === p.reasons.length - 1 && (
                    <ul className="pigments">
                      {p.pigments.map((g, k) => (
                        <li key={k} style={{ "--sw": SWATCHES[k] } as React.CSSProperties}>
                          <i aria-hidden="true" />
                          <span>
                            <b>{g.name}</b>
                            {g.from}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <div className="equation" role="group" aria-label={p.equation.aria}>
            {p.equation.parts.map((part, i) => (
              <div className="equation-part" key={i}>
                <div className="tile">
                  <small>{part.label}</small>
                  <b className="disp">{part.name}</b>
                </div>
                {i < p.equation.parts.length - 1 && <i aria-hidden="true">+</i>}
              </div>
            ))}
            <div className="equation-part result">
              <i aria-hidden="true">=</i>
              <div className="tile gold">
                <small>{p.equation.result.label}</small>
                <b className="disp">{p.equation.result.name}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
