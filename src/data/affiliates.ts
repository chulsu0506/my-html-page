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

// 사용자님의 쿠팡 파트너스 트래킹 ID
export const COUPANG_TRACKING_ID = "CFM56715495";

// 실시간 최신 랭킹/로켓배송/평점 우수 상품으로 연결하는 스마트 딥링크 생성 함수
export function getCoupangSearchUrl(keyword: string): string {
  return `https://www.coupang.com/np/search?component=&q=${encodeURIComponent(keyword)}&channel=user&lptag=${COUPANG_TRACKING_ID}`;
}

export const affiliateThemes: Record<string, AffiliateTheme> = {
  "first-encounter": {
    title: "🎁 첫만남이용권(200만/300만원) 바우처 추천 출산 준비물",
    subtitle: "정부 지원 첫만남이용권 국민행복카드로 결제 가능한 실시간 인기 출산템 BEST",
    reason: "첫만남이용권은 산후조리원뿐만 아니라 쿠팡 등 온·오프라인 매장에서 유모차, 카시트, 젖병소독기 등 육아 필수품 구매 시 사용 가능합니다.",
    badge: "바우처 사용 추천",
    products: [
      {
        id: "sterilizer",
        name: "UV-C LED 프리미엄 젖병소독기 베스트",
        categoryTag: "위생·수유",
        description: "신생아 면역력을 위한 99.9% 안심 살균 젖병소독기 실시간 랭킹",
        badge: "출산선물 1위",
        searchKeyword: "젖병소독기",
        defaultCoupangUrl: getCoupangSearchUrl("젖병소독기")
      },
      {
        id: "stroller",
        name: "오토폴딩 절충형/기내반입 휴대용 유모차",
        categoryTag: "외출·이동",
        description: "신생아부터 4세까지 가볍고 안전한 충격흡수 서스펜션 탑재",
        badge: "국민 육아템",
        searchKeyword: "오토폴딩 유모차",
        defaultCoupangUrl: getCoupangSearchUrl("오토폴딩 유모차")
      },
      {
        id: "carseat",
        name: "360도 회전형 신생아 I-SIZE 안전 카시트",
        categoryTag: "안전용품",
        description: "최신 유럽 I-Size 안전인증 및 측면 충격 완벽 보호",
        badge: "안전 필수템",
        searchKeyword: "신생아 카시트 360",
        defaultCoupangUrl: getCoupangSearchUrl("신생아 카시트 360")
      },
      {
        id: "baby-crib",
        name: "원터치 접이식 신생아 원목 아기침대",
        categoryTag: "수면·가구",
        description: "부모 허리 부담을 덜어주는 높이 조절 & 모빌 거치대",
        badge: "수면 만족도 1위",
        searchKeyword: "신생아 아기침대",
        defaultCoupangUrl: getCoupangSearchUrl("신생아 아기침대")
      }
    ]
  },
  "diaper-formula": {
    title: "🍼 기저귀·분유 바우처 & 부모급여 추천 소모품",
    subtitle: "매월 지원받는 양육비로 알뜰하게 장만하는 로켓배송 기저귀·분유",
    reason: "부모급여 및 기저귀·분유 바우처 카드로 온·오프라인 가맹점에서 알뜰하게 구매할 수 있습니다.",
    badge: "양육비 필수템",
    products: [
      {
        id: "formula-maker",
        name: "스마트 자동 분유제조기 (출수형)",
        categoryTag: "수유용품",
        description: "새벽 수유 7초 완성, 정밀 농도·온도 제어 국민 수유템",
        badge: "육아 삶의 질 1위",
        searchKeyword: "자동 분유제조기",
        defaultCoupangUrl: getCoupangSearchUrl("자동 분유제조기")
      },
      {
        id: "diapers",
        name: "초흡수 통기성 신생아/밴드형 기저귀",
        categoryTag: "위생용품",
        description: "발진 걱정 없는 12시간 안심 흡수 패드 로켓배송 특가",
        badge: "재구매율 1위",
        searchKeyword: "신생아 기저귀",
        defaultCoupangUrl: getCoupangSearchUrl("신생아 기저귀")
      },
      {
        id: "baby-wipes",
        name: "무자극 엠보싱 100% 순수 물티슈 (캡형)",
        categoryTag: "위생용품",
        description: "피부 저자극 테스트 완료, 도톰한 프리미엄 엠보싱 원단",
        badge: "가성비 추천",
        searchKeyword: "신생아 아기 물티슈",
        defaultCoupangUrl: getCoupangSearchUrl("신생아 아기 물티슈")
      }
    ]
  },
  "pregnancy-care": {
    title: "🤰 임신·출산 진료비 바우처 추천 케어 아이템",
    subtitle: "임산부의 편안한 태교와 건강한 순산을 위한 필수 헬스케어",
    reason: "임신 초기부터 산후조리까지 산모의 신체 변화를 편안하게 지켜주는 아이템입니다.",
    badge: "산모 힐링템",
    products: [
      {
        id: "folic-acid",
        name: "활성형 엽산 + 비타민D + 비타민B 복합제",
        categoryTag: "영양제",
        description: "임신 준비기~임신 초기 태아 신경관 정상 발달 필수 영양",
        badge: "임산부 영양제 1위",
        searchKeyword: "임산부 활성형 엽산",
        defaultCoupangUrl: getCoupangSearchUrl("임산부 활성형 엽산")
      },
      {
        id: "stretch-mark-cream",
        name: "저자극 고보습 임산부 튼살 크림 & 오일",
        categoryTag: "피부케어",
        description: "배 팽창으로 인한 피부 건조 및 가려움 집중 케어",
        badge: "산모 뷰티 베스트",
        searchKeyword: "임산부 튼살크림",
        defaultCoupangUrl: getCoupangSearchUrl("임산부 튼살크림")
      },
      {
        id: "body-pillow",
        name: "U자형 전신 임산부 바디필로우 (숙면 쿠션)",
        categoryTag: "수면지원",
        description: "만삭 산모의 왼쪽 눕기(심스 체위)를 돕는 인체공학 지지력",
        badge: "숙면 필수템",
        searchKeyword: "임산부 바디필로우",
        defaultCoupangUrl: getCoupangSearchUrl("임산부 바디필로우")
      }
    ]
  },
  "living-care": {
    title: "🏠 안전하고 쾌적한 우리 집 육아 환경 조성",
    subtitle: "층간소음 방지 매트 및 영유아 안전장치 추천",
    reason: "아이가 기어 다니고 걸음마를 시작할 때 부상 방지와 층간소음 예방을 위한 필수 아이템입니다.",
    badge: "홈케어 추천",
    products: [
      {
        id: "playmat",
        name: "고밀도 무이음 롤매트 / 폴더매트",
        categoryTag: "안전매트",
        description: "충격 흡수 및 층간소음 60% 저감 인증 국민 놀이방 매트",
        badge: "국민 놀이매트",
        searchKeyword: "층간소음 아기매트",
        defaultCoupangUrl: getCoupangSearchUrl("층간소음 아기매트")
      },
      {
        id: "babyroom",
        name: "미끄럼 방지 안전 베이비룸 울타리 세트",
        categoryTag: "안전용품",
        description: "모서리 라운딩 처리 및 이중 잠금 도어로 안전 구역 확보",
        badge: "안전 지킴이",
        searchKeyword: "베이비룸",
        defaultCoupangUrl: getCoupangSearchUrl("베이비룸")
      }
    ]
  }
};

export const FTC_DISCLOSURE = "※ 이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받을 수 있으며 구매자에게는 어떠한 추가 비용도 발생하지 않습니다.";
