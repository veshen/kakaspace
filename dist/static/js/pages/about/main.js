global.webpackJsonp([18],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(122);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e8ad13f2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(131);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(123)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e8ad13f2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e8ad13f2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/about/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e8ad13f2", Component.options)
  } else {
    hotAPI.reload("data-v-e8ad13f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_moreInfo__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      imgUrl: 'https://resource.sa-green.cn/image/jpg/kaka/%E9%A1%B6%E5%9B%BE.png',
      videoData: [{
        poster: 'https://resource.sa-green.cn/image/jpg/kaka/Bitmap%20Copy.png',
        videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
      }, {
        poster: 'https://resource.sa-green.cn/image/jpg/kakaBitmap%202.png',
        videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
      }, {
        poster: 'https://resource.sa-green.cn/image/jpg/kakaBitmap%203.png',
        videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
      }]
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */], moreInfo: __WEBPACK_IMPORTED_MODULE_1__components_moreInfo__["a" /* default */]
  },

  methods: {},

  created: function created() {}
});

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index about-container"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "content"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "img-desc"
  }, [_c('h3', {
    staticClass: "title"
  }, [_vm._v("KILKYO  SPACE")]), _vm._v(" "), _vm._m(1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "address-box"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("地址")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("上海市黄浦区局门路411号（8号桥2期）9号线马当路站步行8分钟可到")]), _vm._v(" "), _c('div', {
    staticClass: "map-box"
  }, [_c('map', {
    staticStyle: {
      "width": "670rpx",
      "height": "440rpx"
    },
    attrs: {
      "id": "map",
      "longitude": "36.0614156482",
      "latitude": "89.3853189945",
      "scale": "14",
      "bindcontroltap": "controltap",
      "bindregionchange": "regionchange",
      "show-location": ""
    }
  })], 1)])]), _vm._v(" "), _c('moreInfo', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img-box"
  }, [_c('img', {
    staticClass: "image",
    attrs: {
      "src": "https://resource.sa-green.cn/image/jpg/kaka/%E9%A1%B6%E5%9B%BE.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "desc"
  }, [_c('div', {
    staticClass: "left-box"
  }, [_vm._v("拍照艺术空间")]), _vm._v(" "), _c('div', {
    staticClass: "right-box"
  }, [_vm._v("30元/半小时")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "about-space"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("关于空间")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("KIKYO SPACE 是一家关于拍照的艺术空间为用户提供很多不同场景的。\n说一句是一句，清早上火车站长街黑暗无行人卖豆浆的小店冒着热气 从前的日色变得慢 车马邮件都慢 。")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e8ad13f2", esExports)
  }
}

/***/ })

},[121]);
//# sourceMappingURL=main.js.map