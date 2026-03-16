function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function recoveryEngine(input, triageResult) {
  const severityBase = input.traumaRelated ? 42 : 50;
  const riskPenalty = { 低: 0, 中: 8, 中高: 16, 高: 24 }[triageResult.riskLevel] || 0;
  const baseline0 = clamp(severityBase - riskPenalty, 10, 80);
  const interventionBoost = (input.interventionsTried || []).includes('康复训练') ? 10 : 4;
  const protectionBoost = (input.interventionsTried || []).includes('减载') || (input.interventionsTried || []).includes('固定') ? 8 : 0;

  const data = [0, 1, 2, 3, 4, 5, 6].map((week) => {
    const baseline = clamp(Math.round(baseline0 + week * (triageResult.riskLevel === '高' ? 4 : 6)), 0, 100);
    const intervention = clamp(Math.round(baseline0 + interventionBoost + protectionBoost + week * (triageResult.riskLevel === '高' ? 6 : 8)), 0, 100);
    return {
      week,
      label: `${week}周`,
      baseline,
      intervention,
    };
  });

  const week2 = data.find((item) => item.week === 2);
  const week6 = data.find((item) => item.week === 6);

  return {
    recoveryData: data,
    recoveryHighlights: {
      week2Baseline: week2?.baseline ?? 0,
      week2Intervention: week2?.intervention ?? 0,
      week6Baseline: week6?.baseline ?? 0,
      week6Intervention: week6?.intervention ?? 0,
    },
  };
}
