global.webpackJsonp([10],{

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(183);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '订单详情'
  }
});

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_79459c05_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(186);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(184)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79459c05"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_79459c05_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/orderTicketChanges/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79459c05", Component.options)
  } else {
    hotAPI.reload("data-v-79459c05", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 184:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_rotateLoading__ = __webpack_require__(21);


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

// import QRCode from 'qrcode';


/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            orderInfo: {},
            currentDate: '',
            date: '请选择 >',
            orderId: '',
            couldAlter: false,
            amount: 0,
            payType: 0,
            isFetching: false
        };
    },


    components: {
        rotateLoading: __WEBPACK_IMPORTED_MODULE_3__components_rotateLoading__["a" /* default */]
    },

    methods: {
        bindTimeChange: function bindTimeChange(e) {
            var _this = this;

            this.date = e.mp.detail.value;
            var token = wx.getStorageSync('token');
            var newBookDay = e.mp.detail.value;
            var orderId = this.orderId;
            console.log(1111111);
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["b" /* get */])('/order/checkOrderAlter', { token: token, newBookDay: newBookDay, orderId: orderId }).then(function (res) {
                console.log(res);
                _this.payType = res.payType;
                _this.amount = res.amount;
                _this.couldAlter = res.couldAlter;
            }).catch(function (e) {
                console.log(e);
            });
        },
        payOrder: function payOrder() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var token, newBookDay, orderId, payType, diffAmount, res, _res$prePayResultDto, nonceStr, paySign, prePay_package, signType, timestamp;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!_this2.couldAlter) {
                                    _context.next = 13;
                                    break;
                                }

                                _this2.isFetching = true;
                                token = wx.getStorageSync('token');
                                newBookDay = _this2.date;
                                orderId = _this2.orderId;
                                payType = _this2.payType;
                                diffAmount = _this2.amount;
                                _context.next = 9;
                                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["b" /* get */])('/order/alterOrder', { token: token, newBookDay: newBookDay, orderId: orderId, payType: payType, diffAmount: diffAmount });

                            case 9:
                                res = _context.sent;

                                console.log(res);
                                _this2.isFetching = false;
                                if (res.needPay) {
                                    _res$prePayResultDto = res.prePayResultDto, nonceStr = _res$prePayResultDto.nonceStr, paySign = _res$prePayResultDto.paySign, prePay_package = _res$prePayResultDto.prePay_package, signType = _res$prePayResultDto.signType, timestamp = _res$prePayResultDto.timestamp;

                                    wx.requestPayment({
                                        timeStamp: timestamp,
                                        nonceStr: nonceStr,
                                        package: prePay_package,
                                        signType: signType,
                                        paySign: paySign,
                                        success: function success() {
                                            wx.showToast({
                                                title: '改签成功',
                                                icon: 'success',
                                                duration: 2000 //提示的延迟时间，单位毫秒，默认：1500
                                            });
                                            setTimeout(function () {
                                                var url = '../orderInfo/main?orderId=' + orderId;
                                                wx.navigateTo({
                                                    url: url
                                                });
                                            }, 2000);
                                        },
                                        fail: function fail() {
                                            var url = '../orderInfo/main?orderId=' + orderId;
                                            wx.navigateTo({
                                                url: url
                                            });
                                        }
                                    });
                                } else {
                                    wx.showToast({
                                        title: res.msg,
                                        icon: 'success',
                                        duration: 2000 //提示的延迟时间，单位毫秒，默认：1500
                                    });
                                    setTimeout(function () {
                                        var url = '../orderInfo/main?orderId=' + orderId;
                                        wx.navigateTo({
                                            url: url
                                        });
                                    }, 2000);
                                }

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }))();
        }
    },
    created: function created() {},
    onLoad: function onLoad(option) {
        this.orderId = option.orderId;
    }
});

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container order-ticket-container"
  }, [_vm._m(0), _vm._v(" "), _c('picker', {
    attrs: {
      "value": 0,
      "mode": "date",
      "start": _vm.currentDate,
      "eventid": '0'
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
  }, [_vm._v("\n            改签日期\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "subTitle"
  }, [_c('view', {
    staticClass: "picker"
  }, [_vm._v("\n              " + _vm._s(_vm.date) + "\n            ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "pay-bottom"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.payType !== 2),
      expression: "payType!==2"
    }],
    staticClass: "price-box"
  }, [_vm._v("\n            需支付" + _vm._s(_vm.amount) + "¥\n        ")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.payType === 2),
      expression: "payType===2"
    }],
    staticClass: "price-box"
  }, [_vm._v("\n            可退款" + _vm._s(_vm.amount) + "¥\n        ")]), _vm._v(" "), _c('div', {
    class: [_vm.couldAlter ? 'ticket-changes-btn active' : 'ticket-changes-btn'],
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.payOrder
    }
  }, [_vm._v("\n          确认改签\n        ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isFetching),
      expression: "isFetching"
    }]
  }, [_c('rotateLoading', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tips-box"
  }, [_c('div', {
    staticClass: "title-box"
  }, [_vm._v("\n            改签须知\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "tips-content"
  }, [_c('div', [_vm._v("\n                1.订单只可改签一次\n            ")]), _vm._v(" "), _c('div', [_vm._v("\n                2.订单改签暂时仅支持变更日期\n            ")]), _vm._v(" "), _c('div', [_vm._v("\n                3.因订单修改日期，可能会涉及补款和退款，烦请谨慎操作\n            ")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-79459c05", esExports)
  }
}

/***/ })

},[182]);
//# sourceMappingURL=main.js.map