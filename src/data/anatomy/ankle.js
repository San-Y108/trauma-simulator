export const ankleAnatomy = {
  regionName: "踝部",
  defaultLandmark: "外踝",
  landmarks: {
    "内踝": {
      label: "内踝",
      directions: ["前", "后", "上", "下"],
      templates: {
        前: "内踝前方约 {distance}，{depth}{area}不适区",
        后: "内踝后方约 {distance}，{depth}{area}不适区",
        上: "内踝上方约 {distance}，{depth}{area}不适区",
        下: "内踝下方约 {distance}，{depth}{area}不适区",
      },
      candidateStructures: {
        前: ["踝前内侧软组织"],
        后: ["胫后肌腱附近", "后内侧软组织"],
        上: ["胫骨远端内侧周围组织"],
        下: ["三角韧带附近", "足内侧近端结构"],
      },
    },
    "外踝": {
      label: "外踝",
      directions: ["前", "后", "上", "下"],
      templates: {
        前: "外踝前方约 {distance}，{depth}{area}不适区",
        后: "外踝后方约 {distance}，{depth}{area}不适区",
        上: "外踝上方约 {distance}，{depth}{area}不适区",
        下: "外踝下方约 {distance}，{depth}{area}不适区",
      },
      candidateStructures: {
        前: ["前距腓韧带附近", "踝前外侧软组织"],
        后: ["腓骨肌腱区"],
        上: ["腓骨远端周围组织"],
        下: ["跟腓韧带附近", "外侧足近端结构"],
      },
    },
    "跟腱中点": {
      label: "跟腱中点",
      directions: ["上", "下", "内", "外"],
      templates: {
        上: "跟腱中点上方约 {distance}，{depth}{area}不适区",
        下: "跟腱中点下方约 {distance}，{depth}{area}不适区",
        内: "跟腱中点内侧约 {distance}，{depth}{area}不适区",
        外: "跟腱中点外侧约 {distance}，{depth}{area}不适区",
      },
      candidateStructures: {
        上: ["跟腱中段区域"],
        下: ["跟腱止点附近"],
        内: ["跟腱旁软组织"],
        外: ["跟腱旁软组织"],
      },
    },
    "足背中央": {
      label: "足背中央",
      directions: ["上", "下", "内", "外"],
      templates: {
        上: "足背中央上方约 {distance}，{depth}{area}不适区",
        下: "足背中央下方约 {distance}，{depth}{area}不适区",
        内: "足背中央内侧约 {distance}，{depth}{area}不适区",
        外: "足背中央外侧约 {distance}，{depth}{area}不适区",
      },
      candidateStructures: {
        上: ["踝足背交界区"],
        下: ["足背软组织"],
        内: ["足背内侧软组织"],
        外: ["足背外侧软组织"],
      },
    },
  },
};
