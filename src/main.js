import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/my/main',
      'pages/themeinfo/main',
      'pages/videoinfo/main',
      '^pages/find/main',
      'pages/photoinfo/main',
      'pages/photobrowse/main',
      'pages/depth/main',
      'pages/index/main',
      'pages/myorder/main',
      'pages/ilike/main',
      'pages/myalbum/main',
      'pages/about/main',
      'pages/onlineSubscribe/main',
      'pages/orderInfo/main',
      'pages/orderPay/main',
      ],
    'window': {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#000',
      navigationBarTitleText: 'KIKYO空间',
      navigationBarTextStyle: '#fff'
    },
    // tabBar : {
    //     list : [
    //         {
    //           pagePath: 'pages/depth/main',
    //           text: '图书',
    //         },
    //         {
    //           pagePath: 'pages/index/main',
    //           text: '图书',
    //         },
    //     ]
    // }
},
}
