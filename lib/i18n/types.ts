export const LOCALES = ["en", "vi"] as const;
export type Lang = (typeof LOCALES)[number];

export const hasLocale = (v: string): v is Lang => (LOCALES as readonly string[]).includes(v);
