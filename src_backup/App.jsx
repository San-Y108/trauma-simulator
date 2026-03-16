import { useMemo, useState } from "react";
import "./App.css";
import normalizeLocation from "./engine/normalizeLocation";

export default function App() {
  const [intakeData] = useState({
    region: "膝部",
    side: "右",
    onsetType: "突发",
    onsetTime: "3天前",
    traumaRelated: true,

    landmark: "髌骨下缘",
    direction: "下",
    distanceBand: "1-3cm",
    depth: "深层",
    painArea: "点状",

    symptoms: ["压痛"],
    aggravatingFactors: ["负重", "上下楼梯"],
    relievingFactors: ["休息"],

    functionLimits: ["下蹲受限"],
    redFlags: [],

    interventionsTried: ["观察"],
  });

  const assessment = useMemo(() => {
    const locationResult = normalizeLocation(intakeData);

    return {
      locationResult,
      normalizedDescription: locationResult.normalizedDescription,
      suspectedStructures: locationResult.candidateStructures,
      riskLevel: "中",
      departmentSuggestion: ["骨科", "运动医学"],
      patientAdvice: [
        "近期先减少负重和反复上下楼梯。",
        "可先进行基础观察和减载。",
        "若出现不能负重、明显肿胀加重或麻木无力，应尽快就医。",
      ],
      doctorSummary: {
        chiefComplaint: "右膝疼痛3天，活动后加重。",
        standardizedLocation: locationResult.normalizedDescription,
        symptomSummary: "以压痛为主，负重及上下楼梯时加重。",
        functionSummary: "下蹲受限。",
        suspectedStructures: locationResult.candidateStructures,
      },
    };
  }, [intakeData]);

  return (
    <div className="app-shell">
      <div className="app-container">
        <h1>结构化肌骨/创伤辅助评估系统</h1>
        <p>当前阶段：位置标准化引擎已经接入。</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "16px",
              background: "#fff",
            }}
          >
            <h2>当前 intakeData</h2>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              {JSON.stringify(intakeData, null, 2)}
            </pre>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "16px",
              background: "#fff",
            }}
          >
            <h2>当前 assessment</h2>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              {JSON.stringify(assessment, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}