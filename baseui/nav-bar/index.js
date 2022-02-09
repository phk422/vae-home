// baseui/nav-bar/index.js
const app = getApp()

Component({
  externalClasses: ["class"],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "默认标题"
    },
    backgroundColor: { // 背景色
      type: String,
      value: "#fff"
    },
    fixed: { // 是否固定到顶部
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    navHeight: app.globalData.navHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})