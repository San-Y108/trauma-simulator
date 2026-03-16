export default function triageRules(input, structureResult) {
  const redFlags = input.redFlags || [];
  const symptoms = input.symptoms || [];
  const functionLimits = input.functionLimits || [];
  const reasons = [];
  let riskLevel = '低';
  let urgency = '观察';
  let redFlagTriggered = false;

  const elevate = (risk, urge, reason) => {
    const order = { 低: 1, 中: 2, 中高: 3, 高: 4 };
    if (order[risk] > order[riskLevel]) riskLevel = risk;
    const urgencyOrder = { 观察: 1, 尽快门诊: 2, 近期专科评估: 3, 急诊: 4 };
    if (urgencyOrder[urge] > urgencyOrder[urgency]) urgency = urge;
    reasons.push(reason);
  };

  if (redFlags.includes('肢体发冷/发白') || symptoms.includes('发冷') || symptoms.includes('发白')) {
    redFlagTriggered = true;
    elevate('高', '急诊', '存在发冷/发白信号，需警惕血供问题');
  }

  if (redFlags.includes('快速加重麻木无力') || symptoms.includes('麻木') || symptoms.includes('无力')) {
    elevate('中高', '近期专科评估', '存在神经相关症状，建议补充神经评估');
  }

  if ((redFlags.includes('不能负重') || functionLimits.includes('负重受限')) && input.traumaRelated) {
    elevate('中高', '尽快门诊', '外伤相关且负重受限，建议尽快门诊评估');
  }

  if (redFlags.includes('明显畸形')) {
    redFlagTriggered = true;
    elevate('高', '急诊', '存在明显畸形，应优先急诊评估');
  }

  if (redFlags.includes('发热伴红肿')) {
    redFlagTriggered = true;
    elevate('高', '急诊', '发热伴红肿，需排除感染或严重炎症');
  }

  if (redFlags.includes('夜间静息痛明显')) {
    elevate('中高', '近期专科评估', '存在夜间静息痛，建议进一步评估');
  }

  if (riskLevel === '低' && structureResult.suspectedStructures.length > 0) {
    elevate('中', '观察', '存在明确局部结构候选，可先观察并进行基础管理');
  }

  return {
    riskLevel,
    urgency,
    redFlagTriggered,
    redFlagReasons: reasons,
  };
}
