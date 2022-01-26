// components/navbar/index.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    backgroundColor: { // 背景色
      type: String,
      value: "#fff"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navHeight: app.globalData.navHeight,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
