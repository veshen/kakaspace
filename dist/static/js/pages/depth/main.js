global.webpackJsonp([17],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(105);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '深度'
  }
});

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2aee11bd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(108);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2aee11bd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2aee11bd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/depth/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2aee11bd", Component.options)
  } else {
    hotAPI.reload("data-v-2aee11bd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 106:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_card__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_moreInfo__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(3);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      motto: 'depth',
      mainPicUrl: 'https://resource.sa-green.cn/image/jpg/kaka/%E9%A1%B6%E5%9B%BE.png',
      title: 'KIKYO SPACE',
      subTitleList: ['有人说，我喜欢你们的光影，尽致淋漓', '有人说，我喜欢你们的人物氛围，情感细腻'],
      deepList: [],
      userInfo: {}
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_2__components_card__["a" /* default */],
    moreInfo: __WEBPACK_IMPORTED_MODULE_3__components_moreInfo__["a" /* default */]
  },

  methods: {
    toPage: function toPage(url) {
      wx.navigateTo({
        url: url
      });
    },
    getPageData: function getPageData() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["b" /* get */])('/deepPage/deepAll');

              case 3:
                res = _context.sent;

                _this.mainPicUrl = res.mainPicUrl;
                _this.deepList = res.deepList;
                _this.title = res.title;
                _this.subTitleList = res.subTitleList;
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](0);

                console.log('6666', _context.t0);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 10]]);
      }))();
    }
  },
  created: function created() {
    this.getPageData();
  }
});

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index depth-container"
  }, [_c('div', {
    staticClass: "index-top-box",
    style: ({
      background: 'url(' + _vm.mainPicUrl + ') no-repeat top center',
      backgroundSize: '100% 100%'
    })
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _vm._l((_vm.subTitleList), function(data, index) {
    return _c('div', {
      staticClass: "sub-title",
      attrs: {
        "wx:key": "{index}"
      }
    }, [_vm._v(_vm._s(data))])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "list-content"
  }, _vm._l((_vm.deepList), function(data, index) {
    return _c('div', {
      staticClass: "list-item",
      attrs: {
        "wx:key": "{index}",
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.toPage(("../videoinfo/main?deepId=" + (data.deepId)))
        }
      }
    }, [_c('div', {
      staticClass: "video-box"
    }, [_c('img', {
      staticClass: "v-box",
      attrs: {
        "src": data.deepUrl,
        "alt": ""
      }
    }), _vm._v(" "), _c('img', {
      staticClass: "play-icon",
      attrs: {
        "src": "https://resource.sa-green.cn/image/jpg/kaka/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE.png",
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "video-desc"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(data.deepName))]), _vm._v(" "), _c('div', {
      staticClass: "sub-title"
    }, [_vm._v(_vm._s(data.deepDesc))])])])
  }))]), _vm._v(" "), _c('card', {
    attrs: {
      "text": _vm.motto,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('moreInfo', {
    attrs: {
      "mpcomid": '1'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list-title"
  }, [_c('div', {
    staticClass: "line-box"
  }), _vm._v(" "), _c('div', {
    staticClass: "text-box"
  }, [_vm._v("视频示意")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2aee11bd", esExports)
  }
}

/***/ })

},[104]);
//# sourceMappingURL=main.js.map