global.webpackJsonp([1],{

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(189);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '在线预订'
  }
});

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8c56011e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(196);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(190)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8c56011e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8c56011e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/onlineSubscribe/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8c56011e", Component.options)
  } else {
    hotAPI.reload("data-v-8c56011e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 190:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_bindPhoneNumber__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(6);


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
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      array: ['请选择 >', '1人', '2人', '3人', '4人', '5人', '6人', '7人', '8人', '9人', '10人', '11人', '12人', '13人', '14人', '15人', '16人', '17人', '18人', '19人', '20人', '21人', '22人', '23人', '24人', '25人', '26人', '27人', '28人', '29人', '30人'],
      index: 0,
      date: '请选择 >',
      currentDate: '',
      userInfo: {
        nickName: ''
      },
      userMobile: '',
      needPayAmountOffLine: 0
    };
  },


  components: {
    bindPhoneNumber: __WEBPACK_IMPORTED_MODULE_2__components_bindPhoneNumber__["a" /* default */]
  },

  methods: {
    // bindgetphonenumber (e) {
    //     if (this.index>0&&this.date!== '请选择 >') {
    //         showModal('错误','无手机号授权无法下单')
    //     }else{
    //         if (e.target.errMsg==="getPhoneNumber:ok") {
    //             console.log(e.target.encryptedData);
    //             get('/base/wechat/user/phone',{
    //                 encryptedData : e.target.encryptedData,
    //                 iv : e.target.iv
    //             })
    //         }else{
    //             showModal('错误','无手机号授权无法下单')
    //         }
    //     }
    //
    // },
    bindHeadCountChange: function bindHeadCountChange(e) {
      this.index = e.mp.detail.value;
      if (this.index > 0 && this.date !== '请选择 >') {
        this.computyed();
      }
    },
    bindTimeChange: function bindTimeChange(e) {
      this.date = e.mp.detail.value;
      if (this.index > 0 && this.date !== '请选择 >') {
        this.computyed();
      }
    },
    createOrder: function createOrder() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var bookingDay, peerNumber, mobile, token, res, url;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!(_this.index > 0 && _this.date !== '请选择 >' && _this.userMobile.length === 11)) {
                  _context.next = 11;
                  break;
                }

                bookingDay = _this.date;
                peerNumber = _this.index;
                mobile = _this.userMobile;
                token = wx.getStorageSync('token');
                _context.next = 8;
                return Object(__WEBPACK_IMPORTED_MODULE_3__utils_index__["b" /* get */])('/order/create', { bookingDay: bookingDay, peerNumber: peerNumber, mobile: mobile, token: token });

              case 8:
                res = _context.sent;
                url = '../orderInfo/main?orderId=' + res.orderId;

                wx.navigateTo({
                  url: url
                });

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

              case 16:
                _context.prev = 16;
                return _context.finish(16);

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 13, 16, 18]]);
      }))();
    },
    computyed: function computyed() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var bookingDay, peerNumber, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                bookingDay = _this2.date;
                peerNumber = _this2.index;
                _context2.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_3__utils_index__["b" /* get */])('/order/checkOrder', {
                  bookingDay: bookingDay, peerNumber: peerNumber

                });

              case 5:
                res = _context2.sent;

                console.log(res);
                _this2.needPayAmountOffLine = res.needPayAmountOffLine;
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2['catch'](0);

                console.log(_context2.t0);

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 10]]);
      }))();
    },
    toPage: function toPage(url) {
      if (this.index > 0 && this.date !== '请选择 >' && this.userMobile.length === 11) {

        wx.navigateTo({
          url: url
        });
      }
    }
  },
  onShow: function onShow() {
    var userInfo = getApp().globalData.userInfo;
    if (userInfo) {
      this.userInfo.nickName = userInfo.nickName;
    }
    // const userMobile = wx.getStorageSync('userMobile') || false;
    // this.userMobile = userMobile;
  },
  created: function created() {
    var dateFormat = 'YYYY/MM/DD';
    var myDate = new Date(); //获取系统当前时间
    var currentDate = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate();
    this.currentDate = currentDate;
  }
});

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_bindPhoneNumber_vue__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3db6f362_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_bindPhoneNumber_vue__ = __webpack_require__(195);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(193)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3db6f362"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_bindPhoneNumber_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3db6f362_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_bindPhoneNumber_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/bindPhoneNumber.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] bindPhoneNumber.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3db6f362", Component.options)
  } else {
    hotAPI.reload("data-v-3db6f362", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 193:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  props: ['text'],
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {},

  methods: {}

});

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mark"
  }, [_c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "tips"
  }, [_vm._v("\n                 验证手机号\n             ")]), _vm._v(" "), _c('div', {
    staticClass: "line-box"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n                     手机号\n                 ")]), _vm._v(" "), _c('div', {
    staticClass: "in-box"
  }, [_c('input', {
    staticClass: "input-h",
    attrs: {
      "type": "number",
      "name": "",
      "value": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "line-box"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n                     验证码\n                 ")]), _vm._v(" "), _c('div', {
    staticClass: "in-box"
  }, [_c('input', {
    staticClass: "input-f input-h",
    attrs: {
      "type": "number",
      "name": "",
      "value": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "get-code-btn"
  }, [_vm._v("\n                     获取验证码\n                 ")])])]), _vm._v(" "), _c('div', {
    staticClass: "button-box"
  }, [_c('div', {
    staticClass: "cancel-box btn-box"
  }, [_vm._v("\n                 取消\n             ")]), _vm._v(" "), _c('div', {
    staticClass: "cofrom-box btn-box"
  }, [_vm._v("\n                 确认\n             ")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3db6f362", esExports)
  }
}

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container online-subscribe-container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('picker', {
    attrs: {
      "value": 0,
      "range": _vm.array,
      "eventid": '0'
    },
    on: {
      "change": _vm.bindHeadCountChange
    }
  }, [_c('div', {
    staticClass: "select-scope"
  }, [_c('div', {
    staticClass: "tips-text"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n            到店人数\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "subTitle"
  }, [_c('view', {
    staticClass: "picker"
  }, [_vm._v("\n              " + _vm._s(_vm.array[_vm.index]) + "\n            ")])])])])]), _vm._v(" "), _c('picker', {
    attrs: {
      "value": 0,
      "mode": "date",
      "start": _vm.currentDate,
      "eventid": '1'
    },
    on: {
      "change": _vm.bindTimeChange
    }
  }, [_c('div', {
    staticClass: "select-scope"
  }, [_c('div', {
    staticClass: "tips-text"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n            到店日期\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "subTitle"
  }, [_c('view', {
    staticClass: "picker"
  }, [_vm._v("\n              " + _vm._s(_vm.date) + "\n            ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "select-scope"
  }, [_c('div', {
    staticClass: "tips-text"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n          联系人手机号\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "subTitle"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userMobile),
      expression: "userMobile"
    }],
    attrs: {
      "type": "text",
      "maxlength": "11",
      "placeholder": "请输入11位手机号码",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.userMobile)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userMobile = $event.target.value
      }
    }
  })])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "bottom-bar"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.needPayAmountOffLine !== 0),
      expression: "needPayAmountOffLine!==0"
    }],
    staticClass: "left-price"
  }, [_vm._v("\n        需到店支付   ¥ "), _c('span', {
    staticClass: "price-box"
  }, [_vm._v(_vm._s(_vm.needPayAmountOffLine))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.needPayAmountOffLine === 0),
      expression: "needPayAmountOffLine===0"
    }]
  }), _vm._v(" "), _c('div', {
    staticClass: "submit-btn",
    class: [_vm.index > 0 && _vm.date !== '请选择 >' && _vm.userMobile.length === 11 ? 'active' : ''],
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.createOrder
    }
  }, [_vm._v("\n      立即预约\n    ")])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "top-box"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n      购票须知：\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("\n      1. 票价：99元/人\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("\n      2. 场馆开放时间：10:00-21:00\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("\n      3. 场馆凭预约电子票入场，出馆后需再次购票才能入馆\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("\n      4. 门票一经售出，概不退款\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("\n      5. 请勿携带宠物及危险物品，尊重公共秩序\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("\n      6. 图片仅供参考\n    ")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8c56011e", esExports)
  }
}

/***/ })

},[188]);
//# sourceMappingURL=main.js.map