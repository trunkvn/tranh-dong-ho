import { ColourMixer } from "./colour/ColourMixer";
import type { Dict } from "@/lib/i18n";

// 04 · Colour from nature. Text from the dictionary.

export function ColourSection({ t }: { t: Dict }) {
  return (
    <section className="wall colours" id="colour" aria-labelledby="colour-title">
      <div className="wrap">
        <header className="dh">
          <span className="seal" aria-hidden="true">
            04
          </span>
          <div>
            <p className="eyebrow">{t.colour.eyebrow}</p>
            <h2 className="disp mis" id="colour-title">
              {t.colour.title}
            </h2>
          </div>
        </header>
        <p className="lede">{t.colour.lede}</p>
      </div>

      <ColourMixer t={t.colour.mixer} />
    </section>
  );
}
