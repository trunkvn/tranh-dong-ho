import type { Lang } from "../types";
import type { Dict } from "./en";

// Tiếng Việt. Same shape as en.tsx (TypeScript fails the build if a string is missing).
// Vietnamese readers need no pronunciation guides, so the SayLine / Say elements are simply left out.
// Facts, figures and sources are exactly the ones in the English text.

const nothing = <></>;

export const vi: Dict = {
  lang: "vi" as Lang,

  meta: {
    title: "Tranh Đông Hồ — Đông Hồ Folk Prints",
    description:
      "Giới thiệu có minh hoạ về tranh khắc gỗ Đông Hồ, dòng tranh dân gian của Bắc Ninh, Việt Nam: giấy điệp, ván khắc, màu thiên nhiên và những gì còn lại của nghề.",
    siteName: "Tranh Đông Hồ",
    keywords: [
      "tranh Đông Hồ",
      "tranh dân gian",
      "tranh khắc gỗ",
      "Bắc Ninh",
      "giấy điệp",
      "tranh Tết",
      "văn hoá Việt Nam",
    ],
    ogAlt: "Chú gà in bốn màu và nét đen trên giấy điệp",
  },

  loader: { label: "Đang in trang…" },

  switcher: { aria: "Ngôn ngữ", en: "EN", vi: "VI", enTitle: "English", viTitle: "Tiếng Việt" },

  brand: { aria: "Tranh Đông Hồ, về đầu trang", a: "Tranh", b: "Đông Hồ", sub: "Đông Hồ Prints" },

  nav: {
    aria: "Các phần",
    items: {
      top: "Mở đầu",
      make: "Cách làm",
      paper: "Giấy điệp",
      colour: "Màu",
      press: "In tranh",
      read: "Đọc tranh",
      market: "Chợ tranh",
      remain: "Còn lại",
      end: "Lời kết",
    },
  },

  art: {
    pig: "Tranh khắc gỗ Lợn âm dương",
    rooster: "Tranh khắc gỗ Gà đại cát",
    block: "Một tấm ván khắc gỗ bức Gà đại cát, đã tra mực. Hình được khắc ngược chiều như khi cắt vào gỗ.",
  },

  hero: {
    pig: <>Lợn âm dương</>,
    rooster: <>Gà đại cát</>,
    title: (
      <>
        <em className="redblock">Tranh</em>
        <em className="redblock">Đông Hồ</em>
      </>
    ),
    subtitle: <>Tranh dân gian khắc gỗ làng Đông Hồ, Bắc Ninh, Việt Nam</>,
    lead: "Năm màu từ vỏ sò, đá, lá và hoa, in lên giấy lấp lánh, mỗi lần một ván gỗ.",
    cue: "Xem tranh được làm thế nào",
  },

  paper: {
    eyebrow: "Giấy điệp",
    title: (
      <>
        Vì sao là <em>giấy điệp</em>?
      </>
    ),
    titleSay: nothing,
    reasons: [
      {
        h: "Nền của tranh không phải giấy trắng.",
        p: (
          <>
            Giấy dó, làm từ vỏ cây dó, được quét hết lớp này đến lớp khác bột vỏ sò điệp trộn với hồ nếp. Mặt giấy vì thế
            cứng, lấp lánh nhẹ và còn nguyên những đường vân của chiếc chổi quét.
          </>
        ),
      },
      {
        h: "Vỏ sò bắt sáng, nên màu in lên trên như sáng bừng lên.",
        p: (
          <>
            Mỗi màu có một ván gỗ riêng và được in thẳng lên nền giấy này, ván nét đen in sau cùng. Bề mặt lấp lánh cho
            những mảng màu phẳng một chiều sâu mà giấy thường không có.
          </>
        ),
      },
      {
        h: "Màu nào cũng lấy từ thiên nhiên.",
        p: <>Một số nguyên liệu lấy ngay gần làng. Vỏ sò thì không: chúng đến từ biển và được mang về.</>,
      },
    ],
    pigments: [
      { name: "Đen", from: <>lá tre đốt thành tro</> },
      { name: "Đỏ", from: <>sỏi son, một loại đá màu đỏ mềm</> },
      { name: "Vàng", from: <>hoa hòe</> },
      { name: "Xanh", from: <>lá chàm</> },
      { name: "Trắng", from: <>chính bột vỏ sò</> },
    ],
    equation: {
      aria: "Giấy dó cộng bột điệp cộng hồ nếp thành giấy điệp",
      parts: [
        { label: "Nền", name: "Giấy dó" },
        { label: "Bột vỏ sò", name: "Điệp" },
        { label: "Chất kết dính", name: "Hồ nếp" },
      ],
      result: { label: "Quét nhiều lớp mỏng", name: "Giấy điệp" },
    },
    shimmer: {
      aria: "Một tờ giấy chia làm hai nửa. Nửa trái là giấy dó trơn, trông phẳng và mờ. Nửa phải được quét bột vỏ sò nên lấp lánh dưới ánh sáng. Cùng một bức tranh nhỏ chạy vắt qua cả hai nửa.",
      plain: { name: "Giấy dó trơn", note: "Phẳng và mờ" },
      coated: { name: "Giấy quét điệp", note: "Bắt sáng" },
      hintHover: "Rê chuột lên tờ giấy",
      hintTouch: "Kéo ngón tay trên tờ giấy",
    },
  },

  press: {
    eyebrow: "In tranh",
    title: (
      <>
        In một <em>bức tranh</em>
      </>
    ),
    lede: "Giờ giấy đã sẵn và màu đã chọn xong. Mỗi màu một ván gỗ. Ván màu in trước, ván nét đen luôn in sau cùng. Bấm lần lượt từng ván để xem con gà hiện ra, rồi thử bật chế độ lệch ván.",
    app: {
      trayAria: "Các ván khắc",
      trayLabel: "Các ván khắc",
      reset: "↺ In lại từ đầu",
      locked: "In sau cùng, khi các màu đã lên đủ",
      sheetAria: "Bức Gà đại cát đang được in: đã ép {n} trên {total} ván",
      step: "Bước",
      slipTitle: "Lệch ván",
      slipHint: "Thợ in canh từng ván bằng mắt, nên chỉ lệch một chút cũng thấy ngay",
      printAll: "▶ Tự in cả bức",
      printing: "Đang in…",
      again: "↺ In lại",
      intro: {
        title: "Một tờ giấy điệp",
        text: "Tranh nào cũng bắt đầu từ một tờ giấy điệp trắng. Ép từng ván một và xem con gà hiện ra. Ván nét đen luôn in sau cùng.",
      },
      blocks: {
        yellow: {
          name: "Ván vàng",
          source: "Hoa hòe",
          title: "Vàng",
          text: "Màu vàng lấy từ hoa hòe, rang trên chảo rồi đun với nước. Ván này in thân, cổ và đầu con gà, một chiếc lông đuôi và những bông hoa nhỏ trên mặt đất.",
        },
        red: {
          name: "Ván đỏ",
          source: "Sỏi son",
          title: "Đỏ",
          text: "Màu đỏ làm từ sỏi son, một loại đá màu đỏ mềm. Nó tô mặt trời, mào và yếm gà và hai chiếc lông đuôi. Trong tranh dân gian Việt Nam, màu đỏ tượng trưng cho may mắn và sung túc.",
        },
        green: {
          name: "Ván xanh lá",
          source: "Gỉ đồng hoặc lá chàm",
          title: "Xanh lá",
          text: "Màu xanh lấy từ gỉ đồng hoặc lá chàm, tuỳ người thợ. Ván này in một chiếc lông đuôi, chiếc lá nhỏ trên cánh và cỏ dọc mặt đất.",
        },
        indigo: {
          name: "Ván chàm",
          source: "Lá chàm",
          title: "Xanh chàm",
          text: "Màu xanh thẫm lấy từ lá chàm. Ở đây nó chỉ dùng cho một chiếc lông đuôi, một điểm tối giữa màu đỏ và xanh lá.",
        },
        key: {
          name: "Ván nét đen",
          source: "Lá tre đốt thành tro",
          title: "Nét đen",
          text: "Màu đen là tro của lá tre đốt. Ván này mang mọi đường nét và chi tiết, nên được in sau cùng, đè các nét lên trên tất cả các màu. Đến đây bức tranh đã hoàn thành.",
        },
      },
    },
  },

  read: {
    eyebrow: "Đọc một bức tranh",
    title: (
      <>
        Đọc <em>Đám cưới chuột</em>
      </>
    ),
    titleVi: nothing,
    lede: "Một đám rước nhỏ mà nói chuyện lớn. Bấm các con số trên tranh, hoặc dùng mũi tên, để đọc từng chi tiết.",
    reader: {
      scrollAria: "Bức tranh. Trên màn hình nhỏ có thể cuộn ngang.",
      svgAria:
        "Tranh minh hoạ theo bức tranh dân gian Đám cưới chuột: đám rước của họ nhà chuột, chú rể cưỡi ngựa hồng, cô dâu ngồi kiệu, có nhạc công và họ hàng, đang dâng một con cá chép và một con chim câu cho con mèo già dữ tợn ở bên phải.",
      detailAria: "Chi tiết {n} trên {total}: {title}",
      prev: "Chi tiết trước",
      next: "Chi tiết sau",
      note: "Đây là một cách hiểu phổ biến, và bức vẽ phía trên là minh hoạ theo tranh chứ không phải bản sao. Tranh dân gian thường có nhiều lớp nghĩa: cùng một đám cưới cũng có thể đọc là lời cầu chúc hôn nhân hạnh phúc, đông con nhiều cháu.",
      details: [
        {
          title: "Họ hàng nhà chuột",
          text: "Đông đảo họ hàng nhà chuột theo hầu đám cưới. Hãy nhìn nét mặt họ: ai cũng ngó bên này, nhìn bên kia, như sợ có người dòm ngó. Những giọt bên đầu là mồ hôi.",
        },
        {
          title: "Kiệu cô dâu",
          text: "Cô dâu chuột ngồi trong kiệu do hai người khiêng đội mũ quan, đi theo sau chú rể như một cô dâu có phẩm hàm.",
        },
        {
          title: "Chú rể cưỡi ngựa hồng",
          text: "Đi đầu đám rước là chú rể chuột cưỡi ngựa hồng. Ngựa, mũ và áo quần đều mượn từ những đám cưới lớn của nhà giàu.",
        },
        {
          title: "Cờ, kèn và trống",
          text: "Kèn trống, cờ quạt, mũ mão, cân đai: họ nhà chuột bày đủ vẻ long trọng của một đám cưới ra đám cưới, dù chỉ là chuột.",
        },
        {
          title: "Lễ vật",
          text: "Một chú chuột bước ra, dâng cá chép và chim câu làm lễ cho mèo. Nộp lễ xong thì đám cưới mới yên ổn diễn ra.",
        },
        {
          title: "Con mèo già",
          text: "Ở góc bên phải là một con mèo già, hung tợn như đang gầm gừ. Theo nghĩa châm biếm, mèo là tầng lớp thống trị và quan lại, béo ra nhờ của đút lót, còn chuột là dân thường phải nộp lễ để được yên thân.",
        },
      ],
    },
  },

  market: {
    eyebrow: "Thêm nhiều bức tranh",
    title: (
      <>
        Một phiên <em>chợ tranh</em>
      </>
    ),
    titleVi: nothing,
    lede: "Thợ làng Đông Hồ khắc nhiều hơn một con gà, một con lợn và một đám cưới chuột. Tranh của họ chúc may mắn, thành đạt, đông con nhiều cháu, và vẽ cả cuộc sống làng quê, kể cả chuyện cãi vã. Đây là sáu bức nữa.",
    pairNote: "Vinh hoa và Phú quý được làm thành một cặp.",
    credit: "Ảnh: phạm vi công cộng, qua Wikimedia Commons:",
    items: [
      {
        name: <>Hứng dừa</>,
        alt: "Một chàng trai trên cây dừa và một cô gái đang giương váy, hai đứa trẻ ở gốc cây.",
        text: "Chàng trai khoẻ mạnh hái liền hai trái dừa đưa xuống cho cô gái đang vén váy hứng lấy. Đó là bức tranh về hạnh phúc đôi lứa.",
      },
      {
        name: <>Đánh ghen</>,
        alt: "Một người phụ nữ giơ kéo, một người đàn ông che chở cho người phụ nữ khác, và một đứa trẻ chắp tay.",
        text: "Người vợ ghen giơ kéo, trong khi anh chồng che cho người phụ nữ kia và đứa con chắp tay van xin cha mẹ thôi đi. Một cảnh dí dỏm mà có bài học: việc cha mẹ làm sẽ hình thành tính cách của con.",
      },
      {
        name: <>Mục đồng đọc sách</>,
        alt: "Một cậu bé đứng trên lưng con trâu xanh, đang đọc một tờ giấy.",
        text: "Cậu bé chăn trâu vừa dắt trâu vừa đọc sách: lời chúc cho trẻ nhỏ chăm chỉ học hành.",
      },
      {
        name: <>Vinh hoa</>,
        alt: "Một em bé ôm con gà trống lớn, có hoa phía sau.",
        text: "Em bé ôm con gà trống. Bức tranh chúc vinh hiển cùng những đức nhân, nghĩa, tín, dũng, cả văn lẫn võ.",
      },
      {
        name: <>Phú quý</>,
        alt: "Một em bé ôm con vịt vàng bên bông sen.",
        text: "Em bé ôm con vịt bên bông sen, loài hoa của sự thanh khiết. Cùng Vinh hoa, bức tranh chúc gia đình giàu có, đông con nhiều cháu, có cả trai lẫn gái.",
      },
      {
        name: <>Nhân nghĩa</>,
        alt: "Một cậu bé ngồi ôm con cóc lớn.",
        text: "Em bé ôm con cóc. Tặng cho trẻ nhỏ, bức tranh chúc các cháu lớn lên có được cái nhân, cái nghĩa, và học hành hiển đạt.",
      },
    ],
    compare: {
      h: <>Đừng nhầm với tranh Hàng Trống</>,
      intro: "Người ngoài hay nhầm tranh Đông Hồ với tranh dân gian phố Hàng Trống của Hà Nội. Thoạt nhìn chúng giống nhau, nhưng cách làm khác nhau. Một cách nhận nhanh là nhìn màu: màu phẳng từng mảng, hay màu tô bằng cọ có đậm nhạt.",
      tabsAria: "So sánh theo",
      cols: { a: "Đông Hồ", b: "Hàng Trống" },
      rows: [
        {
          label: "Ở đâu",
          a: "Làng Đông Hồ, tỉnh Bắc Ninh.",
          b: "Hà Nội xưa, quanh các phố Hàng Bồ, Hàng Nón và Hàng Trống.",
        },
        {
          label: "Cách làm",
          a: "In từ ván khắc gỗ: mỗi màu một ván, và một ván cho nét đen.",
          b: "Chỉ phần nét được in từ một ván. Màu do tay tô, nên tờ nào cũng hơi khác tờ nào.",
        },
        {
          label: "Vẻ ngoài",
          a: "Những mảng màu phẳng trên giấy điệp, mỗi mảng do một ván ép xuống.",
          b: "Đậm nhạt mềm mại do nét cọ, cho nhân vật có chiều sâu.",
        },
        { label: "Khổ và giá", a: "Khổ nhỏ, giá rẻ.", b: "Khổ lớn hơn, giá cao hơn nhiều." },
        {
          label: "Dùng để làm gì",
          a: "Dán trên vách và cửa dịp năm mới, sau một thời gian thì bóc bỏ.",
          b: "Thờ cúng và dịp Tết, trong đề tài có cả những hình tượng thờ như Ngũ hổ.",
        },
      ],
      aCaption: <>Đông Hồ: Vinh hoa</>,
      bCaption: <>Hàng Trống: Ngũ hổ</>,
      aAlt: "Một bức tranh Đông Hồ: em bé ôm con gà trống, màu phẳng và nét đen.",
      bAlt: "Một bức tranh Hàng Trống vẽ năm con hổ, tô đậm nhạt mềm giữa những đám mây cuộn.",
      bCredit: "Tranh Hàng Trống: ảnh của Daderot, Bảo tàng Mỹ thuật Việt Nam, thuộc phạm vi công cộng",
    },
  },

  colour: {
    eyebrow: "Màu từ thiên nhiên",
    title: (
      <>
        Màu từ <em>thiên nhiên</em>
      </>
    ),
    lede: "Mỗi màu trên tranh đến từ một thứ có thật: một bông hoa, một chiếc lá, một viên đá, một chiếc vỏ sò. Có màu có hơn một nguồn. Hãy chọn nguồn của từng màu và xem con lợn đổi sắc.",
    mixer: {
      groupAria: "Nguồn của màu {name}",
      howSummary: "Cách làm",
      previewAria: "Bức Lợn âm dương trong những màu bạn đã chọn",
      note: "Mọi màu đều được hoà với một ít bột nếp trước khi in. Bấm vào tên một màu để chỉ xem ván màu đó trên tranh.",
      caption:
        "Màu đỏ từ {red}, màu xanh từ {green}. Sắc màu chỉ là gần đúng: thợ in tự pha màu bằng tay, và mỗi nhà một công thức.",
      white: { name: "Trắng", from: "Chính tờ giấy, được quét bột vỏ sò" },
      rows: {
        yellow: {
          name: "Vàng",
          how: (
            <>
              Hoa hòe, mỗi bông chỉ nhỏ bằng hạt gạo, được rang trên chảo đến khi ngả vàng nâu rồi đun với nước. Nước vàng
              được lọc, để lắng trong một chiếc lọ đất vài năm rồi mới dùng.
            </>
          ),
        },
        red: {
          name: "Đỏ",
          how: (
            <>
              Màu đỏ lấy từ sỏi son, một loại đá đỏ mềm, hoặc từ gỗ vang. Gỗ vang cho màu đỏ sẫm và lạnh hơn. Trong tranh dân
              gian Việt Nam, màu đỏ tượng trưng cho may mắn và sung túc.
            </>
          ),
        },
        green: {
          name: "Xanh lá",
          how: (
            <>
              Những màu xanh của tranh lấy từ lá chàm hoặc từ gỉ đồng. Thợ in cũng pha các màu cơ bản với nhau để có thêm
              màu khác, mỗi người theo một công thức riêng.
            </>
          ),
        },
        indigo: {
          name: "Xanh chàm",
          how: (
            <>
              Lá chàm lấy từ các vùng núi phía bắc, nơi người ta dùng nó để nhuộm vải. Cũng như màu vàng, nước chàm được ngâm
              trong lọ đất vài năm rồi lọc.
            </>
          ),
        },
        black: {
          name: "Đen",
          how: (
            <>
              Lá tre rụng được đốt thành tro, rưới nước rồi để trong một chiếc chum tráng men chứa nửa nước. Sau một năm trở
              lên, người ta lọc lấy nước rồi trộn với hồ nếp. Có thợ dùng than gỗ xoan thay thế.
            </>
          ),
        },
      },
      options: {
        "hoa-hoe": { name: "Hoa hòe", label: <>Hoa hòe</> },
        "soi-son": { name: "Sỏi son", label: <>Sỏi son (đá đỏ)</> },
        "go-vang": { name: "Gỗ vang", label: <>Gỗ vang</> },
        "indigo-leaf": { name: "Lá chàm", label: <>Lá chàm</> },
        copper: { name: "Gỉ đồng", label: <>Gỉ đồng</> },
        indigo: { name: "Lá chàm", label: <>Lá chàm</> },
        bamboo: { name: "Lá tre đốt", label: <>Than lá tre</> },
      },
    },
  },

  remain: {
    eyebrow: "Còn lại",
    title: (
      <>
        Còn lại <em>bao nhiêu</em>
      </>
    ),
    titleVi: nothing,
    lede: "Mỗi bức tranh cần cả một bộ ván khắc. Ván còn thì tranh còn, người làm cuối cùng dừng tay thì bức tranh chỉ còn trong trí nhớ.",
    thennow: {
      aria: "Một trăm tám mươi ô vuông nhỏ, mỗi ô là một hộ từng làm tranh. Chỉ ba ô còn đỏ đậm, những ô còn lại mờ dần.",
      thenBig: "~180",
      thenText: "hộ từng làm tranh trong làng",
      nowBig: "3",
      nowText: "gia đình còn làm được ngày nay: khoảng 30 người, bốn thế hệ",
      note: "Số liệu từ các báo cáo thực hiện khi lập hồ sơ gửi UNESCO. Danh sách nguồn ở cuối trang.",
    },
    oldblocks: {
      h: "Những ván khắc hàng trăm năm tuổi",
      p: "Một bài báo hồi tháng 2/2026 cho biết cả làng chỉ còn một gia đình và một nhà khác còn giữ những ván khắc cổ, có tấm đã hàng trăm năm tuổi. Mỗi tấm là một vật gia truyền, trao lại từ đời này sang đời khác.",
    },
    timelineAria: "Dòng thời gian",
    events: [
      { when: "Khoảng 500 năm trước", what: "Tranh được làm lần đầu ở làng Đông Hồ, Thuận Thành, Bắc Ninh." },
      { when: "Thập niên 1980 và 1990", what: "Thời khó khăn: nhiều gia đình chuyển sang làm hàng mã để kiếm sống." },
      { when: "2014", what: "Bắc Ninh phê duyệt kế hoạch bảo vệ nghề, lúc đầu đến 2020, sau kéo dài đến 2030." },
      {
        when: "9/12/2025",
        what: "UNESCO đưa nghề vào danh sách di sản cần bảo vệ khẩn cấp, là di sản thứ 17 của Việt Nam.",
      },
      {
        when: "Tháng 8/2026",
        what: "Bắc Ninh công bố dự án đưa nghề ra khỏi danh sách đó: 5,24 triệu USD, thực hiện đến 2035, dự kiến hoàn thành năm 2040.",
      },
    ],
    faded: {
      h: "Vì sao nghề mai một",
      items: [
        "Đơn hàng ít và thất thường, nên chỉ riêng nghề này không nuôi nổi một gia đình.",
        "Nhiều gia đình chuyển sang làm hàng mã, và những người muốn quay lại thường không đủ điều kiện.",
        "Hàng nhái, tranh công nghiệp sản xuất hàng loạt và sản phẩm do AI làm ra giờ đang cạnh tranh với tranh thật.",
      ],
    },
    done: {
      h: "Những việc đang làm",
      items: [
        "Kế hoạch bảo vệ của UNESCO: mở lớp đào tạo, kiểm kê nghề, phát triển mẫu mới, mở rộng thị trường, dễ tiếp cận nguyên liệu hơn và đưa vào dạy ở trường học.",
        "Dự án của Bắc Ninh: nâng cấp trung tâm bảo tồn, bảo quản ván khắc bằng phương pháp khoa học, số hoá tư liệu và xây không gian trưng bày.",
        "Mục tiêu đến năm 2035, mọi nghệ nhân góp sức giữ và truyền nghề đều được ghi nhận và hỗ trợ.",
      ],
    },
  },

  make: {
    eyebrow: "Cách làm tranh",
    title: (
      <>
        Làm bằng tay, <em>phơi bằng nắng</em>
      </>
    ),
    lede: "Một bức tranh không làm xong trong một buổi chiều. Đó là chuỗi những việc nhỏ, và gần như sau việc nào tờ giấy cũng phải chờ nắng. Bấm qua từng bước để theo một tờ giấy từ nét vẽ đầu tiên đến bức tranh hoàn chỉnh.",
    flow: {
      steps: [
        {
          title: "Vẽ mẫu",
          text: "Mọi thứ bắt đầu từ một bản vẽ: hình được vẽ bằng mực trên giấy. Vẽ mẫu và khắc ván là những công đoạn phải mất nhiều năm mới thành thạo.",
        },
        {
          title: "Khắc ván",
          text: "Bản vẽ được chuyển lên gỗ và khắc tay: một ván cho mỗi màu, và một ván cho nét đen.",
        },
        {
          title: "Quét hồ",
          text: "Tờ giấy dó được quét một lớp hồ nếp mỏng, rồi đem phơi nắng cho hồ khô.",
        },
        {
          title: "Quét điệp",
          text: "Một lớp bột vỏ sò được quét lên trên, và tờ giấy lại được phơi nắng thêm một lần. Giờ nó là giấy điệp, sẵn sàng để in.",
        },
        {
          title: "Chuẩn bị màu",
          text: "Màu lấy từ đá, lá, hoa và tro. Có loại để lắng một năm hoặc hơn trước khi dùng.",
        },
        {
          title: "In màu vàng",
          text: "Các màu được in lần lượt, theo thứ tự do người thợ định. Ở đây màu vàng đi đầu: thân, cổ và đầu gà, và một chiếc lông đuôi. In xong lần nào cũng phải phơi, nên năm màu là năm lần in.",
        },
        {
          title: "In màu đỏ",
          text: "Đến màu đỏ: mặt trời, mào và yếm gà, và hai chiếc lông đuôi. Rồi tờ giấy lại phơi nắng.",
        },
        {
          title: "In màu xanh lá",
          text: "Tiếp theo là màu xanh lá: một chiếc lông đuôi, chiếc lá nhỏ trên cánh và cỏ dọc mặt đất. Lại phơi.",
        },
        {
          title: "In màu xanh chàm",
          text: "Màu cuối cùng là xanh chàm thẫm: chỉ một chiếc lông đuôi. Tờ giấy phơi thêm một lần nữa, và các màu đã lên đủ.",
        },
        {
          title: "Hoàn thiện bằng nét đen",
          text: "Ván nét đen được in sau cùng, đè lên mọi màu. Phơi lần cuối, và bức tranh sẵn sàng để treo.",
        },
      ],
      phases: { getting: "Chuẩn bị", printing: "In tranh" },
      season: "Ở làng, mùa làm tranh của cả năm bắt đầu từ tháng 7 và tháng 8.",
      panelAria: "Tờ giấy đang ở bước nào",
      sheetAria: "Tờ giấy ở bước {n}: {title}",
      sunsAria: "Đã phơi nắng {n} trên {total} lần",
      suncap: "Số lần phơi nắng:",
      back: "← Trước",
      next: "Sau →",
      stepOf: "Bước {n} trên {total}",
    },
  },

  end: {
    eyebrow: "Lời kết",
    l1: "Vẫn còn in,",
    l2: "từng ván",
    l3: "một lần.",
    text: "Một tờ giấy, vài ván gỗ, và những màu từ vỏ sò, đá, lá và hoa: một bức tranh Đông Hồ chỉ cần có thế. Ở Bắc Ninh giờ chỉ còn vài gia đình biết làm.",
    btn1: "In thêm một bức",
    btn2: "Về đầu trang ↑",
  },

  footer: {
    pron: "",
    sources: "Nguồn:",
    made: "Thực hiện bởi",
    labels: [
      "Vietnamnet: tranh Đông Hồ (tiếng Anh)",
      "Vietnam News: danh sách bảo vệ khẩn cấp của UNESCO (tiếng Anh)",
      "Things Asian: tranh Tết truyền thống (tiếng Anh)",
      "UNESCO: nghề làm tranh Đông Hồ (tiếng Anh)",
      "Báo Đầu tư: một nghệ nhân kể về cách làm",
      "Báo Văn hóa: hồ sơ gửi UNESCO",
      "Mekong ASEAN: hành trình giữ nghề",
      "Vietnam News: dự án của Bắc Ninh đến 2035 (tiếng Anh)",
      "Doanh nghiệp & Hội nhập: tranh Đông Hồ",
      "Tuổi Trẻ: thăm làng tranh Đông Hồ",
      "VTC News: Đám cưới chuột",
      "Báo Pháp luật: tranh Hàng Trống",
      "Nhân Dân: số phận những dòng tranh dân gian",
      "Toplist: tranh Đông Hồ dịp Tết",
      "Giáo dục & Thời đại: hồn Tết xưa trong tranh Đông Hồ",
      "VinWonders: tranh làng Hồ, dòng tranh dân gian",
    ],
  },
};
