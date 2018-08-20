<template>
  <div class="container mine mine-container">
    <div class="index-top-box">
          <div class="login-box" v-show="userInfo.nickName!==''">
              <Image class="head" v-bind:src="userInfo.avatarUrl"/>
              <div class="user-name">{{userInfo.nickName}}</div>
          </div>
         <button v-show="userInfo.nickName===''" class="login-button" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">立即登陆</button>

      </div>
      <div class="content">
          <div class="list-content">
              <div class="list-item" @click="toPage('../myorder/main')">
                  <img class="left-icon" src="http://static.sa-green.cn/image/jpg/kaka/%E8%AE%A2%E5%8D%95.svg" alt="">
                  <div class="content-text">订单</div>
                  <img class="left-right" src="http://static.sa-green.cn/image/jpg/kaka/%E7%AE%AD%E5%A4%B4%E5%8F%B3.svg" alt="">
              </div>
              <div class="list-item" @click="toPage('../feedback/main')">
                  <img class="left-icon" src="http://static.sa-green.cn/image/jpg/kaka/%E5%8F%8D%E9%A6%88.svg" alt="">
                  <div class="content-text">反馈</div>
                  <img class="left-right" src="http://static.sa-green.cn/image/jpg/kaka/%E7%AE%AD%E5%A4%B4%E5%8F%B3.svg" alt="">
              </div>
              <!-- <div class="list-item">
                  <img class="left-icon" src="http://static.sa-green.cn/image/jpg/kaka/%E5%96%9C%E6%AC%A2.svg" alt="">
                  <div class="content-text">喜欢</div>
                  <img class="left-right" src="http://static.sa-green.cn/image/jpg/kaka/%E7%AE%AD%E5%A4%B4%E5%8F%B3.svg" alt="">
              </div>
              <div class="list-item">
                  <img class="left-icon" src="http://static.sa-green.cn/image/jpg/kaka/%E7%9B%B8%E5%86%8C.svg" alt="">
                  <div class="content-text">相册</div>
                  <img class="left-right" src="http://static.sa-green.cn/image/jpg/kaka/%E7%AE%AD%E5%A4%B4%E5%8F%B3.svg" alt="">
              </div>
               -->

          </div>
          <div class="login-out-btn" v-bind:class="[userInfo.nickName===''? 'hide' : '']" @click="loginOut">
              退出登录
          </div>
      </div>
      <!-- <moreInfo /> -->
      <card :text="motto"></card>
  </div>
</template>

<script>
import card from '@/components/card'
import moreInfo from '@/components/moreInfo'
import {get,showSuccess, post, showModal} from './../../utils/index'
export default {
  data () {
    return {
      motto: 'my',
      userInfo: {
          avatarUrl : "",
          nickName : "",
          active : false
      }
    }
  },
  components: {
    card, moreInfo
  },
  methods: {
      loginOut(){
          wx.removeStorageSync('token');
          this.userInfo.nickName = '';
          if (getApp().globalData.userInfo) {
              getApp().globalData.userInfo.avatarUrl = "";
              getApp().globalData.userInfo.nickName = "";
          };

      },
      toPage(url) {
        wx.navigateTo({
          url
        })
      },
    binddivTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    bindGetUserInfo (e) {
      const self = this

      wx.login({
        success: async (re) => {
            console.log(re,'rererere');
          const code = re.code;
          const loginRes = await get('/base/wechat/user/login',{code});
          console.log();
          wx.setStorageSync('token', loginRes.token)
          wx.setStorageSync('mobile', loginRes.mobile)
        }
      })
      console.log(e);
      // 查看是否授权
      wx.getSetting({
        success: function (res) {
          // 授权信息里有用户信息
          if (res.authSetting['scope.userInfo']) {
            // 检查用户登录是否过期
            wx.checkSession({
              success: function () {
                // 没过期 直接成功
                showSuccess('登录成功')

                    wx.getUserInfo({
                      success: async (res) => {
                          console.log(res);
                        // this.userInfo = res.userInfo
                        // console.log(res,'userInfo');
                        self.userInfo.avatarUrl = res.userInfo.avatarUrl;
                        self.userInfo.nickName = res.userInfo.nickName;
                      }
                    })
              },
              fail: function () {
                // 过期了 重新登录 先清楚登录的状态
                qcloud.clearSession()
                // 登录态已过期，需重新登录
                // 登录需要的加密信息
                var options = {
                  encryptedData: e.mp.detail.encryptedData,
                  iv: e.mp.detail.iv,
                  userinfo: e.mp.detail.userInfo
                }
                self.getWxLogin(options)
              }

            })
          } else {
            showModal('用户未授权', e.mp.detail.errMsg)
          }
        }

      })

      // let user = wx.getStorageSync('userinfo')
      // const self = this
      // if (!user) {
      //   qcloud.setLoginUrl(config.loginUrl)
      //   qcloud.login({
      //     success: function (userinfo) {
      //       qcloud.request({
      //         url: config.userUrl,
      //         login: true,
      //         success (userRes) {
      //           showSuccess('登录成功')
      //           wx.setStorageSync('userinfo', userRes.data.data)
      //           self.userinfo = userRes.data.data
      //         }
      //       })
      //     }

      //   })
      // }
  },
//   bindGetUserInfo: function(e) {
//       console.log(111222333444);
//     console.log(e.detail.userInfo)
// }

  },
  onShow(){
      const userInfo = getApp().globalData.userInfo
      if (userInfo) {
          this.userInfo.avatarUrl = userInfo.avatarUrl;
          this.userInfo.nickName = userInfo.nickName;
      }
  },
  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style scoped>

.login-out-btn{
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100rpx;
    border-radius: 50rpx;
    margin: 120rpx 50rpx 0;
}
.hide{
    display: none;
}
.login-button{
    color: #FFE631;
    background: #000;
    width: 250rpx;
    height: 100rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50rpx;
}
.mine-container{
    min-height: 100%;
    background: rgb(241, 241, 241);
}
.mine-container .index-top-box {
  height: 340rpx;
  background: url('https://resource.sa-green.cn/static/jpg/%E6%88%91%E7%9A%84_%E9%A1%B6%E5%9B%BE.png') no-repeat top center;
  background-size: 100% 100%;position: relative;

}
.mine-container .index-top-box .login-box {
  overflow: hidden;
}
.mine-container .index-top-box .login-box .head {
  display: block;
  width: 160rpx;
  height: 160rpx;
  margin: 27rpx auto 20rpx;
  border-radius: 50%;
  border: 1rpx solid rgba(255, 255, 255, 0.7);
}
.mine-container .index-top-box .login-box .user-name {
  font-size: 32rpx;
  color: #FFFFFF;
  text-align: center;
}
.mine-container .content {
  padding-top: 30rpx;
  background: rgb(241,241,241);
}
.mine-container .content .list-content{
    background: #fff;
    padding: 40rpx 60rpx 80rpx;
}
.mine-container .content .list-content .list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 7rpx;
  height: 120rpx;
  border-bottom: 1rpx solid #D9D3CB;
}
.mine-container .content .list-content .list-item .left-icon{
    width: 48rpx;
    height: 48rpx;
}
.mine-container .content .list-content .list-item  .left-right{
    width: 18rpx;
    height: 28rpx;
}
.mine-container .content .list-content .list-item .content-text {
  flex-grow: 1;
  padding-left: 40rpx;
  font-size: 30rpx;
  color: #21222C;
}
</style>
