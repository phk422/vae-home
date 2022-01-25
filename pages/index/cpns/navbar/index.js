// pages/index/cpns/navbar/index.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    txts: {
      type: Array,
      value: [
        "我心里那一座天下，你做镇笑颜如桃花",
        "委屈向谁说，说了谁又懂",
        "独揽月下萤火，照亮一纸寂寞",
        "你提过的好地方，我标在地图上",
        "借我一盏烛火，照亮你的轮廓",
        "世间当真有两全法，江山深处抚你风华",
        "等到秋叶终于金黄 等到华发悄然苍苍 我们相约老地方",
        "与你若只如初见 何须感伤离别"
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navHeight: app.globalData.navHeight,
    txt: ""
  },

  lifetimes: {
    attached: function() {
      const index = Math.floor(Math.random() * this.properties.txts.length)
      this.setData({
        txt: this.properties.txts[index]
      })
    }
  }
})
