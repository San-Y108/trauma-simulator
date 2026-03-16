export default function referralRules(structureResult, triageResult) {
  const departments = [];
  const tissues = structureResult.suspectedTissueTypes || [];
  const names = structureResult.suspectedStructures || [];

  if (triageResult.urgency === '急诊') departments.push('急诊');
  if (tissues.includes('血供异常可能')) departments.push('血管外科');
  if (tissues.includes('神经参与可能')) departments.push('神经内科');
  if (/(骨|韧带|附着)/.test(names.join(' ')) || tissues.includes('深层稳定结构')) departments.push('骨科');
  if (/(肌|腱|软组织)/.test(names.join(' ')) || tissues.includes('肌肉/肌腱')) departments.push('运动医学');
  if (triageResult.riskLevel === '低' || triageResult.riskLevel === '中') departments.push('康复医学科');

  const unique = [...new Set(departments)];
  return {
    primaryDepartments: unique.slice(0, 2),
    allDepartments: unique,
    referralReasoning: unique.map((item) => `推荐 ${item}：基于当前风险与疑似结构分流`),
  };
}
