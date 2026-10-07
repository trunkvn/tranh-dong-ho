"use client";

import { useEffect, useState } from "react";

// The column of red seals down the right edge: one per chapter, the one in view lit gold.
// Labels come from the dictionary (dict.nav), so the column follows the page language.
export const CHAPTERS = [
  { id: "top", no: "01" },
  { id: "paper", no: "02" },
  { id: "press", no: "03" },
  { id: "read", no: "04" },
  { id: "market", no: "05" },
  { id: "colour", no: "06" },
  { id: "remain", no: "07" },
  { id: "make", no: "08" },
  { id: "end", no: "09" },
] as const;

export type ChapterId = (typeof CHAPTERS)[number]["id"];

export function Seals({ aria, items }: { aria: string; items: Record<ChapterId, string> }) {
  const [active, setActive] = useState<string>(CHAPTERS[0].id);

  useEffect(() => {
    // The chapter that crosses the middle of the viewport is the current one.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const c of CHAPTERS) {
      const el = document.getElementById(c.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return (
    <nav className="seals" aria-label={aria}>
      {CHAPTERS.map((c) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          className={c.id === active ? "on" : undefined}
          aria-current={c.id === active ? "true" : undefined}
        >
          <i>{c.no}</i>
          <em>{items[c.id]}</em>
        </a>
      ))}
    </nav>
  );
}
