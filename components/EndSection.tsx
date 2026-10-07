import { PigPrint } from "./art/PigPrint";
import { RoosterPrint } from "./art/RoosterPrint";
import type { Dict } from "@/lib/i18n";

// 08 · Closing. Text from the dictionary. Our own words (the poem stays a small epigraph in the hero). The claim about families is
// the one reported in section 06: only a handful of families still practise the craft.

export function EndSection({ t }: { t: Dict }) {
  const e = t.end;
  return (
    <section className="wall end" id="end" aria-labelledby="end-title">
      <div className="wrap end-body">
        <p className="eyebrow">{e.eyebrow}</p>
        <h2 className="disp mis endtitle" id="end-title">
          <span>{e.l1}</span>
          <span>{e.l2}</span>
          <span>
            <em>{e.l3}</em>
          </span>
        </h2>
        <p className="endtext">{e.text}</p>
        <div className="endbtns">
          <a className="btn" href="#press">
            {e.btn1}
          </a>
          <a className="btn ghost" href="#top">
            {e.btn2}
          </a>
        </div>
      </div>

      <div className="endprints" aria-hidden="true">
        <figure className="print small l diep">
          <PigPrint />
        </figure>
        <figure className="print small r diep">
          <RoosterPrint />
        </figure>
      </div>
    </section>
  );
}
