<template>
  <div class="container mine mine-container">
    <div class="index-top-box">
          <div class="login-box">
              <Image class="head" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg"/>
              <div class="user-name">翠花是朵花</div>
          </div>
          <div class="get-user-info">
             <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">获取用户信息</button>
          </div>

      </div>
      <div class="content">
          <div class="list-content">
              <div class="list-item">
                  <img class="left-icon" src="http://static.sa-green.cn/image/jpg/kaka/%E8%AE%A2%E5%8D%95.svg" alt="">
                  <div class="content-text">订单</div>
                  <img class="left-right" src="http://static.sa-green.cn/image/jpg/kaka/%E7%AE%AD%E5%A4%B4%E5%8F%B3.svg" alt="">
              </div>
              <div class="list-item">
                  <img class="left-icon" src="http://static.sa-green.cn/image/jpg/kaka/%E5%96%9C%E6%AC%A2.svg" alt="">
                  <div class="content-text">喜欢</div>
                  <img class="left-right" src="http://static.sa-green.cn/image/jpg/kaka/%E7%AE%AD%E5%A4%B4%E5%8F%B3.svg" alt="">
              </div>
              <div class="list-item">
                  <img class="left-icon" src="http://static.sa-green.cn/image/jpg/kaka/%E7%9B%B8%E5%86%8C.svg" alt="">
                  <div class="content-text">相册</div>
                  <img class="left-right" src="http://static.sa-green.cn/image/jpg/kaka/%E7%AE%AD%E5%A4%B4%E5%8F%B3.svg" alt="">
              </div>
              <div class="list-item">
                  <img class="left-icon" src="http://static.sa-green.cn/image/jpg/kaka/%E5%8F%8D%E9%A6%88.svg" alt="">
                  <div class="content-text">反馈</div>
                  <img class="left-right" src="http://static.sa-green.cn/image/jpg/kaka/%E7%AE%AD%E5%A4%B4%E5%8F%B3.svg" alt="">
              </div>
          </div>
      </div>
      <!-- <moreInfo /> -->
      <card :text="motto"></card>
  </div>
</template>

<script>
import card from '@/components/card'
import moreInfo from '@/components/moreInfo'
import {showSuccess, post, showModal} from './../../utils/index'
export default {
  data () {
    return {
      motto: 'my',
      userInfo: {}
    }
  },
  components: {
    card, moreInfo
  },
  methods: {
    binddivTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    bindGetUserInfo (e) {
      const self = this
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
                      success: (res) => {
                          // console.log(res);
                        // this.userInfo = res.userInfo
                        console.log(res,'userInfo');
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

  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style scoped>
.mine-container .index-top-box {
  height: 340rpx;
  background: url('https://resource.sa-green.cn/static/jpg/%E6%88%91%E7%9A%84_%E9%A1%B6%E5%9B%BE.png') no-repeat top center;
  background-size: 100% 100%;
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
