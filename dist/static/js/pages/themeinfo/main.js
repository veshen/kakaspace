global.webpackJsonp([6],{

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(184);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '主题详情'
  }
});

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_61e9bc71_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(187);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(185)
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

/***/ 185:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_moreInfo__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            id: 0,
            mainPic: '',
            subName: '',
            subDesc: '',
            subThumbList: []
        };
    },

    methods: {
        previewImage: function previewImage(curImg) {
            console.log(curImg);
            var imgs = [];
            this.subThumbList.map(function (item, index) {
                console.log(item, index);
                imgs.push(item.picUrl);
            });
            console.log(imgs);
            wx.previewImage({
                current: curImg, // 当前显示图片的http链接
                urls: imgs // 需要预览的图片http链接列表
            });
        }
    },
    components: {
        moreInfo: __WEBPACK_IMPORTED_MODULE_0__components_moreInfo__["a" /* default */]
    },
    onLoad: function onLoad(option) {
        var _this = this;

        Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["b" /* get */])('/mainPage/subjectDetail', { subjectId: option.id || this.id }).then(function (res) {
            console.log(res);
            _this.mainPic = res.subjectMainPicUrl;
            _this.subName = res.subjectName;
            _this.subDesc = res.subjectDesc;
            _this.subThumbList = res.sceneSmallInfoBeanList;
        }).catch(function (e) {
            console.log(e);
        });
    },
    created: function created() {}
});

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index theme-info-container"
  }, [_c('div', {
    staticClass: "swiper-content"
  }, [_c('image', {
    staticClass: "slide-image",
    attrs: {
      "src": _vm.mainPic,
      "mode": "aspectFill"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "warp"
  }, [_c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n                " + _vm._s(_vm.subName) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v(_vm._s(_vm.subDesc))]), _vm._v(" "), _c('div', {
    staticClass: "scene-list"
  }, _vm._l((_vm.subThumbList), function(data, index) {
    return _c('div', {
      staticClass: "scene-item",
      attrs: {
        "wx:key": "{index}"
      }
    }, [_c('img', {
      staticClass: "item-pic",
      attrs: {
        "mode": "aspectFill",
        "src": data.picUrl,
        "alt": "",
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.previewImage(data.picUrl)
        }
      }
    })])
  }))])]), _vm._v(" "), _c('moreInfo', {
    attrs: {
      "mpcomid": '0'
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
     require("vue-hot-reload-api").rerender("data-v-61e9bc71", esExports)
  }
}

/***/ })

},[183]);
//# sourceMappingURL=main.js.map