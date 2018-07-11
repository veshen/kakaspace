global.webpackJsonp([2],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return get; });
/* unused harmony export post */
/* unused harmony export postExport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);



/**
 * 公用get请求
 * @param url       接口地址
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
var get = function get(_ref) {
    var url = _ref.url,
        _ref$params = _ref.params,
        params = _ref$params === undefined ? {} : _ref$params,
        _ref$restParams = _ref.restParams,
        restParams = _ref$restParams === undefined ? {} : _ref$restParams,
        _ref$msg = _ref.msg,
        msg = _ref$msg === undefined ? '系统发生了重大错误 请联系Larry' : _ref$msg,
        headers = _ref.headers;
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(_urlMixPram(restParams, url), { params: params }, headers).then(function (res) {
        return res.data;
    }).catch(function (err) {
        console.log(err);
    });
};
//function
function _urlMixPram(parm, url) {
    var _url = url;
    for (var i in parm) {
        _url = _url.replace('{' + i + '}', parm[i]);
    }
    return _url;
}
/**
 * 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
var post = function post(_ref2) {
    var url = _ref2.url,
        data = _ref2.data,
        _ref2$msg = _ref2.msg,
        msg = _ref2$msg === undefined ? '接口异常' : _ref2$msg,
        headers = _ref2.headers;
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(url, data, headers).then(function (res) {
        return res.data;
    }).catch(function (err) {
        console.log(err);
    });
};

/**
 * 公用文件导出form请求
 * @param url       接口地址
 * @param data      接口参数
 */

var postExport = function postExport(_ref3) {
    var url = _ref3.url,
        data = _ref3.data;

    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var iframe = document.createElement("iframe");
        iframe.setAttribute('id', 'iframe_display');
        iframe.setAttribute('name', 'iframe_display');
        iframe.setAttribute('style', 'display:none');
        document.querySelector('.container').appendChild(iframe);
        var form = document.createElement("form");
        form.setAttribute('id', 'form1123');
        form.setAttribute('target', 'iframe_display');
        form.setAttribute('method', 'post');
        form.setAttribute('action', markUrl(url, data));
        document.querySelector('.container').appendChild(form);
        form.submit();
        form.remove();
        var parent = document.querySelector('.container');
        var iframe1 = document.getElementById("iframe_display");
        setTimeout(function () {
            resolve({ code: 200 });
            removeElement(iframe1);
        }, 2000);
    });
};
function removeElement(_element) {
    var _parentElement = _element.parentNode;
    if (_parentElement) {
        _parentElement.removeChild(_element);
    }
}
function markUrl(link, data) {
    if (typeof data != "undefined" && data != "") {
        var paramArr = [];
        for (var attr in data) {
            paramArr.push(attr + '=' + data[attr]);
        }
        link += '?' + paramArr.join('&');
    }
    return link;
}

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LOGIN_OUT_URL */
/* unused harmony export GET_INDEX_MODEL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_CODE; });
/* unused harmony export LOGIN */
/* unused harmony export GET_SHOP_LIST */
/* unused harmony export GET_SHOP_LIST2 */
/* unused harmony export SSP_ORDER_COUNT */
/* unused harmony export SSP_QUERY_ORDER_LIST */
/* unused harmony export SSP_QUERY_ALL_ORDER_LIST */
/* unused harmony export SSP_ACCEPT_ORDER */
/* unused harmony export SSP_GET_PRINT_INFO */
/* unused harmony export SSP_REFUSE */
/* unused harmony export SSP_SITE_GMV */
/* unused harmony export SSP_UPDATE_STATUS */
/* unused harmony export SSP_QUERY_ORDER */
/* unused harmony export SSP_SEARCH_SITE_STOCK */
/* unused harmony export SSP_SEARCH_CHECKED_HISTORY */
/* unused harmony export SSP_INOUT_STOCK_EXPORT */
/* unused harmony export SSP_SEARCH_SITE_SKU */
/* unused harmony export SSP_UPDATE_SKU_STOCK */
/* unused harmony export SSP_PLAN_DATA */
/* unused harmony export SSP_PLAN_DISASSEMBLY */
/* unused harmony export SSP_APPLY_BEAN */
/* unused harmony export SSP_UPDATE_PLAN_DATA */
/* unused harmony export SSP_QUERY_ORDER_MANAGE */
/* unused harmony export SSP_QUERY_ORDER_DETAIL */
/* unused harmony export SSP_REMOVE_MANAGE */
/* unused harmony export SSP_QUICKLY_SUBMIT */
/* unused harmony export SSP_MANAGE_SUBMIT */
/* unused harmony export SSP_MANAGE_QUERY_SKU */
/* unused harmony export SSP_MANAGE_QUERY_CODE */
/* unused harmony export SSP_MANAGE_QUERY_ITEM */
/* unused harmony export SSP_ALL_CATEGORY */
/* unused harmony export SSP_ITEM_CATEGORY */
/* unused harmony export SSP_MANUAL_APPLY */
/* unused harmony export SSP_QUERY_SUBORDER */
/* unused harmony export SSP_ORDER_SAVE */
/* unused harmony export SSP_QUERY_LONG_TERM */
/* unused harmony export SSP_QUERY_RECEIVE_ORDER */
/* unused harmony export SSP_SUBMIT_RECEIVR_ORDER */

// PRODUCTION
// const PRODUCTION                = 'http://ssp.sa-green.cn/';
// const SYSTEM                    = 'http://my.sa-green.cn/';
// const ARRIVETODAY               = 'http://at.sa-green.cn/';
// export const LOGIN_OUT_URL      = 'http://my.sa-green.cn/#/login';

// test
var PRODUCTION = 'http://ssptest.sa-green.cn:8093/';
var SYSTEM = 'http://test.sa-green.cn:8080/';
var ARRIVETODAY = 'http://attest.sa-green.cn:8089/';
var LOGIN_OUT_URL = 'http://test.sa-green.cn:8080/#/login';

/*
    common
*/
//首页模块
var GET_INDEX_MODEL = SYSTEM + 'index/get/modules';
//获取验证码
var GET_CODE = SYSTEM + 'system/operator/sendverifycode';
//登陆
var LOGIN = SYSTEM + 'system/operator/login';
//获取所有门店列表
var GET_SHOP_LIST = PRODUCTION + 'compatiblewitharrivetoday/arriveTodayInfo';
//获取所有门店列表2
var GET_SHOP_LIST2 = PRODUCTION + 'compatiblewitharrivetoday/arriveTodayInfo2';
/* SSP */

//===================================> 订单管理

//查询门店订单数量
var SSP_ORDER_COUNT = ARRIVETODAY + 'arrivetoday/orderQuery/orderCountGroupByStatus';
//查询订单列表
var SSP_QUERY_ORDER_LIST = ARRIVETODAY + 'arrivetoday/orderQuery/querySiteOrderByStatus';
//批量查询订单列表
var SSP_QUERY_ALL_ORDER_LIST = ARRIVETODAY + 'arrivetoday/orderQuery/querySiteOrderByStatusList';
//实时单 接单
var SSP_ACCEPT_ORDER = ARRIVETODAY + 'arrivetoday/order/accept/{arriveTodayOrderId}/{siteId}';
//获取订单打印信息
var SSP_GET_PRINT_INFO = ARRIVETODAY + 'arrivetoday/orderQuery/orderInfoForPrint/{arriveTodayOrderId}';
//拒单
var SSP_REFUSE = ARRIVETODAY + 'arrivetoday/order/refuse/{arriveTodayOrderId}';
//门店交易额
var SSP_SITE_GMV = ARRIVETODAY + 'arrivetoday/orderstatistics/siteGmv';
//取件
var SSP_UPDATE_STATUS = ARRIVETODAY + 'arrivetoday/order/updateStatus';
//订单查询
var SSP_QUERY_ORDER = ARRIVETODAY + 'arrivetoday/orderList/query';

//===================================> 上架管理
//查询站点库存
var SSP_SEARCH_SITE_STOCK = ARRIVETODAY + 'arrivetoday/stock/searchSiteSkuStock';
//出入库记录查询
var SSP_SEARCH_CHECKED_HISTORY = ARRIVETODAY + 'arrivetoday/inOutStock/searchCheckedHistory';
//出入库记录查询导出
var SSP_INOUT_STOCK_EXPORT = ARRIVETODAY + 'arrivetoday/inOutStockExport/export';
//商品上架列表查询
var SSP_SEARCH_SITE_SKU = ARRIVETODAY + 'arrivetoday/stockv2/searchSiteSkuStock';
//商品上架列表更新
var SSP_UPDATE_SKU_STOCK = ARRIVETODAY + 'arrivetoday/stockv2/updateSkuStock';
//=================================> 订货管理

//销售计划查询
var SSP_PLAN_DATA = PRODUCTION + 'store/requisition/queryRequisitionPlan';
//发起领用
var SSP_PLAN_DISASSEMBLY = PRODUCTION + 'store/requisition/queryPlanDisassemblyDetail';
//提交领用
var SSP_APPLY_BEAN = PRODUCTION + 'store/requisition/applyRequisitionRequestBean';
//修改计划数据
var SSP_UPDATE_PLAN_DATA = PRODUCTION + 'store/requisition/updateSiteSalePlan';
//订货单查询
var SSP_QUERY_ORDER_MANAGE = PRODUCTION + 'site/order/manage/query';
//查看领用详情
var SSP_QUERY_ORDER_DETAIL = PRODUCTION + 'site/order/manage/queryOrderDetail';
//撤回订货单
var SSP_REMOVE_MANAGE = PRODUCTION + 'site/order/manage/remove';
//基于草稿快速下单
var SSP_QUICKLY_SUBMIT = PRODUCTION + 'site/order/manage/quicklySubmit';
//提交订货单
var SSP_MANAGE_SUBMIT = PRODUCTION + 'site/order/manage/submit';
//手工订货查询接口 SKU
var SSP_MANAGE_QUERY_SKU = PRODUCTION + 'site/order/manage/querySku';
//手工订货查询接口 CODE
var SSP_MANAGE_QUERY_CODE = PRODUCTION + 'site/order/manage/queryCode';
//手工订货查询接口 ITEM
var SSP_MANAGE_QUERY_ITEM = PRODUCTION + 'site/order/manage/queryItem';
//手工订货code分类
var SSP_ALL_CATEGORY = PRODUCTION + 'store/stock/allCategory';
//手工订货item分类
var SSP_ITEM_CATEGORY = PRODUCTION + 'store/stock/allItemCategory';
//发起订货 创建领用申请单
var SSP_MANUAL_APPLY = PRODUCTION + 'site/order/manage/manualApplyRequisition';
//订货单管理 查询自订单详情
var SSP_QUERY_SUBORDER = PRODUCTION + 'site/order/manage/querySubOrderInfoDetail';
//订货单管理 保存
var SSP_ORDER_SAVE = PRODUCTION + 'site/order/manage/save';
//周期订货 CODE信息查询
var SSP_QUERY_LONG_TERM = PRODUCTION + 'store/requisition/queryLongTermMaterial';
//收货管理 查询收货订单
var SSP_QUERY_RECEIVE_ORDER = PRODUCTION + 'site/order/receive/queryReceiveOrder';
//收货管理 提交收货订单
var SSP_SUBMIT_RECEIVR_ORDER = PRODUCTION + 'site/order/receive/submitReceiveOrder';

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__axios_index_js__ = __webpack_require__(54);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();
Object(__WEBPACK_IMPORTED_MODULE_2__axios_index_js__["a" /* getCode */])();
/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/my/main', 'pages/themeinfo/main', 'pages/videoinfo/main', 'pages/find/main', 'pages/photoinfo/main', 'pages/photobrowse/main', 'pages/depth/main', 'pages/index/main', 'pages/myorder/main', 'pages/ilike/main', 'pages/myalbum/main', 'pages/about/main', 'pages/onlineSubscribe/main', 'pages/orderInfo/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#000',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: '#fff'
    }
  }
});

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(53);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(52)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c1cebcfa", Component.options)
  } else {
    hotAPI.reload("data-v-c1cebcfa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  data: {
    a: 1
  },
  globalData: {},
  created: function created() {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
    console.log('app created and cache logs by setStorageSync');
  },
  onLaunch: function onLaunch() {},
  onShow: function onShow() {
    var _this = this;

    // console.log(this.$root.$mp.app.globalData);

    console.log('a is: ' + this.a, '小程序触发的 onshow');
    var that = this;
    wx.getSystemInfo({
      success: function success(res) {
        // console.log('手机信息res'+res.model)
        var modelmes = res.model;
        if (modelmes.search('iPhone X') != -1) {
          _this.$root.$mp.app.globalData.isIphoneX = true;
        } else {
          _this.$root.$mp.app.globalData.isIphoneX = false;
        }
      }
    });
  }
});

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(110);






__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.withCredentials = true;
__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.adapter = function (config) {
				return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
								// console.log(config)
								// TODO wx.request(...)
								// wx.request({
								// 	url: config.url,
								// 	method: config.method,
								// 	data: config.params,    //参数为键值对字符串
								// 	header: config.headers,
								// 	success: function (res) {
								// 		console.log(res.data)
								// 		// that.setData({
								// 		// 	items: res.data
								// 		// })
								// 	}
								// })
				});
};
/*
    common
*/

var getCode = function getCode(params) {
				return Object(__WEBPACK_IMPORTED_MODULE_2__tools__["a" /* get */])({
								url: __WEBPACK_IMPORTED_MODULE_3__config__["a" /* GET_CODE */],
								params: params
				});
}; //获取验证码
// export const searchCheckedHistory = (data) => post({
//     url: config.SSP_SEARCH_CHECKED_HISTORY,
//     data
// }); //出入库记录查询

/***/ })

},[49]);
//# sourceMappingURL=app.js.map