export default function HeaderSummary({ assessment }) {
  return (
    <header className="hero-header">
      <div>
        <h1>结构化肌骨 / 创伤辅助评估系统</h1>
        <p>把模糊描述转成标准化位置描述、风险分层和门诊摘要。</p>
      </div>
      <div className="summary-badges">
        <div className="badge-box">
          <span>当前风险</span>
          <strong>{assessment.triageResult.riskLevel}</strong>
        </div>
        <div className="badge-box">
          <span>就诊路径</span>
          <strong>{assessment.triageResult.urgency}</strong>
        </div>
        <div className="badge-box">
          <span>推荐科室</span>
          <strong>{assessment.referralResult.primaryDepartments.join(' / ') || '待定'}</strong>
        </div>
      </div>
    </header>
  );
}
