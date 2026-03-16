export const layerRules = {
  "骨": {
    pain: 2,
    mobilityLoss: 20,
    swellingRisk: 10,
    urgency: "中",
    functionChange: "结构稳定性下降，活动明显受限",
    compensation: ["邻近关节代偿", "承重模式改变"],
  },
  "韧带": {
    pain: 1,
    mobilityLoss: 18,
    swellingRisk: 8,
    urgency: "中",
    functionChange: "稳定性下降",
    compensation: ["动作保护性回避", "用力方式改变"],
  },
  "肌肉": {
    pain: 1,
    mobilityLoss: 12,
    functionChange: "力量输出下降",
    compensation: ["周围肌群代偿"],
  },
  "皮肤": {
    infectionRisk: 10,
    functionChange: "表层不适",
  },
  "血管": {
    swellingRisk: 12,
    urgency: "高",
    functionChange: "局部状态需密切观察",
    compensation: ["局部供血状态变化风险"],
  },
  "神经": {
    urgency: "高",
    functionChange: "感觉或控制受影响",
    compensation: ["保护性姿势增加", "动作精细度下降"],
  },
  "软组织": {
    pain: 1,
    swellingRisk: 10,
    functionChange: "局部压痛与肿胀上升",
  },
};

export const mechanismRules = {
  "压迫": {
    mobilityLoss: 6,
    functionChange: "持续受力后的活动受限",
  },
  "钝性撞击": {
    pain: 1,
    swellingRisk: 10,
    functionChange: "急性刺激反应更明显",
  },
  "扭转/牵拉": {
    mobilityLoss: 10,
    functionChange: "活动范围下降",
  },
  "骨折样损伤": {
    pain: 2,
    mobilityLoss: 20,
    swellingRisk: 15,
    urgency: "高",
    functionChange: "结构稳定性下降",
  },
  "热损伤": {
    pain: 1,
    infectionRisk: 20,
    functionChange: "表浅或深层组织刺激",
  },
  "擦伤": {
    pain: 1,
    infectionRisk: 15,
    functionChange: "表层屏障受损",
  },
};

export const partRules = {
  "头部": {
    mobilityLoss: 4,
    compensation: ["注意力波动", "平衡反应下降"],
  },
  "颈部": {
    mobilityLoss: 10,
    compensation: ["肩颈代偿", "转头动作受限"],
  },
  "肩部": {
    mobilityLoss: 10,
    compensation: ["上肢发力模式改变"],
  },
  "上臂": {
    mobilityLoss: 8,
    compensation: ["肩部代偿", "单侧用力模式改变"],
  },
  "前臂/手": {
    mobilityLoss: 8,
    compensation: ["手腕与手指精细控制下降", "抓握代偿"],
  },
  "胸腹": {
    mobilityLoss: 8,
    compensation: ["躯干保护性僵硬"],
  },
  "脊柱": {
    mobilityLoss: 12,
    functionChange: "姿势与活动协调受限",
    compensation: ["腰背负荷增加"],
  },
  "骨盆/髋部": {
    mobilityLoss: 10,
    compensation: ["步态改变", "骨盆代偿"],
  },
  "大腿": {
    mobilityLoss: 10,
    compensation: ["起步发力下降", "膝髋协同变化"],
  },
  "膝部": {
    mobilityLoss: 10,
    compensation: ["步态改变", "髋踝协同变化"],
  },
  "小腿": {
    mobilityLoss: 10,
    compensation: ["推进力下降", "踝膝负荷转移"],
  },
  "踝/足部": {
    mobilityLoss: 10,
    compensation: ["步态推进下降", "膝部负荷转移"],
  },
};

export const interventionRules = {
  "观察": {
    recoveryBoost: 0,
    supportGain: 0,
    note: "当前主要以观察和基础管理为主。",
  },
  "减载": {
    pain: -1,
    mobilityLoss: -6,
    supportGain: 4,
    recoveryBoost: 8,
    note: "减载可降低持续受力，减少重复刺激。",
  },
  "固定": {
    pain: -1,
    swellingRisk: -6,
    mobilityLoss: 4,
    supportGain: 18,
    recoveryBoost: 6,
    note: "固定提高保护性，但短期活动会更受限。",
  },
  "康复训练": {
    pain: -1,
    mobilityLoss: -10,
    supportGain: 6,
    recoveryBoost: 14,
    note: "康复训练有助于恢复功能并控制代偿。",
  },
};