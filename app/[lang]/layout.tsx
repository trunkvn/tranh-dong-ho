import type { Metadata, Viewport } from "next";
import { Archivo, Be_Vietnam_Pro } from "next/font/google";
import "../globals.css";
import { Loader } from "@/components/Loader";
import { getDictionary, hasLocale, LOCALES } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

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

// the colour of the wall behind the loader, so the browser bar matches it on phones
export const viewport: Viewport = { themeColor: "#430509" };

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : "en";
  const { meta } = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    applicationName: meta.siteName,
    keywords: meta.keywords,
    // the share image comes from opengraph-image.tsx, the icons from icon.tsx and apple-icon.tsx
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", vi: "/vi", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      siteName: meta.siteName,
      title: meta.title,
      description: meta.description,
      locale: locale === "vi" ? "vi_VN" : "en_US",
      alternateLocale: locale === "vi" ? ["en_US"] : ["vi_VN"],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  };
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
