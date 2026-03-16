export default function PatientAdvicePanel({ patientAdvice }) {
  return (
    <section className="panel">
      <h2>家庭处理与就诊建议</h2>
      <div className="section-card compact">
        <h3>当前建议</h3>
        <p>{patientAdvice.recommendationText}</p>
      </div>
      <div className="section-card compact">
        <h3>建议科室</h3>
        <div className="tag-list">
          {patientAdvice.recommendedDepartments.map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
      </div>
      <div className="section-card compact">
        <h3>在家可做的处理</h3>
        <ul className="bullet-list">
          {patientAdvice.homeCare.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <div className="section-card compact">
        <h3>当前不建议做的事</h3>
        <ul className="bullet-list">
          {patientAdvice.avoidActions.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <div className="section-card compact warning-box">
        <h3>何时需要尽快就医</h3>
        <ul className="bullet-list">
          {patientAdvice.emergencySignals.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
