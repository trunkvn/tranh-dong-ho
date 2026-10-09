# Đông Hồ Folk Prints · Tranh Đông Hồ

An illustrated, interactive guide to **Đông Hồ woodblock prints**, the folk art of Bắc Ninh province in northern Vietnam. It follows one print from a sheet of shimmering *điệp* paper to the finished picture, and lets you press the woodblocks yourself.

The site is English-first, with a full Vietnamese version. Vietnamese names and terms appear inside the English text with a light pronunciation guide.

![Hero: the title sheet with the yin-yang pig and the rooster hanging on either side](docs/preview/hero.jpg)

## What is in it

The page is one long scroll in nine chapters, with a row of numbered seals on the side to jump between them.

| #   | Chapter             | What you can do                                                                                        |
| --- | ------------------- | ------------------------------------------------------------------------------------------------------ |
| 01  | Intro               | Meet the village, the two best-known prints and Hoàng Cầm's poem about them                            |
| 02  | The paper           | Learn why the ground is *giấy điệp* (dó paper coated with powdered seashell) and why the colours seem to glow |
| 03  | The printing        | Press four colour blocks and the black outline block, in any order, and watch the rooster appear. A switch lets the blocks slip out of register, as they do by hand |
| 04  | Reading a print     | Read the wedding of the mice, panel by panel                                                           |
| 05  | More prints         | Browse six more prints on a market stall, then compare an Đông Hồ print with one from Hàng Trống      |
| 06  | Colour from nature  | Choose where each colour comes from (flowers, leaves, stone, shell) and see the rooster change         |
| 07  | What remains        | See how much of the craft survives: figures from the reports made for UNESCO's file, with sources     |
| 08  | The making          | Click through a print's making, from the first drawing to the finished sheet, with the waits in the sun |
| 09  | Closing             | A short close                                                                                          |

### Printing a picture

![Chapter 03: the rooster after all five blocks have been pressed](docs/preview/press.jpg)

### A market of prints

![Chapter 05: prints hanging from a string, each held by a wooden peg](docs/preview/market.jpg)

### Colour from nature

![Chapter 06: choosing the source of each colour](docs/preview/colour.jpg)

### On a phone

<img src="docs/preview/mobile.jpg" alt="The hero on a phone" width="260" />

## Tech

- [Next.js](https://nextjs.org) 16 (App Router, Cache Components) and React 19
- Tailwind CSS 4 plus hand-written CSS in `app/globals.css`
- TypeScript
- Fonts through `next/font`: Archivo (display) and Be Vietnam Pro (body, designed for Vietnamese diacritics)
- The rooster and the pig are drawn in SVG, and every colour is its own layer, like a woodblock
- Two languages, `/en` and `/vi`, from plain dictionaries in `lib/i18n`, with no i18n library
- Generated favicon, Apple icon and Open Graph image (`app/icon.tsx`, `app/apple-icon.tsx`, `app/[lang]/opengraph-image.tsx`), plus `robots.txt` and `sitemap.xml`

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The bare address redirects to `/en`.

```bash
npm run build   # production build
npm run start   # serve the build
npm run lint
```

Set `NEXT_PUBLIC_SITE_URL` (for example `https://your-domain.example`) when you deploy. It is used for canonical links, the share image and the sitemap. Without it, `http://localhost:3000` is used.

## Project layout

```
app/[lang]/        page, layout and share image for /en and /vi
components/        one component per chapter, plus Loader, Hero, Seals, LangSwitch
components/art/    the woodblock-style SVG art (rooster, pig, wood texture)
components/press/  the printing demo (chapter 03)
lib/i18n/          dictionaries (en, vi) and helpers
public/prints/     photographs of historic prints
docs/preview/      the screenshots in this README
```

## Credits

- The photographs of historic prints in chapter 05 and the comparison are public domain, from [Wikimedia Commons](https://commons.wikimedia.org). Each one is credited on the page.
- The epigraph is from Hoàng Cầm, *Bên kia sông Đuống* (1948).
- The rooster and the pig are drawn in SVG in this repository (`components/art/`).

---

Made by **Gnoud**
