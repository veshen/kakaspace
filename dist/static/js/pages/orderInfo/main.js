global.webpackJsonp([10],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(193);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_027b0d56_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(217);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(194)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-027b0d56"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_027b0d56_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/orderInfo/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-027b0d56", Component.options)
  } else {
    hotAPI.reload("data-v-027b0d56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 194:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qrcode__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qrcode__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            imgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1531328531&di=6f578a310aacfc611b3ce4e41b661f95&src=http://img1.ph.126.net/KCG0wwnes5Oh8nzyGYp_Dg==/1564156445598554981.jpg'
        };
    },


    components: {},

    methods: {},
    created: function created() {},
    onLoad: function onLoad() {
        // let That = this;
        // QRCode.toDataURL('https://www.baidu.com', {margin:0,scale:10}, (err, url)=> {
        //     That.imgUrl=url;
        //     console.log(url,err);
        // });
    }
});

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container order-info-container"
  }, [_c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "line-box"
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "qrcode-box"
  }, [_c('img', {
    staticClass: "image",
    attrs: {
      "src": _vm.imgUrl,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "tips"
  }, [_vm._v("\n            · 请到店后出示并验证入场 ·\n        ")])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "order-info"
  }, [_c('div', {
    staticClass: "order-info-line"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n                    订单号\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n                      DX0299993888\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "order-info-line"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n                    下单时间\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n                      2018-08-20  13:00\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "order-info-line"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n                    人数\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n                      2\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "order-info-line"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n                    到店时间\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n                      2018-08-20  13:00\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "order-info-line"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n                    订单状态\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n                      待消费\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "order-info-line"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n                    支付金额\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n                  ￥\n                  "), _c('span', {
    staticClass: "price"
  }, [_vm._v("300")])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "no"
  }, [_vm._v("\n            票号 "), _c('span', {
    staticClass: "number"
  }, [_vm._v("KUW2888829")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-027b0d56", esExports)
  }
}

/***/ })

},[192]);
//# sourceMappingURL=main.js.map