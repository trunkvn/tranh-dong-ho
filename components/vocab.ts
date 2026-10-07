// Vietnamese terms used on the page, in one place: the Vietnamese, how to say it, and what it means.
//
// Components show a pronunciation only where it helps (see Say.tsx), but every term lives here, so a
// language switch or a fuller pronunciation mode later only has to read this file.
//
// `say` is an approximate respelling for English readers: northern accent, tones not shown
// (same convention as the Mâm Cơm Tết page).

export type Term = { vi: string; say: string; en: string };

export const VOCAB = {
  // places and names
  dongHo: { vi: "Đông Hồ", say: "dohng hoh", en: "Đông Hồ, the village" },
  tranhDongHo: { vi: "Tranh Đông Hồ", say: "chahn dohng hoh", en: "Đông Hồ prints" },
  bacNinh: { vi: "Bắc Ninh", say: "bahk ning", en: "Bắc Ninh province" },
  hoangCam: { vi: "Hoàng Cầm", say: "hwahng kuhm", en: "Hoàng Cầm, the poet" },
  benKiaSongDuong: { vi: "Bên kia sông Đuống", say: "ben kee-ah sohng doo-uhng", en: "Across the Đuống River" },

  conLaiBaoNhieu: { vi: "Còn lại bao nhiêu", say: "kawn lye bow nyew", en: "How much remains" },

  // the market
  choTranh: { vi: "Chợ tranh", say: "chuh chahn", en: "The print market" },
  hangTrong: { vi: "Hàng Trống", say: "hahng chohng", en: "Hàng Trống, a street in Hanoi and its prints" },
  nguHo: { vi: "Ngũ hổ", say: "ngoo hoh", en: "Five Tigers" },
  hungDua: { vi: "Hứng dừa", say: "huhng zuh-ah", en: "Catching coconuts" },
  danhGhen: { vi: "Đánh ghen", say: "dahnh gen", en: "Jealousy" },
  vinhHoa: { vi: "Vinh hoa", say: "vinh hwah", en: "Glory" },
  phuQuy: { vi: "Phú quý", say: "foo kwee", en: "Wealth and rank" },
  mucDong: { vi: "Mục đồng đọc sách", say: "mook dohng dawk sahk", en: "Cowherd reading" },
  nhanNghia: { vi: "Nhân nghĩa", say: "nyuhn nyee-ah", en: "Benevolence and righteousness" },

  // the prints
  damCuoiChuot: { vi: "Đám cưới chuột", say: "dahm kuh-ee chwuht", en: "The Mice's Wedding" },
  lonAmDuong: { vi: "Lợn âm dương", say: "luhn uhm zuhng", en: "Yin-yang pig" },
  gaDaiCat: { vi: "Gà đại cát", say: "gah dye kaht", en: "Rooster of great fortune" },

  // paper
  giayDiep: { vi: "giấy điệp", say: "zay dee-ep", en: "paper coated with powdered seashell" },
  giayDo: { vi: "giấy dó", say: "zay zaw", en: "paper made from the bark of the dó tree" },
  diep: { vi: "điệp", say: "dee-ep", en: "the seashell whose powder coats the paper" },
  do: { vi: "dó", say: "zaw", en: "the tree whose bark makes the paper" },

  // pigments
  giDong: { vi: "gỉ đồng", say: "gee dohng", en: "copper rust (verdigris)" },
  goVang: { vi: "gỗ vang", say: "gaw vahng", en: "sappanwood" },
  thanLaTre: { vi: "than lá tre", say: "tahn lah cheh", en: "charcoal of bamboo leaves" },
  thanXoan: { vi: "than xoan", say: "tahn swahn", en: "charcoal of xoan wood" },
  soiSon: { vi: "sỏi son", say: "soy sawn", en: "a soft red stone" },
  hoaHoe: { vi: "hoa hòe", say: "hwah hweh", en: "pagoda-tree flowers" },
  laCham: { vi: "lá chàm", say: "lah chahm", en: "indigo leaves" },

  // the epigraph (Hoàng Cầm, Bên kia sông Đuống, 1948)
  verse1: { vi: "Quê hương ta lúa nếp thơm nồng", say: "kweh huhng tah loo-ah nep tuhm nohng", en: "" },
  verse2: { vi: "Tranh Đông Hồ gà lợn nét tươi trong", say: "chahn dohng hoh gah luhn net tuh-ee chawng", en: "" },
  verse3: { vi: "Màu dân tộc sáng bừng trên giấy điệp", say: "mow zuhn tohk sahng buhng chen zay dee-ep", en: "" },
} satisfies Record<string, Term>;

export type TermKey = keyof typeof VOCAB;
