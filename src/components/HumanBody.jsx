function zoneStyle(selectedPart, part) {
  return {
    fill: selectedPart === part ? "#8ec5ff" : "#dbe3ee",
    stroke: "#64748b",
    strokeWidth: 2,
    cursor: "pointer",
  };
}

export default function HumanBody({
  selectedPart,
  setSelectedPart,
  selectedLayer,
  selectedMechanism,
  viewMode,
  setViewMode,
}) {
  const isBack = viewMode === "back";

  return (
    <section className="panel body-panel">
      <div className="panel-head">
        <div>
          <h2>人体模型</h2>
          <p className="panel-subtitle">
            可以点左边按钮，也可以直接点下方人体区域。
          </p>
        </div>

        <div className="segmented-control">
          <button
            className={`segmented-button ${viewMode === "front" ? "active" : ""}`}
            onClick={() => setViewMode("front")}
          >
            正面
          </button>
          <button
            className={`segmented-button ${viewMode === "back" ? "active" : ""}`}
            onClick={() => setViewMode("back")}
          >
            背面
          </button>
        </div>
      </div>

      <div className="body-stage">
        <svg width="280" height="560" viewBox="0 0 280 560">
          <circle
            cx="140"
            cy="60"
            r="32"
            {...zoneStyle(selectedPart, "头部")}
            onClick={() => setSelectedPart("头部")}
          />

          <rect
            x="126"
            y="96"
            width="28"
            height="24"
            rx="10"
            {...zoneStyle(selectedPart, "颈部")}
            onClick={() => setSelectedPart("颈部")}
          />

          <rect
            x="90"
            y="130"
            width="100"
            height="34"
            rx="18"
            {...zoneStyle(selectedPart, "肩部")}
            onClick={() => setSelectedPart("肩部")}
          />

          <rect
            x="78"
            y="176"
            width="124"
            height="124"
            rx="28"
            fill={isBack ? "#dbe3ee" : "#edf2f7"}
            stroke="#64748b"
            strokeWidth="2"
          />

          <rect
            x="110"
            y="176"
            width="60"
            height="180"
            rx="24"
            {...zoneStyle(selectedPart, "脊柱")}
            onClick={() => setSelectedPart("脊柱")}
          />

          <rect
            x="60"
            y="184"
            width="18"
            height="146"
            rx="9"
            {...zoneStyle(selectedPart, "上肢")}
            onClick={() => setSelectedPart("上肢")}
          />
          <rect
            x="202"
            y="184"
            width="18"
            height="146"
            rx="9"
            {...zoneStyle(selectedPart, "上肢")}
            onClick={() => setSelectedPart("上肢")}
          />

          <rect
            x="98"
            y="360"
            width="84"
            height="40"
            rx="18"
            {...zoneStyle(selectedPart, "髋部")}
            onClick={() => setSelectedPart("髋部")}
          />

          <rect
            x="114"
            y="402"
            width="22"
            height="118"
            rx="11"
            fill="#b8c5d8"
            stroke="#64748b"
            strokeWidth="2"
          />
          <rect
            x="144"
            y="402"
            width="22"
            height="118"
            rx="11"
            fill="#b8c5d8"
            stroke="#64748b"
            strokeWidth="2"
          />

          <rect
            x="108"
            y="452"
            width="64"
            height="34"
            rx="16"
            {...zoneStyle(selectedPart, "膝部")}
            onClick={() => setSelectedPart("膝部")}
          />

          <rect
            x="102"
            y="520"
            width="76"
            height="24"
            rx="12"
            {...zoneStyle(selectedPart, "踝部")}
            onClick={() => setSelectedPart("踝部")}
          />

          {isBack && (
            <line
              x1="140"
              y1="190"
              x2="140"
              y2="350"
              stroke="#475569"
              strokeWidth="5"
              strokeLinecap="round"
            />
          )}
        </svg>
      </div>

      <div className="body-hint">
        <div><strong>当前部位：</strong>{selectedPart}</div>
        <div><strong>组织层：</strong>{selectedLayer}</div>
        <div><strong>损伤机制：</strong>{selectedMechanism}</div>
        <div><strong>当前视图：</strong>{viewMode === "front" ? "正面" : "背面"}</div>
      </div>
    </section>
  );
}