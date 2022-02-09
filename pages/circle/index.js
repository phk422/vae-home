// pages/circle/index.js
import { querySelectorAll } from "../../utils/query-selector"

Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{name: "广场"}, {name:"热门"}, {name: "关注", isDot: true}],
    currentIndex: 0,

    swiperItems: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    querySelectorAll(".swiper-item").then(res => {
      const swiperItems = res[0]
      this.setData({
        swiperHeight: swiperItems[0].height,
        swiperItems
      })
    })
  },

  changeTab: function(options) {
    this.setData({
      currentIndex: options.detail
    })
  },

  handleSwiperChange: function(event) {
    const current = event.detail.current
    this.setData({
      currentIndex: current,
      swiperHeight: this.data.swiperItems[current].height
    })
  }
})