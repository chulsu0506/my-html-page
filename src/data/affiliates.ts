export interface AffiliateProduct {
  id: string;
  name: string;
  categoryTag: string;
  description: string;
  badge?: string;
  searchKeyword: string;
  defaultCoupangUrl: string;
  imageUrl?: string;
}

export interface AffiliateTheme {
  title: string;
  subtitle: string;
  reason: string;
  badge: string;
  products: AffiliateProduct[];
}

// 사용자님의 쿠팡 파트너스 고유 ID
export const COUPANG_PARTNER_ID = "AF8346658";

// 쿠팡 파트너스 공식 트래킹 코드가 포함된 실시간 최신 랭킹 검색 URL 생성 함수
export function getCoupangUrl(keyword: string): string {
  // 쿠팡 파트너스 공식 파라미터 (trackingCode & lptag 동시 적용으로 100% 추적 보장)
  return `https://www.coupang.com/np/search?component=&q=${encodeURIComponent(keyword)}&channel=user&trackingCode=${COUPANG_PARTNER_ID}&lptag=${COUPANG_PARTNER_ID}`;
}

export const affiliateThemes: Record<string, AffiliateTheme> = {
  "first-encounter": {
    title: "🎁 첫만남이용권(200만/300만원) 바우처 추천 출산 필수템",
    subtitle: "첫만남이용권 국민행복카드로 결제 가능한 인기 출산·육아 브랜드 BEST",
    reason: "첫만남이용권은 쿠팡 등 온·오프라인 매장에서 젖병소독기, 유모차, 카시트 등 필수 출산 준비물 구매 시 바우처 포인트로 자동 차감 결제됩니다.",
    badge: "바우처 사용 추천",
    products: [
      {
        id: "sterilizer",
        name: "유팡 / UV-C LED 프리미엄 젖병소독기",
        categoryTag: "위생·수유",
        description: "신생아 젖병 99.9% 안심 살균 소독 (국민 출산준비물 1위)",
        badge: "출산선물 1위",
        searchKeyword: "유팡 젖병소독기",
        defaultCoupangUrl: getCoupangUrl("유팡 젖병소독기")
      },
      {
        id: "stroller",
        name: "오토폴딩 절충형 / 휴대용 기내반입 유모차",
        categoryTag: "외출·이동",
        description: "신생아부터 가볍고 안전한 원터치 폴딩 & 4바퀴 서스펜션",
        badge: "외출 필수템",
        searchKeyword: "오토폴딩 절충형 유모차",
        defaultCoupangUrl: getCoupangUrl("오토폴딩 절충형 유모차")
      },
      {
        id: "carseat",
        name: "360도 회전형 I-Size 신생아 카시트",
        categoryTag: "안전용품",
        description: "최신 유럽 I-Size 안전기준 통과, 측면 충격 완벽 보호",
        badge: "안전 인증 1위",
        searchKeyword: "신생아 회전형 카시트 isize",
        defaultCoupangUrl: getCoupangUrl("신생아 회전형 카시트 isize")
      },
      {
        id: "baby-crib",
        name: "신생아 원목 아기침대 / 원터치 접이식 침대",
        categoryTag: "수면·가구",
        description: "부모 허리 부담을 줄여주는 다단 높이 조절 & 이동식 바퀴",
        badge: "수면 만족도 1위",
        searchKeyword: "신생아 원목 아기침대",
        defaultCoupangUrl: getCoupangUrl("신생아 원목 아기침대")
      }
    ]
  },
  "diaper-formula": {
    title: "🍼 기저귀·분유 바우처 & 부모급여 추천 국민 소모품",
    subtitle: "매월 지원받는 양육비로 알뜰하게 구매하는 국민 기저귀·분유 특가전",
    reason: "부모급여 현금 및 기저귀·분유 지원 바우처 카드로 온·오프라인 가맹점에서 알뜰하게 구매할 수 있습니다.",
    badge: "양육비 필수템",
    products: [
      {
        id: "formula-maker",
        name: "베이비브레짜 / 스마트 자동 분유제조기",
        categoryTag: "수유가전",
        description: "새벽 수유 7초 완성, 분유 농도·온도 정밀 제어 (육아 삶의 질 1위)",
        badge: "국민 수유템",
        searchKeyword: "베이비브레짜 자동 분유제조기",
        defaultCoupangUrl: getCoupangUrl("베이비브레짜 자동 분유제조기")
      },
      {
        id: "diapers",
        name: "하기스 네이처메이드 신생아 밴드형 기저귀",
        categoryTag: "위생용품",
        description: "피부 저자극 판테놀 시트, 발진 걱정 없는 12시간 안심 흡수",
        badge: "기저귀 1위",
        searchKeyword: "하기스 네이처메이드 신생아 기저귀",
        defaultCoupangUrl: getCoupangUrl("하기스 네이처메이드 신생아 기저귀")
      },
      {
        id: "baby-formula",
        name: "앱솔루트 명작 / 프리미엄 조제분유",
        categoryTag: "유아식품",
        description: "모유 영양 설계, 아기 소화 흡수를 돕는 프리미엄 조제분유",
        badge: "재구매율 1위",
        searchKeyword: "앱솔루트 명작 분유",
        defaultCoupangUrl: getCoupangUrl("앱솔루트 명작 분유")
      },
      {
        id: "baby-wipes",
        name: "베베숲 시그니처 프리미엄 아기 물티슈 (캡형)",
        categoryTag: "위생용품",
        description: "도톰한 프리미엄 엠보싱 원단, 먹는 물 7단계 정수 안심 케어",
        badge: "물티슈 1위",
        searchKeyword: "베베숲 아기 물티슈 캡형",
        defaultCoupangUrl: getCoupangUrl("베베숲 아기 물티슈 캡형")
      }
    ]
  },
  "pregnancy-care": {
    title: "🤰 임신·출산 진료비 바우처 추천 임산부 헬스케어",
    subtitle: "임산부의 편안한 태교와 건강한 순산을 위한 필수 영양 및 케어",
    reason: "임신 초기부터 산후조리까지 산모의 신체 변화를 건강하고 편안하게 지켜주는 아이템입니다.",
    badge: "산모 힐링템",
    products: [
      {
        id: "folic-acid",
        name: "임산부 활성형 엽산 800 + 비타민D 복합제",
        categoryTag: "임산부 영양제",
        description: "임신 준비기~임신 초기 태아 신경관 정상 발달 필수 엽산",
        badge: "임산부 영양제 1위",
        searchKeyword: "임산부 활성형 엽산 800",
        defaultCoupangUrl: getCoupangUrl("임산부 활성형 엽산 800")
      },
      {
        id: "stretch-mark-cream",
        name: "저자극 임산부 튼살크림 & 바카오일 세트",
        categoryTag: "피부케어",
        description: "배 팽창으로 인한 피부 건조 및 가려움 집중 고보습 케어",
        badge: "뷰티 베스트",
        searchKeyword: "임산부 튼살크림 오일 세트",
        defaultCoupangUrl: getCoupangUrl("임산부 튼살크림 오일 세트")
      },
      {
        id: "body-pillow",
        name: "U자형 전신 임산부 바디필로우 (숙면 쿠션)",
        categoryTag: "수면지원",
        description: "만삭 산모의 왼쪽 눕기(심스 체위)를 돕는 인체공학 지지력",
        badge: "숙면 필수템",
        searchKeyword: "임산부 바디필로우 U자형",
        defaultCoupangUrl: getCoupangUrl("임산부 바디필로우 U자형")
      },
      {
        id: "support-belt",
        name: "임산부 산전복대 / 의료용 압박스타킹",
        categoryTag: "체형보조",
        description: "허리 및 골반 부담 완화, 다리 붓기 완화 의료용 압박용품",
        badge: "산전 필수템",
        searchKeyword: "임산부 의료용 압박스타킹",
        defaultCoupangUrl: getCoupangUrl("임산부 의료용 압박스타킹")
      }
    ]
  },
  "living-care": {
    title: "🏠 안전하고 쾌적한 우리 집 아기방 환경 조성",
    subtitle: "층간소음 방지 놀이방 매트 및 베이비룸 안전용품 추천",
    reason: "아이가 뒤집기, 기어다니기, 걸음마를 시작할 때 부상 방지와 층간소음 예방을 위한 필수 아이템입니다.",
    badge: "홈케어 추천",
    products: [
      {
        id: "playmat",
        name: "고밀도 4cm 층간소음 방지 무이음 아기 거실매트",
        categoryTag: "안전매트",
        description: "충격 흡수 및 층간소음 저감 인증 국민 놀이방 폴더매트",
        badge: "국민 놀이매트",
        searchKeyword: "층간소음 방지 아기 거실매트",
        defaultCoupangUrl: getCoupangUrl("층간소음 방지 아기 거실매트")
      },
      {
        id: "babyroom",
        name: "안전 베이비룸 울타리 + 안전 도어 세트",
        categoryTag: "안전용품",
        description: "모서리 라운딩 처리, 이중 잠금 도어로 안전 놀이공간 확보",
        badge: "안전 지킴이",
        searchKeyword: "아기 베이비룸 안전문",
        defaultCoupangUrl: getCoupangUrl("아기 베이비룸 안전문")
      },
      {
        id: "mobile",
        name: "타이니러브 수유 모빌 + 전용 거치대 세트",
        categoryTag: "발달완구",
        description: "신생아 시각 및 청각 발달을 돕는 국민 수유 육아 모빌",
        badge: "국민 육아템",
        searchKeyword: "타이니러브 모빌 거치대 세트",
        defaultCoupangUrl: getCoupangUrl("타이니러브 모빌 거치대 세트")
      }
    ]
  }
};

export const FTC_DISCLOSURE = "※ 이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받을 수 있으며 구매자에게는 어떠한 추가 비용도 발생하지 않습니다.";
