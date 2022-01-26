// components/scroll-txt/index.js
import querySelector from "../../utils/query-selector"

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    txt: String, // 文字
    scroll: { // 是否滚动
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isScroll: false
  },

  lifetimes: {
    attached: async function() {
      // 计算是否滚动
      if(!this.properties.scroll) return
      const txtEle = await querySelector("#txt", this)
      const txtWidth = txtEle[0].width
      const txtWrapperEle = await querySelector(".txt-wrapper", this)
      const txtWrapperWidth = txtWrapperEle[0].width
      this.setData({
        isScroll: txtWidth - 45 > txtWrapperWidth
      })
    }
  }
})
