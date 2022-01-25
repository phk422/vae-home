/**
 * 根据选择器获取元素信息
 * @param {*} selector 
 * @param {*} thisArgs 
 */
export default function querySelector(selector, thisArgs = wx) {
  const query = thisArgs.createSelectorQuery()
  query.select(selector).boundingClientRect()
  return new Promise(resolve => {
    query.exec(resolve)
  })
}
