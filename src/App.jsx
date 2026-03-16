import { useMemo, useState } from 'react';
import './App.css';
import HeaderSummary from './components/HeaderSummary';
import HumanBodyCanvas from './components/HumanBodyCanvas';
import PatientAdvicePanel from './components/PatientAdvicePanel';
import DoctorSummaryPanel from './components/DoctorSummaryPanel';
import RecoveryTrendPanel from './components/RecoveryTrendPanel';
import ExplainabilityPanel from './components/ExplainabilityPanel';
import InputPanel from './components/intake/InputPanel';
import assessCase from './engine/assessCase';
import { anatomyRegistry, regionOptions } from './data/anatomy/bodyRegions';

function getDefaultLandmark(region) {
  const regionData = anatomyRegistry[region];
  return regionData?.defaultLandmark || Object.keys(regionData?.landmarks || {})[0] || '';
}

function getDefaultDirection(region, landmark) {
  const regionData = anatomyRegistry[region];
  return regionData?.landmarks?.[landmark]?.directions?.[0] || '';
}

function toggleItem(list = [], value, fallback) {
  const exists = list.includes(value);
  const next = exists ? list.filter((item) => item !== value) : [...list, value];
  if (next.length === 0 && fallback) return [fallback];
  return next;
}

export default function App() {
  const initialRegion = '膝部';
  const initialLandmark = getDefaultLandmark(initialRegion);
  const [viewMode, setViewMode] = useState('front');
  const [intakeData, setIntakeData] = useState({
    region: initialRegion,
    side: '右',
    onsetType: '突发',
    onsetTime: '3天前',
    traumaRelated: true,
    landmark: initialLandmark,
    direction: getDefaultDirection(initialRegion, initialLandmark),
    distanceBand: '1-3cm',
    depth: '深层',
    painArea: '点状',
    symptoms: ['压痛'],
    aggravatingFactors: ['负重', '上下楼梯'],
    relievingFactors: ['休息'],
    functionLimits: ['下蹲受限'],
    redFlags: [],
    interventionsTried: ['观察'],
  });

  const currentRegionData = anatomyRegistry[intakeData.region];
  const landmarkOptions = Object.keys(currentRegionData?.landmarks || {});
  const directionOptions = currentRegionData?.landmarks?.[intakeData.landmark]?.directions || [];

  const updateField = (field, value) => {
    setIntakeData((prev) => ({ ...prev, [field]: value }));
  };

  const onRegionChange = (region) => {
    const landmark = getDefaultLandmark(region);
    const direction = getDefaultDirection(region, landmark);
    setIntakeData((prev) => ({ ...prev, region, landmark, direction }));
  };

  const toggleArrayValue = (field, value) => {
    setIntakeData((prev) => ({
      ...prev,
      [field]: toggleItem(prev[field], value, field === 'interventionsTried' ? '观察' : undefined),
    }));
  };

  const assessment = useMemo(() => assessCase(intakeData), [intakeData]);

  return (
    <div className="app-shell">
      <div className="app-container">
        <HeaderSummary assessment={assessment} />

        <main className="main-grid">
          <InputPanel
            intakeData={intakeData}
            updateField={updateField}
            regionOptions={regionOptions}
            landmarkOptions={landmarkOptions}
            directionOptions={directionOptions}
            onRegionChange={onRegionChange}
            toggleArrayValue={toggleArrayValue}
            traumaToggle={() => updateField('traumaRelated', !intakeData.traumaRelated)}
          />

          <div className="center-column">
            <HumanBodyCanvas
              selectedRegion={intakeData.region}
              onRegionChange={onRegionChange}
              viewMode={viewMode}
              setViewMode={setViewMode}
              landmarkOptions={landmarkOptions}
              intakeData={intakeData}
            />
            <ExplainabilityPanel explainability={assessment.explainability} triageResult={assessment.triageResult} referralResult={assessment.referralResult} />
          </div>

          <div className="right-column">
            <PatientAdvicePanel patientAdvice={assessment.patientAdvice} />
            <DoctorSummaryPanel doctorSummary={assessment.doctorSummary} />
            <RecoveryTrendPanel recoveryData={assessment.recoveryData} recoveryHighlights={assessment.recoveryHighlights} />
          </div>
        </main>
      </div>
    </div>
  );
}
