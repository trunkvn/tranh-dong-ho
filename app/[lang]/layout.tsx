import type { Metadata } from "next";
import { Archivo, Be_Vietnam_Pro } from "next/font/google";
import "../globals.css";
import { Loader } from "@/components/Loader";
import { getDictionary, hasLocale, LOCALES } from "@/lib/i18n";

// Display face: Archivo's width axis gives the condensed poster look.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "vietnamese"],
  axes: ["wdth"],
});

// Body face: designed for Vietnamese diacritics, so the vi lines stay crisp.
const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

// /en and /vi are built ahead of time. Anything else under /[lang] is a 404 (see page.tsx).
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const { meta } = getDictionary(hasLocale(lang) ? lang : "en");
  return { title: meta.title, description: meta.description };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : "en";
  return (
    <html lang={locale} className={`${archivo.variable} ${beVietnam.variable}`}>
      <body>
        <Loader label={getDictionary(locale).loader.label} />
        {children}
      </body>
    </html>
  );
}
