// 存储数据
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    // 将数组或对象类型的数据转为JSON格式字符串进行存储
    value = JSON.stringify(value)
  }
}
// 获取数据
export const getItem = key => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch {
    return data
  }
}
// 删除数据
export const removeItem = key => {
  window.localStorage.removeItem(key)
}
