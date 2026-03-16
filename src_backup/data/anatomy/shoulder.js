export const shoulderAnatomy = {
  regionName: "肩部",
  landmarks: {
    "肩峰": {
      label: "肩峰",
      directions: ["前", "后", "下", "外"],
      templates: {
        "前": "肩峰前方约 {distance}，{depth}{area}不适区",
        "后": "肩峰后方约 {distance}，{depth}{area}不适区",
        "下": "肩峰下方约 {distance}，{depth}{area}不适区",
        "外": "肩峰外侧约 {distance}，{depth}{area}不适区",
      },
      candidateStructures: {
        "前": ["肩前方软组织", "肱二头肌长头沟附近"],
        "后": ["肩后方软组织", "后侧肩袖区域"],
        "下": ["肩峰下区域", "三角肌深层结构"],
        "外": ["三角肌附着区"],
      },
    },

    "喙突区": {
      label: "喙突区",
      directions: ["内", "外", "上", "下"],
      templates: {
        "内": "喙突区内侧约 {distance}，{depth}{area}不适区",
        "外": "喙突区外侧约 {distance}，{depth}{area}不适区",
        "上": "喙突区上方约 {distance}，{depth}{area}不适区",
        "下": "喙突区下方约 {distance}，{depth}{area}不适区",
      },
      candidateStructures: {
        "内": ["肩前内侧软组织"],
        "外": ["肩前方结构区"],
        "上": ["锁骨远端前下方附近"],
        "下": ["肱二头肌短头/喙肱肌起点附近"],
      },
    },

    "肱骨大结节区": {
      label: "肱骨大结节区",
      directions: ["前", "后", "上", "下"],
      templates: {
        "前": "肱骨大结节前方约 {distance}，{depth}{area}不适区",
        "后": "肱骨大结节后方约 {distance}，{depth}{area}不适区",
        "上": "肱骨大结节上方约 {distance}，{depth}{area}不适区",
        "下": "肱骨大结节下方约 {distance}，{depth}{area}不适区",
      },
      candidateStructures: {
        "前": ["肩前外侧软组织"],
        "后": ["肩后外侧软组织"],
        "上": ["肩袖附着区附近"],
        "下": ["三角肌深层区域"],
      },
    },
  },
};