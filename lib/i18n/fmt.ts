// Fills {placeholders} in a dictionary string. Kept free of any dictionary import so client
// components can use it without pulling the whole dictionary into their bundle.
export function fmt(s: string, vars: Record<string, string | number>): string {
  return s.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? ""));
}
