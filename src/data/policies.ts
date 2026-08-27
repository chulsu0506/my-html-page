export interface PolicyFaq {
  question: string;
  answer: string;
}

export interface PolicyDetail {
  slug: string;
  oldFileName: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  shortTitle: string;
  summary: string;
  targetAudience: string;
  benefitSummary: string;
  keyAmount: string;
  badge: string;
  eligibility: string[];
  benefits: string[];
  howToApply: string[];
  requiredDocuments: string[];
  officialUrl: string;
  officialOrg: string;
  lastVerifiedDate: string;
  affiliateThemeKey?: string;
  faqs: PolicyFaq[];
  relatedSlugs?: string[];
}

export const policies: PolicyDetail[] = [
  // 1. 임신·출산 지원
  {
    slug: "benefit-card",
    oldFileName: "pregnancy_childbirth_benefit_card.html",
    categorySlug: "pregnancy-childbirth",
    categoryName: "임신·출산 지원",
    title: "국민행복카드 임신·출산 진료비 바우처 지원",
    shortTitle: "국민행복카드 진료비 지원",
    summary: "임신과 출산에 관련된 진료비 및 약제·치료재료 구입비를 국민행복카드 바우처로 지원하여 임산부의 경제적 부담을 대폭 완화합니다.",
    targetAudience: "대한민국 국적의 모든 임신·출산부 (소득 기준 없음)",
    benefitSummary: "단태아 100만원, 다태아(쌍둥이 이상) 140만원 바우처 지급",
    keyAmount: "최대 140만원",
    badge: "필수 바우처",
    eligibility: [
      "건강보험 가입자 또는 피부양자 중 임신·출산이 확인된 자",
      "임신 중이거나 출산(유산·사산 포함) 후 2년 이내인 여성",
      "소득 및 재산 기준 전혀 무관 (100% 전원 지급)"
    ],
    benefits: [
      "단태아(1자녀): 100만원 지원",
      "다태아(쌍둥이, 삼둥이 등): 140만원 지원",
      "분만취약지 거주 임산부의 경우 20만원 추가 지원",
      "사용처: 산부인과, 한의원, 치과, 조산원 등 전국 병·의원 및 약국, 2세 미만 영유아 진료비",
      "사용 기간: 카드 수령일로부터 출산일(유산일) 이후 2년까지"
    ],
    howToApply: [
      "산부인과 방문 후 '건강보험 임신·출산 진료비 지급 신청서' 발급 (또는 병원에서 공단 전산 등록)",
      "국민행복카드 발급 카드사(KB국민, 신한, 삼성, 롯데, NH농협 등) 또는 국민건강보험공단 웹사이트 신청",
      "정부24(gov.kr) 또는 복지로(bokjiro.go.kr) '원스톱 서비스'를 통해서도 간편 신청 가능"
    ],
    requiredDocuments: [
      "임신확인서 (병원 발급)",
      "신분증",
      "국민행복카드 바우처 신청서"
    ],
    officialUrl: "https://www.nhis.or.kr",
    officialOrg: "보건복지부 / 국민건강보험공단",
    lastVerifiedDate: "2025년 8월 기준",
    affiliateThemeKey: "pregnancy-care",
    faqs: [
      {
        question: "국민행복카드로 한의원이나 치과 진료도 받을 수 있나요?",
        answer: "네! 산부인과뿐만 아니라 전국 모든 병·의원, 한의원(산후조리 한약 등), 치과, 약국에서 임산부 진료 및 치료 목적으로 사용 가능합니다."
      },
      {
        question: "남은 잔액은 아기에게 쓸 수 있나요?",
        answer: "네! 출산 후 남은 바우처 잔액은 출생일로부터 2년 동안 2세 미만 자녀의 진료비 및 처방 약제비로 사용할 수 있습니다."
      },
      {
        question: "유산이나 사산한 경우에도 지원금이 지급되나요?",
        answer: "네, 유산이나 사산한 경우에도 진단서를 제출하면 동일하게 100만원(다태아 140만원) 바우처가 지급되어 신체 회복 치료에 사용할 수 있습니다."
      }
    ],
    relatedSlugs: ["first-encounter-voucher", "postnatal-care", "high-risk-support"]
  },
  {
    slug: "first-encounter-voucher",
    oldFileName: "pregnancy_childbirth_birth_grant.html",
    categorySlug: "pregnancy-childbirth",
    categoryName: "임신·출산 지원",
    title: "첫만남이용권 출산지원 바우처 (첫째 200만, 둘째 300만)",
    shortTitle: "첫만남이용권 바우처",
    summary: "출생 아동에게 첫만남이용권 바우처를 일시금으로 지급하여 초기 육아용품 구매와 산후조리 비용을 전폭 지원합니다.",
    targetAudience: "대한민국에 주민등록된 모든 출생 아동",
    benefitSummary: "첫째아 200만원, 둘째아 이상 300만원 국민행복카드 바우처 지급",
    keyAmount: "최대 300만원",
    badge: "인기 정책",
    eligibility: [
      "대한민국 국적 및 유효한 주민등록번호를 부여받은 출생아",
      "부모의 소득·재산 무관 100% 지급",
      "출생일로부터 1년 이내 신청 필수"
    ],
    benefits: [
      "첫째 아이: 200만원 바우처 (일시 지급)",
      "둘째 아이 이상: 300만원 바우처 (일시 지급)",
      "지급 형태: 국민행복카드 포인트 바우처",
      "사용처: 유흥/사행업종, 레저업종 등을 제외한 전 업종 (쿠팡 등 온라인 쇼핑몰, 백화점, 대형마트, 산후조리원, 병원, 약국 등 자유롭게 결제)",
      "사용 기한: 아동 출생일로부터 1년 (기한 내 미사용 시 소멸)"
    ],
    howToApply: [
      "출생신고 시 주민센터 '행복출산 원스톱 서비스'로 현장 동시 신청",
      "온라인: 복지로(bokjiro.go.kr) 또는 정부24(gov.kr)에서 공인인증서 로그인 후 신청"
    ],
    requiredDocuments: [
      "출생증명서",
      "신분증",
      "국민행복카드(보유 시 즉시 포인트 충전, 미보유 시 신규 발급)"
    ],
    officialUrl: "https://www.bokjiro.go.kr",
    officialOrg: "보건복지부",
    lastVerifiedDate: "2025년 8월 기준",
    affiliateThemeKey: "first-encounter",
    faqs: [
      {
        question: "쿠팡이나 인터넷 쇼핑몰에서도 첫만남이용권 결제가 되나요?",
        answer: "네! 국민행복카드를 온라인 결제 수단(일반 신용카드 결제)으로 등록 후 결제하면 첫만남이용권 바우처 잔액에서 자동으로 차감됩니다."
      },
      {
        question: "쌍둥이를 출산하면 얼마를 받나요?",
        answer: "쌍둥이의 경우 첫째아 200만원 + 둘째아 300만원으로 총 500만원의 첫만남이용권 바우처가 지급됩니다."
      }
    ],
    relatedSlugs: ["benefit-card", "parent-benefit", "child-allowance"]
  },
  {
    slug: "postnatal-care",
    oldFileName: "pregnancy_childbirth_postnatal_care.html",
    categorySlug: "pregnancy-childbirth",
    categoryName: "임신·출산 지원",
    title: "산모·신생아 건강관리 지원사업 (산후도우미 정부지원)",
    shortTitle: "정부지원 산후도우미",
    summary: "전문 교육을 이수한 산모·신생아 건강관리사가 가정을 방문하여 산후 회복과 신생아 양육을 돕는 정부 바우처 서비스입니다.",
    targetAudience: "국내 출산 가정 (기준중위소득 150% 이하 및 지자체별 예외지원)",
    benefitSummary: "산후도우미 이용료의 50%~80% 정부 지원 바우처",
    keyAmount: "최대 수백만원 지원",
    badge: "산후 케어",
    eligibility: [
      "산모 또는 배우자가 건강보험 가입자",
      "기준중위소득 150% 이하 가구 (지자체별 조례에 따라 소득 기준 전면 폐지 지역 다수)",
      "다태아, 셋째아 이상, 장애인 산모, 희귀난치성 질환자 등은 소득 무관 지원"
    ],
    benefits: [
      "전문 산후관리사 파견 (산모 영양관리, 유방케어, 신생아 목욕 및 수유 지원 등)",
      "단태아/다태아 및 첫째/둘째/셋째에 따라 최소 5일 ~ 최장 25일까지 바우처 기간 차등 지원",
      "정부지원금 차감 후 본인부담금만 결제"
    ],
    howToApply: [
      "출산 예정일 40일 전부터 출산일로부터 30일까지 신청",
      "주소지 관할 보건소 방문 신청 또는 복지로(bokjiro.go.kr) 온라인 신청"
    ],
    requiredDocuments: [
      "산모 신분증",
      "출산(예정)증명서 (임신확인서 또는 출생증명서)",
      "건강보험료 납부확인서"
    ],
    officialUrl: "https://www.socialservice.or.kr",
    officialOrg: "보건복지부 / 사회서비스전자바우처",
    lastVerifiedDate: "2025년 8월 기준",
    affiliateThemeKey: "pregnancy-care",
    faqs: [
      {
        question: "소득 기준을 초과하면 전혀 지원을 못 받나요?",
        answer: "현재 서울, 경기, 부산 등 대다수 지자체에서 자체 예산을 투입하여 '소득 기준 초과 가정(예외지원)'에도 지원금을 지급하고 있으므로 관할 보건소에 확인하시는 것을 권장합니다."
      }
    ]
  },
  {
    slug: "diaper-formula-support",
    oldFileName: "pregnancy_childbirth_diaper_formula_support.html",
    categorySlug: "pregnancy-childbirth",
    categoryName: "임신·출산 지원",
    title: "저소득층 기저귀·조제분유 지원사업",
    shortTitle: "기저귀·분유 바우처",
    summary: "영아를 양육하는 취약계층 가구에 기저귀와 조제분유 구매 바우처를 매월 국민행복카드로 지급합니다.",
    targetAudience: "만 2세 미만 영아를 둔 기초생활수급자, 차상위계층, 한부모가족, 기준중위소득 80% 이하 다자녀 가구",
    benefitSummary: "기저귀 월 9만원, 조제분유 월 11만원 국민행복카드 바우처",
    keyAmount: "월 최대 20만원",
    badge: "바우처 지원",
    eligibility: [
      "만 2세 미만(0~24개월)의 영아를 둔 가구",
      "국민기초생활보장 생계·의료·주거·교육급여 수급자, 차상위계층, 한부모가족",
      "기준중위소득 80% 이하인 다자녀(2인 이상) 또는 장애인 가구"
    ],
    benefits: [
      "기저귀 바우처: 월 90,000원",
      "조제분유 바우처: 월 110,000원 (산모 사망, 질환 등으로 모유수유 불가 시)",
      "3개월 단위로 국민행복카드 포인트 바우처 충전",
      "사용처: 이마트, 홈플러스, 롯데마트, GS25, CU, 쿠팡, 우체국쇼핑 등"
    ],
    howToApply: [
      "주소지 관할 보건소 또는 행정복지센터 방문",
      "복지로(bokjiro.go.kr) 또는 정부24 온라인 신청"
    ],
    requiredDocuments: [
      "신청인 신분증",
      "주민등록등본",
      "영아 부모의 소득 증빙 서류 (수급자 증명서 등)"
    ],
    officialUrl: "https://www.bokjiro.go.kr",
    officialOrg: "보건복지부",
    lastVerifiedDate: "2025년 8월 기준",
    affiliateThemeKey: "diaper-formula",
    faqs: [
      {
        question: "기저귀 바우처는 언제까지 지원되나요?",
        answer: "아동이 생후 24개월이 되는 달의 전날까지 매월(3개월 단위 충전) 지원됩니다."
      }
    ]
  },
  {
    slug: "high-risk-support",
    oldFileName: "pregnancy_childbirth_high_risk_support.html",
    categorySlug: "pregnancy-childbirth",
    categoryName: "임신·출산 지원",
    title: "고위험 임산부 의료비 지원사업 (19대 질환 전면 확대)",
    shortTitle: "고위험 임산부 의료비",
    summary: "조기진통, 분만관련 출혈, 중증 임신중독증 등 19대 고위험 임신 질환으로 입원 치료받은 임산부의 비급여 본인부담금을 최대 300만원까지 환급합니다.",
    targetAudience: "19대 고위험 임신 질환으로 진단받고 입원치료를 받은 임산부 (소득기준 폐지)",
    benefitSummary: "전액본인부담금 및 비급여 진료비의 90% 지원 (최대 300만원)",
    keyAmount: "최대 300만원",
    badge: "의료비 환급",
    eligibility: [
      "19대 고위험 임신 질환(조기진통, 분만출혈, 임신중독증, 양막조기파열, 태반조기박리, 전치태반 등) 진단자",
      "입원 치료를 받은 임산부",
      "2024년부터 소득 기준(기준중위소득 180%) 전면 폐지되어 누구나 지원 가능"
    ],
    benefits: [
      "입원 치료비 중 전액본인부담금 및 비급여 진료비의 90% 지원",
      "1인당 최대 지원 한도: 300만원",
      "상급병실료 차액, 환자 특식 등 제외 항목을 뺀 실질 의료비 대부분 환급"
    ],
    howToApply: [
      "분만일로부터 6개월 이내 관할 보건소 방문 신청",
      "e보건소(e-health.go.kr) 또는 아이사랑포털 온라인 신청"
    ],
    requiredDocuments: [
      "의사 진단서 (질환명 및 질병코드 포함)",
      "입·퇴원 확인서 및 진료비 영수증/상세내역서",
      "산모 명의 통장 사본, 신분증"
    ],
    officialUrl: "https://www.e-health.go.kr",
    officialOrg: "보건복지부",
    lastVerifiedDate: "2025년 8월 기준",
    affiliateThemeKey: "pregnancy-care",
    faqs: [
      {
        question: "여러 번 입원한 경우 중복 신청이 가능한가요?",
        answer: "네, 임신 기간 중 동일 질환 또는 서로 다른 고위험 질환으로 여러 차례 입원한 경우 합산하여 300만원 한도 내에서 지원받을 수 있습니다."
      }
    ]
  },
  {
    slug: "teen-mom-support",
    oldFileName: "pregnancy_childbirth_teen_mom_support.html",
    categorySlug: "pregnancy-childbirth",
    categoryName: "임신·출산 지원",
    title: "청소년 산모 임신·출산 의료비 및 양육 지원",
    shortTitle: "청소년 산모 지원",
    summary: "만 19세 이하 청소년 산모에게 국민행복카드 바우처 120만원을 추가 지원하여 안전한 출산과 모자 건강을 도모합니다.",
    targetAudience: "만 19세 이하 청소년 임산부 (소득 무관)",
    benefitSummary: "임신 1회당 120만원 국민행복카드 바우처 추가 지원",
    keyAmount: "120만원 추가",
    badge: "청소년 특화",
    eligibility: [
      "신청일 기준 만 19세 이하 청소년 산모",
      "소득 및 재산 기준 없음 (일반 임신출산 진료비 100만원과 별도로 중복 지원)"
    ],
    benefits: [
      "청소년산모 임신·출산 의료비 바우처: 120만원",
      "일반 국민행복카드 100만원과 합산 시 총 220만원 바우처 사용 가능",
      "산전검사, 초음파, 분만비, 산후치료비 및 영유아 진료비 사용 가능"
    ],
    howToApply: [
      "사회서비스전자바우처 홈페이지(socialservice.or.kr) 온라인 신청 또는 관할 보건소"
    ],
    requiredDocuments: [
      "임신확인서",
      "주민등록등본 (만 19세 이하 확인)"
    ],
    officialUrl: "https://www.socialservice.or.kr",
    officialOrg: "보건복지부",
    lastVerifiedDate: "2025년 8월 기준",
    faqs: []
  },

  // 2. 영아·유아 양육 지원
  {
    slug: "parent-benefit",
    oldFileName: "infant_rearing_parent_benefit.html",
    categorySlug: "infant-rearing",
    categoryName: "영아·유아 양육 지원",
    title: "2025-2026 부모급여 (만 0세 월 100만, 만 1세 월 50만 현금 지원)",
    shortTitle: "부모급여 (만0~1세)",
    summary: "생후 0~23개월 영아를 양육하는 부모에게 매월 최대 100만원의 현금을 지급하여 출산 초기 양육 부담을 획기적으로 덜어줍니다.",
    targetAudience: "만 0세(0~11개월) 및 만 1세(12~23개월) 아동 양육 가구",
    benefitSummary: "만 0세 월 100만원, 만 1세 월 50만원 현금 계좌 입금",
    keyAmount: "월 최대 100만원 (총 1,800만원)",
    badge: "핵심 1위 정책",
    eligibility: [
      "대한민국 국적 및 주민등록번호를 보유한 만 0세(0~11개월) 및 만 1세(12~23개월) 아동",
      "부모의 소득·재산·맞벌이 여부 무관 100% 전원 지급",
      "가정양육뿐만 아니라 어린이집 이용 시에도 지원"
    ],
    benefits: [
      "만 0세 (생후 0~11개월): 매월 1,000,000원 지급 (1년간 총 1,200만원)",
      "만 1세 (생후 12~23개월): 매월 500,000원 지급 (1년간 총 600만원)",
      "0~1세 24개월간 총 1,800만원 현금성 지원",
      "어린이집 이용 시: 보육료 바우처 지원금을 차감한 차액을 부모 계좌로 현금 입금",
      "지급일: 매월 25일 (휴일인 경우 전날 입금)"
    ],
    howToApply: [
      "출생신고 시 주민센터 원스톱 서비스 신청 (출생일로부터 60일 이내 신청 시 소급 지급)",
      "온라인: 복지로(bokjiro.go.kr) 또는 정부24(gov.kr) 웹/앱에서 신청"
    ],
    requiredDocuments: [
      "신청인 신분증",
      "통장 사본 (부모 또는 아동 명의)",
      "출생증명서(주민센터 출생신고 시)"
    ],
    officialUrl: "https://www.bokjiro.go.kr",
    officialOrg: "보건복지부",
    lastVerifiedDate: "2025년 8월 기준",
    affiliateThemeKey: "diaper-formula",
    faqs: [
      {
        question: "아동수당 10만원과 부모급여는 중복으로 받을 수 있나요?",
        answer: "네! 아동수당(월 10만원)과 부모급여(월 100만원/50만원)는 완전히 별개의 제도이므로 만 0세 기준 매월 총 110만원을 함께 받습니다."
      },
      {
        question: "어린이집에 보내면 부모급여를 아예 못 받나요?",
        answer: "아닙니다! 어린이집 보육료(약 54만원)를 바우처로 결제하고, 남는 차액(만 0세 기준 약 46만원)은 부모님 계좌로 현금 입금됩니다."
      }
    ],
    relatedSlugs: ["child-allowance", "daycare-subsidy", "first-encounter-voucher"]
  },
  {
    slug: "child-allowance",
    oldFileName: "infant_rearing_child_allowance.html",
    categorySlug: "infant-rearing",
    categoryName: "영아·유아 양육 지원",
    title: "아동수당 (만 8세 미만 매월 10만원 지급)",
    shortTitle: "아동수당 (만 8세 미만)",
    summary: "모든 만 8세 미만(0~95개월) 아동에게 매월 10만원을 지급하여 아동의 기본적 권리와 복지 증진을 도모합니다.",
    targetAudience: "대한민국 국적의 만 8세 미만 모든 아동 (0~95개월, 총 96개월간 지급)",
    benefitSummary: "매월 10만원 현금 지급 (아이 1인당 총 960만원)",
    keyAmount: "월 10만원 (총 960만원)",
    badge: "전 국민 지급",
    eligibility: [
      "만 8세 생일이 도달하는 달의 전월까지 (0~95개월)",
      "소득 및 재산 무관 100% 지급",
      "복수국적자 및 난민 인정 아동 포함"
    ],
    benefits: [
      "매월 100,000원 계좌 입금",
      "지급일: 매월 25일",
      "부모급여, 가정양육수당, 첫만남이용권과 중복 수령 가능"
    ],
    howToApply: [
      "출생신고 시 주민센터 '행복출산 원스톱서비스'로 동시 신청",
      "복지로(bokjiro.go.kr) 또는 정부24 온라인 신청"
    ],
    requiredDocuments: [
      "신청인 신분증",
      "통장 사본"
    ],
    officialUrl: "https://www.bokjiro.go.kr",
    officialOrg: "보건복지부",
    lastVerifiedDate: "2025년 8월 기준",
    affiliateThemeKey: "care-play",
    faqs: [
      {
        question: "해외에 체류 중인 아동도 아동수당을 받을 수 있나요?",
        answer: "아동이 90일 이상 지속하여 국외에 체류하는 경우, 90일이 되는 다음 달부터 귀국할 때까지 지급이 정지됩니다."
      }
    ],
    relatedSlugs: ["parent-benefit", "first-encounter-voucher"]
  },
  {
    slug: "home-childcare-allowance",
    oldFileName: "infant_rearing_home_childcare_allowance.html",
    categorySlug: "infant-rearing",
    categoryName: "영아·유아 양육 지원",
    title: "가정양육수당 (만 2세~86개월 미만 가정 보육 지원)",
    shortTitle: "가정양육수당",
    summary: "어린이집이나 유치원을 이용하지 않고 가정에서 직접 돌보는 만 2세 이상 미취학 아동에게 매월 10만원을 지급합니다.",
    targetAudience: "어린이집·유치원·종일제아이돌봄을 이용하지 않는 24개월~86개월 미만 아동",
    benefitSummary: "매월 100,000원 현금 입금",
    keyAmount: "월 10만원",
    badge: "가정 돌봄",
    eligibility: [
      "생후 24개월 이상부터 초등학교 입학 전년도 12월(최대 86개월 미만)까지",
      "어린이집, 유치원 미이용 및 종일제 아이돌봄 미이용 가구"
    ],
    benefits: [
      "매월 25일 10만원 현금 지급",
      "만 0~1세는 부모급여가 지급되므로, 부모급여가 종료되는 만 24개월부터 가정양육수당 수급 대상으로 자동 전환"
    ],
    howToApply: [
      "어린이집 퇴소 후 복지로(bokjiro.go.kr)에서 보육료 ➔ 양육수당 서비스 변경 신청",
      "주민센터 방문 신청"
    ],
    requiredDocuments: [
      "신청인 신분증, 통장 사본"
    ],
    officialUrl: "https://www.bokjiro.go.kr",
    officialOrg: "보건복지부",
    lastVerifiedDate: "2025년 8월 기준",
    faqs: []
  },

  // 3. 일·가정 양립 지원
  {
    slug: "childcare-leave",
    oldFileName: "work_family_childcare_leave.html",
    categorySlug: "work-family",
    categoryName: "일·가정 양립 지원",
    title: "2025-2026 육아휴직 급여 대폭 개편 (월 최대 250만원 인상 및 6+6제)",
    shortTitle: "육아휴직 급여 (최대 250만)",
    summary: "2025년부터 육아휴직 급여 상한액이 월 최대 250만원으로 대폭 인상되었으며, 부모가 함께 쓰는 6+6 부모육아휴직제는 최대 450만원까지 지원됩니다.",
    targetAudience: "만 8세 이하 또는 초등 2학년 이하 자녀를 둔 고용보험 가입 근로자",
    benefitSummary: "1~3개월 최대 250만원, 4~6개월 200만원, 7~12개월 160만원 (사후지급금 폐지)",
    keyAmount: "월 최대 250만원",
    badge: "2025 개편 핵심",
    eligibility: [
      "육아휴직 시작일 이전 고용보험 피보험 단위기간 합산 180일 이상",
      "만 8세 이하 또는 초등학교 2학년 이하의 자녀 양육 목적",
      "부모 각각 1년씩(부모 모두 3개월 이상 사용 시 1년 6개월로 연장) 사용 가능"
    ],
    benefits: [
      "1~3개월차: 통상임금 100% (상한액 월 250만원, 하한액 70만원)",
      "4~6개월차: 통상임금 100% (상한액 월 200만원)",
      "7~12개월차: 통상임금 80% (상한액 월 160만원)",
      "6+6 부모육아휴직제: 부모가 순차/동시 사용 시 첫 6개월 동안 월 최대 200만~450만원 상한 적용",
      "사후지급금(복직 6개월 후 25% 지급) 제도 폐지 ➔ 휴직 기간 중 전액 100% 즉시 지급",
      "한부모 근로자: 첫 3개월 상한 300만원 지급"
    ],
    howToApply: [
      "사업주에게 육아휴직 개시 30일 전 신청서 제출",
      "육아휴직 시작 후 1개월 이후부터 고용24(work24.go.kr) 또는 고용센터 방문 신청"
    ],
    requiredDocuments: [
      "육아휴직 확인서 (회사 발급)",
      "통상임금 증명자료 (임금대장, 근로계약서)",
      "가족관계증명서"
    ],
    officialUrl: "https://www.work24.go.kr",
    officialOrg: "고용노동부",
    lastVerifiedDate: "2025년 8월 기준",
    affiliateThemeKey: "care-play",
    faqs: [
      {
        question: "아빠와 엄마가 동시에 육아휴직을 써도 되나요?",
        answer: "네! 부모가 동시에 육아휴직을 쓸 수 있으며, '6+6 부모육아휴직제'가 적용되어 부모 각각 매월 최대 200만~450만원의 급여를 수령할 수 있습니다."
      },
      {
        question: "육아휴직 기간은 최대 몇 개월까지 가능한가요?",
        answer: "기본 1년이며, 부모가 모두 3개월 이상 육아휴직을 사용하는 경우 부모 각각 최대 1년 6개월(총 3년)까지 연장됩니다."
      }
    ],
    relatedSlugs: ["paternity-leave", "maternity-leave", "reduced-hours-childcare"]
  },
  {
    slug: "paternity-leave",
    oldFileName: "work_family_paternity_leave.html",
    categorySlug: "work-family",
    categoryName: "일·가정 양립 지원",
    title: "배우자 출산휴가 급여 (유급 20일 확대 및 분할 사용)",
    shortTitle: "배우자 출산휴가 (유급 20일)",
    summary: "배우자의 출산 시 남성 근로자가 유급으로 쉴 수 있는 출산휴가 기간이 기존 10일에서 20일로 대폭 확대되었습니다.",
    targetAudience: "배우자가 출산한 남성 근로자 (모든 사업장)",
    benefitSummary: "유급 20일 휴가 부여, 중소기업의 경우 정부가 급여 전액 지원",
    keyAmount: "유급 20일",
    badge: "대폭 확대",
    eligibility: [
      "배우자가 출산한 모든 남성 근로자",
      "출산일로부터 120일 이내에 청구",
      "최대 3회까지 분할 사용 가능"
    ],
    benefits: [
      "휴가 일수: 유급 20일 (주말/공휴일 제외 근무일 기준)",
      "중소기업(우선지원대상기업): 정부가 20일치 통상임금 전액 급여 지원 (상한액 범위 내)",
      "대기업: 20일치 통상임금을 회사에서 전액 유급 지급"
    ],
    howToApply: [
      "회사에 휴가 시작 10일 전까지 신청서 제출",
      "중소기업 근로자는 고용24(work24.go.kr)에서 배우자 출산휴가 급여 신청"
    ],
    requiredDocuments: [
      "배우자 출산휴가 확인서",
      "통상임금 확인서류 (급여명세서)",
      "출생증명서 또는 주민등록등본"
    ],
    officialUrl: "https://www.work24.go.kr",
    officialOrg: "고용노동부",
    lastVerifiedDate: "2025년 8월 기준",
    faqs: [
      {
        question: "20일을 한 번에 다 써야 하나요?",
        answer: "아닙니다! 출산일로부터 120일 이내에 필요에 따라 최대 3회로 나누어 분할 사용할 수 있습니다."
      }
    ],
    relatedSlugs: ["childcare-leave", "maternity-leave"]
  },
  {
    slug: "maternity-leave",
    oldFileName: "work_family_maternity_leave.html",
    categorySlug: "work-family",
    categoryName: "일·가정 양립 지원",
    title: "출산전후휴가 및 급여 지원 (90일 유급휴가)",
    shortTitle: "출산전후휴가 (90일)",
    summary: "임신 중인 여성 근로자의 출산 전후 90일(다태아 120일)의 유급휴가를 보장하고 정부가 통상임금 급여를 지원합니다.",
    targetAudience: "임신 중인 여성 근로자",
    benefitSummary: "90일간 통상임금 100% 지급 (정부 및 기업 지원)",
    keyAmount: "90일 통상임금",
    badge: "모성 보호",
    eligibility: [
      "임신 중인 여성 근로자",
      "출산 후 최소 45일(다태아 60일) 이상 확보 필수"
    ],
    benefits: [
      "단태아 90일, 다태아 120일 유급휴가",
      "우선지원대상기업(중소기업): 90일간 정부가 월 최대 210만원 지원",
      "대기업: 최초 60일은 회사에서 통상임금 100% 지급, 이후 30일은 정부 지원"
    ],
    howToApply: [
      "고용24(work24.go.kr) 또는 관할 고용센터"
    ],
    requiredDocuments: [
      "출산전후휴가 확인서",
      "통상임금 증빙서류"
    ],
    officialUrl: "https://www.work24.go.kr",
    officialOrg: "고용노동부",
    lastVerifiedDate: "2025년 8월 기준",
    faqs: []
  },
  {
    slug: "reduced-hours-childcare",
    oldFileName: "work_family_reduced_hours_childcare.html",
    categorySlug: "work-family",
    categoryName: "일·가정 양립 지원",
    title: "육아기 근로시간 단축 제도 및 급여 지원 (최대 3년)",
    shortTitle: "육아기 근로시간 단축",
    summary: "만 12세 이하 자녀를 둔 근로자가 근로시간을 주당 15~35시간으로 줄여 일할 수 있으며 줄어든 임금 일부를 정부가 지원합니다.",
    targetAudience: "만 12세 이하 또는 초등학교 6학년 이하 자녀를 둔 근로자",
    benefitSummary: "최초 10시간 통상임금 100% 보전 (상한 220만원) + 나머지 시간 80% 보전",
    keyAmount: "최대 3년 지원",
    badge: "초등생 부모 지원",
    eligibility: [
      "만 12세 이하(초등 6학년 이하) 자녀 양육 근로자",
      "기본 1년 + 미사용한 육아휴직 기간 가산 시 최대 3년까지 사용 가능"
    ],
    benefits: [
      "단축 후 주당 근로시간: 15시간 ~ 35시간",
      "정부 급여 지원: 단축된 시간 중 최초 5시간(또는 10시간)은 통상임금 100% 상한액으로 보전"
    ],
    howToApply: [
      "고용24(work24.go.kr) 온라인 신청"
    ],
    requiredDocuments: [
      "육아기 근로시간 단축 확인서",
      "임금대장"
    ],
    officialUrl: "https://www.work24.go.kr",
    officialOrg: "고용노동부",
    lastVerifiedDate: "2025년 8월 기준",
    faqs: []
  },

  // 4. 보육·교육 지원
  {
    slug: "daycare-subsidy",
    oldFileName: "childcare_education_daycare_subsidy.html",
    categorySlug: "childcare-education",
    categoryName: "보육·교육 지원",
    title: "어린이집 보육료 지원 (0~5세 전액 무상보육)",
    shortTitle: "어린이집 보육료 지원",
    summary: "어린이집을 이용하는 만 0~5세 모든 영유아의 기본 보육료를 정부가 바우처(아이행복카드)로 100% 전액 지원합니다.",
    targetAudience: "어린이집을 이용하는 만 0~5세 영유아",
    benefitSummary: "연령별 월 28만원 ~ 54만원 보육료 바우처 전액 지원",
    keyAmount: "월 최대 54만원 전액",
    badge: "무상 보육",
    eligibility: [
      "어린이집에 재원 중인 만 0~5세 아동",
      "부모의 소득 무관 전액 지원"
    ],
    benefits: [
      "만 0세반: 월 약 540,000원 바우처 지원",
      "만 1세반: 월 약 475,000원 바우처 지원",
      "만 2세반: 월 약 394,000원 바우처 지원",
      "만 3~5세반(누리과정): 월 280,000원 보육료 전액 지원",
      "결제 방식: 국민행복카드로 매월 보육료 바우처 결제 (본인부담금 0원)"
    ],
    howToApply: [
      "복지로(bokjiro.go.kr)에서 '보육료 지원' 신청 후 어린이집 결제",
      "주민센터 방문 신청"
    ],
    requiredDocuments: [
      "신청인 신분증",
      "국민행복카드"
    ],
    officialUrl: "https://www.childcare.go.kr",
    officialOrg: "보건복지부 / 교육부 (아이사랑)",
    lastVerifiedDate: "2025년 8월 기준",
    affiliateThemeKey: "diaper-formula",
    faqs: [
      {
        question: "가정양육수당을 받다가 어린이집에 가면 어떻게 해야 하나요?",
        answer: "어린이집 입소 전 반드시 복지로(bokjiro.go.kr) 또는 주민센터에서 '양육수당 ➔ 보육료(어린이집)'로 변경 신청을 완료해야 입소일부터 정부 보육료가 지원됩니다."
      }
    ],
    relatedSlugs: ["parent-benefit", "kindergarten-fee-support", "care-service"]
  },
  {
    slug: "kindergarten-fee-support",
    oldFileName: "childcare_education_kindergarten_fee_support.html",
    categorySlug: "childcare-education",
    categoryName: "보육·교육 지원",
    title: "유치원 유아학비 지원 (누리과정 지원금)",
    shortTitle: "유치원 유아학비",
    summary: "국공립 및 사립유치원에 다니는 만 3~5세 유아에게 교육과정비와 방과후과정비를 지원합니다.",
    targetAudience: "유치원에 재원 중인 만 3~5세 유아",
    benefitSummary: "국공립 월 15만원, 사립 월 35만원 상당 지원",
    keyAmount: "월 최대 35만원",
    badge: "누리과정",
    eligibility: ["만 3~5세 유아 (소득 무관)"],
    benefits: [
      "국공립유치원: 유아학비 월 10만원 + 방과후과정비 월 5만원",
      "사립유치원: 유아학비 월 28만원 + 방과후과정비 월 7만원 (총 35만원)"
    ],
    howToApply: ["복지로 온라인 신청 또는 주민센터"],
    requiredDocuments: ["신청인 신분증"],
    officialUrl: "https://e-childschoolng.moe.go.kr",
    officialOrg: "교육부 / e-유치원",
    lastVerifiedDate: "2025년 8월 기준",
    faqs: []
  },
  {
    slug: "care-service",
    oldFileName: "childcare_education_care_service.html",
    categorySlug: "childcare-education",
    categoryName: "보육·교육 지원",
    title: "아이돌봄 서비스 (정부지원 시간제·종일제 돌봄)",
    shortTitle: "아이돌봄 서비스",
    summary: "맞벌이 등으로 양육 공백이 발생한 가정에 아이돌보미가 직접 찾아가 1:1 맞춤형 돌봄 서비스를 제공합니다.",
    targetAudience: "생후 3개월 이상 ~ 만 12세 이하 자녀가 있는 양육공백 가정",
    benefitSummary: "가구 소득수준(기준중위소득 150% 이하)에 따라 이용료의 최대 85% 차등 지원",
    keyAmount: "시간당 최대 85% 지원",
    badge: "1:1 방문돌봄",
    eligibility: [
      "만 12세 이하 아동이 있는 맞벌이, 다자녀, 한부모, 장애부모 가정",
      "기준중위소득 150% 이하 가구(가·나·다형) 정부지원"
    ],
    benefits: [
      "시간제 돌봄: 등·하원, 식사 챙기기, 놀이 돌봄 (연 960시간)",
      "영아종일제 돌봄: 생후 3~36개월 대상 수유, 기저귀 갈기, 이유식 지원 (월 120~200시간)",
      "질병감염아동 특별돌봄 지원"
    ],
    howToApply: [
      "복지로에서 정부지원 자격 신청 ➔ 아이돌봄서비스 홈페이지(idolbom.go.kr) 회원가입 및 돌보미 신청"
    ],
    requiredDocuments: ["양육공백 입증서류 (재직증명서 등)", "소득증빙 서류"],
    officialUrl: "https://www.idolbom.go.kr",
    officialOrg: "여성가족부",
    lastVerifiedDate: "2025년 8월 기준",
    affiliateThemeKey: "living-care",
    faqs: []
  },

  // 5. 신혼부부·출산가구 주거 지원
  {
    slug: "childbirth-family-support",
    oldFileName: "housing_support_childbirth_family_support.html",
    categorySlug: "housing-support",
    categoryName: "신혼부부·출산가구 주거 지원",
    title: "2025-2026 신생아 특례 디딤돌·버팀목 대출 (소득요건 2억원 완화)",
    shortTitle: "신생아 특례 대출",
    summary: "2년 이내 출산한 무주택 가구에게 최저 1%대 초저금리로 주택 구입자금(최대 5억원) 및 전세자금(최대 3억원)을 지원합니다.",
    targetAudience: "대출 신청일 기준 2년 이내 출산(입양)한 무주택 세대주",
    benefitSummary: "구입자금 연 1.6%~3.3% (최대 5억), 전세자금 연 1.1%~3.0% (최대 3억)",
    keyAmount: "최저 연 1.1% (최대 5억원)",
    badge: "초저금리 특례",
    eligibility: [
      "출생아: 2023년 1월 1일 이후 출생아(2년 이내 출산)가 있는 가구",
      "소득 기준: 부부합산 연소득 2억원 이하 (완화안 2.5억원)",
      "순자산 기준: 디딤돌 4.69억원 이하, 버팀목 3.45억원 이하",
      "주택 가액: 디딤돌 9억원 이하(전용 85㎡ 이하), 버팀목 수도권 5억원(지방 4억원) 이하"
    ],
    benefits: [
      "신생아 특례 디딤돌(구입자금): 최대 5억원 대출, 특례금리 연 1.6%~3.3% (5년간 고정)",
      "신생아 특례 버팀목(전세자금): 최대 3억원 대출, 특례금리 연 1.1%~3.0% (4년간)",
      "추가 출산 우대: 1명당 0.2%p 금리 인하 및 특례 기간 5년 추가 연장 (최장 15년)"
    ],
    howToApply: [
      "주택도시기금 기금e든든(enhuf.molit.go.kr) 온라인 신청 또는 5대 수탁은행(우리, 국민, 신한, 농협, 하나) 방문"
    ],
    requiredDocuments: [
      "주민등록등본, 가족관계증명서(상세)",
      "소득금액증명원, 건강보험자격득실확인서",
      "부동산 매매계약서 또는 임대차계약서"
    ],
    officialUrl: "https://nhuf.molit.go.kr",
    officialOrg: "국토교통부 / 주택도시기금",
    lastVerifiedDate: "2025년 8월 기준",
    faqs: [
      {
        question: "기존에 받은 일반 주택담보대출이나 전세대출을 신생아 특례로 대환할 수 있나요?",
        answer: "네! 주택구입 디딤돌 대출과 전세 버팀목 대출 모두 기존 대출의 100% 대환(갈아타기)을 허용합니다."
      }
    ],
    relatedSlugs: ["newlywed-special-supply", "newlywed-purchase-loan", "newlywed-jeonse-loan"]
  },
  {
    slug: "newlywed-special-supply",
    oldFileName: "housing_support_newlywed_special_supply.html",
    categorySlug: "housing-support",
    categoryName: "신혼부부·출산가구 주거 지원",
    title: "신혼부부·신생아 아파트 청약 특별공급 혜택",
    shortTitle: "신생아·신혼부부 특별공급",
    summary: "공공분양 및 민간분양 청약 시 신생아 출산 가구와 신혼부부를 위해 별도 물량을 배정하여 내 집 마련 기회를 대폭 확대합니다.",
    targetAudience: "혼인 7년 이내 신혼부부 또는 2년 이내 신생아 출산(임신) 가구",
    benefitSummary: "신생아 우선배정(공공 20~35%, 민간 20%), 부부 중복청약 허용",
    keyAmount: "청약 당첨률 대폭 상승",
    badge: "내 집 마련",
    eligibility: [
      "입주자모집공고일 기준 2년 이내 출산(임신)한 가구 또는 혼인 7년 이내 무주택 세대구성원",
      "청약통장 가입 6개월 이상, 월 납입금 6회 이상 납입"
    ],
    benefits: [
      "신생아 특별공급 신설 (공공분양 뉴:홈 신생아 특공, 민간분양 신생아 우선공급 20%)",
      "부부 중복청약 허용: 부부가 같은 아파트 단지에 동시 청약 가능 (둘 다 당첨 시 선접수분 유효)",
      "결혼 전 배우자의 청약 당첨 및 주택 소유 이력 미적용 (청약 패널티 폐지)"
    ],
    howToApply: ["청약홈(applyhome.co.kr) 또는 LH청약플러스(apply.lh.or.kr)"],
    requiredDocuments: ["주민등록등본, 가족관계증명서, 혼인관계증명서"],
    officialUrl: "https://www.applyhome.co.kr",
    officialOrg: "국토교통부 / 한국부동산원 청약홈",
    lastVerifiedDate: "2025년 8월 기준",
    faqs: []
  },

  // 6. 다자녀 가구 지원
  {
    slug: "multi-child-special-housing-supply",
    oldFileName: "multi_child_special_housing_supply.html",
    categorySlug: "multi-child",
    categoryName: "다자녀 가구 지원",
    title: "다자녀가구 주택 특별공급 (2자녀 이상으로 기준 완화)",
    shortTitle: "다자녀 특별공급 (2자녀부터)",
    summary: "다자녀 청약 기준이 기존 3자녀에서 2자녀로 전면 완화되어, 2자녀 가구도 공공·민간 아파트 다자녀 특공에 청약할 수 있습니다.",
    targetAudience: "만 19세 미만 자녀 2명 이상을 둔 무주택 세대구성원",
    benefitSummary: "분양 아파트 물량의 10% 다자녀 우선 배정",
    keyAmount: "2자녀부터 적용",
    badge: "2자녀 혜택",
    eligibility: [
      "입주자모집공고일 기준 만 19세 미만 자녀 2명 이상(태아, 입양아 포함)",
      "무주택 세대구성원"
    ],
    benefits: [
      "공공분양 및 민간분양 아파트 10% 다자녀 특별공급 배정",
      "자녀 수, 영유아 자녀 수, 무주택 기간, 세대 구성 등에 따른 가점제 적용"
    ],
    howToApply: ["청약홈(applyhome.co.kr)"],
    requiredDocuments: ["가족관계증명서(상세), 주민등록등본"],
    officialUrl: "https://www.applyhome.co.kr",
    officialOrg: "국토교통부",
    lastVerifiedDate: "2025년 8월 기준",
    faqs: []
  },
  {
    slug: "multi-child-tax-reduction",
    oldFileName: "multi_child_tax_reduction_benefits.html",
    categorySlug: "multi-child",
    categoryName: "다자녀 가구 지원",
    title: "다자녀 자동차 취득세 감면 및 세제 혜택",
    shortTitle: "다자녀 자동차 취득세 감면",
    summary: "18세 미만 자녀 3명(일부 지자체 2명) 이상을 양육하는 가정에서 차량 취득 시 최대 140만원~전액 취득세를 감면합니다.",
    targetAudience: "만 18세 미만 자녀를 양육하는 다자녀 가구",
    benefitSummary: "7~10인승 승용차 취득세 전액 면제, 6인승 이하 승용차 최대 140만원 감면",
    keyAmount: "최대 140만원~전액 면제",
    badge: "세금 감면",
    eligibility: ["18세 미만 자녀를 둔 다자녀 세대주"],
    benefits: [
      "7~10인승 승용차, 15인승 이하 승합차: 취득세 100% 전액 면제",
      "6인승 이하 승용차: 취득세 최대 140만원 감면 (140만원 이하 시 전액 면제, 초과 시 85% 감면)",
      "다자녀 세액공제: 1명 15만원, 2명 30만원(연말정산 35만원), 3명 이상 30만원+초과 1명당 30만원"
    ],
    howToApply: ["차량 등록 시 관할 시·군·구청 세무과 감면 신청서 제출"],
    requiredDocuments: ["자동차 등록증, 가족관계증명서, 감면 신청서"],
    officialUrl: "https://www.wetax.go.kr",
    officialOrg: "행정안전부 / 위택스",
    lastVerifiedDate: "2025년 8월 기준",
    faqs: []
  },
  {
    slug: "multi-child-public-utility",
    oldFileName: "multi_child_public_utility_discount.html",
    categorySlug: "multi-child",
    categoryName: "다자녀 가구 지원",
    title: "다자녀가구 전기·도시가스·난방 공공요금 감면 혜택",
    shortTitle: "다자녀 공공요금 할인",
    summary: "3자녀 이상 또는 출산 가구에게 전기요금, 도시가스요금, 지역난방요금을 매월 자동 할인합니다.",
    targetAudience: "자녀 3인 이상 다자녀 가구 또는 출산 3년 미만 영아 보유 가구",
    benefitSummary: "전기요금 월 30%(최대 1.6만원), 도시가스 동절기 최대 1.8만원 할인",
    keyAmount: "매월 공공요금 할인",
    badge: "생활비 절약",
    eligibility: ["주민등록등본상 3자녀 이상 가구 또는 출생 3년 미만 영아 거주 가구"],
    benefits: [
      "한전 전기요금: 월 요금의 30% 감면 (월 최대 16,000원 한도, 여름철 20,800원)",
      "도시가스 요금: 동절기(12~3월) 월 최대 18,000원, 기타 월 최대 4,500원 할인",
      "지역난방 요금: 월 최대 4,000원 정액 감면"
    ],
    howToApply: ["한전(국번없이 123), 해당 지역 도시가스 고객센터, 또는 정부24 '행복출산' 통합신청"],
    requiredDocuments: ["주민등록등본, 전기/가스 고객번호"],
    officialUrl: "https://cyber.kepco.co.kr",
    officialOrg: "한국전력공사 / 산업통상자원부",
    lastVerifiedDate: "2025년 8월 기준",
    faqs: []
  },

  // 7. 기타 취약계층·한부모 지원
  {
    slug: "single-parent-child-support",
    oldFileName: "etc_support_single_parent_child_support.html",
    categorySlug: "etc-support",
    categoryName: "기타 취약계층 지원",
    title: "한부모가족 아동양육비 및 주거 지원 (월 21만원 인상)",
    shortTitle: "한부모 아동양육비",
    summary: "저소득 한부모가족 및 조손가족의 자녀 양육 부담을 덜기 위해 아동양육비와 학용품비를 인상 지원합니다.",
    targetAudience: "기준중위소득 63% 이하 한부모가족 (만 18세 미만 자녀)",
    benefitSummary: "자녀 1인당 월 210,000원 아동양육비 지급 (청소년 한부모 최대 월 35만원)",
    keyAmount: "월 최대 35만원",
    badge: "한부모 특화",
    eligibility: [
      "만 18세 미만 자녀를 양육하는 모자가족, 부자가족, 조손가족",
      "기준중위소득 63% 이하 (청소년 한부모는 65% 이하)"
    ],
    benefits: [
      "기본 아동양육비: 자녀 1인당 월 210,000원 (만 18세 미만)",
      "추가 아동양육비: 만 5세 이하 자녀 1인당 월 50,000원 추가",
      "청소년 한부모(만 24세 이하): 자녀 1인당 월 350,000원 지원",
      "학용품비: 중·고등학생 자녀 1인당 연 93,000원 지원"
    ],
    howToApply: ["주소지 읍면동 행정복지센터 방문 또는 복지로(bokjiro.go.kr)"],
    requiredDocuments: ["소득재산신고서, 금융정보제공동의서, 가족관계증명서"],
    officialUrl: "https://www.bokjiro.go.kr",
    officialOrg: "여성가족부",
    lastVerifiedDate: "2025년 8월 기준",
    faqs: []
  },
  {
    slug: "livelihood-benefit",
    oldFileName: "etc_support_livelihood_benefit.html",
    categorySlug: "etc-support",
    categoryName: "기타 취약계층 지원",
    title: "국민기초생활보장 생계급여 (기준중위소득 32% 역대 최대)",
    shortTitle: "기초생활 생계급여",
    summary: "소득인정액이 기준중위소득 32% 이하인 극빈층 가구에 최저생활을 보장하기 위한 현금 생계비를 매월 지급합니다.",
    targetAudience: "가구 소득인정액이 생계급여 선정기준 이하인 가구",
    benefitSummary: "4인 가구 기준 최대 월 1,951,000원 현금 지급",
    keyAmount: "월 최대 195만원 (4인 기준)",
    badge: "생계 보장",
    eligibility: [
      "소득인정액이 기준중위소득 32% 이하 (1인가구 약 76.5만원, 4인가구 약 195.1만원)",
      "부양의무자 기준 전면 폐지(의료급여 제외)"
    ],
    benefits: [
      "생계급여 지급액 = 가구별 생계급여 선정기준액 - 가구 소득인정액",
      "매월 20일 현금 입금"
    ],
    howToApply: ["주민센터 방문 신청"],
    requiredDocuments: ["사회보장급여 신청서, 금융정보제공동의서, 임대차계약서 등"],
    officialUrl: "https://www.bokjiro.go.kr",
    officialOrg: "보건복지부",
    lastVerifiedDate: "2025년 8월 기준",
    faqs: []
  }
];

export function getPolicyBySlug(slug: string): PolicyDetail | undefined {
  return policies.find(p => p.slug === slug || p.oldFileName === slug);
}

export function getPoliciesByCategory(categorySlug: string): PolicyDetail[] {
  return policies.filter(p => p.categorySlug === categorySlug);
}
