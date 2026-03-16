export default function homeCareRules(input, triageResult) {
  const homeCare = [];
  const avoidActions = [];
  const emergencySignals = [];

  if (triageResult.riskLevel === '低' || triageResult.riskLevel === '中') {
    homeCare.push('相对休息与减载');
    homeCare.push('记录疼痛位置、诱发动作和变化趋势');
    homeCare.push('避免反复刺激同一动作');
  }

  if ((input.symptoms || []).includes('肿胀')) {
    homeCare.push('可考虑短时冷敷作为基础处理');
  }

  if ((input.interventionsTried || []).includes('固定')) {
    homeCare.push('固定期间以保护为主，后续再考虑功能恢复');
  }

  avoidActions.push('暂不进行高负荷训练');
  avoidActions.push('暂不暴力拉伸或反复按压疼痛点');
  avoidActions.push('暂不在明显诱发疼痛的动作上持续硬撑');

  emergencySignals.push('出现不能负重或明显畸形');
  emergencySignals.push('出现肢体发冷、发白或颜色改变');
  emergencySignals.push('出现快速加重的麻木或无力');
  emergencySignals.push('出现发热伴明显红肿');

  return {
    homeCare,
    avoidActions,
    emergencySignals,
  };
}
