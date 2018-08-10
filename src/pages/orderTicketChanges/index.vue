<template>
  <div class="container order-ticket-container">
      <div class="tips-box">
          <div class="title-box">
              改签须知
          </div>
          <div class="tips-content">
              <div>
                  1.订单只可改签一次
              </div>
              <div>
                  2.订单改签暂时仅支持变更日期
              </div>
              <div>
                  3.因订单修改日期，可能会涉及补款和退款，烦请谨慎操作
              </div>
          </div>
      </div>
      <picker @change="bindTimeChange" :value="0" mode="date" :start="currentDate">
        <div class="select-scope">
          <div class="tips-text">
            <div class="title">
              改签日期
            </div>
            <div class="subTitle">
              <view class="picker">
                {{date}}
              </view>
            </div>
          </div>
        </div>
      </picker>
      <!-- <div class="main">
          <div class="title-box">
              改签日期
          </div>
          <div class="">
              请选择 >
          </div>
      </div> -->
      <div class="pay-bottom">
          <div class="price-box" v-show="payType!==2">
              需支付{{amount}}¥
          </div>
          <div class="price-box" v-show="payType===2">
              可退款{{amount}}¥
          </div>
          <div @click="payOrder" v-bind:class="[couldAlter? 'ticket-changes-btn active' : 'ticket-changes-btn']">
            确认改签
          </div>
      </div>
      <div v-show="isFetching">
          <rotateLoading/>
      </div>
  </div>

</template>

<script>
// import QRCode from 'qrcode';
import { get, post } from './../../utils/index'
import rotateLoading from '@/components/rotateLoading'
export default {
  data () {
    return {
        orderInfo : {},
        currentDate: '',
        date: '请选择 >',
        orderId : '',
        couldAlter : false,
        amount : 0,
        payType : 0,
        isFetching : false
    }
  },

  components: {
      rotateLoading
  },

  methods: {
      bindTimeChange: function(e) {
        this.date = e.mp.detail.value;
        const token = wx.getStorageSync('token');
        const newBookDay =  e.mp.detail.value;
        const orderId = this.orderId;
        console.log(1111111);
        get('/order/checkOrderAlter',{token,newBookDay,orderId}).then((res)=>{
            console.log(res);
            this.payType = res.payType;
            this.amount = res.amount;
            this.couldAlter = res.couldAlter;
        }).catch((e)=>{
            console.log(e);
        })
      },
      async payOrder () {
          if (this.couldAlter) {
              this.isFetching = true;
              const token = wx.getStorageSync('token');
              const newBookDay =  this.date;
              const orderId = this.orderId;
              const payType = this.payType;
              const diffAmount = this.amount;
              const res = await get('/order/alterOrder',{token, newBookDay, orderId, payType, diffAmount});
              console.log(res);
              this.isFetching = false;
              if (res.needPay) {
                  const {nonceStr, paySign, prePay_package, signType, timestamp} = res.prePayResultDto;
                  wx.requestPayment({
                      timeStamp:timestamp,
                      nonceStr,
                      package: prePay_package,
                      signType,
                      paySign,
                      success : ()=>{
                          wx.showToast({
                            title: '改签成功',
                            icon: 'success',
                             duration: 2000, //提示的延迟时间，单位毫秒，默认：1500
                          })
                          setTimeout(()=>{
                              const url = `../orderInfo/main?orderId=${orderId}`;
                              wx.navigateTo({
                                url
                              })
                          },2000)
                      },
                      fail :()=>{
                          const url = `../orderInfo/main?orderId=${orderId}`;
                          wx.navigateTo({
                            url
                          })
                      }
                  })
              }else{
                  wx.showToast({
                    title: res.msg,
                    icon: 'success',
                     duration: 2000, //提示的延迟时间，单位毫秒，默认：1500
                  })
                  setTimeout(()=>{
                      const url = `../orderInfo/main?orderId=${orderId}`;
                      wx.navigateTo({
                        url
                      })
                  },2000)
              }

          }
      }
  },
  created () {

  },
  onLoad(option){
        this.orderId = option.orderId;
  },
}
</script>

<style scoped>
.order-ticket-container{
    background: #000;
    padding-top: 91rpx;
}
.tips-box{
    width: 650rpx;
    height: 288rpx;
    background: #1B1B1B;
    border-radius: 10rpx;
    margin: 0 auto 60rpx;
    overflow: hidden;
    border: 2rpx solid #434343;
}
.tips-box .title-box{
    height: 30rpx;
    border-left: 10rpx solid #FFE631;
    padding-left: 20rpx;
    font-size: 30rpx;
    color: #FFE631;
    letter-spacing: 0;
    line-height: 30rpx;
    margin: 40rpx 0 45rpx;
}
.tips-box .tips-content{
    margin: 0 30rpx;
    font-size: 30rpx;
    color: #B6B7BE;
    letter-spacing: 0;
}
.select-scope{
    width: 650rpx;
    height: 180rpx;
    background: #1B1B1B;
    border-radius: 10rpx;
    margin: 0 auto;
    border: 2rpx solid #434343;
}
.select-scope .title{
    text-align: center;
    padding-top: 50rpx;
    margin-bottom: 20rpx;
    font-size: 36rpx;
    color: #FFE631;
    letter-spacing: 0;
    text-align: center;
    line-height: 36rpx;
}
.select-scope .picker{
    font-size: 28rpx;
    color: #7A7B84;
    letter-spacing: 0;
    text-align: center;
    line-height: 24rpx;
}
.pay-bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 98rpx;
    background: #1B1B1B;
}
.price-box{
    font-size: 30rpx;
    color: #FFE631;
    letter-spacing: 0;
    margin-left: 30rpx;
}
.ticket-changes-btn{
    width: 190rpx;
    height: 50rpx;
    border-radius: 25rpx;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28rpx;
    color: #100F0F;
    letter-spacing: 0;
    text-align: center;
    margin-right: 30rpx;
}
.active{
    background: #FFE631 !important;
}
</style>
