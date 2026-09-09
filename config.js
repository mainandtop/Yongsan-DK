/* =======================================================================
   SITE CONFIG — DK밸리뷰 용산
   이 파일 하나만 수정하면 페이지 내용이 전부 바뀝니다.
   ======================================================================= */
const SITE_CONFIG = {
  /* ── 기본 정보 ── */
  siteName:   "DK밸리뷰 용산",
  brandEN:    "DK VALLEYVIEW YONGSAN",
  logoKo:     "DK밸리뷰 용산",
  tagline:    "용산역 도보권, 한강대로변에서 누리는 초역세권 라이프",

  /* 하단 '전화연결' 버튼 및 상담 대표번호 (이 한 곳만 바꾸면 전부 반영) */
  callPhone:  "1666-9032",

  address:      "서울시 용산구 한강로3가 65-155 외 1필지",
  modelHouse:   "홍보관 방문 상담 — 방문 전 전화 예약 부탁드립니다",
  developer:    "㈜DK건설 · ㈜DK밸리뷰",
  totalUnits:   "오피스텔 83실 + 도시형생활주택 24세대",
  unitTypes:    ["오피스텔", "도시형생활주택"],
  openHours:    "OPEN 10:00 ~ CLOSE 18:00",
  region:       "서울특별시",
  locality:     "용산구",
  year:         2026,

  /* 히어로(첫 화면) */
  heroBadge:     "DK밸리뷰 용산 방문예약 접수중",
  heroImage:     "assets/images/visual1.jpg",
  heroTitleHTML: "용산역 도보권 초역세권<br><b>DK밸리뷰 용산</b>",
  heroInfoHTML:  "서울시 용산구 한강로3가 · <b>오피스텔 83실 · 도시형생활주택 24세대</b>",
  noticeText:    "방문예약 상담·문의 <strong>1666-9032</strong> · OPEN 10:00 ~ CLOSE 18:00",

  /* SEO */
  seo: {
    title:       "DK밸리뷰 용산 | 공식 방문예약",
    description: "DK밸리뷰 용산 공식 홍보 페이지. 서울시 용산구 한강로3가, 지하 2층 ~ 지상 20층, 오피스텔 83실 · 도시형생활주택 24세대 · 근린생활시설. 용산역 도보권 초역세권 입지. 방문예약 시 최신 분양정보를 우선 안내드립니다.",
    keywords:    "DK밸리뷰 용산, 용산 오피스텔, 한강로3가 오피스텔, 용산역 오피스텔, 용산 도시형생활주택, DK밸리뷰, 용산 분양",
    ogImage:     "assets/images/visual1.jpg",
    canonical:   "" // 배포 후 실제 도메인 입력 (예: https://dkvalleyview-yongsan.vercel.app/)
  },

  /* ── 상단/모바일 내비게이션 ──
     각 항목의 href는 아래 sections의 id와 1:1로 맞출 것 */
  nav: [
    { label: "사업개요",  href: "#overview" },
    { label: "브랜드",    href: "#brand" },
    { label: "입지환경",  href: "#location" },
    { label: "프리미엄",  href: "#premium" },
    { label: "상품특화",  href: "#special" },
    { label: "조경",      href: "#landscape" },
    { label: "세대소개",  href: "#units" }
  ],

  /* ── 사업개요 표 ── */
  overviewTable: [
    ["사 업 명",  "<strong>DK밸리뷰 용산 신축공사</strong>"],
    ["대지위치",  "서울시 용산구 한강로3가 65-155 외 1필지"],
    ["지역지구",  "일반상업지역 · 지구단위계획구역(용산지구) · 방화지구(폐지입안)"],
    ["용 &nbsp; 도",  "오피스텔 83실 · 도시형생활주택 24세대 · 근린생활시설"],
    ["건축규모",  "지하 2층 ~ 지상 20층"],
    ["대지면적",  "664.50㎡ (201.01평)"],
    ["연 면 적",  "6,201.40㎡ (1,875.91평)"],
    ["건폐율/용적률", "59.91% (법정 60%) / <strong>799.76%</strong> (법정 800%)"],
    ["주차대수",  "총 73대 (기계식 70대 · 장애인주차 3대)"],
    ["문의전화",  "<strong>1666-9032</strong>"]
  ],

  /* ── 섹션 ──
     tit    : 섹션 타이틀 이미지(선택)
     table  : true 이면 위 overviewTable 렌더링
     images : 본문 이미지(여러 장 가능, 탭하면 확대)
     cards  : { img, no, title, desc } 카드 목록
     tabs   : { label, images, area } 1단 탭
     groups : { label, tabs:[{label,images}] } 2단 탭 (그룹 → 타입)
     notes  : 하단 유의사항 문구 목록                                     */
  sections: [
    {
      id: "overview", ko: "사업개요", en: "BUSINESS OVERVIEW",
      desc: "용산 국제업무지구 시대, 한강로3가에서 시작되는 DK밸리뷰 용산의 새로운 주거 기준.",
      table: true,
      images: ["assets/images/overview_1.jpg"],
      notes: [
        "상기 투시도는 소비자의 이해를 돕기 위해 제작된 CG이미지로 실제 시공 시 색채, 마감, 조경, 외관 디테일 등이 변경될 수 있습니다.",
        "본 사이트의 면적, 수치 등은 인쇄 및 편집 과정에서 오류가 있을 수 있으니 계약 시 반드시 홍보관에서 확인하시기 바랍니다."
      ]
    },
    {
      id: "brand", ko: "브랜드", en: "BRAND",
      desc: "㈜DK밸리뷰 · ㈜DK건설 — 2020 친환경 건설 산업 대상. 서울 도심 곳곳에서 이어온 밸리뷰의 시공 경험을 용산에서 만나보세요.",
      images: ["assets/images/brand_1.jpg"],
      notes: [
        "상기 이미지는 DK밸리뷰·DK건설의 시공 사례로 본 사업지와 상이할 수 있습니다."
      ]
    },
    {
      id: "location", ko: "입지환경", en: "LOCATION",
      desc: "용산역 · 신용산역 · 이촌역을 도보권에 둔 한강대로변 초역세권. HYBE · LG U+ 본사와 아이파크몰, 이촌한강공원, 용산국제업무지구(예정)를 생활권으로 누립니다.",
      images: ["assets/images/location_1.jpg"],
      cards: [
        { title: "용산역 트리플 역세권", desc: "용산역(경부선·KTX·1호선), 신용산역(4호선), 이촌역(4호선·경의중앙선)을 도보권에 둔 초역세권 입지" },
        { title: "한강대로변 중심 입지", desc: "한강대로 · 강변북로 · 올림픽대로 · 한강대교로 이어지는 서울 도심 사통팔달 교통망" },
        { title: "용산 업무·상업 인프라", desc: "HYBE · LG U+ 본사, LS용산타워, 아이파크몰, 이마트 등 용산의 업무·쇼핑 인프라 인접" },
        { title: "미래가치 개발호재", desc: "용산국제업무지구, 용산민족공원(예정) 등 용산 일대 대규모 개발로 기대되는 미래가치" }
      ],
      notes: [
        "본 페이지에 사용된 이미지, CG, 내용 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.",
        "지역도는 포털사이트 지도를 참고하여 제작한 것으로 실제와 차이가 있으며, 개발계획·교통계획 등은 관계기관의 사정에 따라 변경 및 취소될 수 있고 이는 당사와 무관합니다."
      ]
    },
    {
      id: "premium", ko: "프리미엄", en: "PREMIUM",
      desc: "DK밸리뷰 용산만이 누릴 수 있는 입지 · 교통 · 미래가치 프리미엄.",
      images: ["assets/images/premium_1.jpg"],
      notes: [
        "본 페이지에 사용된 이미지, CG, 내용 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다."
      ]
    },
    {
      id: "special", ko: "상품특화", en: "PRODUCT SPECIAL",
      desc: "1인 가구부터 신혼부부까지, 공간 효율을 극대화한 평면과 마감 특화 설계.",
      images: [
        "assets/images/special_1.jpg",
        "assets/images/special_2.jpg",
        "assets/images/special_3.jpg",
        "assets/images/special_4.jpg",
        "assets/images/special_5.jpg"
      ],
      notes: [
        "상기 특화설계 및 마감재는 소비자의 이해를 돕기 위한 것으로 일부 품목은 유상옵션이며, 인·허가 및 현장 여건에 따라 변경될 수 있습니다.",
        "본 사이트의 면적, 수치, 가격 등은 인쇄 및 편집 과정에서 오류가 있을 수 있으니 계약 시 반드시 홍보관에서 확인하시기 바랍니다."
      ]
    },
    {
      id: "landscape", ko: "조경", en: "LANDSCAPE",
      desc: "도심 속 휴식이 되는 조경 계획으로 일상의 품격을 더합니다.",
      images: ["assets/images/landscape_1.jpg"],
      notes: [
        "상기 조경 CG는 소비자의 이해를 돕기 위해 제작된 것으로 수목의 종류·규격·식재 위치 등은 실제 시공 시 변경될 수 있습니다."
      ]
    },
    {
      id: "units", ko: "세대소개", en: "UNIT PLANS",
      desc: "오피스텔과 도시형생활주택 타입별 평면을 확인하세요. 상단에서 상품을, 하단에서 타입을 전환할 수 있습니다.",
      groups: [
        {
          label: "오피스텔",
          tabs: [
            { label: "A Type", images: ["assets/images/oft_a.jpg"] },
            { label: "B Type", images: ["assets/images/oft_b.jpg"] },
            { label: "C Type", images: ["assets/images/oft_c.jpg"] },
            { label: "D Type", images: ["assets/images/oft_d.jpg"] },
            { label: "E Type", images: ["assets/images/oft_e.jpg"] }
          ]
        },
        {
          label: "도시형생활주택",
          tabs: [
            { label: "A Type", images: ["assets/images/dsh_a.jpg"] },
            { label: "B Type", images: ["assets/images/dsh_b.jpg"] },
            { label: "C Type", images: ["assets/images/dsh_c.jpg"] },
            { label: "D Type", images: ["assets/images/dsh_d.jpg"] },
            { label: "E Type", images: ["assets/images/dsh_e.jpg"] }
          ]
        }
      ],
      notes: [
        "단위세대 평면도 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 발코니 확장 및 유상옵션 품목이 포함될 수 있습니다.",
        "상기 면적 및 치수는 인·허가 과정에서 변경될 수 있으니 계약 시 반드시 홍보관에서 확인하시기 바랍니다."
      ]
    }
  ],

  /* ── 개인정보/푸터 ── */
  privacyPurpose: "DK밸리뷰 용산 관련 분양 상담 및 방문예약 안내 서비스 제공",
  footerDisclaimer: "본 홈페이지에 사용된 이미지 및 내용, 문구 등은 소비자의 이해를 돕기 위해 제작 또는 표기된 것으로 실제와 차이가 있습니다. 개발 및 교통계획에 대한 사항은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관합니다. 정확한 내용은 반드시 홍보관 및 공급 계약서를 통해 확인하시기 바랍니다."
};
