import { symptomOptions } from '../../data/symptomDictionary';

export default function SymptomSection({ intakeData, toggleArrayValue }) {
  return (
    <section className="section-card">
      <h3>症状性质</h3>
      <div className="chip-grid">
        {symptomOptions.map((item) => (
          <button
            key={item}
            className={`chip ${intakeData.symptoms.includes(item) ? 'active' : ''}`}
            onClick={() => toggleArrayValue('symptoms', item)}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
