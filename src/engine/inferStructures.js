export default function inferStructures(input, locationResult) {
  const symptoms = input.symptoms || [];
  const suspectedTissueTypes = [];
  const reasoning = [...(locationResult.ruleHits || [])];

  if (input.depth === '表浅') {
    suspectedTissueTypes.push('皮肤/浅表软组织');
    reasoning.push('深度为表浅，更偏浅层组织');
  }
  if (input.depth === '中层') {
    suspectedTissueTypes.push('肌肉/肌腱');
    reasoning.push('深度为中层，更偏肌肉或肌腱层');
  }
  if (input.depth === '深层') {
    suspectedTissueTypes.push('深层稳定结构');
    reasoning.push('深度为深层，更偏骨、韧带或深层附着区');
  }

  if (symptoms.includes('麻木') || symptoms.includes('电击样') || symptoms.includes('无力')) {
    suspectedTissueTypes.push('神经参与可能');
    reasoning.push('存在麻木/电击样/无力，提示神经参与可能');
  }

  if (symptoms.includes('发冷') || symptoms.includes('发白')) {
    suspectedTissueTypes.push('血供异常可能');
    reasoning.push('存在发冷或发白，需留意血供问题');
  }

  if (symptoms.includes('肿胀')) {
    suspectedTissueTypes.push('软组织刺激');
    reasoning.push('存在肿胀，支持软组织刺激或急性反应');
  }

  const scoredStructures = (locationResult.candidateStructures || []).map((name) => {
    let score = 50;
    if (input.depth === '深层' && /(骨|韧带|附着|脂肪垫)/.test(name)) score += 20;
    if (input.depth === '中层' && /(肌|腱|软组织)/.test(name)) score += 18;
    if ((symptoms.includes('麻木') || symptoms.includes('电击样')) && /(神经|腘窝)/.test(name)) score += 20;
    if (symptoms.includes('肿胀') && /(软组织|囊|脂肪垫)/.test(name)) score += 10;
    return { name, score };
  });

  scoredStructures.sort((a, b) => b.score - a.score);

  return {
    suspectedStructures: scoredStructures.map((item) => item.name),
    suspectedTissueTypes: [...new Set(suspectedTissueTypes)],
    reasoning,
    prioritizedStructure: scoredStructures[0]?.name || '待进一步查体定位',
  };
}
