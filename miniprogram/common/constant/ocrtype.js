//OCR
export const OCR = [ 
  {
    text: "身份证",
    value: "idCard",
    iconUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*Wm_MQ4r945YAAAAAAAAAAAAAARQnAQ",
    // 默认识别的图片
    demoImgUrl:
      // 'https://cv-oss.oss-cn-beijing.aliyuncs.com/cv-demo/portal/%E8%BA%AB%E4%BB%BD%E8%AF%81/%E8%83%8C%E9%9D%A2.png',
      'https://cv-oss.oss-cn-beijing.aliyuncs.com/cv-demo/portal/%E8%BA%AB%E4%BB%BD%E8%AF%81/%E7%A4%BA%E4%BE%8B1.png',
    // 识别时需要传递的uri参数
    uri: 'tr_id_card',
    // 识别时需要传递的serviceCode
    serviceCode: 'ocr.ant',
    attributes: {
      side: "auto",
      _ROUTE_: "UA"
    },
  },
  // {
  //   text: "银行卡",
  //   value: "bankCard",
  //   iconUrl:
  //     "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*fDJLS6BPvgAAAAAAAAAAAAAAARQnAQ",
  //   // demoImgUrl: '/assets/images/default/creditCardDemo.jpeg'
  //   demoImgUrl:
  //     "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*EoMYQ59TbzkAAAAAAAAAAABkARQnAQ"
  // },
  // {
  //   text: "驾驶证",
  //   value: "driverLicense",
  //   iconUrl:
  //     "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*S0DvRJn-dFEAAAAAAAAAAAAAARQnAQ",
  //   // demoImgUrl: '/assets/images/default/licenseDemo.jpeg'
  //   demoImgUrl:
  //     "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*_iPPQKX7q0kAAAAAAAAAAABkARQnAQ"
  // },
  // {
  //   text: "行驶证",
  //   value: "vehicleLicense",
  //   iconUrl:
  //     "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*cMhoRomMegIAAAAAAAAAAAAAARQnAQ",
  //   // demoImgUrl: '/assets/images/default/vehicleLicenseDemo.jpeg'
  //   demoImgUrl:
  //     "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*fJ9PTqDcAGoAAAAAAAAAAABkARQnAQ"
  // },
  // {
  //   text: "车牌",
  //   value: "plateNumber",
  //   iconUrl:
  //     "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*UjJ3RJIDj_0AAAAAAAAAAAAAARQnAQ",
  //   // demoImgUrl: '/assets/images/default/licensePlateDemo.jpeg'
  //   demoImgUrl:
  //     "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*BQx9R5GAjXcAAAAAAAAAAABkARQnAQ"
  // },
  {
    text: "营业执照",
    value: "businessLicense",
    iconUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*6QoeT7IhAAAAAAAAAAAAAAAAARQnAQ",
    demoImgUrl:
      "https://cv-oss.oss-cn-beijing.aliyuncs.com/cv-demo/portal/%E8%90%A5%E4%B8%9A%E6%89%A7%E7%85%A7/%E7%A4%BA%E4%BE%8B1.png",
    // 识别时需要传递的uri参数
    uri: 'tr_business_license',
    // 识别时需要传递的serviceCode
    serviceCode: 'ocr.ant',
    attributes: {
      _ROUTE_: "UA"
    },
  },
  {
    text: "菜单识别",
    value: "menuRecognition",
    iconUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*JBrCSbnjKhkAAAAAAAAAAAAAARQnAQ",
    demoImgUrl:
      "https://cv-oss.oss-cn-beijing.aliyuncs.com/cv-demo/portal/%E8%8F%9C%E5%8D%95%E8%AF%86%E5%88%AB/%E7%A4%BA%E4%BE%8B1.png",
    // 识别时需要传递的uri参数
    uri: 'inference',
    // 识别时需要传递的serviceCode
    serviceCode: 'cv-menu',
    attributes: {
      _ROUTE_: "UA"
    },
  },
  {
    text: "银行卡",
    value: "bankCard",
    iconUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*fDJLS6BPvgAAAAAAAAAAAAAAARQnAQ",
    demoImgUrl:
      "https://cv-oss.oss-cn-beijing.aliyuncs.com/cv-demo/portal/%E9%93%B6%E8%A1%8C%E5%8D%A1/%E7%A4%BA%E4%BE%8B1.png",
    // 识别时需要传递的uri参数
    uri: 'tr_bank_card',
    // 识别时需要传递的serviceCode
    serviceCode: 'ocr.ant',
    attributes: {
      _ROUTE_: "UA"
    },
  },
  // {
  //   text: "增值税发票",
  //   value: "invoice",
  //   iconUrl:
  //     "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*rhjDTrJ1miUAAAAAAAAAAAAAARQnAQ",
  //   // demoImgUrl: '/assets/images/default/billDemo.jpeg'
  //   demoImgUrl:
  //     "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*tcYzR71sNhcAAAAAAAAAAABkARQnAQ"
  // },
  // {
  //   text: "汽车vin码",
  //   value: "vin",
  //   iconUrl:
  //     "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*brh-QoajpoMAAAAAAAAAAAAAARQnAQ",
  //   // demoImgUrl: '/assets/images/default/barcodeDemo.jpeg'
  //   demoImgUrl:
  //     "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*Ov7dRLt-0AwAAAAAAAAAAABkARQnAQ"
  // },
  {
    text: "通用文字",
    value: "commonOcr",
    iconUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*22SNRIY6HaMAAAAAAAAAAAAAARQnAQ",
    demoImgUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*ZBLZQooOg1YAAAAAAAAAAABkARQnAQ",
    // 识别时需要传递的uri参数
    uri: 'inference',
    // 识别时需要传递的serviceCode
    serviceCode: 'datacube-general-ocr',
    attributes: {
      _ROUTE_: "UA"
    },
  }
];
// 视觉反欺诈 Visual anti fraud
// export const VISUAL_ANTI_FRAUD = [
//   {
//     text: "身份证防伪识别",
//     value: "idCardSecurity",
//     iconUrl:
//       "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*Wm_MQ4r945YAAAAAAAAAAAAAARQnAQ",
//     // 默认识别的图片
//     demoImgUrl:
//       'https://cv-oss.oss-cn-beijing.aliyuncs.com/cv-demo/portal/%E8%BA%AB%E4%BB%BD%E8%AF%81%E7%AF%A1%E6%94%B9%E8%AF%86%E5%88%AB/%E7%A4%BA%E4%BE%8B5.jpg',
//     // 识别时需要传递的uri参数
//     uri: 'inference',
//     // 识别时需要传递的serviceCode
//     serviceCode: 'datacube-17885',
//     attributes: {
//       _TIMEOUT_: '100000',
//       _ROUTE_: "UA"
//     },
//   },
// ];
// 图像处理 Image process
export const IMAGE_PROCESS = [
  {
    text: "还原清晰度",
    value: "restoreClarity",
    iconUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*5277SL8ZlDUAAAAAAAAAAAAAARQnAQ",
    // 默认识别的图片
    demoImgUrl:
      'https://cv-oss.oss-cn-beijing.aliyuncs.com/cv-demo/portal/%E5%9B%BE%E5%83%8F%E5%8E%BB%E6%A8%A1%E7%B3%8A/%E7%A4%BA%E4%BE%8B2.jpeg',
    // 识别时需要传递的uri参数
    uri: 'inference',
    // 识别时需要传递的serviceCode
    serviceCode: 'datacube-17619',
    attributes: {
      _TIMEOUT_: '100000',
    },
  },
];
// 主体识别  Subject Identification
export const SUBJECT_IDENTIFY = [
  {
    text: "垃圾分类",
    value: "refuseClassification",
    iconUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*sy-UT5Db0ksAAAAAAAAAAAAAARQnAQ",
    // 默认识别的图片
    demoImgUrl:
      // "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*Zz6ZR5jcHKQAAAAAAAAAAABkARQnAQ"
      // 'https://cv-oss.oss-cn-beijing.aliyuncs.com/cv-demo/portal/%E9%80%9A%E7%94%A8%E6%96%87%E5%AD%97/1.png'
      'https://cv-oss.oss-cn-beijing.aliyuncs.com/cv-demo/portal/%E5%9E%83%E5%9C%BE%E5%88%86%E7%B1%BB/IMG_0001.HEIC.JPG',
    // 识别时需要传递的uri参数
    uri: 'inference',
    // 识别时需要传递的serviceCode
    serviceCode: 'garbage.treasure.cv',
    attributes: {
      use_iot: 'false',
      _TIMEOUT_: '100000',
    },
  },
];
// 自然语言处理 natural language processing
export const NATURAL_LANGUAGE_PROCESSING = [
  {
    text: "金融实体识别",
    desc: "基于深度学习bert模型的金融实体识别服务",
    value: "entity",
    iconUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*F59jQaAOZnoAAAAAAAAAAAAAARQnAQ",
    // demoImgUrl: '/assets/images/default/idCardDemo.jpeg'
    demoImgUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*Zz6ZR5jcHKQAAAAAAAAAAABkARQnAQ"
  },
  {
    text: "金融文本识别",
    desc: "资讯分类。将新闻划分到通用的14个类别",
    value: "fileText",
    iconUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*Plm4QKmhePAAAAAAAAAAAAAAARQnAQ",
    // demoImgUrl: '/assets/images/default/idCardDemo.jpeg'
    demoImgUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*Zz6ZR5jcHKQAAAAAAAAAAABkARQnAQ"
  },
  {
    text: "金融情感分析",
    desc: "分析金融评论中表达的正负面情绪比重",
    value: "analyze",
    iconUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*aXnOT6PSoxYAAAAAAAAAAAAAARQnAQ",
    // demoImgUrl: '/assets/images/default/idCardDemo.jpeg'
    demoImgUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*Zz6ZR5jcHKQAAAAAAAAAAABkARQnAQ"
  },
  {
    text: "金融分词服务",
    desc: "结合词典和模型的分词对金融文本进行分词",
    value: "participle",
    iconUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*LyUzQpsOAOkAAAAAAAAAAAAAARQnAQ",
    // demoImgUrl: '/assets/images/default/idCardDemo.jpeg'
    demoImgUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*Zz6ZR5jcHKQAAAAAAAAAAABkARQnAQ"
  }
];
//场景能力 Scene ability
export const SCENE_ABILITY = [
  {
    title: "生活应用",
    list: [
      {
        text: "FMDemo",
        value: "chatGPT",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*_UAUSY9nGIQAAAAAAAAAAAAAARQnAQ",
        page: "/pages/chatGPT/chatGPT"
      },
      {
        text: "微表情挑战",
        value: "microExpression",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*XaGXSILOvFAAAAAAAAAAAAAAARQnAQ",
        page: "/pages/eventDetails/eventDetails"
      },
      {
        text: "夸夸你的脸",
        value: "facialRecognition",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*yDNESqjWPoMAAAAAAAAAAAAAARQnAQ",
        page: "/pages/faceRecognition/faceRecognition"
      }
    ]
  }
];
export const UNDER_DEVELOPMENT = [
  {
    title: "医疗凭证",
    list: [
      {
        text: `医疗发票
        识别`,
        value: "idCard",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*KoQ7Tq1dl2EAAAAAAAAAAAAAARQnAQ"
      },
      {
        text: `医疗表单
        识别`,
        value: "idCard",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*JENuS6TP9JIAAAAAAAAAAAAAARQnAQ"
      },
      {
        text: `体检报告
        解析`,
        value: "idCard",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*6yX8RKUBr3MAAAAAAAAAAAAAARQnAQ"
      },
      {
        text: `医疗凭证
        原件鉴定`,
        value: "idCard",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*3MoDS5O7YsEAAAAAAAAAAAAAARQnAQ"
      },
      {
        text: `医疗凭证
        篡改检测`,
        value: "idCard",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*noqiQbCuuTIAAAAAAAAAAAAAARQnAQ"
      },
      {
        text: `医疗凭证解析
        （知识约束）`,
        value: "idCard",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*quMZQYUPZawAAAAAAAAAAAAAARQnAQ"
      },
      {
        text: `医院章检索`,
        value: "idCard",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*JBrCSbnjKhkAAAAAAAAAAAAAARQnAQ"
      }
    ]
  },
  {
    title: "金融票据",
    list: [
      {
        text: `银行流水
        解析`,
        value: "idCard",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*4YsKTphZvHQAAAAAAAAAAAAAARQnAQ"
      },
      {
        text: `承兑汇票
        识别`,
        value: "idCard",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*PVl4TZ2ORRQAAAAAAAAAAAAAARQnAQ"
      }
    ]
  },
  {
    title: "商家证件&经营场景",
    list: [
      {
        text: `商标识别
        与鉴权`,
        value: "idCard",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*wpciSrILqJAAAAAAAAAAAAAAARQnAQ"
      },
      {
        text: `商户凭证
        篡改检测`,
        value: "idCard",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*noqiQbCuuTIAAAAAAAAAAAAAARQnAQ"
      },
      {
        text: `门头照
        OCR&MCC`,
        value: "idCard",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*d-wBQ6MBwjEAAAAAAAAAAAAAARQnAQ"
      },
      {
        text: `零样本商户
        凭证识别`,
        value: "idCard",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*1jZVS4eBk3wAAAAAAAAAAAAAARQnAQ"
      },
      {
        text: `小程序/web
        结构化解析`,
        value: "idCard",
        iconUrl:
          "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*_UAUSY9nGIQAAAAAAAAAAAAAARQnAQ"
      }
    ]
  }
];
//图像技术 Image technology
export const IMAGE_TECHNOLOGY = [
  { title: "OCR", list: OCR },
  // { title: '视觉反欺诈', list: VISUAL_ANTI_FRAUD },
  { title: '图像处理', list: IMAGE_PROCESS },
  { title: '主体识别', list: SUBJECT_IDENTIFY }
];
//特色服务 Characteristic service
export const CHARACTERUSTIC_SERVICE = [
  {
    title: "特色服务",
    list: NATURAL_LANGUAGE_PROCESSING
  }
];
// 底部配置
export const PRODUCT_EXPERIENCE = [
  {
    name: "蚂蚁定损宝",
    desc: "AI识别车辆损失",
    logo:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*g4JxQpvLmooAAAAAAAAAAAAAARQnAQ",
    appId: "77700177"
  },
  {
    name: "垃圾分类指南",
    desc: "针对垃圾如何分类的查询工具",
    logo:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*sy-UT5Db0ksAAAAAAAAAAAAAARQnAQ",
    appId: "2019062565700028"
  }
];
export const CONGRATULATIONS_TEXT = [
  {
    key: 1,
    text: `我们相信表情和情绪有独特的力量和价值，
    很多国家已经将情感计算应用在了自闭症
    筛查和治疗领域。`
  },
  {
    key: 2,
    text: `带着你的微笑，支付宝公益基金会将联合
    浙江省残疾人福利基金会，为杭州自闭症
    机构的孩子们捐赠玩具和绘本。我们也希
    望有更多技术可以加入，帮助自闭症的孩
    子像我们一样，喜怒哀乐尽情表达。`
  },
  {
    key: 3,
    text: `感谢你对自闭症群体的关注和关心。
    浩瀚星辰里，我们彼此照亮，共同闪烁。`
  }
];
export const SHARE = [
  {
    title: "支付宝扫描二维码",
    bgImgUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*kfvRRbbPX6EAAAAAAAAAAAAAARQnAQ",
    desc: "为来自“星星”的孩子加油",
    path: "pages/eventDetails/eventDetails"
  },
  {
    title: "支付宝扫描二维码",
    bgImgUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*_rSvRL-n9XoAAAAAAAAAAAAAARQnAQ",
    desc: "为来自“星星”的孩子加油",
    path: "pages/eventDetails/eventDetails"
  },
  {
    title: "支付宝扫描二维码",
    bgImgUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*9z13RZZYPecAAAAAAAAAAAAAARQnAQ",
    desc: "为来自“星星”的孩子加油",
    path: "pages/eventDetails/eventDetails"
  },
  {
    title: "支付宝扫描二维码",
    bgImgUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*W35ETK86lagAAAAAAAAAAAAAARQnAQ",
    desc: "为来自“星星”的孩子加油",
    path: "pages/eventDetails/eventDetails"
  },
  {
    title: "支付宝扫描二维码",
    bgImgUrl:
      "https://gw.alipayobjects.com/mdn/rms_9a9b9c/afts/img/A*m07qRLmtM4wAAAAAAAAAAAAAARQnAQ",
    desc: "为来自“星星”的孩子加油",
    path: "pages/eventDetails/eventDetails"
  }
];
