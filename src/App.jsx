import React, { useState, useEffect, useRef } from 'react';
import {
  Music, History, BookOpen, Users, ShieldAlert, Layers, Compass,
  ChevronDown, Menu, X, Star, Sparkles, Award, Flame
} from 'lucide-react';
import bronzeDrum from './assets/—Pngtree—viet nam dongshan bronze drum_6690587.png';
import imgPhungHa from './assets/phung-ha.png';
import imgNamChau from './assets/nam-chau.png';
import imgLeThuyMinhVuong from './assets/le-thuy-minh-vuong.png';
import imgBachTuyet from './assets/bach-tuyet.png';
import imgVuLinh from './assets/vu-linh.png';
import imgThanhNga from './assets/thanh-nga.png';
import imgTrangPhuc1 from './assets/trang-phuc1.png';
import imgTrangPhuc2 from './assets/trang-phuc2.png';
import imgHinhNenBanner from './assets/hinhnenbanner.jpg';
import nhacNen from './assets/nhacnen.mp3';

// ==========================================
// 1. MOCK DATA - NỘI DUNG BẢO TÀNG
// ==========================================
const MUSEUM_DATA = {
  hero: {
    title: "Nghệ thuật Sân khấu Cải lương",
    subtitle: "Từ Truyền Thống Đến Hiện Đại",

    introAnswer: "Vào thời kỳ hoàng kim của thập niên 1960, Cải lương chính là 'ông hoàng phòng vé', là văn hóa đại chúng đỉnh cao của người Việt Nam."
  },
  origins: {
    title: "Mở Đầu & Nguồn Gốc Hình Thành",
    part: "Phần 1",
    definition: "Theo các tài liệu nghiên cứu của Viện Văn hóa Nghệ thuật quốc gia Việt Nam, 'Cải lương' có nghĩa là cải biến, cải cách để trở nên tốt đẹp hơn. Điều này được đúc kết rõ nhất qua cặp câu đối nổi tiếng tại rạp hát Tập Ích Ban xưa:",
    couplet: {
      line1: "Cải cách hát ca theo tiến bộ",
      line2: "Lương truyền tuồng tích sánh văn minh"
    },
    source: "Về nguồn gốc, Cải lương là đứa con tinh thần của vùng đất Nam Bộ vào đầu thế kỷ XX. Nó không ra đời từ hư không, mà được tiến hóa trực tiếp từ nghệ thuật Đờn ca tài tử và hình thức Ca ra bộ (vừa ca vừa ướm bộ tịch). Sự xuất hiện của Cải lương phản ánh tư duy đổi mới, phóng khoáng của con người phương Nam thời bấy giờ.",
    tags: ["Đờn ca tài tử", "Ca ra bộ", "Nam Bộ TK XX", "Cải biến"]
  },
  history: {
    title: "Tiến Trình Lịch Sử Đầy Thăng Trầm",
    part: "Phần 2",
    timeline: [
      {
        period: "Giai đoạn định hình",
        year: "1918 – 1930",
        color: "#cda052",
        desc: "Đây là thời kỳ các gánh hát đầu tiên ra đời, tiêu biểu là gánh Thầy Thận hay gánh Năm Tú ở Mỹ Tho. Những gánh hát này đặt nền móng cho nghệ thuật Cải lương hiện đại.",
        icon: "🌱"
      },
      {
        period: "Giai đoạn hoàng kim",
        year: "Thập niên 1960 – 1970",
        color: "#f3e1c3",
        desc: "Đây là thời kỳ đỉnh cao của Cải lương. Sài Gòn lúc bấy giờ có hàng chục đại bang như Thanh Minh - Thanh Nga, Dạ Lý Hương... Các rạp hát luôn chật kín khán giả, sản sinh ra 'thế hệ vàng' như NSND Phùng Há, Út Trà Ôn, Thanh Nga...",
        icon: "👑"
      },
      {
        period: "Giai đoạn chuyển mình",
        year: "Sau 1975 đến nay",
        color: "#a39788",
        desc: "Khi xã hội bước vào thời kỳ công nghệ số, Cải lương đối mặt với sự cạnh tranh lớn. Tuy nhiên, nó chưa bao giờ biến mất mà đang chọn cách chuyển mình, len lỏi vào các không gian mạng xã hội và các dự án sáng tạo của người trẻ để thích nghi với thời đại.",
        icon: "🔄"
      }
    ]
  },
  features: {
    title: "Đặc Trưng Nghệ Thuật & Nhạc Cụ",
    part: "Phần 2 (tiếp theo)",
    overview: "Cải lương là sự giao thoa độc đáo giữa nghệ thuật Đờn ca tài tử Nam Bộ, dân ca, tuồng cổ và ảnh hưởng của kịch nói phương Tây (đặc biệt là kịch Pháp).",
    categories: [
      {
        name: "Âm nhạc và Bài ca",
        subtitle: "Linh hồn của Cải lương",
        icon: "🎵",
        details: [
          "Bản Dạ cổ hoài lang của nhạc sĩ Cao Văn Lầu là tiền thân của bản Vọng cổ — được xem là 'bài ca vua', là nhịp đập trái tim của mọi vở Cải lương.",
          "Hệ thống bài bản phong phú sử dụng các bài bản của Đờn ca tài tử (Nam, Bắc, Oán, Ngự), các điệu Lý và dân ca Nam Bộ.",
          "Sự linh hoạt (Tân cổ giao duyên): Từ giữa thế kỷ 20, các soạn giả đã đưa Tân nhạc vào xen kẽ với bài cổ."
        ]
      },
      {
        name: "Phong cách diễn xuất",
        subtitle: "Tính chân thực và Bi cảm",
        icon: "🎭",
        details: [
          "Chân thực, gần gũi: Chú trọng tính chân thực (ca ra bộ), gần với đời sống thực tế và kịch nói hơn Hát Bội mang tính ước lệ cao.",
          "Nặng về 'Bi' và 'Tình': Đặc biệt xuất sắc trong việc khai thác chiều sâu tâm lý nhân vật, những thân phận éo le, tình yêu trắc trở, tình mẫu tử/phụ tử."
        ]
      },
      {
        name: "Kịch bản và Đề tài",
        subtitle: "Tính đa dạng",
        icon: "📜",
        details: [
          "Tuồng Xã hội: Phản ánh cuộc sống đương đại, mâu thuẫn gia đình, giai cấp (Nửa đời hương phấn, Tô Ánh Nguyệt, Đời cô Lựu).",
          "Tuồng Dã sử / Lịch sử: Tôn vinh anh hùng dân tộc (Tiếng trống Mê Linh, Thái hậu Dương Vân Nga).",
          "Tuồng Hương xa / Kiếm hiệp: Phóng tác từ tiểu thuyết ngoại quốc với trang phục lộng lẫy, cốt truyện ly kỳ (Máu nhuộm sân chùa)."
        ]
      },
      {
        name: "Sân khấu và Phục trang",
        subtitle: "Tính tả thực và sắc màu",
        icon: "🏛️",
        details: [
          "Sân khấu tả thực: Chịu ảnh hưởng của kịch phương Tây, sử dụng phông màn vẽ cảnh thật (nhà cửa, núi non, sông nước) và đạo cụ thật (bàn ghế, xe cộ).",
          "Phục trang biến hóa: Tuồng xã hội mặc áo dài, âu phục; tuồng lịch sử mặc áo mão cung đình; tuồng hương xa mặc trang phục rực rỡ, đính kim sa lấp lánh."
        ]
      }
    ]
  },
  instruments: [
    {
      id: "dan-kim",
      name: "Đàn Kìm",
      alias: "Đàn Nguyệt",
      sketchfabId: "f16f0e023ee941c5a06b5dc9da720183",
      emoji: "🎸",
      desc: "Được mệnh danh là 'thầy đờn' (nhạc cụ chỉ huy) trong dàn nhạc. Tiếng đàn kìm tròn vành, rõ chữ, dẫn dắt nhịp độ cho cả dàn nhạc và ca sĩ.",
      features: ["Nhạc cụ chỉ huy", "2 dây tơ lụa", "Hộp cộng hưởng hình trăng rằm"]
    },
    {
      id: "dan-tranh",
      name: "Đàn Tranh",
      alias: "Guzheng Việt Nam",
      sketchfabId: "8e21efd23ef84a32b8e7058cfb222941",
      emoji: "🎼",
      desc: "Với 16 dây, tiếng đàn tranh trong trẻo, réo rắt, như tiếng suối chảy, tạo nên sự mềm mại, mượt mà cho bài ca, thắm đượm hồn dân tộc.",
      features: ["16 dây kim loại", "Âm thanh trong trẻo", "Kỹ thuật rung rẩy tinh tế"]
    },
    {
      id: "dan-bau",
      name: "Đàn Bầu",
      alias: "Độc huyền cầm",
      sketchfabId: "93607097be3a474cba22f9df374a52fb",
      emoji: "🎶",
      desc: "Với chỉ một dây nhưng âm vực rộng, tiếng đàn bầu sâu lắng, mang đậm hồn cốt dân tộc, độc đáo và không nơi nào trên thế giới có.",
      features: ["1 dây duy nhất", "Âm vực 3 quãng tám", "Âm sắc vô cùng đặc biệt"]
    }
  ],
  classics: {
    title: "Tác Phẩm Kinh Điển & Chân Dung Nghệ Sĩ",
    part: "Phần 3",
    plays: {
      social: [
        { title: "Đời cô Lựu", author: "Soạn giả Trần Hữu Trang" },
        { title: "Tô Ánh Nguyệt", author: "Soạn giả Trần Hữu Trang" },
        { title: "Lan và Điệp", author: "Truyện ngắn lãng mạn" }
      ],
      ancient: [
        { title: "Phụng Nghi Đình", author: "Tuồng cổ kinh điển" },
        { title: "Mộc Quế Anh phụng vua", author: "Tích xưa" },
        { title: "Bạch Viên Tôn Các", author: "Huyền thoại dân gian" }
      ]
    },
    artists: [
      {
        name: "NSND Phùng Há & NSND Năm Châu",
        title: "Người đặt nền móng",
        role: "Những người đặt nền móng, xây dựng phong cách diễn xuất chuẩn mực cho nền Cải lương Việt Nam.",
        badge: "Khai sáng",
        image: [imgPhungHa, imgNamChau],
        bio: "NSND Phùng Há (1911–2009) là huyền thoại sống của sân khấu Cải lương với hơn 70 năm cống hiến. Bà được UNESCO vinh danh là Nghệ nhân dân gian xuất sắc. NSND Năm Châu (1906–1978) là soạn giả, đạo diễn và diễn viên lỗi lạc, người đầu tiên đưa kịch nói phương Tây vào Cải lương, tạo nên phong cách diễn xuất chân thực, tâm lý sâu sắc.",
        notable: ["Tô Ánh Nguyệt", "Đời cô Lựu", "Thần nữ dâng hoa", "Phụng Nghi Đình"],
        awards: ["Nghệ sĩ Nhân dân", "UNESCO Nghệ nhân dân gian", "Huân chương Độc lập"]
      },
      {
        name: "NSND Lệ Thủy & NSND Minh Vương",
        title: "Cặp bài trùng huyền thoại",
        role: "'Cặp bài trùng' huyền thoại với chất giọng ngọt ngào và làn hơi dài tinh tế, để lại dấu ấn không thể xóa mờ.",
        badge: "Huyền thoại",
        image: [imgLeThuyMinhVuong],
        bio: "NSND Lệ Thủy và NSND Minh Vương là cặp song ca huyền thoại được mệnh danh là 'Đôi chim quý' của sân khấu Cải lương. Lệ Thủy sở hữu giọng ca trong trẻo, ngọt ngào đặc biệt ở âm vực cao. Minh Vương với làn hơi dài, chắc khỏe và lối diễn xuất đầy cảm xúc. Cả hai đã cùng nhau tạo nên hàng chục vở diễn bất hủ trong lòng khán giả nhiều thế hệ.",
        notable: ["Lan và Điệp", "Tô Ánh Nguyệt", "Tình mẫu tử", "Đời cô Lựu"],
        awards: ["Nghệ sĩ Nhân dân", "Giải Thanh Tâm", "Huy chương vàng Hội diễn"]
      },
      {
        name: "NSND Bạch Tuyết",
        title: "Cải lương chi bảo",
        role: "Được mệnh danh là 'Cải lương chi bảo', luôn tìm tòi, đổi mới đưa tư duy hiện đại vào truyền thống.",
        badge: "Chi Bảo",
        image: [imgBachTuyet],
        bio: "NSND Bạch Tuyết (sinh 1945) là nghệ sĩ Cải lương lỗi lạc, người đầu tiên đưa nghệ thuật Cải lương lên sân khấu quốc tế. Bà không chỉ là một nghệ sĩ biểu diễn tài năng mà còn là nhà nghiên cứu nghiêm túc về nghệ thuật truyền thống. Bà nhận học vị Tiến sĩ Nghệ thuật học tại Hungary và đã dàn dựng, lồng ghép Cải lương với kịch Shakespeare, tạo nên cách tiếp cận mới mẻ độc đáo.",
        notable: ["Thái hậu Dương Vân Nga", "Tiếng trống Mê Linh", "Hamlet - Cải lương", "Kim Vân Kiều"],
        awards: ["Nghệ sĩ Nhân dân", "Tiến sĩ Nghệ thuật học", "Giải thưởng Nhà nước"]
      },
      {
        name: "Nghệ sĩ Vũ Linh",
        title: "Ông hoàng hồ quảng",
        role: "'Ông hoàng hồ quảng' với tài năng diễn xuất linh hoạt và vũ đạo điêu luyện trên sân khấu.",
        badge: "Ông Hoàng",
        image: [imgVuLinh],
        bio: "Nghệ sĩ Vũ Linh (1952–2023) được khán giả phong danh hiệu 'Ông hoàng hồ quảng' vì tài năng xuất chúng trong các vở tuồng cổ, đặc biệt thể loại hồ quảng mang phong vị Trung Hoa. Ông nổi tiếng với vũ đạo điêu luyện, nội lực diễn xuất mạnh mẽ và khả năng hóa thân đa dạng từ vai anh hùng hào kiệt đến kẻ phản diện gian xảo.",
        notable: ["Máu nhuộm sân chùa", "Bao Công tra án Bàng Quý Phi", "San Hậu", "Mộc Quế Anh dâng cây"],
        awards: ["Nghệ sĩ Ưu tú", "Huy chương vàng Hội diễn", "Cúp nghệ sĩ được yêu thích"]
      },
      {
        name: "NSƯT Thanh Nga",
        title: "Nữ hoàng sân khấu",
        role: "Nữ hoàng sân khấu, biểu tượng của sự bi tráng và lãng mạn trong lòng người mộ điệu.",
        badge: "Nữ Hoàng",
        image: [imgThanhNga],
        bio: "NSƯT Thanh Nga (1942–1978) là ngôi sao sáng chói nhất của sân khấu Cải lương miền Nam thập niên 1960–70. Bà được mệnh danh là 'Nữ hoàng sân khấu' với nhan sắc kiều diễm, giọng ca thiết tha và lối diễn xuất đầy cảm xúc, đặc biệt xuất sắc trong vai diễn bi kịch. Cuộc đời bà kết thúc đột ngột và bi thảm vào năm 1978, để lại niềm tiếc thương vô hạn trong lòng người hâm mộ.",
        notable: ["Tiếng trống Mê Linh", "Thái hậu Dương Vân Nga", "Sân khấu về khuya", "Bóng tối và ánh sáng"],
        awards: ["Nghệ sĩ Ưu tú", "Giải Thanh Tâm", "Biểu tượng văn hóa Sài Gòn"]
      }
    ]
  },
  modern: {
    title: "Cải Lương Trong Đời Sống Hiện Đại & Thách Thức",
    part: "Phần 4",
    challenges: [
      {
        title: "Sự cạnh tranh khốc liệt",
        content: "Trong kỷ nguyên số, phải cạnh tranh với hàng loạt loại hình giải trí nhanh như phim ảnh, mạng xã hội, game online — những thứ tốn ít công sức hưởng thụ hơn.",
        icon: "⚔️"
      },
      {
        title: "Sự đứt gãy thế hệ",
        content: "Số lượng bạn trẻ theo học còn khiêm tốn, thiếu hụt kịch bản mới chất lượng cao và thiếu nghệ sĩ kế thừa đủ tâm huyết.",
        icon: "🔗"
      },
      {
        title: "Gánh nặng tài chính",
        content: "Duy trì một sân khấu chỉn chu với đầy đủ dàn nhạc, phục trang tốn kém rất nhiều kinh phí, trong khi doanh thu sụt giảm.",
        icon: "💸"
      }
    ],
    adaptation: [
      {
        title: "Ứng dụng công nghệ mới",
        content: "Sử dụng màn hình LED, thiết kế ánh sáng và âm thanh chuẩn mực hiện đại, tạo trải nghiệm thị giác đỉnh cao cho khán giả.",
        icon: "💡"
      },
      {
        title: "Cách tân nội dung",
        content: "Đưa các vấn đề xã hội đương đại, mang hơi thở thời đại vào kịch bản để gần gũi với giới trẻ hơn.",
        icon: "✍️"
      },
      {
        title: "Lan tỏa trên mạng xã hội",
        content: "Tận dụng YouTube, TikTok để tạo nên sự hồi sinh qua các bản phối Remix, Lo-fi kết hợp Vọng cổ, thu hút hàng triệu lượt xem.",
        icon: "📱"
      }
    ]
  },
  conservation: {
    title: "Giải Pháp Bảo Tồn & Ứng Dụng Công Nghệ",
    part: "Phần 5",
    preservationSolutions: [
      {
        text: "Đẩy mạnh công tác sưu tầm, nghiên cứu, nhận diện, tư liệu hóa, kiểm kê Nghệ thuật Đờn ca tài tử và tổ chức tập huấn nâng cao nhận thức cộng đồng.",
        category: "Nghiên cứu"
      },
      {
        text: "Xuất bản sách, tạp chí, CD, VCD và DVD về Nghệ thuật Đờn ca tài tử cung cấp cho các phương tiện thông tin đại chúng để tuyên truyền, quảng bá rộng rãi trong và ngoài nước.",
        category: "Truyền thông"
      },
      {
        text: "Xây dựng chính sách đãi ngộ thỏa đáng cho nghệ nhân, người thực hành, truyền dạy và học viên theo học Đờn ca tài tử.",
        category: "Chính sách"
      },
      {
        text: "Thúc đẩy công tác truyền dạy tại cộng đồng. Xây dựng các chương trình giáo dục chính thức và ngoại khóa về Nghệ thuật Đờn ca tài tử.",
        category: "Giáo dục"
      },
      {
        text: "Khuyến khích và hỗ trợ cộng đồng duy trì, phục hồi tập quán xã hội, tín ngưỡng và các lễ hội liên quan đến Nghệ thuật Đờn ca tài tử Nam Bộ.",
        category: "Cộng đồng"
      },
      {
        text: "Xây dựng cơ sở dữ liệu về Nghệ thuật Đờn ca tài tử Nam Bộ tại Viện Âm nhạc theo hình thức mở để công chúng dễ dàng tiếp cận.",
        category: "Dữ liệu"
      }
    ],
    technologySolutions: [
      {
        text: "Tận dụng công nghệ mới để quảng bá và phân phối các vở cải lương, bao gồm phát trực tuyến (streaming) và sử dụng mạng xã hội để tăng tiếp cận.",
        category: "Phát trực tuyến"
      },
      {
        text: "Tăng cường quảng bá và marketing hiệu quả trên các nền tảng số để tạo ra sự chú ý và quan tâm của công chúng, đặc biệt là thế hệ trẻ.",
        category: "Truyền thông số"
      },
      {
        text: "Sử dụng công nghệ như một công cụ lưu trữ, ghi chép và truyền dạy di sản nghệ thuật truyền thống trong đời sinh hoạt hiện đại.",
        category: "Lưu trữ số"
      }
    ]
  },
  conclusion: {
    title: "Trải Nghiệm & Kết Luận",
    part: "Phần 6",
    presenter: "Hà Tấn",
    experience: {
      title: "Trải Nghiệm Thực Tiễn: Đàn Tranh & Cải Lương",
      points: [
        {
          icon: "🎵",
          label: "Góc độ kỹ thuật & âm học",
          text: "Đàn tranh (16 dây) giữ vai trò điểm xuyết giai điệu bằng âm sắc trong trẻo, réo rắt. Kỹ thuật tay trái (nhấn, rung, mổ, vuốt) tạo ra \"vi âm\" (microtones) — chìa khóa hình thành nên độ \"mùi\" tương thích với thang âm phức tạp của Vọng cổ."
        },
        {
          icon: "🎭",
          label: "Tính tương tác trong dàn nhạc",
          text: "Theo Cố GS. Trần Văn Khê, đặc trưng xuất sắc nhất của dàn nhạc tài tử - cải lương là sự 'hòa tấu mà không đồng tấu'. Các nhạc công ngẫu hứng biến tấu dựa trên giai điệu gốc để tôn vinh và nâng đỡ giọng hát của nghệ sĩ diễn xuất."
        }
      ]
    },
    coreValues: [
      {
        number: "01",
        icon: "🔄",
        title: "Sự tiến hóa liên tục",
        text: "Đúng như định nghĩa 'Cải cách hát ca theo tiến bộ', Cải lương chưa bao giờ bảo thủ. Từ Đờn ca tài tử, tích hợp kịch nghệ Pháp, đến Việt hóa Ghi-ta phím lõm — là minh chứng lịch sử cho tư duy cởi mở và khả năng tiếp biến văn hóa xuất sắc của người Nam Bộ."
      },
      {
        number: "02",
        icon: "📜",
        title: "Kho tư liệu sống động",
        text: "Sân khấu Cải lương là hệ thống lưu trữ sống, phản ánh chân thực ngôn ngữ, bối cảnh lịch sử và tâm lý xã hội của người Việt Nam qua các thời kỳ, từ phong kiến, thuộc địa đến hiện đại."
      },
      {
        number: "03",
        icon: "💡",
        title: "Chiến lược bảo tồn lý trí",
        text: "Giải pháp cốt lõi không chỉ là kêu gọi bảo tồn cảm tính, mà cần hành động lý trí: số hóa tư liệu, ứng dụng công nghệ sân khấu hiện đại, và quan trọng nhất là đưa âm nhạc dân tộc vào hệ thống giáo dục như cách chúng ta đang thực hành."
      }
    ],
    closingQuote: "Nghệ thuật Cải lương ra đời từ nhân dân và tồn tại vì nhân dân. Việc chúng ta ngồi đây, thực hành từng nốt Đàn tranh và nghiêm túc nghiên cứu về lịch sử của nó, chính là một mắt xích thực tiễn trong việc duy trì và kéo dài tuổi thọ của di sản này.",
    finalBullets: [
      "Nghệ thuật Cải lương ra đời từ nhân dân và tồn tại vì nhân dân.",
      "Việc chúng ta học và thực hành Đàn tranh hôm nay chính là hành động thiết thực nhất để giữ gìn di sản này.",
      "Xin trân trọng cảm ơn Cô và các bạn đã lắng nghe!"
    ]
  }
};


// ==========================================
// 2. HOOK REVEAL KHI CUỘN
// ==========================================
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ==========================================
// 3. COMPONENT CON: SECTION HEADER
// ==========================================
function SectionHeader({ part, title, center = true }) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      {part && (
        <div className={`flex items-center gap-3 mb-3 ${center ? 'justify-center' : ''}`}>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#cda052] bg-[#cda052]/10 px-3 py-1 rounded-full border border-[#cda052]/30">
            {part}
          </span>
        </div>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#f3e1c3] leading-tight">
        {title}
      </h2>
      <div className={`flex items-center gap-4 mt-5 ${center ? 'justify-center' : ''}`}>
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#cda052]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#cda052]"></div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#cda052]"></div>
      </div>
    </div>
  );
}

// ==========================================
// 4. COMPONENT: ARTIST MODAL
// ==========================================
function ArtistModal({ artist, onClose }) {
  // Chỉ khóa scroll & lắng nghe Escape khi modal đang mở
  useEffect(() => {
    if (!artist) return; // guard: không làm gì khi modal đóng
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [artist, onClose]);

  if (!artist) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ animation: 'fadeIn 0.2s ease' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel - layout 2 cột: ảnh trái | nội dung phải */}
      <div
        className="relative w-full max-w-3xl bg-[#1a120b] border border-[#3a2a18] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 flex"
        style={{ animation: 'modalSlideUp 0.25s ease', maxHeight: '88vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── CỘT TRÁI: Ảnh nghệ sĩ ── */}
        {artist.image && artist.image.length > 0 && (
          <div className="relative flex-shrink-0 w-2/5 min-h-full">
            {/* Ảnh fill toàn bộ cột, object-position top để hiển thị khuôn mặt */}
            {artist.image.length === 1 ? (
              <img
                src={artist.image[0]}
                alt={artist.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            ) : (
              // Nhiều ảnh: xếp ngang (side-by-side) để thấy khuôn mặt từng người
              <div className="absolute inset-0 flex flex-row">
                {artist.image.map((src, i) => (
                  <div key={i} className="relative flex-1 h-full overflow-hidden">
                    <img
                      src={src}
                      alt={artist.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                    {/* Đường phân cách mỏng giữa 2 ảnh */}
                    {i < artist.image.length - 1 && (
                      <div className="absolute right-0 top-0 bottom-0 w-px bg-[#3a2a18]/60" />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Gradient che sang phải để blend với nội dung */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1a120b]/70" />
            {/* Gradient nhẹ từ dưới lên để che caption */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a120b]/80 to-transparent" />

            {/* Badge danh hiệu đặt góc dưới trái */}
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] bg-[#cda052]/20 text-[#cda052] border border-[#cda052]/40 px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm font-bold">
                {artist.badge}
              </span>
            </div>
          </div>
        )}

        {/* ── CỘT PHẢI: Nội dung cuộn ── */}
        <div className="flex-1 overflow-y-auto" style={{ maxHeight: '88vh' }}>
          {/* Nút đóng */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#0f0904]/80 border border-[#3a2a18] flex items-center justify-center text-[#a39788] hover:text-[#cda052] hover:border-[#cda052]/50 transition-colors backdrop-blur-sm"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-6 pt-10">
            {/* Tên & chức danh */}
            <div className="mb-4">
              <h3 className="font-serif text-xl font-bold text-[#f3e1c3] leading-tight mb-1">{artist.name}</h3>
              <p className="text-sm text-[#cda052] italic">{artist.title}</p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-gradient-to-r from-[#cda052]/50 to-transparent" />
              <div className="w-1 h-1 rounded-full bg-[#cda052]" />
              <div className="h-px flex-1 bg-gradient-to-l from-[#cda052]/50 to-transparent" />
            </div>

            {/* Tiểu sử */}
            {artist.bio && (
              <div className="mb-5">
                <h4 className="text-[10px] uppercase tracking-widest text-[#cda052] font-bold mb-2 flex items-center gap-1.5">
                  <span className="w-3 h-px bg-[#cda052]" />
                  Tiểu sử
                </h4>
                <p className="text-sm text-[#cdbfad] font-light leading-relaxed text-justify">{artist.bio}</p>
              </div>
            )}

            {/* Vở diễn tiêu biểu */}
            {artist.notable && (
              <div className="mb-5">
                <h4 className="text-[10px] uppercase tracking-widest text-[#cda052] font-bold mb-2 flex items-center gap-1.5">
                  <span className="w-3 h-px bg-[#cda052]" />
                  Vở diễn tiêu biểu
                </h4>
                <div className="flex flex-wrap gap-2">
                  {artist.notable.map((item, i) => (
                    <span key={i} className="text-xs bg-[#2d1f11] border border-[#3a2a18] text-[#e6dfd5] px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Danh hiệu & giải thưởng */}
            {artist.awards && (
              <div className="pb-2">
                <h4 className="text-[10px] uppercase tracking-widest text-[#cda052] font-bold mb-2 flex items-center gap-1.5">
                  <span className="w-3 h-px bg-[#cda052]" />
                  Danh hiệu & Giải thưởng
                </h4>
                <div className="flex flex-wrap gap-2">
                  {artist.awards.map((item, i) => (
                    <span key={i} className="text-xs bg-[#cda052]/10 border border-[#cda052]/30 text-[#cda052] px-3 py-1 rounded-full">
                      🏆 {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 5. COMPONENT CHÍNH: APP
// ==========================================
export default function App() {
  const [activeInstrument, setActiveInstrument] = useState(MUSEUM_DATA.instruments[0]);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [showCurtain, setShowCurtain] = useState(true);
  const [animateCurtain, setAnimateCurtain] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  useReveal();

  useEffect(() => {
    // Khởi tạo đối tượng audio trên client side với file local
    audioRef.current = new Audio(nhacNen);
    audioRef.current.volume = 0.15;
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.log("Audio autoplay restriction: ", err);
      });
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  useEffect(() => {
    const startAnim = setTimeout(() => {
      setAnimateCurtain(true);
    }, 400);

    const removeCurtain = setTimeout(() => {
      setShowCurtain(false);
    }, 2400);

    return () => {
      clearTimeout(startAnim);
      clearTimeout(removeCurtain);
    };
  }, []);

  // Tối ưu hóa việc cập nhật trạng thái scrolled (chỉ set khi thay đổi trạng thái, tránh re-render liên tục)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 60;
      setScrolled((prev) => {
        if (prev !== isScrolled) return isScrolled;
        return prev;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Xác định active section bằng IntersectionObserver (mượt mà, chạy bất đồng bộ qua trình duyệt)
  useEffect(() => {
    const sections = ["hero", "origins", "history", "features", "instruments", "classics", "modern", "conservation"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Phát hiện khu vực nội dung đang hiển thị chính
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "origins", label: "Nguồn Gốc", icon: Compass },
    { id: "history", label: "Lịch Sử", icon: History },
    { id: "features", label: "Đặc Trưng", icon: BookOpen },
    { id: "instruments", label: "Cổ Vật 3D", icon: Music },
    { id: "classics", label: "Tuyệt Tác", icon: Users },
    { id: "modern", label: "Hiện Đại", icon: ShieldAlert },
    { id: "conservation", label: "Bảo Tồn", icon: Layers },
  ];

  return (
    <div className="min-h-screen bg-[#120c08] text-[#e6dfd5]">

      {/* Hiệu ứng mở màn sân khấu */}
      {showCurtain && (
        <div className="fixed inset-0 z-[9999] flex overflow-hidden pointer-events-none">
          <div className={`w-1/2 h-full curtain-left ${animateCurtain ? '-translate-x-full' : 'translate-x-0'}`}></div>
          <div className={`w-1/2 h-full curtain-right ${animateCurtain ? 'translate-x-full' : 'translate-x-0'}`}></div>
        </div>
      )}

      {/* ============================
          THANH ĐIỀU HƯỚNG (NAVBAR)
          ============================ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-[#0f0904]/97 backdrop-blur-xl border-b border-[#3a2a18] shadow-2xl shadow-black/50'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative">
                <Compass className="text-[#cda052] w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#cda052] rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </div>
              <span className="font-serif tracking-widest text-base font-bold text-[#cda052]">
                NHÓM 2 - CẢI LƯƠNG - ĐTR103
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`nav-link flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${activeSection === item.id
                    ? 'text-[#cda052] bg-[#cda052]/10'
                    : 'text-[#a39788] hover:text-[#cda052] hover:bg-[#cda052]/5'
                    }`}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-[#cda052] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={`mobile-menu lg:hidden bg-[#0f0904]/98 border-b border-[#3a2a18] ${mobileMenuOpen ? 'open' : 'closed'}`}>
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-left transition-colors ${activeSection === item.id
                  ? 'text-[#cda052] bg-[#cda052]/10'
                  : 'text-[#a39788] hover:text-[#cda052]'
                  }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ============================
          HERO SECTION
          ============================ */}
      <section
        id="hero"
        className="relative h-screen w-full flex flex-col justify-between items-center text-center overflow-hidden bg-[#120c08]"
      >
        {/* Hình nền Banner bao phủ toàn bộ khung (full 100vh) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            src={imgHinhNenBanner}
            alt="Banner Cải Lương"
            className="w-full h-full object-cover object-center opacity-70"
          />
          {/* Lớp phủ gradient chuyển sắc mượt mà từ trên xuống dưới */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#120c08]/75 to-[#120c08]"></div>
        </div>

        {/* NỬA TRÊN: Chữ "Nghệ thuật Sân khấu" */}
        <div className="relative w-full h-[46vh] flex flex-col justify-end items-center pb-2">
          {/* Chữ "Nghệ thuật Sân khấu" nằm đè lên hình nền */}
          <span 
            className="z-10 block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.2] pb-3 text-[#f3e1c3] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            style={{
              background: 'linear-gradient(135deg, #f3e1c3 0%, #cda052 40%, #e8c97a 70%, #f3e1c3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Nghệ thuật Sân khấu
          </span>
        </div>

        {/* Khoảng đệm ranh giới ở giữa (bỏ vạch dọc) */}
        <div className="z-10 h-[6vh]"></div>

        {/* NỬA DƯỚI: Chữ "Cải lương" + Phụ đề + Intro Box */}
        <div className="relative w-full h-[48vh] flex flex-col justify-start items-center pt-2 px-4 z-10">
          {/* Dot grid nền mờ ảo ở nửa dưới */}
          <div
            className="absolute inset-0 dot-grid opacity-[0.03] pointer-events-none"
            style={{ backgroundSize: '28px 28px' }}
          ></div>

          {/* Glow circles trang trí */}
          <div className="absolute -top-12 left-1/4 w-72 h-72 bg-[#cda052] rounded-full blur-[120px] opacity-5 pointer-events-none"></div>

          {/* Chữ "Cải lương" ngay dưới vạch cắt */}
          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.2] pb-3 mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            style={{
              background: 'linear-gradient(135deg, #f3e1c3 0%, #cda052 40%, #e8c97a 70%, #f3e1c3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Cải lương
          </h1>

          {/* Phụ đề */}
          <p className="font-serif text-lg md:text-xl text-[#a39788] italic mb-6">
            {MUSEUM_DATA.hero.subtitle}
          </p>

          {/* Card câu hỏi mở đầu - Làm gọn lại để tránh tràn màn hình */}
          <div className="relative w-full max-w-xl mx-auto bg-[#1a120b]/90 border border-[#3a2a18] rounded-xl p-4 md:p-5 shadow-2xl backdrop-blur-sm text-left mb-6 overflow-hidden">
            {/* Background Trống Đồng xoay chậm mờ */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 md:-right-12 md:-bottom-12 md:w-52 md:h-52 opacity-15 pointer-events-none z-0 animate-spin-slow">
              <img
                src={bronzeDrum}
                alt="Trống đồng Đông Sơn"
                className="w-full h-full object-contain filter-gold"
              />
            </div>

            <div className="h-px bg-gradient-to-r from-[#3a2a18] via-[#cda052]/30 to-[#3a2a18] mb-3.5 relative z-10"></div>
            <p className="text-[#e6dfd5]/80 font-light text-xs md:text-sm leading-relaxed relative z-10">
              {MUSEUM_DATA.hero.introAnswer}
            </p>
          </div>

          {/* Scroll down indicator ở sát đáy */}
          <button
            onClick={() => scrollTo('origins')}
            className="mt-auto mb-4 flex flex-col items-center gap-1 opacity-55 hover:opacity-100 transition-opacity cursor-pointer animate-bounce group focus:outline-none"
          >
            <span className="text-[9px] text-[#a39788] group-hover:text-[#cda052] tracking-widest uppercase transition-colors">
              Cuộn xuống
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#cda052]" />
          </button>
        </div>
      </section>

      {/* ============================
          SECTION 1: NGUỒN GỐC
          ============================ */}
      <section id="origins" className="py-28 border-t border-[#23180e] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#1a120b]/30 to-transparent pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sticky sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 reveal">
              <SectionHeader
                part={MUSEUM_DATA.origins.part}
                title={MUSEUM_DATA.origins.title}
                center={false}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {MUSEUM_DATA.origins.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[#2d1f11] border border-[#3a2a18] text-[#cda052] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Nội dung */}
            <div className="lg:col-span-8 space-y-8 reveal">
              {/* Định nghĩa */}
              <div className="bg-[#1a120b] border border-[#2d1f11] rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#cda052] to-transparent rounded-l-xl"></div>
                <p className="text-[#cdbfad] font-light leading-relaxed text-justify pl-4">
                  {MUSEUM_DATA.origins.definition}
                </p>
              </div>

              {/* Câu đối */}
              <div className="relative bg-[#17100a] border border-[#3a2a18] rounded-xl p-8 text-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#17100a] px-4">
                  <span className="text-xs text-[#cda052] tracking-widest uppercase">Câu đối nổi tiếng</span>
                </div>
                <p className="font-serif text-xl text-[#f3e1c3] italic mb-3">
                  "{MUSEUM_DATA.origins.couplet.line1}
                </p>
                <div className="w-12 h-px bg-[#cda052]/40 mx-auto mb-3"></div>
                <p className="font-serif text-xl text-[#f3e1c3] italic">
                  {MUSEUM_DATA.origins.couplet.line2}"
                </p>
                <p className="text-xs text-[#5e4f3c] mt-4 tracking-wider">— Rạp hát Tập Ích Ban</p>
              </div>

              {/* Nguồn gốc */}
              <p className="text-[#cdbfad] font-light leading-relaxed text-justify text-base">
                {MUSEUM_DATA.origins.source}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          SECTION 2: TIẾN TRÌNH LỊCH SỬ (TIMELINE)
          ============================ */}
      <section id="history" className="py-28 bg-[#17100a] border-t border-b border-[#23180e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="reveal">
            <SectionHeader
              part={MUSEUM_DATA.history.part}
              title={MUSEUM_DATA.history.title}
            />
          </div>

          <div className="relative mt-8">
            {/* Đường dọc timeline */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#3a2a18] to-transparent transform md:-translate-x-1/2"></div>

            <div className="space-y-16">
              {MUSEUM_DATA.history.timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`reveal relative flex flex-col md:flex-row gap-8 md:gap-0 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Card nội dung */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:pl-0' : 'md:pl-12'}`}>
                    <div className="card-glow bg-[#1a120b] border border-[#2d1f11] rounded-xl p-6 relative group cursor-default">
                      <div className="flex items-start gap-4 mb-4">
                        <span className="text-3xl flex-shrink-0">{item.icon}</span>
                        <div>
                          <span
                            className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1 inline-block"
                            style={{ color: item.color, backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
                          >
                            {item.year}
                          </span>
                          <h3 className="font-serif text-xl font-bold text-[#f3e1c3] mt-1">{item.period}</h3>
                        </div>
                      </div>
                      <p className="text-[#cdbfad] font-light leading-relaxed text-sm text-justify">{item.desc}</p>
                    </div>
                  </div>

                  {/* Dot giữa */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div
                      className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: item.color, backgroundColor: '#120c08' }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          SECTION 3: ĐẶC TRƯNG NGHỆ THUẬT
          ============================ */}
      <section id="features" className="py-28 border-t border-[#23180e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="reveal">
            <SectionHeader
              title={MUSEUM_DATA.features.title}
            />
            <p className="text-center text-[#a39788] italic max-w-2xl mx-auto -mt-8 mb-12">
              {MUSEUM_DATA.features.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MUSEUM_DATA.features.categories.map((cat, idx) => (
              <div
                key={idx}
                className="reveal card-glow bg-[#1a120b] border border-[#2d1f11] rounded-xl overflow-hidden group cursor-default"
              >
                {/* Header card */}
                <div className="p-5 bg-gradient-to-r from-[#2d1f11]/80 to-transparent border-b border-[#2d1f11] min-h-[140px]">
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="font-serif text-lg font-bold text-[#f3e1c3]">{cat.name}</h3>
                  <p className="text-xs text-[#cda052] mt-1 uppercase tracking-wider">{cat.subtitle}</p>
                </div>

                {/* Body card */}
                <div className="p-5">
                  <ul className="space-y-4">
                    {cat.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex gap-3 text-sm text-[#cdbfad] font-light leading-relaxed">
                        <span className="text-[#cda052] mt-0.5 flex-shrink-0">◆</span>
                        <span className="text-justify">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* ── Gallery trang phục cải lương ── */}
          <div className="mt-14 reveal">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#cda052]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#cda052]">Trang Phục Cải Lương</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#cda052]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { src: imgTrangPhuc1, label: "Trang Phục 1", desc: "Phục trang tuồng lịch sử & cung đình" },
                { src: imgTrangPhuc2, label: "Trang Phục 2", desc: "Phục trang tuồng hương xa & kiếm hiệp" }
              ].map((item, i) => (
                <div key={i} className="group relative rounded-2xl overflow-hidden border border-[#2d1f11] shadow-xl">
                  {/* Hình ảnh */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b] via-[#1a120b]/30 to-transparent" />
                    {/* Caption nổi lên khi hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="font-serif text-base font-bold text-[#f3e1c3] mb-1">{item.label}</p>
                      <p className="text-xs text-[#cda052] tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                    </div>
                    {/* Viền vàng xuất hiện khi hover */}
                    <div className="absolute inset-0 border-2 border-[#cda052]/0 group-hover:border-[#cda052]/40 rounded-2xl transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          SECTION 4: PHÒNG CỔ VẬT 3D (SKETCHFAB) & DÀN NHẠC
          ============================ */}
      <section id="instruments" className="py-28 bg-[#0f0a06] border-t border-b border-[#23180e] relative overflow-hidden">
        {/* Background decorative */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a0e05_0%,_transparent_70%)] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="reveal text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#cda052] tracking-widest uppercase text-xs mb-4">
              <div className="w-8 h-px bg-[#cda052]"></div>
              Không Gian Tương Tác Kỹ Thuật Số
              <div className="w-8 h-px bg-[#cda052]"></div>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#f3e1c3] mb-3">
              Hệ Thống Nhạc Cụ
            </h2>
            <p className="text-sm text-[#a39788] max-w-md mx-auto">
              Chọn nhạc cụ để khám phá mô hình 3D tương tác — xoay, thu phóng và quan sát từ mọi góc độ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Sidebar chọn nhạc cụ */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              {MUSEUM_DATA.instruments.map((inst) => {
                const isActive = activeInstrument.id === inst.id;
                return (
                  <button
                    key={inst.id}
                    onClick={() => setActiveInstrument(inst)}
                    className={`flex-1 lg:flex-none p-4 text-left rounded-xl border transition-all duration-300 relative overflow-hidden group ${isActive
                      ? 'bg-[#1a120b] border-[#cda052] shadow-lg shadow-[#cda052]/10 animate-pulse-gold'
                      : 'bg-[#120c08]/50 border-[#2d1f11] hover:border-[#4d361e] hover:bg-[#1a120b]/50'
                      }`}
                  >
                    {isActive && (
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#cda052] to-[#8a6530] rounded-l-xl"></div>
                    )}
                    <div className="flex items-center gap-3 pl-2">
                      <span className="text-2xl">{inst.emoji}</span>
                      <div>
                        <span className={`font-serif text-base font-bold block ${isActive ? 'text-[#cda052]' : 'text-[#a39788]'}`}>
                          {inst.name}
                        </span>
                        <span className="text-[10px] text-[#5e4f3c] uppercase tracking-wider">{inst.alias}</span>
                      </div>
                    </div>
                    {/* Features chỉ hiện khi active */}
                    {isActive && (
                      <div className="mt-3 pl-2 flex flex-wrap gap-1">
                        {inst.features.map((f) => (
                          <span key={f} className="text-[10px] bg-[#cda052]/10 text-[#cda052] border border-[#cda052]/20 px-2 py-0.5 rounded-full">
                            {f}
                          </span>
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Màn hình 3D */}
            <div className="lg:col-span-8 flex flex-col bg-[#0d0906] border border-[#2d1f11] rounded-2xl overflow-hidden shadow-2xl">
              {/* Header viewer */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#2d1f11] bg-[#120c08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#e55353]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#cda052]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4d9e4d]"></div>
                </div>
                <span className="text-xs text-[#5e4f3c] uppercase tracking-widest">
                  {activeInstrument.name} · Mô hình 3D tương tác
                </span>
                <Music className="w-4 h-4 text-[#5e4f3c]" />
              </div>

              {/* iFrame Sketchfab - Tất cả 3 iframe được render ngay từ đầu với key cố định.
                  Chuyển đổi bằng CSS display:block/none để WebGL context KHÔNG bị hủy và tạo lại,
                  tránh crash khi bấm chuyển qua lại trên mobile */}
              <div className="sketchfab-container flex-1" style={{ paddingTop: '60%' }}>
                {MUSEUM_DATA.instruments.map((inst) => (
                  <iframe
                    key={`sf-${inst.id}`}
                    title={inst.name}
                    allowFullScreen
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src={`https://sketchfab.com/models/${inst.sketchfabId}/embed?autostart=1&camera=0&preload=1&theme=dark&ui_infos=0&ui_watermark=0`}
                    style={{
                      display: activeInstrument.id === inst.id ? 'block' : 'none',
                    }}
                  ></iframe>
                ))}
              </div>

              {/* Info dưới viewer */}
              <div className="p-5 border-t border-[#2d1f11] bg-[#120c08]">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{activeInstrument.emoji}</span>
                  <div>
                    <h4 className="font-serif text-[#cda052] font-bold text-sm uppercase tracking-wider mb-1">
                      {activeInstrument.name}
                      <span className="text-[#5e4f3c] font-normal ml-2 normal-case tracking-normal">— {activeInstrument.alias}</span>
                    </h4>
                    <p className="text-xs text-[#cdbfad] font-light leading-relaxed">{activeInstrument.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dàn nhạc cổ và tân bổ sung */}
          <div className="mt-16 reveal grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dàn Nhạc Cổ */}
            <div className="bg-[#1a120b] border border-[#2d1f11] rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-lg font-bold text-[#cda052] mb-6 flex items-center gap-3 pb-3 border-b border-[#2d1f11]">
                <Music className="w-5 h-5" />
                Dàn Nhạc Cổ (Truyền Thống)
              </h3>
              <p className="text-xs text-[#a39788] mb-6 italic">
                Bộ khung tạo nên chất âm đặc trưng và mộc mạc của vùng đất Nam Bộ
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 text-sm text-[#cdbfad] font-light">
                  <span className="text-[#cda052] font-bold flex-shrink-0">◆ Đàn Cò (Đàn Nhị):</span>
                  <span className="text-justify">Tiếng đàn nỉ non, ai oán, là vũ khí sắc bén nhất để đẩy cảm xúc người nghe lên cao trào trong các phân đoạn bi thương, đẫm nước mắt.</span>
                </div>
                <div className="flex gap-3 text-sm text-[#cdbfad] font-light">
                  <span className="text-[#cda052] font-bold flex-shrink-0">◆ Đàn Sến:</span>
                  <span className="text-justify">Nhạc cụ mang lại âm sắc vô cùng mộc mạc, tiếng đàn nảy hạt đặc trưng cho các bài bản cổ.</span>
                </div>
                <div className="flex gap-3 text-sm text-[#cdbfad] font-light">
                  <span className="text-[#cda052] font-bold flex-shrink-0">◆ Sáo Trúc / Tiêu:</span>
                  <span className="text-justify">Tạo ra không gian mênh mang, u buồn hoặc thanh bình sâu lắng cho bối cảnh vở diễn.</span>
                </div>
                <div className="flex gap-3 text-sm text-[#cdbfad] font-light">
                  <span className="text-[#cda052] font-bold flex-shrink-0">◆ Song Loan:</span>
                  <span className="text-justify">Mõ nhỏ bằng gỗ tròn dẹt. Nhạc công dùng chân hoặc tay gõ để giữ nhịp chính cho cả dàn nhạc và người hát, không bao giờ được phép sai lệch.</span>
                </div>
              </div>
            </div>

            {/* Dàn Nhạc Tân */}
            <div className="bg-[#1a120b] border border-[#2d1f11] rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-lg font-bold text-[#cda052] mb-6 flex items-center gap-3 pb-3 border-b border-[#2d1f11]">
                <Sparkles className="w-5 h-5" />
                Dàn Nhạc Tân (Sự Cách Tân Độc Đáo)
              </h3>
              <p className="text-xs text-[#a39788] mb-6 italic">
                Sự kết hợp độc đáo khi Việt hóa nhạc cụ phương Tây phục vụ cổ nhạc
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 text-sm text-[#cdbfad] font-light">
                  <span className="text-[#cda052] font-bold flex-shrink-0">◆ Đàn Ghi-ta phím lõm:</span>
                  <span className="text-justify">Phát minh vĩ đại nhất của âm nhạc tài tử - cải lương. Phím đàn được khoét lõm sâu để ngón tay nhấn, rung, vuốt dây tạo ra các âm luyến láy nỉ non đặc thù của vọng cổ.</span>
                </div>
                <div className="flex gap-3 text-sm text-[#cdbfad] font-light">
                  <span className="text-[#cda052] font-bold flex-shrink-0">◆ Nhạc cụ phương Tây khác:</span>
                  <span className="text-justify">Violon, Saxophone, Piano, Organ và Trống Jazz được sử dụng thường xuyên trong các vở tuồng xã hội, hương xa để tăng sự hoành tráng và phong phú về âm sắc.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          SECTION 5: TÁC PHẨM & NGHỆ SĨ
          ============================ */}
      <section id="classics" className="py-28 border-t border-[#23180e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="reveal">
            <SectionHeader
              part={MUSEUM_DATA.classics.part}
              title={MUSEUM_DATA.classics.title}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Danh sách tác phẩm */}
            <div className="lg:col-span-4 reveal">
              <div className="space-y-8">
                {/* Xã hội */}
                <div className="bg-[#1a120b] border border-[#2d1f11] rounded-xl p-5">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-[#cda052] mb-4 flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5" />
                    Dòng Cải Lương Xã Hội
                  </h4>
                  <div className="space-y-3">
                    {MUSEUM_DATA.classics.plays.social.map((play, idx) => (
                      <div key={idx} className="border-l-2 border-[#cda052]/30 pl-3">
                        <p className="font-serif text-sm text-[#f3e1c3] font-medium">{play.title}</p>
                        <p className="text-xs text-[#5e4f3c] mt-0.5">{play.author}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tuồng cổ */}
                <div className="bg-[#1a120b] border border-[#2d1f11] rounded-xl p-5">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-[#a39788] mb-4 flex items-center gap-2">
                    <Star className="w-3.5 h-3.5" />
                    Dòng Cải Lương Tuồng Cổ
                  </h4>
                  <div className="space-y-3">
                    {MUSEUM_DATA.classics.plays.ancient.map((play, idx) => (
                      <div key={idx} className="border-l-2 border-[#a39788]/30 pl-3">
                        <p className="font-serif text-sm text-[#f3e1c3] font-medium">{play.title}</p>
                        <p className="text-xs text-[#5e4f3c] mt-0.5">{play.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Nghệ sĩ */}
            <div className="lg:col-span-8 reveal">
              <h3 className="font-serif text-2xl font-bold text-[#cda052] mb-6 flex items-center gap-3">
                <Users className="w-6 h-6" />
                Những Tượng Đài Giữ Lửa
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MUSEUM_DATA.classics.artists.map((art, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedArtist(art)}
                    className="card-glow bg-[#1a120b] border border-[#2d1f11] rounded-xl group cursor-pointer relative overflow-hidden flex flex-col hover:border-[#cda052]/50 transition-colors duration-300"
                  >
                    {/* Ảnh nghệ sĩ */}
                    {art.image && art.image.length > 0 && (
                      <div className="relative h-48 overflow-hidden flex-shrink-0">
                        <div className="flex h-full">
                          {art.image.map((src, imgIdx) => (
                            <img
                              key={imgIdx}
                              src={src}
                              alt={art.name}
                              className="h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                              style={{ width: `${100 / art.image.length}%` }}
                            />
                          ))}
                        </div>
                        {/* Gradient phủ đáy */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b] via-[#1a120b]/30 to-transparent" />
                        {/* Badge số thứ tự */}
                        <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-[#0f0904]/80 border border-[#cda052]/50 flex items-center justify-center backdrop-blur-sm">
                          <span className="text-[#cda052] text-xs font-bold font-serif">{idx + 1}</span>
                        </div>
                        {/* Badge danh hiệu */}
                        <div className="absolute top-3 right-3">
                          <span className="text-[10px] bg-[#cda052]/20 text-[#cda052] border border-[#cda052]/40 px-2 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
                            {art.badge}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Nội dung text */}
                    <div className="p-5 flex flex-col flex-1">
                      {/* Nếu không có ảnh thì hiện badge cũ kiểu */}
                      {(!art.image || art.image.length === 0) && (
                        <div className="flex items-start justify-between mb-3">
                          <Award className="w-4 h-4 text-[#cda052] flex-shrink-0 mt-0.5" />
                          <span className="text-[10px] bg-[#cda052]/10 text-[#cda052] border border-[#cda052]/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            {art.badge}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="w-3.5 h-3.5 text-[#cda052] flex-shrink-0" />
                        <h4 className="font-serif text-[#f3e1c3] font-bold text-sm">{art.name}</h4>
                      </div>
                      <p className="text-xs text-[#cda052] mb-2 italic pl-5">{art.title}</p>
                      <p className="text-xs text-[#a39788] font-light leading-relaxed pl-5">{art.role}</p>
                      {/* Gợi ý click */}
                      <div className="mt-3 pl-5 flex items-center gap-1 text-[10px] text-[#5e4f3c] group-hover:text-[#cda052] transition-colors">
                        <span>Xem chi tiết</span>
                        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ============================
              YOUTUBE - NGHE CẢI LƯƠNG
              ============================ */}
          <div className="reveal mt-16">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#cda052]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#cda052]">
                Thưởng Thức Cải Lương
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#cda052]/40 to-transparent" />
            </div>

            {/* Khung video */}
            <div className="bg-[#0d0906] border border-[#2d1f11] rounded-2xl overflow-hidden shadow-2xl">
              {/* Thanh tiêu đề giả terminal */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#2d1f11] bg-[#120c08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#e55353]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#cda052]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4d9e4d]" />
                </div>
                <span className="text-xs text-[#5e4f3c] uppercase tracking-widest">
                  🎭 Cải Lương Kinh Điển · YouTube
                </span>
                <Music className="w-4 h-4 text-[#5e4f3c]" />
              </div>

              {/* iFrame 16:9 responsive */}
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/4bgZDxjDOiw?list=RD4bgZDxjDOiw&start_radio=1"
                  title="Cải Lương Kinh Điển"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================
          SECTION 6: THÁCH THỨC & CHUYỂN MÌNH
          ============================ */}
      <section id="modern" className="py-28 bg-[#17100a] border-t border-[#23180e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="reveal">
            <SectionHeader
              part={MUSEUM_DATA.modern.part}
              title={MUSEUM_DATA.modern.title}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
            {/* Thách thức */}
            <div className="reveal space-y-5">
              <h3 className="font-serif text-xl font-bold text-[#e55353] flex items-center gap-2 pb-3 border-b border-[#3a2a18]">
                <ShieldAlert className="w-5 h-5" />
                Thách Thức & Rào Cản
              </h3>
              {MUSEUM_DATA.modern.challenges.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#1f150d] rounded-xl p-5 border border-[#2d1f11] border-l-4 border-l-[#e55353] group hover:bg-[#241810] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <h4 className="font-serif text-[#f3e1c3] font-bold text-sm">{item.title}</h4>
                  </div>
                  <p className="text-xs text-[#cdbfad] font-light leading-relaxed text-justify pl-9">{item.content}</p>
                </div>
              ))}
            </div>

            {/* Chuyển mình */}
            <div className="reveal space-y-5">
              <h3 className="font-serif text-xl font-bold text-[#cda052] flex items-center gap-2 pb-3 border-b border-[#3a2a18]">
                <Layers className="w-5 h-5" />
                Sự Chuyển Mình Thời Đại Mới
              </h3>
              {MUSEUM_DATA.modern.adaptation.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#1f150d] rounded-xl p-5 border border-[#2d1f11] border-l-4 border-l-[#cda052] group hover:bg-[#241810] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <h4 className="font-serif text-[#f3e1c3] font-bold text-sm">{item.title}</h4>
                  </div>
                  <p className="text-xs text-[#cdbfad] font-light leading-relaxed text-justify pl-9">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          SECTION 7: GIẢI PHÁP BẢO TỒN
          ============================ */}
      <section id="conservation" className="py-28 border-t border-[#23180e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="reveal">
            <SectionHeader
              part={MUSEUM_DATA.conservation.part}
              title={MUSEUM_DATA.conservation.title}
            />
          </div>

          <div className="reveal bg-[#1a120b] border border-[#3a2a18] rounded-2xl p-6 md:p-8 relative overflow-hidden">
            {/* Trang trí góc */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#cda052] rounded-full blur-[100px] opacity-[0.04] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#cda052] rounded-full blur-[80px] opacity-[0.04] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
              {/* Giải pháp bảo tồn truyền thống */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#cda052] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cda052]"></span>
                  Giải Pháp Bảo Tồn Di Sản
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {MUSEUM_DATA.conservation.preservationSolutions.map((sol, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 items-start bg-[#17100a] border border-[#2d1f11] rounded-xl p-4 hover:border-[#3a2a18] transition-colors"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#cda052]/15 border border-[#cda052]/30 flex items-center justify-center">
                        <span className="text-[#cda052] text-[10px] font-bold">{idx + 1}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-[#cda052] font-bold mb-1 block">{sol.category}</span>
                        <p className="text-xs text-[#cdbfad] font-light leading-relaxed">{sol.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Giải pháp ứng dụng công nghệ */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#cda052] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cda052]"></span>
                  Ứng Dụng Công Nghệ Hiện Đại
                </h3>
                <div className="space-y-4">
                  {MUSEUM_DATA.conservation.technologySolutions.map((sol, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 items-start bg-[#17100a] border border-[#2d1f11] rounded-xl p-4 hover:border-[#cda052]/50 transition-colors border-l-2 border-l-[#cda052]"
                    >
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-[#cda052] font-bold mb-1 block">{sol.category}</span>
                        <p className="text-xs text-[#cdbfad] font-light leading-relaxed">{sol.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          SECTION 8: PHẦN 6 - TRẢI NGHIỆM & KẾT LUẬN
          ============================ */}
      <section id="conclusion" className="py-28 bg-[#0f0a06] border-t border-[#23180e] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_#2d1e10_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#cda052]/40 to-transparent" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

          {/* Header */}
          <div className="reveal text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#cda052] bg-[#cda052]/10 px-3 py-1 rounded-full border border-[#cda052]/30">
                {MUSEUM_DATA.conclusion.part}
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#f3e1c3] leading-tight">
              {MUSEUM_DATA.conclusion.title}
            </h2>
            <div className="flex items-center justify-center gap-4 mt-5">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#cda052]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#cda052]" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#cda052]" />
            </div>

          </div>

          {/* KHỐI 1: TRẢI NGHIỆM THỰC TIỄN */}
          <div className="reveal mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#cda052] to-[#8a6530]" />
              <h3 className="font-serif text-xl font-bold text-[#f3e1c3]">
                {MUSEUM_DATA.conclusion.experience.title}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MUSEUM_DATA.conclusion.experience.points.map((pt, i) => (
                <div key={i} className="card-glow bg-[#1a120b] border border-[#2d1f11] rounded-2xl p-6 group hover:border-[#cda052]/40 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{pt.icon}</span>
                    <h4 className="font-serif text-[#cda052] font-bold text-sm uppercase tracking-wider">{pt.label}</h4>
                  </div>
                  <p className="text-sm text-[#cdbfad] font-light leading-relaxed text-justify">{pt.text}</p>
                </div>
              ))}
            </div>
            {/* Trích dẫn GS. Trần Văn Khê */}
            <div className="mt-6 bg-[#17100a] border border-[#3a2a18] rounded-xl p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#cda052] to-transparent rounded-l-xl" />
              <p className="text-base text-[#f3e1c3] italic font-serif pl-4">
                "Hòa tấu mà không đồng tấu"
              </p>
              <p className="text-xs text-[#5e4f3c] mt-1 pl-4">— Cố Giáo sư Trần Văn Khê, chuyên gia hàng đầu về âm nhạc cổ truyền Việt Nam</p>
            </div>
          </div>

          {/* KHỐI 2: 3 GIÁ TRỊ CỐT LÕI */}
          <div className="reveal mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#cda052] to-[#8a6530]" />
              <h3 className="font-serif text-xl font-bold text-[#f3e1c3]">
                Đúc Kết 3 Giá Trị Cốt Lõi
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MUSEUM_DATA.conclusion.coreValues.map((val, i) => (
                <div key={i} className="card-glow relative bg-[#1a120b] border border-[#2d1f11] rounded-2xl p-6 overflow-hidden group hover:border-[#cda052]/40 transition-colors">
                  {/* Số to nền */}
                  <div className="absolute top-3 right-4 font-serif text-6xl font-bold text-[#cda052]/5 leading-none select-none">
                    {val.number}
                  </div>
                  <span className="text-3xl block mb-4">{val.icon}</span>
                  <div className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#cda052] bg-[#cda052]/10 border border-[#cda052]/20 px-2 py-0.5 rounded-full mb-3">
                    {val.number}
                  </div>
                  <h4 className="font-serif text-[#f3e1c3] font-bold text-base mb-3">{val.title}</h4>
                  <p className="text-xs text-[#a39788] font-light leading-relaxed text-justify">{val.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* KHỐI 3: LỜI KẾT */}
          <div className="reveal">
            <div className="relative bg-[#1a120b] border border-[#3a2a18] rounded-2xl p-8 md:p-12 text-center overflow-hidden">
              {/* Glow nền */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#cda052] rounded-full blur-[80px] opacity-[0.06] pointer-events-none" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#cda052] rounded-full blur-[60px] opacity-[0.04] pointer-events-none" />

              <div className="relative z-10">
                <div className="ornament mb-8">
                  <span className="text-[#cda052] text-xl">✦</span>
                </div>

                {/* Quote chính */}
                <blockquote className="font-serif text-lg md:text-xl text-[#f3e1c3] italic leading-relaxed mb-8 max-w-2xl mx-auto">
                  "{MUSEUM_DATA.conclusion.closingQuote}"
                </blockquote>

                <div className="ornament my-8">
                  <span className="text-[#3a2a18] text-lg">✦</span>
                </div>

                {/* Bullet kết */}
                <div className="space-y-3 max-w-lg mx-auto text-left mb-10">
                  {MUSEUM_DATA.conclusion.finalBullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#cda052] mt-0.5 flex-shrink-0">
                        {i === MUSEUM_DATA.conclusion.finalBullets.length - 1 ? '🎭' : '◆'}
                      </span>
                      <p className={`text-sm font-light leading-relaxed ${
                        i === MUSEUM_DATA.conclusion.finalBullets.length - 1
                          ? 'text-[#cda052] font-medium italic'
                          : 'text-[#cdbfad]'
                      }`}>{bullet}</p>
                    </div>
                  ))}
                </div>

                {/* Logo */}
                <div className="flex justify-center items-center gap-2">
                  <Compass className="text-[#cda052] w-4 h-4 opacity-50" />
                  <span className="font-serif text-[#cda052] text-xs tracking-widest opacity-50">NHÓM 2 · CẢI LƯƠNG · ĐTR103</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================
          FOOTER NHỎ GỌN
          ============================ */}
      <footer className="bg-[#0b0704] border-t border-[#1a120b] py-8 text-center px-4">
        <p className="text-xs text-[#2d1f11] tracking-[0.3em] uppercase">
          © 2026 · Bảo Tàng Số Cải Lương Việt Nam
        </p>
        <p className="text-[10px] text-[#23180e] mt-1 tracking-widest">
          Nghệ thuật sân khấu truyền thống · Di sản Văn hóa Phi vật thể
        </p>
      </footer>

      {/* Artist Modal */}
      <ArtistModal artist={selectedArtist} onClose={() => setSelectedArtist(null)} />

      {/* Widget Đĩa Hát Cổ Điển Phát Nhạc Nền */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group">
        {/* Tooltip hiển thị khi hover */}
        <div className="hidden md:block bg-[#1a120b] border border-[#3a2a18] text-[#cda052] text-xs px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          {isMusicPlaying ? 'Tạm dừng nhạc nền' : 'Thưởng thức nhạc cổ truyền'}
        </div>

        <button
          onClick={toggleMusic}
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0d0805] border border-[#3a2a18] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-[#cda052] focus:outline-none"
        >
          {/* Đĩa than */}
          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#150f0b] border border-[#2d1f11] relative flex items-center justify-center shadow-inner ${isMusicPlaying ? 'vinyl-spin' : ''}`}>
            {/* Rãnh đĩa đồng tâm */}
            <div className="absolute inset-1 rounded-full border border-dashed border-[#ffffff]/5"></div>
            <div className="absolute inset-2.5 rounded-full border border-solid border-[#ffffff]/5"></div>
            
            {/* Nhãn đĩa màu vàng gold ở giữa */}
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-tr from-[#a39788] via-[#cda052] to-[#f3e1c3] flex items-center justify-center shadow-md">
              {/* Lỗ tâm đĩa */}
              <div className="w-1.5 h-1.5 rounded-full bg-[#150f0b]"></div>
            </div>
          </div>

          {/* Biểu tượng Trạng thái nhỏ ở góc */}
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#cda052] text-[#120c08] border border-[#1a120b] flex items-center justify-center text-[10px] font-bold shadow-md">
            {isMusicPlaying ? '⏸' : '▶'}
          </div>

          {/* Các nốt nhạc bay lơ lửng khi đang phát */}
          {isMusicPlaying && (
            <>
              <span className="music-note absolute text-xs text-[#cda052] top-[-10px] left-[10px] opacity-0" style={{ '--x-offset': '-15px', animationDelay: '0s' }}>♫</span>
              <span className="music-note absolute text-sm text-[#f3e1c3] top-[-15px] right-[10px] opacity-0" style={{ '--x-offset': '15px', animationDelay: '0.7s' }}>♪</span>
              <span className="music-note absolute text-xs text-[#cda052] top-[-8px] right-[25px] opacity-0" style={{ '--x-offset': '5px', animationDelay: '1.4s' }}>♬</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
