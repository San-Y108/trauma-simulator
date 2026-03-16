export const kneeAnatomy = {
  regionName: "膝部",
  landmarks: {
    "髌骨上缘": {
      label: "髌骨上缘",
      directions: ["上", "下", "内", "外"],
      templates: {
        "上": "髌骨上缘上方约 {distance}，{depth}{area}不适区",
        "下": "髌骨上缘下方约 {distance}，{depth}{area}不适区",
        "内": "髌骨上缘内侧约 {distance}，{depth}{area}不适区",
        "外": "髌骨上缘外侧约 {distance}，{depth}{area}不适区",
      },
      candidateStructures: {
        "上": ["股四头肌腱区", "髌上囊周围组织"],
        "下": ["髌骨前方软组织"],
        "内": ["内侧髌旁支持结构"],
        "外": ["外侧髌旁支持结构"],
      },
    },

    "髌骨下缘": {
      label: "髌骨下缘",
      directions: ["上", "下", "内", "外"],
      templates: {
        "上": "髌骨下缘上方约 {distance}，{depth}{area}压痛区",
        "下": "髌骨下缘下方约 {distance}，{depth}{area}压痛区",
        "内": "髌骨下缘内侧约 {distance}，{depth}{area}压痛区",
        "外": "髌骨下缘外侧约 {distance}，{depth}{area}压痛区",
      },
      candidateStructures: {
        "上": ["髌骨下极周围组织"],
        "下": ["髌腱区", "胫骨粗隆附着区", "髌下脂肪垫周围组织"],
        "内": ["内侧髌旁支持带附近"],
        "外": ["外侧髌旁支持带附近"],
      },
    },

    "内侧关节线": {
      label: "内侧关节线",
      directions: ["前", "后", "上", "下"],
      templates: {
        "前": "膝内侧关节线前方约 {distance}，{depth}{area}不适区",
        "后": "膝内侧关节线后方约 {distance}，{depth}{area}不适区",
        "上": "膝内侧关节线上方约 {distance}，{depth}{area}不适区",
        "下": "膝内侧关节线下方约 {distance}，{depth}{area}不适区",
      },
      candidateStructures: {
        "前": ["内侧副韧带附近", "内侧髌旁结构"],
        "后": ["后内侧软组织区", "腘绳肌止点附近"],
        "上": ["股骨内侧髁周围组织"],
        "下": ["鹅足区", "胫骨内侧近端软组织"],
      },
    },

    "外侧关节线": {
      label: "外侧关节线",
      directions: ["前", "后", "上", "下"],
      templates: {
        "前": "膝外侧关节线前方约 {distance}，{depth}{area}不适区",
        "后": "膝外侧关节线后方约 {distance}，{depth}{area}不适区",
        "上": "膝外侧关节线上方约 {distance}，{depth}{area}不适区",
        "下": "膝外侧关节线下方约 {distance}，{depth}{area}不适区",
      },
      candidateStructures: {
        "前": ["外侧支持结构", "外侧前方软组织"],
        "后": ["后外侧结构区"],
        "上": ["股骨外侧髁周围组织"],
        "下": ["腓骨头附近结构", "外侧副韧带远端附近"],
      },
    },

    "胫骨粗隆": {
      label: "胫骨粗隆",
      directions: ["上", "下", "内", "外"],
      templates: {
        "上": "胫骨粗隆上方约 {distance}，{depth}{area}不适区",
        "下": "胫骨粗隆下方约 {distance}，{depth}{area}不适区",
        "内": "胫骨粗隆内侧约 {distance}，{depth}{area}不适区",
        "外": "胫骨粗隆外侧约 {distance}，{depth}{area}不适区",
      },
      candidateStructures: {
        "上": ["髌腱止点区"],
        "下": ["胫骨前方软组织"],
        "内": ["胫骨近端内侧软组织"],
        "外": ["胫骨近端外侧软组织"],
      },
    },

    "腘窝中心": {
      label: "腘窝中心",
      directions: ["上", "下", "内", "外"],
      templates: {
        "上": "腘窝中心上方约 {distance}，{depth}{area}不适区",
        "下": "腘窝中心下方约 {distance}，{depth}{area}不适区",
        "内": "腘窝中心内侧约 {distance}，{depth}{area}不适区",
        "外": "腘窝中心外侧约 {distance}，{depth}{area}不适区",
      },
      candidateStructures: {
        "上": ["后方关节囊附近", "腘绳肌远端区域"],
        "下": ["小腿后群近端结构"],
        "内": ["后内侧软组织区"],
        "外": ["后外侧软组织区"],
      },
    },
  },
};