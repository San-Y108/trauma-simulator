import normalizeLocation from './normalizeLocation';
import inferStructures from './inferStructures';
import triageRules from './triageRules';
import referralRules from './referralRules';
import homeCareRules from './homeCareRules';
import doctorSummaryBuilder from './doctorSummaryBuilder';
import patientAdviceBuilder from './patientAdviceBuilder';
import recoveryEngine from './recoveryEngine';

export default function assessCase(input) {
  const locationResult = normalizeLocation(input);
  const structureResult = inferStructures(input, locationResult);
  const triageResult = triageRules(input, structureResult);
  const referralResult = referralRules(structureResult, triageResult);
  const homeCareResult = homeCareRules(input, triageResult);
  const doctorSummary = doctorSummaryBuilder(input, locationResult, structureResult, triageResult, referralResult);
  const patientAdvice = patientAdviceBuilder(triageResult, referralResult, homeCareResult);
  const recovery = recoveryEngine(input, triageResult);

  return {
    locationResult,
    structureResult,
    triageResult,
    referralResult,
    patientAdvice,
    doctorSummary,
    ...recovery,
    explainability: {
      triggeredRules: [
        ...(locationResult.ruleHits || []),
        ...(structureResult.reasoning || []),
        ...(triageResult.redFlagReasons || []),
        ...(referralResult.referralReasoning || []),
      ],
      confidenceNotes: [
        `定位置信度：${locationResult.confidence}`,
        `当前优先结构：${structureResult.prioritizedStructure}`,
      ],
    },
  };
}
