import { notFound } from "next/navigation";
import { ColourSection } from "@/components/ColourSection";
import { EndSection } from "@/components/EndSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LangSwitch } from "@/components/LangSwitch";
import { MakeSection } from "@/components/MakeSection";
import { MarketSection } from "@/components/MarketSection";
import { PaperSection } from "@/components/PaperSection";
import { PressSection } from "@/components/PressSection";
import { ReadSection } from "@/components/ReadSection";
import { RemainSection } from "@/components/RemainSection";
import { getDictionary, hasLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <LangSwitch lang={lang} t={t.switcher} />
      <main>
        <Hero t={t} />
        <PaperSection t={t} />
        <PressSection t={t} />
        <ReadSection t={t} />
        <MarketSection t={t} />
        <ColourSection t={t} />
        <RemainSection t={t} />
        <MakeSection t={t} />
        <EndSection t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
