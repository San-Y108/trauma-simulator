import { useMemo, useState } from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import HumanBody from "./components/HumanBody";
import ResultPanel from "./components/ResultPanel";
import simulateResult from "./engine/simulateResult";
import {
  bodyParts,
  tissueLayers,
  mechanisms,
  interventions,
} from "./data/options";

export default function App() {
  const [selectedPart, setSelectedPart] = useState("膝部");
  const [selectedLayer, setSelectedLayer] = useState("骨");
  const [selectedMechanism, setSelectedMechanism] = useState("骨折样损伤");
  const [severity, setSeverity] = useState(3);
  const [viewMode, setViewMode] = useState("front");
  const [selectedInterventions, setSelectedInterventions] = useState(["观察"]);

  const result = useMemo(() => {
    return simulateResult({
      selectedPart,
      selectedLayer,
      selectedMechanism,
      severity,
      selectedInterventions,
    });
  }, [
    selectedPart,
    selectedLayer,
    selectedMechanism,
    severity,
    selectedInterventions,
  ]);

  return (
    <div className="app-shell">
      <div className="app-container">
        <header className="hero">
          <h1 className="hero-title">人体创伤后果模拟器</h1>
          <p className="hero-subtitle">
            更细分的人体区域、干预方式、恢复趋势与风险解释展示版。
          </p>

          <div className="hero-badges">
            <span className="hero-badge">更细人体分区</span>
            <span className="hero-badge">干预方式模拟</span>
            <span className="hero-badge">2周 / 6周恢复趋势</span>
            <span className="hero-badge">更真实人体 SVG</span>
          </div>
        </header>

        <main className="layout-grid">
          <ControlPanel
            bodyParts={bodyParts}
            selectedPart={selectedPart}
            setSelectedPart={setSelectedPart}
            tissueLayers={tissueLayers}
            selectedLayer={selectedLayer}
            setSelectedLayer={setSelectedLayer}
            mechanisms={mechanisms}
            selectedMechanism={selectedMechanism}
            setSelectedMechanism={setSelectedMechanism}
            severity={severity}
            setSeverity={setSeverity}
            interventions={interventions}
            selectedInterventions={selectedInterventions}
            setSelectedInterventions={setSelectedInterventions}
            result={result}
          />

          <HumanBody
            selectedPart={selectedPart}
            setSelectedPart={setSelectedPart}
            selectedLayer={selectedLayer}
            selectedMechanism={selectedMechanism}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />

          <ResultPanel result={result} />
        </main>
      </div>
    </div>
  );
}