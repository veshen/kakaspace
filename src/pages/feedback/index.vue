<template>
  <div class="container feedback feedback-container">
      <h3 class="page-title">Hi，您可以</h3>
      <div class="main-box">
          <div class="title-box">
              <p>告诉我们您想拍...</p>
          </div>
          <textarea class="text-input" v-model="content" placeholder="请简单描述您想拍的主题或您的疑问"></textarea>
          <!-- <div class="clear-btn-box">
              <div class="clear-btn" @click="clearFn">
                清空
              </div>
          </div> -->
          <div class="submit-btn" @click="submit">
              提交
          </div>
      </div>
      <div class="main-box" v-show="false">
          <div class="title-box">
              <p>电话沟通</p>
          </div>
          <div class="content">
              您可以拨打我们的客服电话进行咨询和反馈
          </div>
          <div class="submit-btn" @click="calling">
              一键拨号
          </div>
      </div>
      <div v-show="isFetching">
          <rotateLoading/>
      </div>
  </div>
</template>

<script>
import {get,showSuccess, post, showModal} from './../../utils/index';
import rotateLoading from '@/components/rotateLoading';
export default {
  data () {
    return {
      motto: 'my',
      userInfo: {
          avatarUrl : "",
          nickName : "",
          active : false,
          content : '',
          info : ''
      }
    }
  },
  components: {
      rotateLoading
  },
  methods: {
    binddivTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
      },
      calling(){
          wx.makePhoneCall({
            phoneNumber: '13120860906',
            success: function () {
                console.log("拨打电话成功！")
            },
            fail: function () {
                console.log("拨打电话失败！")
            }
        })
      },
      clearFn(){
        this.content = '';
      },
      async submit(){
          try {
              if (this.content) {
                  this.isFetching = true;
                  const content = this.content;
                  const token = wx.getStorageSync('token')
                  const res = await post('/feedback/add',{content, token,type:1});
                  this.isFetching = false;
                  if (res) {
                      showSuccess('提交成功!')
                      setTimeout(()=>{
                          const url = '../index/main'
                          wx.redirectTo({ url })
                      },1500)
                  }
              }
          } catch (e) {
            console.log(e);
          }
      }
  },
  inText(e){
      console.log(e);
  },
  onShow(){

  },
  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style scoped>
.feedback-container{
    padding: 70rpx 85rpx 0;
}
.page-title{
    font-size: 36rpx;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 36rpx;
    margin-bottom: 30rpx;
}
.main-box{
    background: #1B1B1B;
    border-radius: 10rpx;
    padding: 40rpx 0;
    margin-bottom: 50rpx;
}
.main-box .title-box{
    font-size: 30rpx;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 30rpx;
    padding-left: 20rpx;
    border-left: 10rpx solid #FFE631;
    margin-bottom: 28rpx;
}
.text-input{
    margin: 0 30rpx;
    font-size: 30rpx;
    color: #fff;
}
.clear-btn-box{
    display: flex;
    justify-content: flex-end;
    margin: 0 30rpx 40rpx;
    padding-bottom: 30rpx;
    border-bottom: 1rpx solid #7A7B84;
}
.clear-btn-box .clear-btn{
    font-size: 30rpx;
    color: #B6B7BE;
}
.submit-btn{
    width: 210rpx;
    height: 50rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #585858;
    border: 1rpx solid #FFE631;
    border-radius: 25rpx;
    font-size: 28rpx;
    color: #FFFFFF;
    margin: 0 auto;
}
.content{
    font-size: 26rpx;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 36rpx;
    margin-bottom: 30rpx;
}
</style>
