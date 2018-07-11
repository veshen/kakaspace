global.webpackJsonp([1],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(145);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ec7d2de8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(153);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(146)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ec7d2de8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ec7d2de8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ec7d2de8", Component.options)
  } else {
    hotAPI.reload("data-v-ec7d2de8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 146:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_subscribe__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_moreInfo__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(48);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      motto: 'index',
      userInfo: {},
      listData: [{ imgUrl: 'https://resource.sa-green.cn/image/jpg/kaka/Bitmap.png', title: '这是主标题', desc: '这是描述 好多个字的描述,这是描述 好多个字的描述,这是描述 好多个字的描述' }, { imgUrl: 'https://resource.sa-green.cn/image/jpg/kaka/Bitmap%202.png', title: '这是主标题', desc: '这是描述 好多个字的描述' }, { imgUrl: 'https://resource.sa-green.cn/image/jpg/kaka/Bitmap%203.png', title: '这是主标题', desc: '这是描述 好多个字的描述' }, { imgUrl: 'https://resource.sa-green.cn/image/jpg/kaka/Bitmap%204.png', title: '这是主标题', desc: '这是描述 好多个字的描述' }]
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */], subscribe: __WEBPACK_IMPORTED_MODULE_1__components_subscribe__["a" /* default */], moreInfo: __WEBPACK_IMPORTED_MODULE_2__components_moreInfo__["a" /* default */]
  },

  methods: {
    toPage: function toPage(url) {
      wx.navigateTo({ url: url });
    },
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      wx.navigateTo({ url: url });
    },
    getUserInfo: function getUserInfo() {
      var _this = this;

      // 调用登录接口
      wx.login({
        success: function success(re) {
          console.log(re);
          var code = re.code;
          // get('/base/wechant/login',{code})
          wx.getUserInfo({
            success: function success(res) {
              // console.log(res);
              _this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle: function clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
});

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_subscribe_vue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7edca102_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_subscribe_vue__ = __webpack_require__(151);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(149)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7edca102"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_subscribe_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7edca102_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_subscribe_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/subscribe.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] subscribe.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7edca102", Component.options)
  } else {
    hotAPI.reload("data-v-7edca102", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 149:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['text'],
    methods: {
        toPage: function toPage(url) {
            wx.navigateTo({ url: url });
        }
    }
});

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "subscribe-btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.toPage('../onlineSubscribe/main')
      }
    }
  }, [_c('img', {
    staticClass: "image",
    attrs: {
      "src": "http://static.sa-green.cn/image/jpg/kaka/%E9%A2%84%E7%BA%A6.png",
      "alt": ""
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7edca102", esExports)
  }
}

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container index index-container"
  }, [_c('div', {
    staticClass: "index-top-box",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.toPage('../about/main')
      }
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("KIKYO SPACE")]), _vm._v(" "), _c('div', {
    staticClass: "city-name"
  }, [_vm._v("上海")]), _vm._v(" "), _c('div', {
    staticClass: "description"
  }, [_vm._v("有人说，我喜欢你们的光影，尽致淋漓有人说，我喜欢你们的人物氛围，情感细腻")]), _vm._v(" "), _c('div', {
    staticClass: "about-button"
  }, [_vm._v("关于KIKYO")])]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "list-content"
  }, _vm._l((_vm.listData), function(data, index) {
    return _c('div', {
      staticClass: "list-item",
      style: ({
        background: 'url(' + data.imgUrl + ') no-repeat top center',
        backgroundSize: '100% 100%'
      }),
      attrs: {
        "wx:key": "{index}",
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.toPage('../themeinfo/main')
        }
      }
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(data.title))]), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [_vm._v(_vm._s(data.desc))])])
  }))]), _vm._v(" "), _c('card', {
    attrs: {
      "text": _vm.motto,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('moreInfo', {
    attrs: {
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('subscribe', {
    attrs: {
      "mpcomid": '2'
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
  }, [_vm._v("主题场馆")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ec7d2de8", esExports)
  }
}

/***/ })

},[144]);
//# sourceMappingURL=main.js.map