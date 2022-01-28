// pages/circle/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTop: app.globalData.navTop,
    navH: app.globalData.navHeight - app.globalData.navTop,
    tabs: [{name: "广场"}, {name:"热门"}, {name: "关注", isDot: true}],
    currentIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  changeTab: function(options) {
    this.setData({
      currentIndex: options.detail
    })
  }
  
})