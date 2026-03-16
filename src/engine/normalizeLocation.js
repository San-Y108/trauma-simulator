import { anatomyRegistry } from '../data/anatomy/bodyRegions';

function areaTextMap(painArea) {
  if (painArea === '点状') return '局限性';
  if (painArea === '片状') return '片状';
  if (painArea === '条状') return '条索样';
  if (painArea === '放射样') return '放射样';
  return '';
}

function buildFallbackDescription(input) {
  const side = input.side || '';
  const region = input.region || '';
  const landmark = input.landmark || '';
  const direction = input.direction || '';
  const distanceBand = input.distanceBand || '';
  const depth = input.depth || '';
  const area = areaTextMap(input.painArea);

  return `${side}${region}${landmark}${direction ? direction + '方' : ''}${distanceBand ? '约 ' + distanceBand : ''}，${depth}${area || ''}不适区`;
}

export default function normalizeLocation(input) {
  const regionData = anatomyRegistry[input.region];
  if (!regionData) {
    return {
      normalizedDescription: buildFallbackDescription(input),
      matchedLandmark: input.landmark || '',
      matchedDirection: input.direction || '',
      candidateStructures: [],
      confidence: 'low',
      ruleHits: ['未匹配到部位规则，使用回退模板'],
    };
  }

  const landmarkData = regionData.landmarks[input.landmark];
  if (!landmarkData) {
    return {
      normalizedDescription: buildFallbackDescription(input),
      matchedLandmark: input.landmark || '',
      matchedDirection: input.direction || '',
      candidateStructures: [],
      confidence: 'low',
      ruleHits: ['未匹配到标志点规则，使用回退模板'],
    };
  }

  const template =
    landmarkData.templates?.[input.direction] ||
    '{landmark}{direction}方约 {distance}，{depth}{area}不适区';

  const area = areaTextMap(input.painArea);
  const filled = template
    .replace('{landmark}', input.landmark || '')
    .replace('{direction}', input.direction || '')
    .replace('{distance}', input.distanceBand || '')
    .replace('{depth}', input.depth || '')
    .replace('{area}', area || '');

  const normalizedDescription = `${input.side || ''}${input.region || ''}${filled}`;
  const candidateStructures = landmarkData.candidateStructures?.[input.direction] || [];

  return {
    normalizedDescription,
    matchedLandmark: input.landmark,
    matchedDirection: input.direction,
    candidateStructures,
    confidence: candidateStructures.length > 0 ? 'medium' : 'low',
    ruleHits: [
      `命中部位：${input.region}`,
      `命中标志点：${input.landmark}`,
      `命中方向：${input.direction}`,
    ],
  };
}
