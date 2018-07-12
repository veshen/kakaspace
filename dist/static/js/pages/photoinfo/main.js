global.webpackJsonp([8],{

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(224);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_011bcdcc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(227);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(225)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-011bcdcc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_011bcdcc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/photoinfo/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-011bcdcc", Component.options)
  } else {
    hotAPI.reload("data-v-011bcdcc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 225:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_moreInfo__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


  methods: {
    toPage: function toPage(url) {
      wx.navigateTo({ url: url });
    }
  },
  components: {
    moreInfo: __WEBPACK_IMPORTED_MODULE_0__components_moreInfo__["a" /* default */]
  },
  created: function created() {}
});

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index photo-info-container"
  }, [_c('div', {
    staticClass: "photo-content"
  }, [_c('div', {
    staticClass: "img-box",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.toPage('../photobrowse/main')
      }
    }
  }, [_c('img', {
    staticClass: "image",
    attrs: {
      "src": "http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg"
    }
  })]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('moreInfo', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img-info-box"
  }, [_c('div', [_vm._v("20180707")]), _vm._v(" "), _c('div', [_vm._v("icon 277")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "warp"
  }, [_c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "top-box"
  }, [_c('img', {
    staticClass: "head-img",
    attrs: {
      "src": "http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "head-name"
  }, [_vm._v("Erik Anshkr")])]), _vm._v(" "), _c('div', {
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
  })]), _vm._v(" "), _c('div', {
    staticClass: "scene-item"
  }, [_c('img', {
    staticClass: "item-pic",
    attrs: {
      "src": "http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "scene-item"
  }, [_c('img', {
    staticClass: "item-pic",
    attrs: {
      "src": "http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "scene-item"
  }, [_c('img', {
    staticClass: "item-pic",
    attrs: {
      "src": "http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "scene-item"
  }, [_c('img', {
    staticClass: "item-pic",
    attrs: {
      "src": "http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "scene-item"
  }, [_c('img', {
    staticClass: "item-pic",
    attrs: {
      "src": "http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg",
      "alt": ""
    }
  })])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-011bcdcc", esExports)
  }
}

/***/ })

},[223]);
//# sourceMappingURL=main.js.map