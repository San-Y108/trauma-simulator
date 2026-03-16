import { functionLimitOptions } from '../../data/symptomDictionary';

export default function FunctionSection({ intakeData, toggleArrayValue }) {
  return (
    <section className="section-card">
      <h3>功能受限</h3>
      <div className="chip-grid">
        {functionLimitOptions.map((item) => (
          <button
            key={item}
            className={`chip ${intakeData.functionLimits.includes(item) ? 'active' : ''}`}
            onClick={() => toggleArrayValue('functionLimits', item)}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
