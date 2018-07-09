import axios from 'axios';

import {
    get,
    post,
    postExport
} from './tools';
import * as config from './config';

axios.defaults.withCredentials = true;
axios.defaults.adapter = function (config) {
    return new Promise((resolve, reject) => {
        console.log(config)
        // TODO wx.request(...)
		wx.request({
			url: config.url,
			method: config.method,
			data: config.params,    //参数为键值对字符串
			header: config.headers,
			success: function (res) {
				console.log(res.data)
				// that.setData({
				// 	items: res.data
				// })
			}
		})
    })
}
/*
    common
*/

export const getCode = (params) => get({
    url: config.GET_CODE,
    params
}); //获取验证码
// export const searchCheckedHistory = (data) => post({
//     url: config.SSP_SEARCH_CHECKED_HISTORY,
//     data
// }); //出入库记录查询
