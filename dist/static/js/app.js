global.webpackJsonp([19],{

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(45);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/my/main', 'pages/themeinfo/main', 'pages/videoinfo/main', '^pages/find/main', 'pages/photoinfo/main', 'pages/photobrowse/main', 'pages/depth/main', 'pages/index/main', 'pages/myorder/main', 'pages/ilike/main', 'pages/myalbum/main', 'pages/about/main', 'pages/onlineSubscribe/main', 'pages/orderInfo/main', 'pages/orderPay/main'],
    'window': {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#000',
      navigationBarTitleText: 'KIKYO空间',
      navigationBarTextStyle: '#fff'
    }
    // tabBar : {
    //     list : [
    //         {
    //           pagePath: 'pages/depth/main',
    //           text: '图书',
    //         },
    //         {
    //           pagePath: 'pages/index/main',
    //           text: '图书',
    //         },
    //     ]
    // }
  }
});

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(47);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(46)
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

/***/ 46:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__(3);





/* harmony default export */ __webpack_exports__["a"] = ({
  data: {
    a: 1
  },
  methods: {
    login: function login() {
      var _this = this;

      var that = this;
      // 调用登录接口
      wx.login({
        success: function () {
          var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(re) {
            var code, loginRes;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    code = re.code;
                    _context.next = 3;
                    return Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["b" /* get */])('/base/wechat/user/login', { code: code });

                  case 3:
                    loginRes = _context.sent;

                    if (loginRes.userId) {
                      wx.setStorageSync('token', loginRes.token);
                      wx.setStorageSync('mobile', loginRes.mobile);
                    }
                    // wx.getUserInfo({
                    //   success: (res) => {
                    //       // console.log(res);
                    //     // this.userInfo = res.userInfo
                    //     // console.log('调用登陆接口之后',res);
                    //     that.$root.$mp.app.globalData.userInfo = res.userInfo;
                    //   }
                    // })

                  case 5:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this);
          }));

          return function success(_x) {
            return _ref.apply(this, arguments);
          };
        }()
      });
    }
  },
  created: function created() {
    var token = wx.getStorageSync('token') || false;
    var that = this;
    if (!token) {
      this.login();
    } else {
      wx.checkSession({
        success: function success() {
          //session_key 未过期，并且在本生命周期一直有效
          console.log('session_key 未过期，并且在本生命周期一直有效');
          wx.getUserInfo({
            success: function success(res) {
              // console.log(res);
              // this.userInfo = res.userInfo
              // console.log('这是未过期返回的',res);
              that.$root.$mp.app.globalData.userInfo = res.userInfo;
            }
          });
        },
        fail: function fail() {
          // session_key 已经失效，需要重新执行登录流程
          console.log('session_key 已经失效，需要重新执行登录流程');
          // wx.login() //重新登录
        }
      });
    }
    // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    // console.log('app created and cache logs by setStorageSync')
  },
  onLaunch: function onLaunch() {},
  onShow: function onShow() {
    var _this2 = this;

    var that = this;
    wx.getSystemInfo({
      success: function success(res) {
        // console.log('手机信息res'+res.model)
        var modelmes = res.model;
        if (modelmes.search('iPhone X') != -1) {
          _this2.$root.$mp.app.globalData.isIphoneX = true;
        } else {
          _this2.$root.$mp.app.globalData.isIphoneX = false;
        }
      }
    });
  }
});

/***/ })

},[43]);
//# sourceMappingURL=app.js.map