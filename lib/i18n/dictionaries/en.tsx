import { Say, SayLine } from "@/components/Say";
import type { Lang } from "../types";

// English, the leading language. Vietnamese appears only for names and terms, marked lang="vi", with a
// pronunciation guide on the prominent ones (see components/Say.tsx and components/vocab.ts).
// Strings with {placeholders} are filled with fmt(). Any value can be a rendered element when it needs
// markup inside (a term, an emphasis).

export const en = {
  lang: "en" as Lang,

  meta: {
    title: "Đông Hồ Folk Prints — Tranh Đông Hồ",
    description:
      "An illustrated guide to Đông Hồ woodblock prints, the folk art of Bắc Ninh, Vietnam, with Vietnamese terms and pronunciation guides.",
    siteName: "Đông Hồ Folk Prints",
    keywords: [
      "Đông Hồ",
      "Đông Hồ paintings",
      "Vietnamese folk art",
      "woodblock prints",
      "Bắc Ninh",
      "giấy điệp",
      "Tết prints",
      "Vietnamese culture",
    ],
    ogAlt: "A rooster printed in four colours and black, on a sheet of điệp paper",
  },

  loader: { label: "Printing the page…" },

  switcher: { aria: "Language", en: "EN", vi: "VI", enTitle: "English", viTitle: "Tiếng Việt" },

  brand: { aria: "Đông Hồ Prints, back to top", a: "Đông Hồ", b: "Prints", sub: "Tranh Đông Hồ" },

  nav: {
    aria: "Sections",
    items: {
      top: "Intro",
      paper: "The paper",
      press: "Printing",
      read: "Reading",
      colour: "Colour",
      market: "The market",
      remain: "What remains",
      make: "The making",
      end: "Closing",
    },
  },

  art: {
    pig: "Yin-yang pig woodblock print",
    rooster: "Rooster of great fortune woodblock print",
    block: "A carved woodblock of the Rooster of Great Fortune, inked, with the picture mirrored as it is cut into the wood.",
  },

  hero: {
    pig: (
      <>
        Yin-Yang Pig
        <span className="vi" lang="vi">
          Lợn âm dương
        </span>
        <SayLine k="lonAmDuong" />
      </>
    ),
    rooster: (
      <>
        Rooster of Great Fortune
        <span className="vi" lang="vi">
          Gà đại cát
        </span>
        <SayLine k="gaDaiCat" />
      </>
    ),
    title: (
      <>
        <em className="redblock">Đông Hồ</em>
        <span>Prints</span>
      </>
    ),
    subtitle: (
      <>
        Folk woodblock prints from <Say k="dongHo" /> village, Bắc Ninh, Vietnam
      </>
    ),
    lead: "Five colours from seashell, stone, leaves and flowers, pressed onto shimmering paper, one woodblock at a time.",
    cue: "See how a print is made",
  },

  paper: {
    eyebrow: "The paper",
    title: (
      <>
        Why <em lang="vi">giấy điệp</em>?
      </>
    ),
    titleSay: <SayLine k="giayDiep" className="h-say" />,
    reasons: [
      {
        h: "The ground is not plain white paper.",
        p: (
          <>
            Sheets of <Say k="giayDo" />, made from the bark of the dó tree, are brushed with coat after coat of powdered
            seashell (<Say k="diep" />) mixed with a sticky-rice paste. The result is a hard, softly sparkling surface that
            still shows the sweeps of the brush.
          </>
        ),
      },
      {
        h: "The shell catches the light, so the colours on top seem to glow.",
        p: (
          <>
            Every colour has its own woodblock and is printed straight onto this ground, with the black outline block
            pressed last. The shimmering surface gives the flat colours a depth that plain paper cannot.
          </>
        ),
      },
      {
        h: "Every colour comes from nature.",
        p: (
          <>
            Some materials are gathered close to the village. The shells are not: they come from the sea and are brought in.
          </>
        ),
      },
    ],
    // in the order black, red, yellow, blue-green, white (the swatch colours live in the component)
    pigments: [
      { name: "Black", from: <>burnt bamboo leaves</> },
      {
        name: "Red",
        from: (
          <>
            a soft red stone, <Say k="soiSon" />
          </>
        ),
      },
      {
        name: "Yellow",
        from: (
          <>
            pagoda-tree flowers, <Say k="hoaHoe" />
          </>
        ),
      },
      {
        name: "Blue-green",
        from: (
          <>
            indigo leaves, <Say k="laCham" />
          </>
        ),
      },
      { name: "White", from: <>the powdered shell itself</> },
    ],
    equation: {
      aria: "Dó paper plus điệp plus rice paste makes điệp paper",
      parts: [
        { label: "Ground", name: "Dó paper" },
        { label: "Powdered seashell", name: "Điệp" },
        { label: "Sticky-rice binder", name: "Rice paste" },
      ],
      result: { label: "Many thin coats", name: "Điệp paper" },
    },
    shimmer: {
      aria: "One sheet of paper in two halves. The left half is plain dó paper and looks flat. The right half is coated with powdered seashell and glints in the light. The same small print runs across both.",
      plain: { name: "Plain dó paper", note: "Flat and matte" },
      coated: { name: "Coated with điệp", note: "Catches the light" },
      hintHover: "Move your pointer over the sheet",
      hintTouch: "Drag a finger across the sheet",
    },
  },

  press: {
    eyebrow: "The printing",
    title: (
      <>
        Printing a <em>picture</em>
      </>
    ),
    lede: "Each colour has its own woodblock. The colour blocks go first and the black outline block always goes last. Press the blocks one by one to watch the rooster appear, then try slipping the blocks.",
    app: {
      trayAria: "Woodblocks",
      trayLabel: "The woodblocks",
      reset: "↺ Start over",
      locked: "Printed last, once the colours are on",
      sheetAria: "Rooster of Great Fortune being printed: {n} of {total} blocks pressed",
      step: "Step",
      slipTitle: "Slip the blocks",
      slipHint: "The printer sets each block by eye, so even a small slip shows",
      printAll: "▶ Print it all",
      printing: "Printing…",
      again: "↺ Print again",
      intro: {
        title: "A sheet of điệp paper",
        text: "Every print starts as a blank sheet of điệp paper. Press the blocks one at a time and watch the rooster appear. The black outline block always goes last.",
      },
      blocks: {
        yellow: {
          name: "Yellow block",
          source: "Pagoda-tree flowers",
          title: "Yellow",
          text: "Yellow comes from the flowers of the pagoda tree (hoa hòe), roasted in a pan and then boiled in water. This block prints the rooster's body, neck and head, one tail feather and the little flowers on the ground.",
        },
        red: {
          name: "Red block",
          source: "Red stone, sỏi son",
          title: "Red",
          text: "Red is made from sỏi son, a soft red stone. It colours the sun, the comb and wattle and two of the tail feathers. In Vietnamese folk art, red stands for good luck and prosperity.",
        },
        green: {
          name: "Green block",
          source: "Copper rust or indigo leaves",
          title: "Green",
          text: "Green comes from copper rust (gỉ đồng) or from indigo leaves (lá chàm), depending on the printer. This block prints one tail feather, the small leaf on the wing and the grass along the ground.",
        },
        indigo: {
          name: "Indigo block",
          source: "Indigo leaves, lá chàm",
          title: "Indigo",
          text: "Deep blue comes from indigo leaves (lá chàm). Here it is used for a single tail feather, one dark accent among the red and green.",
        },
        key: {
          name: "Black outline block",
          source: "Burnt bamboo leaves",
          title: "Black outline",
          text: "Black is the ash of burnt bamboo leaves. This block carries every outline and detail, so it is printed last, pressing the lines down over all the colours. Now the print is finished.",
        },
      },
    },
  },

  read: {
    eyebrow: "Reading a print",
    title: (
      <>
        Reading <em>The Mice&apos;s Wedding</em>
      </>
    ),
    titleVi: (
      <p className="h-title-vi">
        <i lang="vi">Đám cưới chuột</i> <SayLine k="damCuoiChuot" className="inline-say" />
      </p>
    ),
    lede: "A small procession that says a great deal. Click the numbers on the print, or use the arrows, to read it one detail at a time.",
    reader: {
      scrollAria: "The print. It scrolls sideways on small screens.",
      svgAria:
        "An illustration after the folk print The Mice's Wedding: a procession of mice with a groom on a red horse, a bride in a palanquin, musicians and relatives, offering a carp and a dove to a fierce old cat on the right.",
      detailAria: "Detail {n} of {total}: {title}",
      prev: "Previous detail",
      next: "Next detail",
      note: "This is one common reading, and the hand-drawn picture above is an illustration after the print, not a copy of it. Folk prints often carry several layers of meaning: the same wedding can also be read as a wish for a happy, fruitful marriage.",
      details: [
        {
          title: "The relatives",
          text: "A crowd of mouse relatives follows the wedding. Look at their faces: they glance nervously from side to side, as if someone might be watching. The drops by their heads are sweat.",
        },
        {
          title: "The bride's palanquin",
          text: "The mouse bride rides in a palanquin carried by two bearers in official hats, following the groom just as a bride of rank would.",
        },
        {
          title: "The groom on a red horse",
          text: "At the head of the procession rides the mouse groom on a red horse. Horse, hat and robes are all borrowed from the grand weddings of the rich.",
        },
        {
          title: "Banner, horn and drum",
          text: "Horns and drums, flags and fans, ceremonial hats and belts: the mice put on all the pomp of a proper wedding, even if they are only mice.",
        },
        {
          title: "The offering",
          text: "A mouse steps forward with a carp and a dove, a tribute for the cat. Only once the gift is paid can the wedding go on in peace.",
        },
        {
          title: "The old cat",
          text: "In the right corner sits an old cat, fierce and growling. In the satire, the cat is the ruling class and its officials, who grow fat on bribes, and the mice are the ordinary people who must pay to be left alone.",
        },
      ],
    },
  },

  market: {
    eyebrow: "More prints",
    title: (
      <>
        A market of <em>prints</em>
      </>
    ),
    titleVi: (
      <p className="h-title-vi">
        <i lang="vi">Chợ tranh</i> <SayLine k="choTranh" className="inline-say" />
      </p>
    ),
    lede: "The printers of Đông Hồ cut far more than a rooster, a pig and a wedding of mice. Their prints wish for luck, success and many children, and they show village life, quarrels included. Here are six more.",
    pairNote: "Vinh hoa and Phú quý are made as a pair.",
    credit: "Images: public domain, via Wikimedia Commons:",
    // the same order as the images in components/MarketSection.tsx
    items: [
      {
        name: (
          <>
            Catching Coconuts
            <span className="vi" lang="vi">
              Hứng dừa
            </span>
            <SayLine k="hungDua" />
          </>
        ),
        alt: "A man up a coconut palm and a woman holding out her skirt, two children at the foot of the tree.",
        text: "A strong young man picks two coconuts and hands them down to a woman who holds out her skirt to catch them. It is a picture of a couple's happiness.",
      },
      {
        name: (
          <>
            Jealousy
            <span className="vi" lang="vi">
              Đánh ghen
            </span>
            <SayLine k="danhGhen" />
          </>
        ),
        alt: "A woman with raised scissors, a man shielding another woman, and a child with hands folded.",
        text: "A jealous wife raises her scissors, while her husband shields the other woman and a child begs them to stop. It is a witty scene with a lesson: what parents do shapes their children.",
      },
      {
        name: (
          <>
            Cowherd Reading
            <span className="vi" lang="vi">
              Mục đồng đọc sách
            </span>
            <SayLine k="mucDong" />
          </>
        ),
        alt: "A boy standing on a green buffalo, reading from a sheet of paper.",
        text: "A cowherd boy reads while he minds his buffalo: a wish that children will study hard.",
      },
      {
        name: (
          <>
            Glory
            <span className="vi" lang="vi">
              Vinh hoa
            </span>
            <SayLine k="vinhHoa" />
          </>
        ),
        alt: "A child hugging a large rooster, with flowers behind.",
        text: "A child hugs a rooster. The print wishes for honour together with the virtues of humanity, righteousness, trust and courage, in letters and in arms.",
      },
      {
        name: (
          <>
            Wealth and Rank
            <span className="vi" lang="vi">
              Phú quý
            </span>
            <SayLine k="phuQuy" />
          </>
        ),
        alt: "A child holding a yellow duck beside a lotus flower.",
        text: "A child holds a duck beside a lotus, the flower of purity. With Vinh hoa it wishes a household wealth and many children and grandchildren, sons and daughters both.",
      },
      {
        name: (
          <>
            Benevolence and Righteousness
            <span className="vi" lang="vi">
              Nhân nghĩa
            </span>
            <SayLine k="nhanNghia" />
          </>
        ),
        alt: "A boy sitting with a large toad in his arms.",
        text: "A boy holds a toad. Given to children, it wishes them to grow up with nhân and nghĩa, kindness and a sense of right, and to do well in their studies.",
      },
    ],
    compare: {
      h: (
        <>
          Not to be confused with <Say k="hangTrong" />
        </>
      ),
      intro: "Outsiders often mix up Đông Hồ prints with the folk prints of Hanoi's Hàng Trống. They look alike at first, but they are made differently. A quick way to tell them apart is the colour: flat blocks of it, or brushed on with shading.",
      tabsAria: "Compare by",
      cols: { a: "Đông Hồ", b: "Hàng Trống" },
      rows: [
        {
          label: "Where",
          a: "Đông Hồ village, Bắc Ninh province.",
          b: "Old Hanoi, around the streets of Hàng Bồ, Hàng Nón and Hàng Trống.",
        },
        {
          label: "How it is made",
          a: "Printed from woodblocks: one for each colour and one for the black outline.",
          b: "Only the outlines are printed from a block. The colours are painted in by hand, so each sheet differs a little from the next.",
        },
        {
          label: "The look",
          a: "Flat patches of colour on điệp paper, each pressed down by its own block.",
          b: "Soft light and dark from the brush, which gives the figures depth.",
        },
        { label: "Size and price", a: "Small, and cheap.", b: "Larger, and much dearer." },
        {
          label: "What it was for",
          a: "Pasted on walls and doors for the new year, and taken down after a time.",
          b: "Worship and Tết, with religious figures such as the Five Tigers among its subjects.",
        },
      ],
      aCaption: (
        <>
          Đông Hồ: <i lang="vi">Vinh hoa</i>
        </>
      ),
      bCaption: (
        <>
          Hàng Trống: <Say k="nguHo" />, the Five Tigers
        </>
      ),
      aAlt: "A Đông Hồ print: a child hugging a rooster, in flat colours with a black outline.",
      bAlt: "A Hàng Trống print of five tigers, painted with soft shading among scrolling clouds.",
      bCredit: "Hàng Trống print: photo by Daderot, Vietnam National Museum of Fine Arts, public domain",
    },
  },

  colour: {
    eyebrow: "Natural colour",
    title: (
      <>
        Colour from <em>nature</em>
      </>
    ),
    lede: "Every colour on a print comes from something real: a flower, a leaf, a stone, a shell. Some colours had more than one source. Choose where each one comes from and watch the rooster change.",
    mixer: {
      groupAria: "Source of the {name}",
      howSummary: "How it's made",
      previewAria: "The Rooster of Great Fortune print in the colours you chose",
      note: "Every pigment is blended with a little sticky-rice flour before it is printed. Click a colour's name to see only that block on the print.",
      caption:
        "Red from {red}, green from {green}. The shades are approximate: printers mixed their colours by hand, and every family had its own recipe.",
      white: { name: "White", from: "The paper itself, coated with powdered seashell" },
      rows: {
        yellow: {
          name: "Yellow",
          how: (
            <>
              The flowers of the pagoda tree (<i lang="vi">hoa hòe</i>), no bigger than grains of rice, are roasted in a pan
              until they turn brownish-yellow, then boiled in water. The golden liquid is strained and left to settle in an
              earthenware pot for a couple of years before it is used.
            </>
          ),
        },
        red: {
          name: "Red",
          how: (
            <>
              Red comes from <i lang="vi">sỏi son</i>, a soft red stone, or from sappanwood (<Say k="goVang" />). Sappanwood
              gives a deeper, cooler red. In Vietnamese folk art red stands for good luck and prosperity.
            </>
          ),
        },
        green: {
          name: "Green",
          how: (
            <>
              The blue-greens of a print come from indigo leaves (<i lang="vi">lá chàm</i>) or from copper rust (
              <Say k="giDong" />
              ). Printers also mix the basic colours to get others, each following their own recipe.
            </>
          ),
        },
        indigo: {
          name: "Deep blue",
          how: (
            <>
              Indigo leaves (<i lang="vi">lá chàm</i>) come from the mountain villages of the north, where they are used to
              dye cloth. Like the yellow, the dye is soaked in an earthenware pot for a couple of years and strained.
            </>
          ),
        },
        black: {
          name: "Black",
          how: (
            <>
              Fallen bamboo leaves (<Say k="thanLaTre" />) are burned to cinders, sprinkled with water and left in a glazed
              clay jar half full of water. After a year or more the water is strained and mixed with sticky-rice glue. Some
              printers use charcoal of the xoan tree (<Say k="thanXoan" />) instead.
            </>
          ),
        },
      },
      options: {
        "hoa-hoe": {
          name: "Pagoda-tree flowers",
          label: (
            <>
              Pagoda-tree flowers, <i lang="vi">hoa hòe</i>
            </>
          ),
        },
        "soi-son": {
          name: "Red stone",
          label: (
            <>
              Red stone, <i lang="vi">sỏi son</i>
            </>
          ),
        },
        "go-vang": {
          name: "Sappanwood",
          label: (
            <>
              Sappanwood, <i lang="vi">gỗ vang</i>
            </>
          ),
        },
        "indigo-leaf": {
          name: "Indigo leaves",
          label: (
            <>
              Indigo leaves, <i lang="vi">lá chàm</i>
            </>
          ),
        },
        copper: {
          name: "Copper rust",
          label: (
            <>
              Copper rust, <i lang="vi">gỉ đồng</i>
            </>
          ),
        },
        indigo: {
          name: "Indigo leaves",
          label: (
            <>
              Indigo leaves, <i lang="vi">lá chàm</i>
            </>
          ),
        },
        bamboo: {
          name: "Burnt bamboo leaves",
          label: (
            <>
              Burnt bamboo leaves, <i lang="vi">than lá tre</i>
            </>
          ),
        },
      },
    },
  },

  remain: {
    eyebrow: "What remains",
    title: (
      <>
        How much <em>remains</em>
      </>
    ),
    titleVi: (
      <p className="h-title-vi">
        <i lang="vi">Còn lại bao nhiêu</i> <SayLine k="conLaiBaoNhieu" className="inline-say" />
      </p>
    ),
    lede: "A print needs a whole set of carved blocks. While the blocks survive, the picture can be printed again. When the last family stops, it lives only in memory.",
    thennow: {
      aria: "One hundred and eighty small squares, one for each household that once made prints. Only three stay solid red; the rest fade away.",
      thenBig: "About 180",
      thenText: "households once made prints in the village",
      nowBig: "3",
      nowText: "families can still make them today: about 30 people across 4 generations",
      note: "Figures from the reports made while UNESCO's file was prepared. The sources are listed at the foot of the page.",
    },
    oldblocks: {
      h: "Blocks hundreds of years old",
      p: "A report in February 2026 found that in the whole village only one family and one other still keep the old carved blocks, some of them hundreds of years old. Each is an heirloom, handed down from one generation to the next.",
    },
    timelineAria: "Timeline",
    // the fourth event (UNESCO) is highlighted in the component
    events: [
      { when: "About 500 years ago", what: "Prints are first made in Đông Hồ village, Thuận Thành, Bắc Ninh." },
      { when: "1980s and 1990s", what: "Hard times: many families turn to making paper votive objects to earn a living." },
      { when: "2014", what: "Bắc Ninh approves a plan to protect the craft, first to 2020, later extended to 2030." },
      {
        when: "9 December 2025",
        what: "UNESCO adds the craft to its list of heritage in need of urgent safeguarding, Viet Nam's 17th element.",
      },
      {
        when: "August 2026",
        what: "Bắc Ninh announces a project to bring the craft off that list: US$5.24 million, running to 2035, with completion expected by 2040.",
      },
    ],
    faded: {
      h: "Why it faded",
      items: [
        "Orders are few and irregular, so the craft alone cannot support a household.",
        "Many families moved to paper votive objects, and those who would like to return often cannot afford to.",
        "Imitations, mass-produced industrial prints and AI-made products now compete with the real thing.",
      ],
    },
    done: {
      h: "What is being done",
      items: [
        "UNESCO's safeguarding plan: training classes, an inventory of the craft, new designs, wider markets, easier access to raw materials and teaching in schools.",
        "Bắc Ninh's project: upgrading the conservation centre, preserving the woodblocks with scientific methods, digitising materials and building exhibition spaces.",
        "A goal that by 2035 every artisan who helps pass the craft on is recognised and supported.",
      ],
    },
  },

  make: {
    eyebrow: "The making",
    title: (
      <>
        Made by hand, <em>dried by sun</em>
      </>
    ),
    lede: "A print is not made in an afternoon. It is a chain of small jobs, and after almost every one the sheet has to wait in the sun. Click through the steps to follow one sheet from the first drawing to the finished print.",
    flow: {
      // same order as the steps in the component: 5 preparation steps, 4 colours, the outline
      steps: [
        {
          title: "Draw the design",
          text: "Everything begins with a drawing: the design is painted in ink on paper. Designing and carving are the parts that take many years to master.",
        },
        {
          title: "Carve the blocks",
          text: "The drawing is transferred onto wood and cut by hand: one block for each colour, and one for the black outline.",
        },
        {
          title: "Brush on the paste",
          text: "A sheet of dó paper is brushed with a thin sticky-rice paste, then set out in the sun until the paste is dry.",
        },
        {
          title: "Coat it with điệp",
          text: "A layer of powdered seashell goes on top, and the sheet is dried in the sun once more. Now it is điệp paper, ready to print on.",
        },
        {
          title: "Make the colours ready",
          text: "The pigments come from stone, leaves, flowers and ash. Some are left to settle for a year or more before they are used.",
        },
        {
          title: "Print the yellow",
          text: "The colours go on one at a time, in an order the printer sets. Here yellow goes first: the body, neck and head, and one tail feather. Every printing is followed by drying, so five colours means five printings.",
        },
        {
          title: "Print the red",
          text: "Red follows: the sun, the comb and wattle, and two tail feathers. Then the sheet dries in the sun again.",
        },
        {
          title: "Print the green",
          text: "Green is next: one tail feather, the small leaf on the wing and the grass along the ground. Dry again.",
        },
        {
          title: "Print the deep blue",
          text: "The last colour is the deep blue of indigo: a single tail feather. The sheet dries once more, and the colours are all on.",
        },
        {
          title: "Finish with the outline",
          text: "The black outline block is printed last, over all the colours. One final drying, and the print is ready to be hung.",
        },
      ],
      phases: { getting: "Getting ready", printing: "Printing" },
      season: "In the village, the year's production begins in July and August.",
      panelAria: "Where the sheet is now",
      sheetAria: "The sheet at step {n}: {title}",
      sunsAria: "{n} of {total} dryings in the sun so far",
      suncap: "Dryings in the sun:",
      back: "← Back",
      next: "Next →",
      stepOf: "Step {n} of {total}",
    },
  },

  end: {
    eyebrow: "Closing",
    l1: "Still printing,",
    l2: "one block",
    l3: "at a time.",
    text: "A sheet of paper, a few blocks of wood, and colours from shell, stone, leaves and flowers: that is all a Đông Hồ print needs. Only a handful of families in Bắc Ninh still know how to make one.",
    btn1: "Print one more",
    btn2: "Back to top ↑",
  },

  footer: {
    pron: "Pronunciations are approximate (northern accent, tones not shown).",
    sources: "Sources:",
    made: "Made by",
    // same order as SOURCES in components/Footer.tsx
    labels: [
      "Vietnamnet: Dong Ho paintings",
      "Vietnam News: UNESCO urgent safeguarding list",
      "Things Asian: Traditional Tet paintings",
      "UNESCO: the craft of making Đông Hồ prints",
      "Báo Đầu tư: an artisan on the making (in Vietnamese)",
      "Báo Văn hóa: the UNESCO dossier (in Vietnamese)",
      "Mekong ASEAN: keeping the craft (in Vietnamese)",
      "Vietnam News: Bắc Ninh's project to 2035",
      "Doanh nghiệp & Hội nhập: Đông Hồ prints (in Vietnamese)",
      "Tuổi Trẻ: visiting Đông Hồ village (in Vietnamese)",
      "VTC News: the Mice's Wedding (in Vietnamese)",
      "Báo Pháp luật: Hàng Trống prints (in Vietnamese)",
      "Nhân Dân: the folk print traditions (in Vietnamese)",
      "Toplist: Đông Hồ prints for Tết (in Vietnamese)",
      "Giáo dục & Thời đại: Tết in Đông Hồ prints (in Vietnamese)",
      "VinWonders: the Đông Hồ folk prints (in Vietnamese)",
    ],
  },
};

export type Dict = typeof en;
