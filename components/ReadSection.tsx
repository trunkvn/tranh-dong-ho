import { MiceWeddingArt } from "./read/MiceWeddingArt";
import { MiceReader } from "./read/MiceReader";
import type { Dict } from "@/lib/i18n";

// 06 · Reading a print. Text from the dictionary.

export function ReadSection({ t }: { t: Dict }) {
  return (
    <section className="diep read" id="read" aria-labelledby="read-title">
      <div className="wrap">
        <header className="dh">
          <span className="seal" aria-hidden="true">
            06
          </span>
          <div>
            <p className="eyebrow">{t.read.eyebrow}</p>
            <h2 className="disp mis" id="read-title">
              {t.read.title}
            </h2>
            {t.read.titleVi}
          </div>
        </header>
        <p className="lede">{t.read.lede}</p>
      </div>

      <MiceReader art={<MiceWeddingArt />} t={t.read.reader} />
    </section>
  );
}
