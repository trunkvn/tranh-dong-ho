import { PrintPress } from "./press/PrintPress";
import type { Dict } from "@/lib/i18n";

// 05 · Printing a picture. Text from the dictionary.

export function PressSection({ t }: { t: Dict }) {
  return (
    <section className="wall press" id="press" aria-labelledby="press-title">
      <div className="wrap">
        <header className="dh">
          <span className="seal" aria-hidden="true">
            05
          </span>
          <div>
            <p className="eyebrow">{t.press.eyebrow}</p>
            <h2 className="disp mis" id="press-title">
              {t.press.title}
            </h2>
          </div>
        </header>
        <p className="lede">{t.press.lede}</p>
      </div>

      <PrintPress t={t.press.app} />
    </section>
  );
}
