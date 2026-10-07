import { MakingFlow } from "./make/MakingFlow";
import type { Dict } from "@/lib/i18n";

// 07 · The whole making of a print. Text from the dictionary.

export function MakeSection({ t }: { t: Dict }) {
  return (
    <section className="wall make" id="make" aria-labelledby="make-title">
      <div className="wrap">
        <header className="dh">
          <span className="seal" aria-hidden="true">
            08
          </span>
          <div>
            <p className="eyebrow">{t.make.eyebrow}</p>
            <h2 className="disp mis" id="make-title">
              {t.make.title}
            </h2>
          </div>
        </header>
        <p className="lede">{t.make.lede}</p>
      </div>

      <MakingFlow t={t.make.flow} />
    </section>
  );
}
