global.webpackJsonp([16],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(138);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '我的'
  }
});

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_300021e7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(141);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(139)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-300021e7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_300021e7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/invoice/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-300021e7", Component.options)
  } else {
    hotAPI.reload("data-v-300021e7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 139:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 140:
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



/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            motto: 'my',
            invoiceType: 2,
            address: '',
            invoiceTitle: null,
            taxNo: null,
            mobile: '',
            orderId: '',
            payAmount: ''
        };
    },

    components: {
        rotateLoading: __WEBPACK_IMPORTED_MODULE_3__components_rotateLoading__["a" /* default */]
    },
    methods: {
        binddivTap: function binddivTap() {
            var url = '../logs/main';
            wx.navigateTo({ url: url });
        },
        calling: function calling() {
            wx.makePhoneCall({
                phoneNumber: '13120860906',
                success: function success() {
                    console.log("拨打电话成功！");
                },
                fail: function fail() {
                    console.log("拨打电话失败！");
                }
            });
        },
        clearFn: function clearFn() {
            this.content = '';
        },
        submit: function submit() {
            var _this = this;

            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var invoiceType, mobile, address, invoiceTitle, taxNo, orderId, payAmount, token, res;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                console.log(_this.mobile);
                                console.log(_this.address);

                                if (!(_this.mobile.length !== 11)) {
                                    _context.next = 6;
                                    break;
                                }

                                Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["d" /* showModal */])('请输入正确的11位手机号', '');
                                return _context.abrupt('return');

                            case 6:
                                if (!(_this.address === '')) {
                                    _context.next = 9;
                                    break;
                                }

                                Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["d" /* showModal */])('请输入收件地址', '');
                                return _context.abrupt('return');

                            case 9:
                                if (!(_this.invoiceType === 2 && !_this.invoiceTitle)) {
                                    _context.next = 12;
                                    break;
                                }

                                Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["d" /* showModal */])('请输入发票抬头', '');
                                return _context.abrupt('return');

                            case 12:
                                if (!(_this.invoiceType === 2 && !_this.taxNo)) {
                                    _context.next = 15;
                                    break;
                                }

                                Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["d" /* showModal */])('请输入公司税号', '');
                                return _context.abrupt('return');

                            case 15:
                                _this.isFetching = true;
                                invoiceType = _this.invoiceType, mobile = _this.mobile, address = _this.address, invoiceTitle = _this.invoiceTitle, taxNo = _this.taxNo, orderId = _this.orderId, payAmount = _this.payAmount;
                                token = wx.getStorageSync('token');
                                _context.next = 20;
                                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["c" /* post */])('/invoice/submit', { token: token, invoiceType: invoiceType, mobile: mobile, address: address, invoiceTitle: invoiceTitle, taxNo: taxNo, orderId: orderId, payAmount: payAmount });

                            case 20:
                                res = _context.sent;

                                _this.isFetching = false;
                                console.log(res);
                                Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["e" /* showSuccess */])('提交成功!');
                                setTimeout(function () {
                                    var url = '../index/main';
                                    wx.redirectTo({ url: url });
                                }, 1500);
                                _context.next = 30;
                                break;

                            case 27:
                                _context.prev = 27;
                                _context.t0 = _context['catch'](0);

                                console.log(_context.t0);

                            case 30:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this, [[0, 27]]);
            }))();
        }
    },
    inText: function inText(e) {
        console.log(e);
    },
    onLoad: function onLoad(option) {
        this.orderId = option.orderId;
        this.payAmount = option.payAmount;
    },
    created: function created() {
        // 调用应用实例的方法获取全局数据
    }
});

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container invoice invoice-container"
  }, [_c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "line-box"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n              抬头类型\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "content radio-group"
  }, [_c('div', {
    class: [_vm.invoiceType === 2 ? 'radio-item active' : 'radio-item'],
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.invoiceType = 2
      }
    }
  }, [_vm._v("\n                    公司\n                ")]), _vm._v(" "), _c('div', {
    class: [_vm.invoiceType === 1 ? 'radio-item active' : 'radio-item'],
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.invoiceType = 1
      }
    }
  }, [_vm._v("\n                    个人\n                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "line-box"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n              手机号码\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.mobile),
      expression: "mobile"
    }],
    staticClass: "in-text",
    attrs: {
      "type": "text",
      "placeholder": "请填写",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.mobile)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.mobile = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "line-box"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n              收件地址\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address),
      expression: "address"
    }],
    staticClass: "in-text",
    attrs: {
      "type": "text",
      "placeholder": "请填写",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address = $event.target.value
      }
    }
  })])]), _vm._v(" "), (_vm.invoiceType === 2) ? _c('div', {
    staticClass: "line-box"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n              发票抬头\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.invoiceTitle),
      expression: "invoiceTitle"
    }],
    staticClass: "in-text",
    attrs: {
      "type": "text",
      "placeholder": "请填写",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.invoiceTitle)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.invoiceTitle = $event.target.value
      }
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.invoiceType === 2) ? _c('div', {
    staticClass: "line-box"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n              公司税号\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.taxNo),
      expression: "taxNo"
    }],
    staticClass: "in-text",
    attrs: {
      "type": "text",
      "placeholder": "请填写",
      "eventid": '5'
    },
    domProps: {
      "value": (_vm.taxNo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.taxNo = $event.target.value
      }
    }
  })])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "submit-btn",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("\n        提交\n    ")]), _vm._v(" "), _c('div', {
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
  })], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-300021e7", esExports)
  }
}

/***/ })

},[137]);
//# sourceMappingURL=main.js.map