// app.js
App({
  globalData: {
    navHeight: 0, // 胶囊的高度
    navTop: 0, // 胶囊距离顶部的高度
  },
  onLaunch: function () {
    // 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
    const menuButtonObject = wx.getMenuButtonBoundingClientRect()
    wx.getSystemInfo({
      success: res => {
        const statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top, //胶囊按钮与顶部的距离
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2 //导航高度
        this.globalData.navHeight = navHeight
        this.globalData.navTop = navTop
      },
      fail(err) {
        console.log(err)
      }
    })
  }
})