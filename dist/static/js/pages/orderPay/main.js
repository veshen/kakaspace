global.webpackJsonp([10],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(164);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '订单详情'
  }
});

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_11c6e5d4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(167);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(165)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-11c6e5d4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_11c6e5d4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/orderPay/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11c6e5d4", Component.options)
  } else {
    hotAPI.reload("data-v-11c6e5d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import QRCode from 'qrcode';

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            orderInfo: {}
        };
    },


    components: {},

    methods: {},
    created: function created() {},
    onLoad: function onLoad(option) {
        // const token = wx.getStorageSync('token')
        // const orderId = option.orderId;
        // get('/order/orderDetail',{token,orderId}).then((res)=>{
        //     console.log(res);
        //     this.orderInfo = res;
        // }).catch((e)=>{
        //     console.log(e);
        // })
    }
});

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container order-pay-container"
  }, [_c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "top-box"
  }, [_vm._v("支付剩余时间 15：04")]), _vm._v(" "), _c('div', {
    staticClass: "pay-info"
  }, [_c('div', {
    staticClass: "line-box"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("订单号")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("DX0299993888")])]), _vm._v(" "), _c('div', {
    staticClass: "line-box"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("下单时间")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("2018-08-20  13:00")])]), _vm._v(" "), _c('div', {
    staticClass: "line-box"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("人数")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("2")])]), _vm._v(" "), _c('div', {
    staticClass: "line-box"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("到店时间")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("2018-08-20  13:00")])]), _vm._v(" "), _c('div', {
    staticClass: "line-box"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("订单状态")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("代付款")])])]), _vm._v(" "), _c('div', {
    staticClass: "pay-price"
  }, [_vm._v("\n        支付金额 ￥300\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "pay-bottom"
  }, [_vm._v("立即支付")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-11c6e5d4", esExports)
  }
}

/***/ })

},[163]);
//# sourceMappingURL=main.js.map