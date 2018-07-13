global.webpackJsonp([10],{

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(198);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '订单详情'
  }
});

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_027b0d56_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(222);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(199)
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

/***/ 199:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            orderInfo: {},
            imgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1531328531&di=6f578a310aacfc611b3ce4e41b661f95&src=http://img1.ph.126.net/KCG0wwnes5Oh8nzyGYp_Dg==/1564156445598554981.jpg'
        };
    },


    components: {},

    methods: {},
    created: function created() {},
    onLoad: function onLoad(option) {
        var _this = this;

        var token = wx.getStorageSync('token');
        var orderId = option.orderId;
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["b" /* get */])('/order/orderDetail', { token: token, orderId: orderId }).then(function (res) {
            console.log(res);
            _this.orderInfo = res;
        }).catch(function (e) {
            console.log(e);
        });
    }
});

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container order-info-container"
  }, [_c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "line-box"
  }), _vm._v(" "), _c('div', {
    staticClass: "order-info"
  }, [_c('div', {
    staticClass: "order-info-line"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n                    订单号\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n                      " + _vm._s(_vm.orderInfo.orderId) + "\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "order-info-line"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n                    下单时间\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n                      " + _vm._s(_vm.orderInfo.createOrderTime) + "\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "order-info-line"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n                    人数\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n                      " + _vm._s(_vm.orderInfo.peerNumber) + "\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "order-info-line"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n                    到店时间\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n                      " + _vm._s(_vm.orderInfo.bookDay) + "\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "order-info-line"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n                    订单状态\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n                      " + _vm._s(_vm.orderInfo.orderStatusDesc) + "\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "order-info-line"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n                    支付金额\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n                  ￥\n                  "), _c('span', {
    staticClass: "price"
  }, [_vm._v(_vm._s(_vm.orderInfo.payAmount))])])])]), _vm._v(" "), _c('div', {
    staticClass: "no"
  }, [_vm._v("\n            票号 "), _c('span', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.orderInfo.voucherNo))])])])])
}
var staticRenderFns = []
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

},[197]);
//# sourceMappingURL=main.js.map