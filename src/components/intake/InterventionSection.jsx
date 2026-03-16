import { interventions } from '../../data/options';

export default function InterventionSection({ intakeData, toggleArrayValue }) {
  return (
    <section className="section-card">
      <h3>已尝试干预</h3>
      <div className="chip-grid">
        {interventions.map((item) => (
          <button
            key={item}
            className={`chip ${intakeData.interventionsTried.includes(item) ? 'active' : ''}`}
            onClick={() => toggleArrayValue('interventionsTried', item)}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
