global.webpackJsonp([15],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(130);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2aee11bd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(133);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
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

/***/ 131:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_moreInfo__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

  methods: {
    toPage: function toPage(url) {
      wx.navigateTo({ url: url });
    }
  },

  created: function created() {}
});

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index depth-container"
  }, [_c('div', {
    staticClass: "index-top-box",
    style: ({
      background: 'url(' + 'https://resource.sa-green.cn/image/jpg/kaka/%E9%A1%B6%E5%9B%BE.png' + ') no-repeat top center',
      backgroundSize: '100% 100%'
    })
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("KIKYO SPACE 123123")]), _vm._v(" "), _c('div', {
    staticClass: "sub-title"
  }, [_vm._v("有人说，我喜欢你们的光影，尽致淋漓")]), _vm._v(" "), _c('div', {
    staticClass: "sub-title"
  }, [_vm._v("有人说，我喜欢你们的人物氛围，情感细腻")])]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "list-content"
  }, _vm._l((_vm.videoData), function(data, index) {
    return _c('div', {
      staticClass: "list-item",
      attrs: {
        "wx:key": "{index}"
      }
    }, [_c('div', {
      staticClass: "video-box"
    }, [_c('video', {
      staticClass: "v-box",
      attrs: {
        "poster": data.poster,
        "src": data.videoUrl
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "video-desc",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.toPage('../videoinfo/main')
        }
      }
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v("你是所有美好的起因你是所有美好的起因")]), _vm._v(" "), _c('div', {
      staticClass: "sub-title"
    }, [_vm._v("闺蜜就是西瓜分你一半闺蜜就是西瓜分你一半闺蜜就是西瓜分你一半")])])])
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

},[129]);
//# sourceMappingURL=main.js.map