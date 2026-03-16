export default function doctorSummaryBuilder(input, locationResult, structureResult, triageResult, referralResult) {
  const symptomSummary = (input.symptoms || []).length > 0 ? `以${input.symptoms.join('、')}为主。` : '未记录明确症状。';
  const functionSummary = (input.functionLimits || []).length > 0 ? `${input.functionLimits.join('、')}。` : '目前未记录明显功能受限。';
  const aggravating = (input.aggravatingFactors || []).length > 0 ? `诱发因素：${input.aggravatingFactors.join('、')}。` : '';

  return {
    chiefComplaint: `${input.side}${input.region}不适，${input.onsetTime}开始，${input.onsetType}出现${input.traumaRelated ? '，与外伤相关' : ''}。`,
    standardizedLocation: locationResult.normalizedDescription,
    symptomSummary: `${symptomSummary}${aggravating}`,
    functionSummary,
    suspectedStructures: structureResult.suspectedStructures,
    suspectedTissueTypes: structureResult.suspectedTissueTypes,
    triageNote: `当前风险等级：${triageResult.riskLevel}；建议路径：${triageResult.urgency}。`,
    examSuggestions: ['定位压痛点', '检查活动范围', '观察负重与步态/动作表现', '补充神经血运检查'],
    investigationSuggestions: ['是否需要影像评估由临床判断', '软组织疑问时考虑超声/MRI方向', '神经或血供异常时补充相应评估'],
    departmentSuggestion: referralResult.primaryDepartments,
  };
}
