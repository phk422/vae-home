// pages/profile/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [
      // 图标来源：https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.dc64b3430&cid=32622
      [
        {
          icon: "/assets/img/profile/account.png",
          txt: "我的账户",
          rightIcon: "arrow-v2"
        },
        {
          icon: "/assets/img/profile/collect.png",
          txt: "收藏",
          rightIcon: "arrow-v2"
        },
        {
          icon: "/assets/img/profile/gift.png",
          txt: "邀请好友有礼",
          rightIcon: "arrow-v2"
        }
      ],

      [
        {
          icon: "/assets/img/profile/medal.png",
          txt: "勋章",
          rightIcon: "arrow-v2"
        },
        {
          icon: "/assets/img/profile/card.png",
          txt: "纪念卡",
          rightIcon: "arrow-v2"
        },
        {
          icon: "/assets/img/profile/tag.png",
          txt: "荧光棒",
          rightIcon: "arrow-v2"
        }
      ],

      [
        {
          icon: "/assets/img/profile/we.png",
          txt: "意见反馈",
          rightIcon: "arrow-v2"
        },
        {
          icon: "/assets/img/profile/help.png",
          txt: "帮助中心",
          rightIcon: "arrow-v2"
        },
        {
          icon: "/assets/img/profile/profile.png",
          txt: "个人资料",
          rightIcon: "arrow-v2"
        },
        {
          icon: "/assets/img/profile/set.png",
          txt: "设置",
          rightIcon: "arrow-v2"
        }
      ]
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})