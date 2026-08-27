export interface Category {
  id: string;
  name: string;
  slug: string;
  oldLandingFile: string;
  icon: string;
  tagline: string;
  description: string;
  color: string;
  badgeBg: string;
}

export const categories: Category[] = [
  {
    id: "pregnancy-childbirth",
    name: "임신·출산 지원",
    slug: "pregnancy-childbirth",
    oldLandingFile: "pregnancy_childbirth_landing.html",
    icon: "HeartHandshake",
    tagline: "임신부터 출산까지 의료비와 바우처 혜택",
    description: "국민행복카드 임신·출산 진료비 바우처, 첫만남이용권, 고위험 임산부 의료비 지원, 산후조리비 및 난임시술비 지원 정보를 안내합니다.",
    color: "from-pink-500 to-rose-500",
    badgeBg: "bg-pink-50 text-pink-700 border-pink-200"
  },
  {
    id: "infant-rearing",
    name: "영아·유아 양육 지원",
    slug: "infant-rearing",
    oldLandingFile: "infant_rearing_landing.html",
    icon: "Baby",
    tagline: "매월 현금으로 받는 부모급여와 아동수당",
    description: "만 0~1세 최대 월 100만원 부모급여, 만 8세 미만 매월 10만원 아동수당, 가정양육수당 등 놓치면 안 되는 양육 현금성 지원금 총정리.",
    color: "from-amber-500 to-orange-500",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200"
  },
  {
    id: "childcare-education",
    name: "보육·교육 지원",
    slug: "childcare-education",
    oldLandingFile: "childcare_education_landing.html",
    icon: "GraduationCap",
    tagline: "어린이집 보육료 및 유아학비·돌봄 지원",
    description: "어린이집 보육료 바우처 지원, 유치원 유아학비(누리과정), 아이돌봄 서비스 및 공동육아나눔터 이용 혜택을 확인하세요.",
    color: "from-emerald-500 to-teal-500",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    id: "work-family",
    name: "일·가정 양립 지원",
    slug: "work-family",
    oldLandingFile: "work_family_landing.html",
    icon: "Briefcase",
    tagline: "2025-2026 대폭 개편된 육아휴직 & 출산휴가",
    description: "월 최대 250만원으로 인상된 육아휴직 급여, 6+6 부모육아휴직제, 배우자 출산휴가 20일 확대, 육아기 근로시간 단축 급여를 안내합니다.",
    color: "from-blue-500 to-indigo-500",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    id: "housing-support",
    name: "신혼부부·출산가구 주거 지원",
    slug: "housing-support",
    oldLandingFile: "housing_support_landing.html",
    icon: "Home",
    tagline: "신생아 특례대출 및 신혼·출산 특별공급",
    description: "최저 1%대 신생아 특례 디딤돌/버팀목 대출(소득요건 대폭 완화), 신혼부부 전세/구입자금 대출, 청약 특별공급 혜택 총정리.",
    color: "from-cyan-500 to-blue-600",
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200"
  },
  {
    id: "multi-child",
    name: "다자녀 가구 지원",
    slug: "multi-child",
    oldLandingFile: "multi_child_landing.html",
    icon: "Users",
    tagline: "2자녀부터 누리는 주거·세금·공공요금 감면",
    description: "다자녀 주택 특별공급, 자동차 취득세 감면, 전기·가스 공공요금 할인, 지자체 다자녀 카드 혜택 및 대학등록금 지원을 안내합니다.",
    color: "from-purple-500 to-violet-600",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200"
  },
  {
    id: "etc-support",
    name: "기타 취약계층 지원",
    slug: "etc-support",
    oldLandingFile: "etc_support_landing.html",
    icon: "ShieldAlert",
    tagline: "한부모가족 및 기초생활보장 맞춤 복지",
    description: "한부모가족 아동양육비 지원, 국민기초생활보장제도(생계·의료·주거·교육급여), 차상위계층 혜택 및 긴급복지 지원 정보를 제공합니다.",
    color: "from-slate-600 to-gray-700",
    badgeBg: "bg-slate-50 text-slate-700 border-slate-200"
  }
];
