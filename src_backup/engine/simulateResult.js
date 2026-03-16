import {
  impactedActionsMap,
  layerDescriptions,
  mechanismDescriptions,
  interventionDescriptions,
} from "../data/options";
import {
  layerRules,
  mechanismRules,
  partRules,
  interventionRules,
} from "../data/ruleData";

const urgencyScore = {
  "低": 1,
  "中": 2,
  "中高": 3,
  "高": 4,
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getHigherUrgency(current, next) {
  if (!next) return current;
  return urgencyScore[next] > urgencyScore[current] ? next : current;
}

function applyRule(state, rule) {
  if (!rule) return state;

  state.pain += rule.pain || 0;
  state.mobilityLoss += rule.mobilityLoss || 0;
  state.swellingRisk += rule.swellingRisk || 0;
  state.infectionRisk += rule.infectionRisk || 0;
  state.supportGain += rule.supportGain || 0;
  state.recoveryBoost += rule.recoveryBoost || 0;

  if (rule.urgency) {
    state.urgency = getHigherUrgency(state.urgency, rule.urgency);
  }

  if (rule.functionChange) {
    state.functionChange = rule.functionChange;
  }

  if (rule.compensation) {
    state.compensation.push(...rule.compensation);
  }

  if (rule.note) {
    state.interventionNotes.push(rule.note);
  }

  return state;
}

function buildTimeline(severity, selectedMechanism) {
  if (severity <= 2) {
    return [
      "即刻：局部不适开始出现",
      "24小时：反应更明显",
      "3天：进入恢复观察期",
      "2周：大多进入改善阶段",
      "6周：接近稳定恢复",
    ];
  }

  if (severity === 3) {
    return [
      "即刻：功能下降较明显",
      "24小时：肿胀/刺激上升",
      "3-7天：持续观察变化",
      "2周：进入恢复管理期",
      "6周：多数功能逐步回归",
    ];
  }

  if (selectedMechanism === "骨折样损伤") {
    return [
      "即刻：结构稳定性风险较高",
      "24小时：状态变化较快",
      "数天内：需严肃评估",
      "2周：恢复仍需保护",
      "6周：进入更明确的恢复阶段",
    ];
  }

  return [
    "即刻：高风险状态",
    "24小时：变化较快",
    "数天内：需持续评估",
    "2周：仍需观察负荷变化",
    "6周：恢复周期仍较长",
  ];
}

function buildRecommendation(urgency, selectedInterventions) {
  const hasRehab = selectedInterventions.includes("康复训练");
  const hasImmobilize = selectedInterventions.includes("固定");

  if (urgency === "高") {
    return "当前状态偏高风险，建议尽快评估与处理。";
  }

  if (urgency === "中高") {
    return "建议近期进行进一步评估，并控制负荷。";
  }

  if (hasImmobilize && !hasRehab) {
    return "当前更偏保护期，可后续逐步过渡到功能恢复。";
  }

  if (hasRehab) {
    return "当前更适合逐步恢复功能，同时控制代偿。";
  }

  return "可先观察并进行基础管理。";
}

function buildRecoveryData({
  severity,
  pain,
  mobilityLoss,
  swellingRisk,
  infectionRisk,
  supportGain,
  recoveryBoost,
}) {
  const baselineStart = clamp(
    Math.round(
      100 -
        (mobilityLoss * 0.72 +
          pain * 3.8 +
          swellingRisk * 0.14 +
          infectionRisk * 0.08)
    ),
    8,
    88
  );

  const supportedStart = clamp(
    Math.round(baselineStart + supportGain * 0.3 + recoveryBoost * 0.15),
    10,
    92
  );

  const naturalSlope = severity <= 2 ? 4.0 : severity === 3 ? 3.1 : 2.3;
  const supportSlope = naturalSlope + recoveryBoost * 0.16 + supportGain * 0.05;

  return Array.from({ length: 7 }).map((_, index) => {
    const baseline = clamp(
      Math.round(baselineStart + naturalSlope * index),
      0,
      100
    );

    const intervention = clamp(
      Math.round(supportedStart + supportSlope * index),
      0,
      100
    );

    return {
      week: index,
      label: `${index}周`,
      baseline,
      intervention,
    };
  });
}

export default function simulateResult({
  selectedPart,
  selectedLayer,
  selectedMechanism,
  severity,
  selectedInterventions,
}) {
  const state = {
    pain: 2 + severity,
    mobilityLoss: severity * 10,
    swellingRisk: severity * 12,
    infectionRisk: 5,
    supportGain: 0,
    recoveryBoost: 0,
    urgency: "低",
    functionChange: "轻微受限",
    compensation: [],
    interventionNotes: [],
  };

  applyRule(state, layerRules[selectedLayer]);
  applyRule(state, mechanismRules[selectedMechanism]);
  applyRule(state, partRules[selectedPart]);

  selectedInterventions.forEach((item) => {
    applyRule(state, interventionRules[item]);
  });

  if ((selectedLayer === "血管" || selectedLayer === "神经") && severity >= 3) {
    state.urgency = getHigherUrgency(state.urgency, "高");
  }

  if (selectedLayer === "骨" && severity >= 4) {
    state.urgency = getHigherUrgency(state.urgency, "高");
  }

  state.pain = clamp(state.pain, 0, 10);
  state.mobilityLoss = clamp(state.mobilityLoss, 0, 100);
  state.swellingRisk = clamp(state.swellingRisk, 0, 100);
  state.infectionRisk = clamp(state.infectionRisk, 0, 100);
  state.supportGain = clamp(state.supportGain, 0, 100);

  const impactedActionsBase = impactedActionsMap[selectedPart] || [];
  const impactedActions = impactedActionsBase.map((item) => {
    if (severity >= 4) return `${item}：明显受限`;
    if (severity === 3) return `${item}：中度受限`;
    return `${item}：轻度受限`;
  });

  const timeline = buildTimeline(severity, selectedMechanism);
  const recommendation = buildRecommendation(state.urgency, selectedInterventions);

  const noteParts = [
    layerDescriptions[selectedLayer],
    mechanismDescriptions[selectedMechanism],
    ...selectedInterventions.map((item) => interventionDescriptions[item]),
  ].filter(Boolean);

  const note = noteParts.join(" ");

  const recoveryData = buildRecoveryData({
    severity,
    pain: state.pain,
    mobilityLoss: state.mobilityLoss,
    swellingRisk: state.swellingRisk,
    infectionRisk: state.infectionRisk,
    supportGain: state.supportGain,
    recoveryBoost: state.recoveryBoost,
  });

  const week2 = recoveryData.find((item) => item.week === 2);
  const week6 = recoveryData.find((item) => item.week === 6);

  return {
    ...state,
    compensation: [...new Set(state.compensation)],
    impactedActions,
    timeline,
    recommendation,
    note,
    selectedInterventions,
    recoveryData,
    recoveryHighlights: {
      week2Baseline: week2?.baseline ?? 0,
      week2Intervention: week2?.intervention ?? 0,
      week6Baseline: week6?.baseline ?? 0,
      week6Intervention: week6?.intervention ?? 0,
    },
  };
}