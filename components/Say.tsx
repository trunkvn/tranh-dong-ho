// Pronunciation guides, in the same style as the Mâm Cơm Tết page: say “gah lwuhk”.
// Used sparingly, only for the words a reader is most likely to need. Terms live in vocab.ts.
import { VOCAB, type TermKey } from "./vocab";

/** A Vietnamese term followed inline by how to say it. `children` overrides the text (e.g. to capitalise it). */
export function Say({ k, children }: { k: TermKey; children?: React.ReactNode }) {
  const t = VOCAB[k];
  return (
    <>
      <i lang="vi">{children ?? t.vi}</i> <span className="say">(say &ldquo;{t.say}&rdquo;)</span>
    </>
  );
}

/** Just the guide, for when the Vietnamese is already shown (a caption, a heading). */
export function SayLine({ k, className = "" }: { k: TermKey; className?: string }) {
  return <span className={`say say-line ${className}`.trim()}>say &ldquo;{VOCAB[k].say}&rdquo;</span>;
}
