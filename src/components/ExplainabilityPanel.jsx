export default function ExplainabilityPanel({ explainability, triageResult, referralResult }) {
  return (
    <section className="panel">
      <h2>可解释性面板</h2>
      <div className="section-card compact">
        <h3>当前判断依据</h3>
        <ul className="bullet-list">
          {explainability.triggeredRules.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}
        </ul>
      </div>
      <div className="section-card compact">
        <h3>红旗与分流</h3>
        <p>红旗触发：{triageResult.redFlagTriggered ? '是' : '否'}</p>
        <p>建议路径：{triageResult.urgency}</p>
        <p>推荐科室：{referralResult.primaryDepartments.join(' / ')}</p>
      </div>
      <div className="section-card compact">
        <h3>置信度提示</h3>
        <ul className="bullet-list">
          {explainability.confidenceNotes.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
