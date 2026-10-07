"use client";

import { useRouter } from "next/navigation";
import { CHAPTERS } from "./Seals";
import type { Lang } from "@/lib/i18n/types";

type Labels = { aria: string; en: string; vi: string; enTitle: string; viTitle: string };

// EN | VI, fixed in the top right. Switching keeps you on the chapter you are reading: the link goes
// to the other language's page with that chapter's anchor.
export function LangSwitch({ lang, t }: { lang: Lang; t: Labels }) {
  const router = useRouter();

  function currentChapter() {
    // the last chapter whose top has passed the upper third of the screen
    let id: string = CHAPTERS[0].id;
    for (const c of CHAPTERS) {
      const el = document.getElementById(c.id);
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) id = c.id;
    }
    return id;
  }

  function go(e: React.MouseEvent<HTMLAnchorElement>, to: Lang) {
    // let the browser handle modified clicks (new tab etc.)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    const id = currentChapter();
    router.push(`/${to}${id === "top" ? "" : `#${id}`}`);
  }

  const item = (to: Lang, short: string, title: string) =>
    to === lang ? (
      <span className="on" aria-current="true" title={title} lang={to}>
        {short}
      </span>
    ) : (
      <a href={`/${to}`} onClick={(e) => go(e, to)} title={title} lang={to} hrefLang={to}>
        {short}
      </a>
    );

  return (
    <div className="langswitch" role="group" aria-label={t.aria}>
      {item("en", t.en, t.enTitle)}
      {item("vi", t.vi, t.viTitle)}
    </div>
  );
}
