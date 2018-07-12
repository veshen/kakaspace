

// 工具函数库
import config from './config'

// http get工具函数 获取数据
export function get (url, data) {
  return request(url, 'GET', data)
}
export function post (url, data) {
  return request(url, 'POST', data)
}

function request (url, method, data, header = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      header,
      url: config.host + url,
      success: function (res) {
        if (res.statusCode === 200) {
            if (res.data.code===200) {
                resolve(res.data.data)
            }else{
                showModal('失败', res.data.message)
                reject(res.data)
            }
        } else {
          showModal('失败', res.errMsg)
          reject(res.data)
        }
      }
    })
  })
}

export function showModal (title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}
export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}


export const formatNumber = function  (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export const formatTime = function  (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}
