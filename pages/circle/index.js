// pages/circle/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
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