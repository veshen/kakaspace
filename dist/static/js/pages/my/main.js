global.webpackJsonp([13],{

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(169);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_51295288_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(172);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(170)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-51295288"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_51295288_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/my/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51295288", Component.options)
  } else {
    hotAPI.reload("data-v-51295288", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 170:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_moreInfo__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__(16);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      motto: 'my',
      userInfo: {}
    };
  },

  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */], moreInfo: __WEBPACK_IMPORTED_MODULE_1__components_moreInfo__["a" /* default */]
  },
  methods: {
    binddivTap: function binddivTap() {
      var url = '../logs/main';
      wx.navigateTo({ url: url });
    },
    bindGetUserInfo: function bindGetUserInfo(e) {
      var self = this;
      console.log(e);
      // 查看是否授权
      wx.getSetting({
        success: function success(res) {
          // 授权信息里有用户信息
          if (res.authSetting['scope.userInfo']) {
            // 检查用户登录是否过期
            wx.checkSession({
              success: function success() {
                // 没过期 直接成功
                Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["c" /* showSuccess */])('登录成功');
                wx.getUserInfo({
                  success: function success(res) {
                    // console.log(res);
                    // this.userInfo = res.userInfo
                    console.log(res, 'userInfo');
                  }
                });
              },
              fail: function fail() {
                // 过期了 重新登录 先清楚登录的状态
                qcloud.clearSession();
                // 登录态已过期，需重新登录
                // 登录需要的加密信息
                var options = {
                  encryptedData: e.mp.detail.encryptedData,
                  iv: e.mp.detail.iv,
                  userinfo: e.mp.detail.userInfo
                };
                self.getWxLogin(options);
              }

            });
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["b" /* showModal */])('用户未授权', e.mp.detail.errMsg);
          }
        }

      });

      // let user = wx.getStorageSync('userinfo')
      // const self = this
      // if (!user) {
      //   qcloud.setLoginUrl(config.loginUrl)
      //   qcloud.login({
      //     success: function (userinfo) {
      //       qcloud.request({
      //         url: config.userUrl,
      //         login: true,
      //         success (userRes) {
      //           showSuccess('登录成功')
      //           wx.setStorageSync('userinfo', userRes.data.data)
      //           self.userinfo = userRes.data.data
      //         }
      //       })
      //     }

      //   })
      // }
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
  }
});

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container mine mine-container"
  }, [_c('div', {
    staticClass: "index-top-box"
  }, [_c('div', {
    staticClass: "login-box"
  }, [_c('Image', {
    staticClass: "head",
    attrs: {
      "src": "http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "user-name"
  }, [_vm._v("翠花是朵花")])]), _vm._v(" "), _c('div', {
    staticClass: "get-user-info"
  }, [_c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo
    }
  }, [_vm._v("获取用户信息")])], 1)]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('card', {
    attrs: {
      "text": _vm.motto,
      "mpcomid": '1'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "list-content"
  }, [_c('div', {
    staticClass: "list-item"
  }, [_c('img', {
    staticClass: "left-icon",
    attrs: {
      "src": "http://static.sa-green.cn/image/jpg/kaka/%E8%AE%A2%E5%8D%95.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content-text"
  }, [_vm._v("订单")]), _vm._v(" "), _c('img', {
    staticClass: "left-right",
    attrs: {
      "src": "http://static.sa-green.cn/image/jpg/kaka/%E7%AE%AD%E5%A4%B4%E5%8F%B3.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "list-item"
  }, [_c('img', {
    staticClass: "left-icon",
    attrs: {
      "src": "http://static.sa-green.cn/image/jpg/kaka/%E5%96%9C%E6%AC%A2.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content-text"
  }, [_vm._v("喜欢")]), _vm._v(" "), _c('img', {
    staticClass: "left-right",
    attrs: {
      "src": "http://static.sa-green.cn/image/jpg/kaka/%E7%AE%AD%E5%A4%B4%E5%8F%B3.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "list-item"
  }, [_c('img', {
    staticClass: "left-icon",
    attrs: {
      "src": "http://static.sa-green.cn/image/jpg/kaka/%E7%9B%B8%E5%86%8C.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content-text"
  }, [_vm._v("相册")]), _vm._v(" "), _c('img', {
    staticClass: "left-right",
    attrs: {
      "src": "http://static.sa-green.cn/image/jpg/kaka/%E7%AE%AD%E5%A4%B4%E5%8F%B3.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "list-item"
  }, [_c('img', {
    staticClass: "left-icon",
    attrs: {
      "src": "http://static.sa-green.cn/image/jpg/kaka/%E5%8F%8D%E9%A6%88.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content-text"
  }, [_vm._v("反馈")]), _vm._v(" "), _c('img', {
    staticClass: "left-right",
    attrs: {
      "src": "http://static.sa-green.cn/image/jpg/kaka/%E7%AE%AD%E5%A4%B4%E5%8F%B3.svg",
      "alt": ""
    }
  })])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-51295288", esExports)
  }
}

/***/ })

},[168]);
//# sourceMappingURL=main.js.map