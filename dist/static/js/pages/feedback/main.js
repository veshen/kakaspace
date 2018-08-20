global.webpackJsonp([19],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(111);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '我的'
  }
});

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_20ca2061_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(117);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(112)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-20ca2061"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_20ca2061_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/feedback/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20ca2061", Component.options)
  } else {
    hotAPI.reload("data-v-20ca2061", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 113:
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



/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            motto: 'my',
            userInfo: {
                avatarUrl: "",
                nickName: "",
                active: false,
                content: '',
                info: ''
            }
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
                var content, token, res;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                if (!_this.content) {
                                    _context.next = 10;
                                    break;
                                }

                                _this.isFetching = true;
                                content = _this.content;
                                token = wx.getStorageSync('token');
                                _context.next = 7;
                                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["c" /* post */])('/feedback/add', { content: content, token: token, type: 1 });

                            case 7:
                                res = _context.sent;

                                _this.isFetching = false;
                                if (res) {
                                    Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["e" /* showSuccess */])('提交成功!');
                                    setTimeout(function () {
                                        var url = '../index/main';
                                        wx.redirectTo({ url: url });
                                    }, 1500);
                                }

                            case 10:
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](0);

                                console.log(_context.t0);

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this, [[0, 12]]);
            }))();
        }
    },
    inText: function inText(e) {
        console.log(e);
    },
    onShow: function onShow() {},
    created: function created() {
        // 调用应用实例的方法获取全局数据
    }
});

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container feedback feedback-container"
  }, [_c('h3', {
    staticClass: "page-title"
  }, [_vm._v("Hi，您可以")]), _vm._v(" "), _c('div', {
    staticClass: "main-box"
  }, [_c('div', {
    staticClass: "title-box"
  }, [_c('p', [_vm._v("告诉我们您想拍...")])], 1), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content),
      expression: "content"
    }],
    staticClass: "text-input",
    attrs: {
      "placeholder": "请简单描述您想拍的主题或您的疑问",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "submit-btn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("\n            提交\n        ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (false),
      expression: "false"
    }],
    staticClass: "main-box"
  }, [_c('div', {
    staticClass: "title-box"
  }, [_c('p', [_vm._v("电话沟通")])], 1), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n            您可以拨打我们的客服电话进行咨询和反馈\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "submit-btn",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.calling
    }
  }, [_vm._v("\n            一键拨号\n        ")])]), _vm._v(" "), _c('div', {
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
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-20ca2061", esExports)
  }
}

/***/ })

},[110]);
//# sourceMappingURL=main.js.map