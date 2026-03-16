function buildPoints(data, key, width, height, padding) {
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;

  return data
    .map((item, index) => {
      const x = padding + (innerWidth / (data.length - 1)) * index;
      const y = height - padding - (item[key] / 100) * innerHeight;
      return `${x},${y}`;
    })
    .join(" ");
}

export default function RecoveryChart({ data }) {
  const width = 340;
  const height = 220;
  const padding = 28;

  const baselinePoints = buildPoints(data, "baseline", width, height, padding);
  const interventionPoints = buildPoints(
    data,
    "intervention",
    width,
    height,
    padding
  );

  return (
    <div className="chart-shell">
      <div className="chart-legend">
        <span className="legend-item">
          <span className="legend-dot baseline"></span>
          无干预
        </span>
        <span className="legend-item">
          <span className="legend-dot intervention"></span>
          干预后
        </span>
      </div>

      <svg className="chart-svg" viewBox={`0 0 ${width} ${height}`}>
        {[25, 50, 75, 100].map((value) => {
          const y = height - padding - ((value / 100) * (height - padding * 2));
          return (
            <g key={value}>
              <line
                x1={padding}
                y1={y}
                x2={width - padding}
                y2={y}
                stroke="#e2e8f0"
                strokeDasharray="4 4"
              />
              <text x="2" y={y + 4} fontSize="11" fill="#64748b">
                {value}
              </text>
            </g>
          );
        })}

        <polyline
          fill="none"
          stroke="#94a3b8"
          strokeWidth="3"
          points={baselinePoints}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <polyline
          fill="none"
          stroke="#0f172a"
          strokeWidth="3"
          points={interventionPoints}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {data.map((item, index) => {
          const innerWidth = width - padding * 2;
          const innerHeight = height - padding * 2;
          const x = padding + (innerWidth / (data.length - 1)) * index;
          const y1 = height - padding - (item.baseline / 100) * innerHeight;
          const y2 = height - padding - (item.intervention / 100) * innerHeight;

          return (
            <g key={item.label}>
              <circle cx={x} cy={y1} r="4" fill="#94a3b8" />
              <circle cx={x} cy={y2} r="4" fill="#0f172a" />
              <text x={x - 10} y={height - 6} fontSize="11" fill="#64748b">
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}