<template>
  <div class="container feedback feedback-container">

  </div>
</template>

<script>
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
    binddivTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    }
  },

  },
  onShow(){

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
