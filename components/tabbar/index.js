// components/tabbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick: function(e) {
      this.setData({
        activeIndex: e.currentTarget.dataset.index
      })
    }

  }
})
