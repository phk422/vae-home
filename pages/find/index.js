// pages/find/index.js
Page({
  data: {
    menus: [
      // 图标来源：https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.dc64b3430&cid=32622
      [
        {
          icon: "/assets/img/find/position.png",
          txt: "附近的人"
        },
        {
          icon: "/assets/img/find/group.png",
          txt: "发现群组"
        }
      ],

      [
        {
          icon: "/assets/img/find/live.png",
          txt: "直播间"
        }
      ],

      [
        {
          icon: "/assets/img/find/sign.png",
          txt: "每日签到",
          rightTxt: "未签到"
        },
        {
          icon: "/assets/img/find/task.png",
          txt: "任务中心",
          rightTxt: "完成度12.5%"
        },
        {
          icon: "/assets/img/find/rank.png",
          txt: "排行榜"
        },
        {
          icon: "/assets/img/find/shop.png",
          txt: "商城"
        },
        {
          icon: "/assets/img/find/hot.png",
          txt: "最热帖排行"
        }
      ]
    ]
  }
})