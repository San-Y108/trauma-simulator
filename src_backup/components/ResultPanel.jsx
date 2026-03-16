import RecoveryChart from "./RecoveryChart";

export default function ResultPanel({ result }) {
  return (
    <section className="panel">
      <h2>模拟结果</h2>
      <p className="panel-subtitle">根据当前选择自动生成状态变化。</p>

      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-title">疼痛等级</div>
          <div className="stat-value">{result.pain}/10</div>
        </div>

        <div className="stat-card">
          <div className="stat-title">功能下降</div>
          <div className="stat-value">{result.mobilityLoss}%</div>
        </div>

        <div className="stat-card">
          <div className="stat-title">肿胀风险</div>
          <div className="stat-value">{result.swellingRisk}%</div>
        </div>

        <div className="stat-card">
          <div className="stat-title">感染风险</div>
          <div className="stat-value">{result.infectionRisk}%</div>
        </div>
      </div>

      <div className="section-card">
        <h3>功能变化</h3>
        <p>{result.functionChange}</p>
      </div>

      <div className="section-card">
        <h3>风险等级</h3>
        <div className="recommendation-pill">{result.urgency}</div>
      </div>

      <div className="section-card">
        <h3>受影响动作</h3>
        <div className="tag-list">
          {result.impactedActions.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="section-card">
        <h3>代偿链</h3>
        {result.compensation.length > 0 ? (
          <ul className="bullet-list">
            {result.compensation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>暂时无明显代偿链。</p>
        )}
      </div>

      <div className="section-card">
        <h3>恢复趋势</h3>
        <RecoveryChart data={result.recoveryData} />

        <div className="recovery-highlight-grid">
          <div className="mini-highlight">
            <span>2周无干预</span>
            <strong>{result.recoveryHighlights.week2Baseline}</strong>
          </div>
          <div className="mini-highlight">
            <span>2周干预后</span>
            <strong>{result.recoveryHighlights.week2Intervention}</strong>
          </div>
          <div className="mini-highlight">
            <span>6周无干预</span>
            <strong>{result.recoveryHighlights.week6Baseline}</strong>
          </div>
          <div className="mini-highlight">
            <span>6周干预后</span>
            <strong>{result.recoveryHighlights.week6Intervention}</strong>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h3>时间线</h3>
        <div className="timeline-list">
          {result.timeline.map((item) => (
            <div key={item} className="timeline-item">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="section-card">
        <h3>当前提示</h3>
        <p>{result.note}</p>
        <div className="recommendation-box">{result.recommendation}</div>
      </div>
    </section>
  );
}