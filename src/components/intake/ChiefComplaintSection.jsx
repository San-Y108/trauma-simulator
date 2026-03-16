import { onsetTypeOptions, sideOptions } from '../../data/options';

export default function ChiefComplaintSection({ intakeData, updateField, traumaToggle }) {
  return (
    <section className="section-card">
      <h3>主诉信息</h3>
      <div className="field-grid two-col">
        <label>
          <span>侧别</span>
          <select value={intakeData.side} onChange={(e) => updateField('side', e.target.value)}>
            {sideOptions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span>起病方式</span>
          <select value={intakeData.onsetType} onChange={(e) => updateField('onsetType', e.target.value)}>
            {onsetTypeOptions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="full-width">
          <span>起病时间</span>
          <input value={intakeData.onsetTime} onChange={(e) => updateField('onsetTime', e.target.value)} />
        </label>
      </div>
      <button className={`toggle-button ${intakeData.traumaRelated ? 'active' : ''}`} onClick={traumaToggle}>
        {intakeData.traumaRelated ? '已标记：与外伤相关' : '未标记：与外伤相关'}
      </button>
    </section>
  );
}
