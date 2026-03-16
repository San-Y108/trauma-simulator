function toggleIntervention(item, selectedInterventions, setSelectedInterventions) {
  if (selectedInterventions.includes(item)) {
    const next = selectedInterventions.filter((v) => v !== item);

    if (next.length === 0) {
      setSelectedInterventions(["观察"]);
    } else {
      setSelectedInterventions(next);
    }
  } else {
    const next = [...selectedInterventions, item].filter(
      (value, index, array) => array.indexOf(value) === index
    );

    setSelectedInterventions(next);
  }
}

export default function ControlPanel({
  bodyParts,
  selectedPart,
  setSelectedPart,
  tissueLayers,
  selectedLayer,
  setSelectedLayer,
  mechanisms,
  selectedMechanism,
  setSelectedMechanism,
  severity,
  setSeverity,
  interventions,
  selectedInterventions,
  setSelectedInterventions,
  result,
}) {
  return (
    <aside className="panel panel-sticky">
      <h2>参数设置</h2>
      <p className="panel-subtitle">左侧调参数，中间选区域，右侧实时变化。</p>

      <div className="field-group">
        <div className="section-label">1. 身体部位</div>
        <div className="button-grid">
          {bodyParts.map((part) => (
            <button
              key={part}
              onClick={() => setSelectedPart(part)}
              className={`part-button ${selectedPart === part ? "active" : ""}`}
            >
              {part}
            </button>
          ))}
        </div>
      </div>

      <div className="field-group">
        <div className="section-label">2. 组织层</div>
        <select
          value={selectedLayer}
          onChange={(e) => setSelectedLayer(e.target.value)}
          className="select-input"
        >
          {tissueLayers.map((layer) => (
            <option key={layer} value={layer}>
              {layer}
            </option>
          ))}
        </select>
      </div>

      <div className="field-group">
        <div className="section-label">3. 损伤机制</div>
        <select
          value={selectedMechanism}
          onChange={(e) => setSelectedMechanism(e.target.value)}
          className="select-input"
        >
          {mechanisms.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="field-group">
        <div className="section-label">4. 严重度：{severity}</div>
        <input
          type="range"
          min="1"
          max="5"
          value={severity}
          onChange={(e) => setSeverity(Number(e.target.value))}
          className="range-input"
        />
        <div className="range-row">
          <span>轻</span>
          <span>中</span>
          <span>重</span>
        </div>
      </div>

      <div className="field-group">
        <div className="section-label">5. 干预方式</div>
        <div className="intervention-list">
          {interventions.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() =>
                toggleIntervention(
                  item,
                  selectedInterventions,
                  setSelectedInterventions
                )
              }
              className={`intervention-button ${
                selectedInterventions.includes(item) ? "active" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="quick-summary">
        <div className="summary-line">
          <span>风险等级</span>
          <strong>{result.urgency}</strong>
        </div>
        <div className="summary-line">
          <span>疼痛等级</span>
          <strong>{result.pain}/10</strong>
        </div>
        <div className="summary-line">
          <span>功能下降</span>
          <strong>{result.mobilityLoss}%</strong>
        </div>
        <div className="summary-line">
          <span>2周恢复</span>
          <strong>{result.recoveryHighlights?.week2Intervention ?? 0}</strong>
        </div>
        <div className="summary-line">
          <span>6周恢复</span>
          <strong>{result.recoveryHighlights?.week6Intervention ?? 0}</strong>
        </div>
      </div>
    </aside>
  );
}