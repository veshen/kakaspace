<template>
  <div class="container mine mine-container" @click="clickHandle('test click', $event)">
    <div class="index-top-box">
          <div class="login-box">
              <Image class="head" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg"/>
              <div class="user-name">翠花是朵花</div>
          </div>

      </div>
      <div class="content">
          <div class="list-content">
              <div class="list-item">
                  <img class="left-icon" src="http://static.sa-green.cn/image/jpg/kaka/%E5%96%9C%E6%AC%A2.svg" alt="">
                  <div class="content-text">订单</div>
                  <Icon class="like" size='14' type='success'/>
              </div>
              <div class="list-item">
                  <img class="left-icon" src="http://static.sa-green.cn/image/jpg/kaka/%E5%96%9C%E6%AC%A2.svg" alt="">
                  <div class="content-text">喜欢</div>
                  <Icon class="like" size='14' type='success'/>
              </div>
              <div class="list-item">
                  <img class="left-icon" src="http://static.sa-green.cn/image/jpg/kaka/%E7%9B%B8%E5%86%8C.svg" alt="">
                  <div class="content-text">相册</div>
                  <Icon class="like" size='14' type='success'/>
              </div>
              <div class="list-item">
                  <img class="left-icon" src="http://static.sa-green.cn/image/jpg/kaka/%E5%8F%8D%E9%A6%88.svg" alt="">
                  <div class="content-text">反馈</div>
                  <Icon class="like" size='14' type='success'/>
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
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
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
}
.mine-container .content .list-content .list-item .content-text {
  flex-grow: 1;
  padding-left: 40rpx;
  font-size: 30rpx;
  color: #21222C;
}
</style>
