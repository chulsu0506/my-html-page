// 2025-2026 대한민국 최신 정책 기준 계산식

export interface BenefitTimelineItem {
  ageLabel: string;
  monthIndex: number;
  parentBenefit: number;      // 부모급여 (만 0세 월 100만, 만 1세 월 50만)
  childAllowance: number;     // 아동수당 (만 8세 미만 95개월 월 10만)
  firstEncounter: number;     // 첫만남이용권 (첫 달 일시지급 200만 또는 300만)
  medicalVoucher: number;     // 임신출산 진료비 (100만원)
  totalMonthly: number;
}

export interface BenefitCalculationResult {
  totalAmount: number;
  firstEncounterAmount: number;
  totalParentBenefit: number;
  totalChildAllowance: number;
  medicalVoucherAmount: number;
  timeline: BenefitTimelineItem[];
}

export function calculateChildBenefits(
  childOrder: "first" | "second_or_more" = "first",
  isMultipleBirth: boolean = false
): BenefitCalculationResult {
  const medicalVoucherAmount = isMultipleBirth ? 1400000 : 1000000;
  const firstEncounterAmount = childOrder === "first" ? 2000000 : 3000000;
  
  // 부모급여: 0~11개월(12개월) 월 100만원 = 1200만원, 12~23개월(12개월) 월 50만원 = 600만원 -> 총 1800만원
  const totalParentBenefit = (12 * 1000000) + (12 * 500000); 
  
  // 아동수당: 0~95개월(8세 미만, 96개월) 월 10만원 = 총 960만원
  const totalChildAllowance = 96 * 100000;

  const totalAmount = medicalVoucherAmount + firstEncounterAmount + totalParentBenefit + totalChildAllowance;

  const timeline: BenefitTimelineItem[] = [];

  for (let m = 0; m < 96; m++) {
    let parentBenefit = 0;
    if (m < 12) {
      parentBenefit = 1000000;
    } else if (m < 24) {
      parentBenefit = 500000;
    }

    const childAllowance = 100000;
    const firstEncounter = m === 0 ? firstEncounterAmount : 0;
    const medicalVoucher = m === 0 ? medicalVoucherAmount : 0;
    const totalMonthly = parentBenefit + childAllowance + firstEncounter + medicalVoucher;

    let ageLabel = `생후 ${m}개월`;
    if (m === 0) ageLabel = "출생 시점 (0개월)";
    else if (m === 12) ageLabel = "돌 (만 1세 시작)";
    else if (m === 24) ageLabel = "만 2세 시작";
    else if (m === 36) ageLabel = "만 3세 시작";

    timeline.push({
      ageLabel,
      monthIndex: m,
      parentBenefit,
      childAllowance,
      firstEncounter,
      medicalVoucher,
      totalMonthly
    });
  }

  return {
    totalAmount,
    firstEncounterAmount,
    totalParentBenefit,
    totalChildAllowance,
    medicalVoucherAmount,
    timeline
  };
}

export interface LeavePayMonthDetail {
  month: number;
  salaryBase: number;
  maxCap: number;
  minFloor: number;
  rate: number;
  payout: number;
  note: string;
}

export interface LeavePayResult {
  monthlySalary: number;
  totalLeaveMonths: number;
  is6Plus6: boolean;
  totalPayout: number;
  monthlyAverage: number;
  details: LeavePayMonthDetail[];
}

export function calculateParentalLeavePay(
  monthlySalary: number, // 통상임금 (원)
  leaveMonths: number = 12,
  is6Plus6: boolean = false
): LeavePayResult {
  const details: LeavePayMonthDetail[] = [];
  let totalPayout = 0;

  // 6+6 부모육아휴직제 상한표 (1개월 200만, 2개월 250만, 3개월 300만, 4개월 350만, 5개월 400만, 6개월 450만)
  const sixPlusSixCaps = [2000000, 2500000, 3000000, 3500000, 4000000, 4500000];

  for (let m = 1; m <= leaveMonths; m++) {
    let payout = 0;
    let maxCap = 1600000;
    let minFloor = 700000;
    let rate = 1.0;
    let note = "";

    if (is6Plus6 && m <= 6) {
      // 6+6 적용 시: 통상임금 100%, 상한액 단계적 상승
      rate = 1.0;
      maxCap = sixPlusSixCaps[m - 1];
      note = `6+6 부모육아휴직제 ${m}개월차 (상한 ${Math.floor(maxCap / 10000)}만원)`;
      payout = Math.min(Math.max(monthlySalary * rate, minFloor), maxCap);
    } else {
      // 2025-2026 일반 육아휴직 급여 인상 기준:
      // 1~3개월: 통상임금 100%, 상한 250만원
      // 4~6개월: 통상임금 100%, 상한 200만원
      // 7~12개월: 통상임금 80~100%, 상한 160만원
      if (m <= 3) {
        rate = 1.0;
        maxCap = 2500000;
        note = `1~3개월차 집중 지원 (상한 250만원)`;
      } else if (m <= 6) {
        rate = 1.0;
        maxCap = 2000000;
        note = `4~6개월차 지원 (상한 200만원)`;
      } else {
        rate = 0.8;
        maxCap = 1600000;
        note = `7~12개월차 지원 (상한 160만원)`;
      }
      payout = Math.min(Math.max(monthlySalary * rate, minFloor), maxCap);
    }

    totalPayout += payout;
    details.push({
      month: m,
      salaryBase: monthlySalary,
      maxCap,
      minFloor,
      rate,
      payout: Math.floor(payout),
      note
    });
  }

  return {
    monthlySalary,
    totalLeaveMonths: leaveMonths,
    is6Plus6,
    totalPayout,
    monthlyAverage: Math.floor(totalPayout / leaveMonths),
    details
  };
}

export interface NewbornLoanResult {
  isEligible: boolean;
  loanType: "purchase" | "jeonse";
  reason: string;
  interestRateRange: string;
  maxLimit: string;
  keyConditions: string[];
}

export function checkNewbornLoanEligibility(
  loanType: "purchase" | "jeonse",
  annualIncomeMillion: number, // 부부합산 연소득 (백만원 단위)
  netAssetMillion: number,     // 순자산 (백만원 단위)
  housePriceMillion: number,   // 주택가액 또는 보증금 (백만원 단위)
  hasNewbornWithin2Years: boolean
): NewbornLoanResult {
  if (!hasNewbornWithin2Years) {
    return {
      isEligible: false,
      loanType,
      reason: "대출 신청일 기준 2년 이내 출산(입양)한 무주택 가구여야 합니다.",
      interestRateRange: "-",
      maxLimit: "-",
      keyConditions: ["2년 이내 출산(임신 제외, 2023년 1월 1일 이후 출생아부터) 필수"]
    };
  }

  // 2025-2026 소득 기준: 부부합산 2억원(출산 가구 2.5억원까지 완화)
  const maxIncome = 200; // 2억원
  if (annualIncomeMillion > maxIncome) {
    return {
      isEligible: false,
      loanType,
      reason: `부부합산 연소득(${annualIncomeMillion}백만원)이 기준(${maxIncome}백만원)을 초과합니다.`,
      interestRateRange: "-",
      maxLimit: "-",
      keyConditions: ["소득 완화 2억원(최대 2.5억원) 요건 확인 필요"]
    };
  }

  if (loanType === "purchase") {
    // 디딤돌(구입): 주택가액 9억원 이하, 전용면적 85㎡ 이하, 자산 4.69억원 이하, 한도 최대 5억원
    if (housePriceMillion > 900) {
      return {
        isEligible: false,
        loanType,
        reason: "대상 주택 가액이 9억원을 초과합니다. (신생아 특례 디딤돌은 9억원 이하만 가능)",
        interestRateRange: "-",
        maxLimit: "-",
        keyConditions: ["주택가액 9억원 이하", "전용 85㎡ 이하"]
      };
    }

    return {
      isEligible: true,
      loanType,
      reason: "🎉 축하합니다! 신생아 특례 디딤돌(주택구입) 대출 신청 자격을 충족합니다.",
      interestRateRange: "연 1.6% ~ 3.3% (우대금리 적용 시 최저 1.2%대)",
      maxLimit: "최대 5억원 (LTV 최대 80%, DTI 60%)",
      keyConditions: [
        "대출 만기: 10년, 15년, 20년, 30년",
        "추가 출산 시 1명당 0.2%p 금리 인하 (최장 15년 연장)",
        "소득 구간별 5년간 특례 고정금리 적용"
      ]
    };
  } else {
    // 버팀목(전세): 보증금 수도권 5억원(지방 4억원) 이하, 자산 3.45억원 이하, 한도 최대 3억원
    if (housePriceMillion > 500) {
      return {
        isEligible: false,
        loanType,
        reason: "임차보증금이 5억원을 초과합니다. (신생아 특례 버팀목은 수도권 5억원 이하만 가능)",
        interestRateRange: "-",
        maxLimit: "-",
        keyConditions: ["임차보증금 수도권 5억원 / 지방 4억원 이하"]
      };
    }

    return {
      isEligible: true,
      loanType,
      reason: "🎉 축하합니다! 신생아 특례 버팀목(전세자금) 대출 신청 자격을 충족합니다.",
      interestRateRange: "연 1.1% ~ 3.0% (초저금리)",
      maxLimit: "최대 3억원 (보증금의 80% 이내)",
      keyConditions: [
        "이용 기간: 2년 (최장 12년까지 연장 가능)",
        "추가 출산 시 1명당 0.2%p 금리 인하 및 4년 연장",
        "보증금 5억원 이하 무주택 세대주"
      ]
    };
  }
}
