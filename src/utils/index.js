

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

export function timerDown(val, format) {
    let now = Date.parse(new Date()) / 1000;
    let interval = val - now;
    let day = Math.floor(interval / (60 * 60 * 24)) + '';
    let hour = Math.floor((interval - day * 24 * 60 * 60) / 3600) + '';
    let minute = Math.floor((interval - day * 24 * 60 * 60 - hour * 3600) / 60) + '';
    let second = Math.floor(interval - day * 24 * 60 * 60 - hour * 3600 - minute * 60) + '';

    if (day.length == 1) {
        day = '0' + day;
    }
    if (hour.length == 1) {
        hour = '0' + hour;
    }
    if (minute.length == 1) {
        minute = '0' + minute;
    }
    if (second.length == 1) {
        second = '0' + second;
    }

    format = format.replace('d', day);
    format = format.replace('h', hour);
    format = format.replace('m', minute);
    format = format.replace('s', second);
    if (interval <= 0) {
        return 'timeOut';
    } else {
        return format;
    }
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
