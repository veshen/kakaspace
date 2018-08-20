global.webpackJsonp([21],{

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(88);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '关于我们'
  }
});

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e8ad13f2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(97);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(89)
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

/***/ 89:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_moreInfo__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            addr: '',
            desc: '',
            priceDes: '',
            lat: '',
            lng: '',
            markers: [],
            mainPic: ''
        };
    },


    components: {
        card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */], moreInfo: __WEBPACK_IMPORTED_MODULE_1__components_moreInfo__["a" /* default */]
    },

    methods: {},
    onLoad: function onLoad(option) {
        console.log(option);
    },
    onShow: function onShow() {
        var _this = this;

        Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["b" /* get */])('/mainPage/withUs').then(function (res) {
            console.log(res);
            _this.addr = res.address;
            _this.desc = res.introduce;
            _this.priceDes = res.priceDes;
            _this.lat = res.latitude;
            _this.lng = res.longitude;
            _this.mainPic = res.picUrl;
            _this.markers = [{
                id: 0,
                latitude: res.latitude,
                longitude: res.longitude,
                width: 50,
                height: 50
            }];
        }).catch(function (e) {
            console.log(e);
        });
    },
    created: function created() {}
});

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index about-container"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "img-box"
  }, [_c('img', {
    staticClass: "image",
    attrs: {
      "src": _vm.mainPic
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "img-desc"
  }, [_c('h3', {
    staticClass: "title"
  }, [_vm._v("KIKYO  SPACE")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_c('div', {
    staticClass: "left-box"
  }, [_vm._v("艺术空间")]), _vm._v(" "), _c('div', {
    staticClass: "right-box"
  }, [_vm._v(_vm._s(_vm.priceDes))])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "about-space"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("关于空间")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v(_vm._s(_vm.desc))])]), _vm._v(" "), _c('div', {
    staticClass: "address-box"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("地址")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v(_vm._s(_vm.addr))]), _vm._v(" "), _c('div', {
    staticClass: "map-box"
  }, [_c('map', {
    staticStyle: {
      "width": "670rpx",
      "height": "440rpx"
    },
    attrs: {
      "id": "map",
      "longitude": _vm.lng,
      "latitude": _vm.lat,
      "markers": _vm.markers,
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
var staticRenderFns = []
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

},[87]);
//# sourceMappingURL=main.js.map