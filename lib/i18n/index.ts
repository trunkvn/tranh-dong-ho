import { en } from "./dictionaries/en";
import { vi } from "./dictionaries/vi";
import type { Lang } from "./types";

export type { Dict } from "./dictionaries/en";
export { LOCALES, hasLocale } from "./types";
export type { Lang } from "./types";

// Server only: the dictionaries contain rendered elements (pronunciation guides etc.), so components
// pick the slice they need and hand it to client components as a prop.
export function getDictionary(lang: Lang) {
  return lang === "vi" ? vi : en;
}
