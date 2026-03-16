import ChiefComplaintSection from './ChiefComplaintSection';
import AnatomicalLocationSection from './AnatomicalLocationSection';
import SymptomSection from './SymptomSection';
import FunctionSection from './FunctionSection';
import TriggerReliefSection from './TriggerReliefSection';
import RedFlagSection from './RedFlagSection';
import InterventionSection from './InterventionSection';

export default function InputPanel(props) {
  return (
    <aside className="panel sticky-panel">
      <h2>结构化输入</h2>
      <p className="panel-desc">先用标准方式录入位置、症状、诱发因素和红旗征象。</p>
      <ChiefComplaintSection {...props} />
      <AnatomicalLocationSection {...props} />
      <SymptomSection {...props} />
      <FunctionSection {...props} />
      <TriggerReliefSection {...props} />
      <RedFlagSection {...props} />
      <InterventionSection {...props} />
    </aside>
  );
}
