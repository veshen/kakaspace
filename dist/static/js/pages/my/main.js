global.webpackJsonp([9],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(150);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ee7a405c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(153);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(151)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ee7a405c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ee7a405c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/my/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ee7a405c", Component.options)
  } else {
    hotAPI.reload("data-v-ee7a405c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 151:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userInfo: {}
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },

  methods: {
    binddivTap: function binddivTap() {
      var url = '../logs/main';
      wx.navigateTo({ url: url });
    },
    getUserInfo: function getUserInfo() {
      var _this = this;

      // 调用登录接口
      wx.login({
        success: function success() {
          wx.getUserInfo({
            success: function success(res) {
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

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container mine mine-container",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.clickHandle('test click', $event)
      }
    }
  }, [_c('div', {
    staticClass: "index-top-box"
  }, [_c('div', {
    staticClass: "login-box"
  }, [_c('Image', {
    staticClass: "head",
    attrs: {
      "src": "http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "user-name"
  }, [_vm._v("翠花是朵花")])])]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "list-content"
  }, [_c('div', {
    staticClass: "list-item"
  }, [_c('Icon', {
    staticClass: "like",
    attrs: {
      "size": "14",
      "type": "success",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content-text"
  }, [_vm._v("订单")]), _vm._v(" "), _c('Icon', {
    staticClass: "like",
    attrs: {
      "size": "14",
      "type": "success",
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "list-item"
  }, [_c('Icon', {
    staticClass: "like",
    attrs: {
      "size": "14",
      "type": "success",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content-text"
  }, [_vm._v("喜欢")]), _vm._v(" "), _c('Icon', {
    staticClass: "like",
    attrs: {
      "size": "14",
      "type": "success",
      "mpcomid": '4'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "list-item"
  }, [_c('Icon', {
    staticClass: "like",
    attrs: {
      "size": "14",
      "type": "success",
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content-text"
  }, [_vm._v("相册")]), _vm._v(" "), _c('Icon', {
    staticClass: "like",
    attrs: {
      "size": "14",
      "type": "success",
      "mpcomid": '6'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "list-item"
  }, [_c('Icon', {
    staticClass: "like",
    attrs: {
      "size": "14",
      "type": "success",
      "mpcomid": '7'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content-text"
  }, [_vm._v("反馈")]), _vm._v(" "), _c('Icon', {
    staticClass: "like",
    attrs: {
      "size": "14",
      "type": "success",
      "mpcomid": '8'
    }
  })], 1)])]), _vm._v(" "), _c('card', {
    attrs: {
      "text": _vm.motto,
      "mpcomid": '9'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ee7a405c", esExports)
  }
}

/***/ })

},[149]);
//# sourceMappingURL=main.js.map