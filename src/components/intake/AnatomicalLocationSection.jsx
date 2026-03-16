import { distanceBandOptions, depthOptions, painAreaOptions } from '../../data/options';

export default function AnatomicalLocationSection({
  intakeData,
  updateField,
  regionOptions,
  landmarkOptions,
  directionOptions,
  onRegionChange,
}) {
  return (
    <section className="section-card">
      <h3>解剖定位</h3>
      <div className="field-grid two-col">
        <label>
          <span>部位</span>
          <select value={intakeData.region} onChange={(e) => onRegionChange(e.target.value)}>
            {regionOptions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span>参考标志点</span>
          <select value={intakeData.landmark} onChange={(e) => updateField('landmark', e.target.value)}>
            {landmarkOptions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span>方向</span>
          <select value={intakeData.direction} onChange={(e) => updateField('direction', e.target.value)}>
            {directionOptions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span>距离</span>
          <select value={intakeData.distanceBand} onChange={(e) => updateField('distanceBand', e.target.value)}>
            {distanceBandOptions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span>深度</span>
          <select value={intakeData.depth} onChange={(e) => updateField('depth', e.target.value)}>
            {depthOptions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span>范围</span>
          <select value={intakeData.painArea} onChange={(e) => updateField('painArea', e.target.value)}>
            {painAreaOptions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
    </section>
  );
}
