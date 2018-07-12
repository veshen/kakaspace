<script>
import {get} from './utils/index'

export default {
  data: {
    a: 1,
  },
  globalData : {

  },
  created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('app created and cache logs by setStorageSync')

  },
  onLaunch(){

  },
  onShow() {
    // console.log(this.$root.$mp.app.globalData);
    wx.checkSession({
      success: function(){
        //session_key 未过期，并且在本生命周期一直有效
        console.log('session_key 未过期，并且在本生命周期一直有效');
      },
      fail: function(){
        // session_key 已经失效，需要重新执行登录流程
        console.log('session_key 已经失效，需要重新执行登录流程');
        // wx.login() //重新登录
      }
    })
    // 调用登录接口
    // wx.login({
    //   success: (re) => {
    //       console.log(re,'re26');
    //       const code = re.code;
    //       get('/base/wechat/user/login',{code})
    //     wx.getUserInfo({
    //       success: (res) => {
    //           // console.log(res);
    //         this.userInfo = res.userInfo
    //         console.log(res);
    //       }
    //     })
    //   }
    // })

    console.log('a is: ' + this.a, '小程序触发的 onshow')
    let  that = this;
    wx.getSystemInfo({
      success:  res=>{
        // console.log('手机信息res'+res.model)
        let modelmes = res.model;
        if (modelmes.search('iPhone X') != -1) {
            this.$root.$mp.app.globalData.isIphoneX = true;
          }else{
              this.$root.$mp.app.globalData.isIphoneX = false;
          }
      }
    })

    }
}
</script>

<style>
.container {
  min-height: 100%;
}

/* this rule will be remove */

* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}

page {
  min-height: 100%;
  padding-bottom: 98rpx;
  background: #000;
}
</style>
