export default function DoctorSummaryPanel({ doctorSummary }) {
  const copySummary = async () => {
    const text = [
      `主诉：${doctorSummary.chiefComplaint}`,
      `定位：${doctorSummary.standardizedLocation}`,
      `症状：${doctorSummary.symptomSummary}`,
      `功能：${doctorSummary.functionSummary}`,
      `疑似结构：${doctorSummary.suspectedStructures.join('、')}`,
      `疑似组织类型：${doctorSummary.suspectedTissueTypes.join('、')}`,
      `重点查体：${doctorSummary.examSuggestions.join('、')}`,
      `检查方向：${doctorSummary.investigationSuggestions.join('、')}`,
      `建议科室：${doctorSummary.departmentSuggestion.join('、')}`,
    ].join('\n');
    try {
      await navigator.clipboard.writeText(text);
      alert('已复制医生摘要');
    } catch {
      alert('复制失败，请手动复制');
    }
  };

  return (
    <section className="panel">
      <div className="panel-head inline-head">
        <h2>门诊摘要 / 问诊辅助摘要</h2>
        <button className="copy-button" onClick={copySummary}>复制摘要</button>
      </div>
      <div className="section-card compact"><h3>主诉</h3><p>{doctorSummary.chiefComplaint}</p></div>
      <div className="section-card compact"><h3>标准化定位</h3><p>{doctorSummary.standardizedLocation}</p></div>
      <div className="section-card compact"><h3>症状摘要</h3><p>{doctorSummary.symptomSummary}</p></div>
      <div className="section-card compact"><h3>功能摘要</h3><p>{doctorSummary.functionSummary}</p></div>
      <div className="section-card compact"><h3>疑似涉及结构</h3><div className="tag-list">{doctorSummary.suspectedStructures.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div>
      <div className="section-card compact"><h3>重点查体方向</h3><ul className="bullet-list">{doctorSummary.examSuggestions.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <div className="section-card compact"><h3>检查方向建议</h3><ul className="bullet-list">{doctorSummary.investigationSuggestions.map((item) => <li key={item}>{item}</li>)}</ul></div>
    </section>
  );
}
