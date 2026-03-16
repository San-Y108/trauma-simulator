export default function patientAdviceBuilder(triageResult, referralResult, homeCareResult) {
  let recommendationText = '可先观察并进行基础管理。';
  if (triageResult.urgency === '尽快门诊') recommendationText = '建议尽快门诊评估。';
  if (triageResult.urgency === '近期专科评估') recommendationText = '建议近期进行专科评估。';
  if (triageResult.urgency === '急诊') recommendationText = '当前存在较高风险信号，建议尽快急诊评估。';

  return {
    riskLevel: triageResult.riskLevel,
    recommendationText,
    recommendedDepartments: referralResult.primaryDepartments,
    ...homeCareResult,
  };
}
