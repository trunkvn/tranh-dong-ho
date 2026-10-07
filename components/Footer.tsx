import type { Dict } from "@/lib/i18n";

// Closing note: how to read the pronunciation guides (English only), and where the facts on this page come from.

// links only; the visible labels are dict.footer.labels, in this same order
const HREFS = [
  "https://vietnamnet.vn/en/dong-ho-paintings-563621.html",
  "https://vietnamnews.vn/Life%20-%20Style/1731504/dong-ho-folk-painting-craft-added-to-unescos-urgent-safeguarding-list.html",
  "https://thingsasian.com/node/537.html",
  "https://ich.unesco.org/en/USL/craft-of-making-dong-ho-folk-woodblock-printings-01737",
  "https://baodautu.vn/tranh-dan-gian-dong-ho-va-uoc-vong-hoi-sinh-mot-lang-nghe-d114789.html",
  "https://baovanhoa.vn/doi-song-van-hoa/hoan-thien-ho-so-khoa-hoc-nghe-lam-tranh-dan-gian-dong-ho-trinh-unesco-de-di-san-thoat-khoi-bao-ve-khan-cap-76438.html",
  "https://mekongasean.vn/tranh-dong-ho-hanh-trinh-giu-nghe-cua-mot-di-san-can-bao-ve-khan-cap-51814.html",
  "https://vietnamnews.vn/life-style/1797466/ba-c-ninh-takes-steps-to-remove-dong-ho-art-from-list-of-culture-in-need-of-safeguarding.html",
  "https://doanhnghiephoinhap.vn/tranh-dong-ho-di-san-van-hoa-dan-gian-viet-nam-81622.html",
  "https://tuoitre.vn/tham-lang-tranh-dong-ho-284193.htm",
  "https://vtcnews.vn/dau-xuan-canh-ty-tim-hieu-y-nghia-sau-xa-trong-buc-tranh-dan-gian-dam-cuoi-chuot-ar522366.html",
  "https://baophapluat.vn/tranh-hang-trong-suc-song-manh-liet-post190608.html",
  "https://nhandan.vn/so-phan-nhung-dong-tranh-dan-gian-viet-post449589.html",
  "https://toplist.vn/top-list/buc-tranh-dong-ho-khong-the-thieu-trong-gia-dinh-dip-tet-9337.htm",
  "https://giaoduc.net.vn/Xa-hoi/Chum-anh-Hon-Tet-xua-trong-tranh-Dong-Ho-post30069.gd",
  "https://vinwonders.com/vi/wonderpedia/news/tranh-lang-ho-dong-tranh-dan-gian/",
];

export function Footer({ t }: { t: Dict }) {
  const f = t.footer;
  return (
    <footer className="site-foot wall">
      <div className="wrap">
        {f.pron && <p>{f.pron}</p>}
        <p>
          {f.sources}{" "}
          {HREFS.map((href, i) => (
            <span key={href}>
              {i > 0 && " · "}
              <a href={href} target="_blank" rel="noreferrer">
                {f.labels[i]}
              </a>
            </span>
          ))}
        </p>
        <p className="made-by">
          {f.made} <b>Gnoud</b>
        </p>
      </div>
    </footer>
  );
}
