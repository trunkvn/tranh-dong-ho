import Image from "next/image";
import { Compare } from "./market/Compare";
import type { Dict } from "@/lib/i18n";

// 07 · The print market: six more Đông Hồ prints, then how to tell them from Hàng Trống prints.
// The pictures are real prints in the public domain (Wikimedia Commons), so they are shown as they are;
// each one links back to its Commons page. Descriptions and wishes follow the sources in the footer:
//   Hứng dừa, Vinh hoa – Phú quý, Nhân nghĩa (Toplist); Đánh ghen (VinWonders: a lesson about parents' behaviour);
//   Vinh hoa, Phú quý, Mục đồng đọc sách, Nhân nghĩa (Giáo dục & Thời đại); Hàng Trống vs Đông Hồ
//   (Báo Pháp luật, Nhân Dân, Báo Lào Cai).

// same order as dict.market.items (the pair Vinh hoa and Phú quý sit side by side)
const PRINTS = [
  {
    src: "/prints/hung-dua.jpg",
    w: 400,
    h: 582,
    page: "File:Hái_dừa.JPG",
    label: "Hứng dừa",
  },
  {
    src: "/prints/danh-ghen.jpg",
    w: 370,
    h: 547,
    page: "File:Đánh_ghen.JPG",
    label: "Đánh ghen",
  },
  {
    src: "/prints/muc-dong-doc-sach.jpg",
    w: 500,
    h: 703,
    page: "File:Dong_Ho_painting_-_Muc_dong_doc_sach.jpg",
    label: "Mục đồng đọc sách",
  },
  {
    src: "/prints/vinh-hoa.jpg",
    w: 400,
    h: 548,
    page: "File:Vinh_hoa.JPG",
    label: "Vinh hoa",
  },
  {
    src: "/prints/phu-quy.jpg",
    w: 370,
    h: 507,
    page: "File:Phú_quý.JPG",
    label: "Phú quý",
  },
  {
    src: "/prints/nhan-nghia.jpg",
    w: 500,
    h: 684,
    page: "File:Dong_Ho_painting_-_Nhan_nghia.jpg",
    label: "Nhân nghĩa",
  },
];

const commons = (page: string) =>
  `https://commons.wikimedia.org/wiki/${encodeURI(page)}`;

const TIGERS_PAGE =
  "File:Five_tigers,_Hang_Trong_painting,_Hanoi,_paper,_view_1_-_Vietnam_National_Museum_of_Fine_Arts_-_Hanoi,_Vietnam_-_DSC05281.JPG";

export function MarketSection({ t }: { t: Dict }) {
  const m = t.market;
  const c = m.compare;
  return (
    <section className="wall market" id="market" aria-labelledby="market-title">
      <div className="wrap">
        <header className="dh">
          <span className="seal" aria-hidden="true">
            07
          </span>
          <div>
            <p className="eyebrow">{m.eyebrow}</p>
            <h2 className="disp mis" id="market-title">
              {m.title}
            </h2>
            {m.titleVi}
          </div>
        </header>
        <p className="lede">{m.lede}</p>

        {/* the prints hang from a string, each held by a wooden peg, like a stall at the market */}
        <ul className="mkgrid">
          {PRINTS.map((p, i) => (
            <li key={p.src} className="mkcard">
              <span className="peg" aria-hidden="true" />
              <figure className="print mkprint">
                <Image
                  src={p.src}
                  alt={m.items[i].alt}
                  width={p.w}
                  height={p.h}
                  sizes="(max-width: 899px) 70vw, 380px"
                />
              </figure>
              <h3 className="mkname">{m.items[i].name}</h3>
              <p className="mktext">{m.items[i].text}</p>
            </li>
          ))}
        </ul>
        <p className="mknote">{m.pairNote}</p>
        <p className="mkcredit">
          {m.credit}{" "}
          {PRINTS.map((p, i) => (
            <span key={p.src}>
              {i > 0 && " · "}
              <a href={commons(p.page)} target="_blank" rel="noreferrer">
                {p.label}
              </a>
            </span>
          ))}
        </p>

        <div className="compare" id="hang-trong">
          <h3 className="disp">{c.h}</h3>
          <p className="lede">{c.intro}</p>

          <Compare t={c} />

          <p className="mknote">
            <a href={commons(TIGERS_PAGE)} target="_blank" rel="noreferrer">
              {c.bCredit}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
