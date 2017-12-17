export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string'){
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}
/**
 * 删除 localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
/**
 * 获取 style
 */
export const getStyle = (element, attr, NumberMode = 'int') => {
  let target;
  // scrollTop 获取方式不同， 它不属于style，而且只有 document.body 才能用
  if (attr === 'scrollTop'){
    target = element.scrollTop
  }else if (element.currentSytle){
    target = element.currentSytle[attr]
  }else{
    target = document.defaultView.getComputedStyle(element, null)[attr]
  }
  //在获取 opactiy 时需要获取小数 parseFloat
  return NumberMode = 'float' ? parseFloat(target) : parseInt(target)
}
