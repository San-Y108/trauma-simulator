import { redFlagOptions } from '../../data/symptomDictionary';

export default function RedFlagSection({ intakeData, toggleArrayValue }) {
  return (
    <section className="section-card red-flag-card">
      <h3>红旗筛查</h3>
      <div className="chip-grid">
        {redFlagOptions.map((item) => (
          <button
            key={item}
            className={`chip danger ${intakeData.redFlags.includes(item) ? 'active' : ''}`}
            onClick={() => toggleArrayValue('redFlags', item)}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
