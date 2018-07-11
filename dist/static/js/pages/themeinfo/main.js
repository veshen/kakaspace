global.webpackJsonp([5],{

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(200);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_61e9bc71_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(203);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(201)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61e9bc71"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_61e9bc71_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/themeinfo/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61e9bc71", Component.options)
  } else {
    hotAPI.reload("data-v-61e9bc71", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 201:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_moreInfo__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      motto: 'Hello World 000',
      userInfo: {},
      movies: [{ id: 1, title: 'Hello World', url: 'http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg' }, { id: 2, title: 'Installation', url: 'http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg' }, { id: 3, title: 'Hello World', url: 'http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg' }]
    };
  },


  methods: {},
  components: {
    moreInfo: __WEBPACK_IMPORTED_MODULE_0__components_moreInfo__["a" /* default */]
  },
  created: function created() {}
});

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index theme-info-container"
  }, [_c('div', {
    staticClass: "swiper-content"
  }, [_c('swiper', {
    staticClass: "swiper",
    attrs: {
      "indicator-dots": "true",
      "autoplay": "true",
      "interval": "5000",
      "duration": "1000",
      "indicator-color": "rgba(255,255,255,0.5)",
      "indicator-active-color": "#FFE631"
    }
  }, _vm._l((_vm.movies), function(item, index) {
    return _c('block', {
      key: _vm.key,
      attrs: {
        "index": index
      }
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item.url,
        "mode": "aspectFill"
      }
    })])], 1)
  }))], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('moreInfo', {
    attrs: {
      "mpcomid": '1'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "warp"
  }, [_c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n                    关于空间\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("\n                    这里是主题描述，再多几个字。\n云虹很像彩虹，但颜色更浅。事实上，它们往往不会呈现出任何\n可辨别的颜色，看起来就像白化的彩虹，或是彩虹的鬼魂经过。\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "scene-list"
  }, [_c('div', {
    staticClass: "scene-item"
  }, [_c('img', {
    staticClass: "item-pic",
    attrs: {
      "src": "http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("这是文字描述这是文字描述这是文字描述这是文字描述")])]), _vm._v(" "), _c('div', {
    staticClass: "scene-item"
  }, [_c('img', {
    staticClass: "item-pic",
    attrs: {
      "src": "http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("这是文字描述这是文字描述这是文字描述这是文字描述")])]), _vm._v(" "), _c('div', {
    staticClass: "scene-item"
  }, [_c('img', {
    staticClass: "item-pic",
    attrs: {
      "src": "http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("这是文字描述这是文字描述这是文字描述这是文字描述")])]), _vm._v(" "), _c('div', {
    staticClass: "scene-item"
  }, [_c('img', {
    staticClass: "item-pic",
    attrs: {
      "src": "http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("这是文字描述这是文字描述这是文字描述这是文字描述")])]), _vm._v(" "), _c('div', {
    staticClass: "scene-item"
  }, [_c('img', {
    staticClass: "item-pic",
    attrs: {
      "src": "http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("这是文字描述这是文字描述这是文字描述这是文字描述")])]), _vm._v(" "), _c('div', {
    staticClass: "scene-item"
  }, [_c('img', {
    staticClass: "item-pic",
    attrs: {
      "src": "http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("这是文字描述这是文字描述这是文字描述这是文字描述")])])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-61e9bc71", esExports)
  }
}

/***/ })

},[199]);
//# sourceMappingURL=main.js.map