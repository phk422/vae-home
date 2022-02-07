// pages/circle/square/cpns/hot-topic/index.js
Component({
  externalClasses: ["class"],
  /**
   * 组件的属性列表
   */
  properties: {
    topics: {
      type: Array,
      value: [
        { title: "王者荣耀" },
        { title: "打工人的日常" },
        { title: "情话书签" },
        { title: "天马行空的梦境" },
        { title: "最喜欢许嵩的一句歌词", isHot: true },
        { title: "雪" },
        { title: "单身狗日常" },
        { title: "王者荣耀" },
        { title: "王者荣耀" },
        { title: "王者荣耀" },
        { title: "负能量树洞", isHot: true },
        { title: "说出愿望吧" },
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    datas: []
  },

  lifetimes: {
    attached: function() {
      this.handleTopics()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTopics: function() {
      const res = []
      let tempArr = []
      for(const index in this.properties.topics) {
        const item = this.properties.topics[index]
        tempArr.push(item)
        if (tempArr.length === 6 || index == this.properties.topics.length - 1) {
          res.push([tempArr.slice(0, 3), tempArr.slice(3)])
          tempArr = []
        }
      }
      this.setData({
        datas: res
      })
    }
  }
})
