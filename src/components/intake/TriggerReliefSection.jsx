import { aggravatingOptions, relievingOptions } from '../../data/symptomDictionary';

export default function TriggerReliefSection({ intakeData, toggleArrayValue }) {
  return (
    <section className="section-card">
      <h3>诱发 / 缓解</h3>
      <div className="sub-block">
        <h4>诱发因素</h4>
        <div className="chip-grid">
          {aggravatingOptions.map((item) => (
            <button
              key={item}
              className={`chip ${intakeData.aggravatingFactors.includes(item) ? 'active' : ''}`}
              onClick={() => toggleArrayValue('aggravatingFactors', item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="sub-block">
        <h4>缓解因素</h4>
        <div className="chip-grid">
          {relievingOptions.map((item) => (
            <button
              key={item}
              className={`chip ${intakeData.relievingFactors.includes(item) ? 'active' : ''}`}
              onClick={() => toggleArrayValue('relievingFactors', item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
