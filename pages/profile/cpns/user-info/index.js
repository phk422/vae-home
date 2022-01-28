// pages/profile/cpns/user-info/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    grade: {
      type: String,
      value: "60%"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo: null,
    navHeight: app.globalData.navHeight,
  },
  
  lifetimes: {
    created: function() {

      wx.getUserInfo({
        success: res => {
          this.setData({
            userInfo: res.userInfo
          })
        }
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
