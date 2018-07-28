<template>
  <div class="container order-info-container">
      <div class="main" v-show="orderInfo.orderStatus===2||orderInfo.orderStatus===3">
          <div class="line-box">

          </div>
          <div class="order-info">
              <div class="order-info-line">
                  <div class="label">
                      订单号
                  </div>
                  <div class="content">
                        {{orderInfo.orderId}}
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      下单时间
                  </div>
                  <div class="content">
                        {{orderInfo.createOrderTime}}
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      人数
                  </div>
                  <div class="content">
                        {{orderInfo.peerNumber}}
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      到店时间
                  </div>
                  <div class="content">
                        {{orderInfo.bookDay}}
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      订单状态
                  </div>
                  <div class="content">
                        {{orderInfo.orderStatusDesc}}
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      支付金额
                  </div>
                  <div class="content">
                    ￥
                    <span class="price">{{orderInfo.payAmount}}</span>
                  </div>
              </div>
          </div>
          <div class="no">
              票号 <span class="number">{{orderInfo.voucherNo}}</span>
          </div>
          <div class="qrcode-box">
              <canvas width="300" height="300" class='canva' canvas-id='canvas' bindlongtap='save'></canvas>
          </div>
          <div class="tips">
              · 请到店后出示并验证入场 ·
          </div>
      </div>
      <div class="main" v-show="orderInfo.orderStatus===4||orderInfo.orderStatus===5||orderInfo.orderStatus===6||orderInfo.orderStatus===7">
          <div class="line-box">

          </div>
          <div class="order-info">
              <div class="order-info-line">
                  <div class="label">
                      订单号
                  </div>
                  <div class="content">
                        {{orderInfo.orderId}}
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      下单时间
                  </div>
                  <div class="content">
                        {{orderInfo.createOrderTime}}
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      人数
                  </div>
                  <div class="content">
                        {{orderInfo.peerNumber}}
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      到店时间
                  </div>
                  <div class="content">
                        {{orderInfo.bookDay}}
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      订单状态
                  </div>
                  <div class="content">
                        {{orderInfo.orderStatusDesc}}
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      支付金额
                  </div>
                  <div class="content">
                    ￥
                    <span class="price">{{orderInfo.payAmount}}</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="main-2" v-show="orderInfo.orderStatus===1">
          <div class="timer-down-box">
              支付剩余时间 {{timer}}
          </div>
          <div class="order-info">
              <div class="order-info-line">
                  <div class="label">
                      订单号
                  </div>
                  <div class="content">
                        {{orderInfo.orderId}}
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      下单时间
                  </div>
                  <div class="content">
                        {{orderInfo.createOrderTime}}
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      人数
                  </div>
                  <div class="content">
                        {{orderInfo.peerNumber}}
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      到店时间
                  </div>
                  <div class="content">
                        {{orderInfo.bookDay}}
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      订单状态
                  </div>
                  <div class="content">
                        {{orderInfo.orderStatusDesc}}
                  </div>
              </div>
          </div>
          <div class="pay-amount">
              支付金额 ¥ {{orderInfo.payAmount}}
          </div>
          <div class="pay-btn" @click="payOrder">
              立即支付
          </div>
      </div>

  </div>
</template>

<script>
// import QRCode from 'qrcode';
import { get, timerDown } from './../../utils/index'
var QRCode = require('./../../utils/weapp-qrcode.js')
export default {
  data () {
    return {
        orderInfo : {},
        timer : '',
        orderStatus : 1, //1 => 待支付
        countDownTimer : null
    }
  },

  components: {
  },

  methods: {
      async cancelOrder(){
          try {
              const token = wx.getStorageSync('token');
              const orderId = this.orderInfo.orderId;
              get('/order/cacel',{token,orderId,cancelType:2}).then((res)=>{
                  console.log(res);
                  const url = `../orderInfo/main?orderId=${orderId}`;
                  wx.navigateTo({
                    url
                  })
              }).catch((e)=>{
                  console.log(e);
              })
          } catch (e) {
              console.log(e);
          }finally{
              clearInterval(this.countDownTimer)
          }
      },
      async payOrder (){
          try {
              const token = wx.getStorageSync('token');
              const orderId = this.orderInfo.orderId;
              // const orderId = '1021431355252146176';
              get('/order/queryPrePayInfo',{token,orderId}).then((res)=>{
                  console.log(res);
                  const {nonceStr, paySign, prePay_package, signType, timestamp} = res;
                  wx.requestPayment({
                      timeStamp:timestamp,
                      nonceStr,
                      package: prePay_package,
                      signType,
                      paySign,
                      success : ()=>{
                          console.log('成功');
                      },
                      fail :()=>{
                          console.log('失败');
                      },
                      complete : ()=>{
                          console.log('调用结束');
                          const url = `../orderInfo/main?orderId=${orderId}`;
                          wx.navigateTo({
                            url
                          })
                      }
                  })
              }).catch((e)=>{
                  console.log(e);
              })
          } catch (e) {
            console.log(e);
          }
      }
  },
  created () {

  },
  onLoad(option){
      const token = wx.getStorageSync('token');
      const orderId = option.orderId;
      // const orderId = '1021431355252146176';
      get('/order/orderDetail',{token,orderId}).then((res)=>{
          console.log(res);
          this.orderInfo = res;
          if (res.orderStatus===1) {
              const { experialTime } = res;
              if (timerDown(res.experialTime/1000,'m:s')==='timeOut') {
                  this.cancelOrder(orderId)
              }else{
                  this.timer = timerDown(res.experialTime/1000,'m:s');
                 this.countDownTimer =  setInterval(()=>{
                      if (this.timer==='timeOut') {
                          this.cancelOrder(orderId)
                      }
                      this.timer = timerDown(res.experialTime/1000,'m:s');
                  },1000)
              }

          }
          if (res.orderStatus===2) {
              var qrcode = new QRCode('canvas', {
                  // usingIn: this,
                  text: `https://kk.sa-green.cn/order/kakaqrcode.html?orderId=${res.orderId}`,
                  width: 150,
                  height: 150,
                  colorDark: "#000000",
                  colorLight: "#ffffff",
                  correctLevel: QRCode.CorrectLevel.H,
              });
          }

      }).catch((e)=>{
          console.log(e);
      })

  },
  onUnload(){
      clearInterval(this.countDownTimer)
  }
}
</script>

<style scoped>
.order-info-container{
    background: #000;
    padding-top: 70rpx;
    padding-bottom: 136rpx;
}

.main-2{

}
.main-2 .timer-down-box{
    font-size: 36rpx;
    color: #FFE631;
    letter-spacing: 0;
    text-align: center;
    line-height: 36rpx;
    padding: 80rpx 0 109rpx;
}

.main-2 .order-info{
    margin-bottom: 176rpx;
}
.main-2 .order-info .order-info-line .label{
    font-size: 30rpx;
    color: #7A7B84;
    letter-spacing: 0;
    line-height: 30rpx;
}
.main-2 .order-info .order-info-line .content{
    font-size: 30rpx;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 30rpx;
}
.main-2 .pay-amount{
    font-size: 30rpx;
    color: #FFE631;
    letter-spacing: 0;
    text-align: center;
    line-height: 36rpx;
    text-align: right;
    padding-right: 40rpx;
}
.pay-btn{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 98rpx;
    background: #FFE631;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28rpx;
    color: #100F0F;
    letter-spacing: 0;
    text-align: center;
}
.main{
    width: 610rpx;
    margin: 0 auto;
    background: #FFFFFF;
    box-shadow: 0 2rpx 44rpx 0 #545454;
    border-radius: 30rpx;
    padding-top: 80rpx;
    padding-bottom: 30rpx;
    position: relative;
}
.line-box{
    background: #FFE631;
    border-radius: 63rpx;
    width: 220rpx;
    height: 30rpx;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,-50%);
}
.order-info{
    margin: 0 80rpx 70rpx;
}
.order-info .order-info-line{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30rpx;
}
.order-info .order-info-line .label{
    width: 170rpx;
    font-size: 30rpx;
    color: #7A7B84;
    letter-spacing: 0;
    line-height: 30rpx;
}
.order-info .order-info-line .content{
    font-size: 30rpx;
    color: #100F0F;
    letter-spacing: 0;
    line-height: 30rpx;
    flex-grow: 1;
}
.order-info .order-info-line .content .price{
    font-size: 40rpx;
    color: #000000;
    letter-spacing: 0;
    line-height: 42rpx;
}
.no{
    text-align: center;
    font-size: 30rpx;
    color: #7A7B84;
    letter-spacing: 0;
    line-height: 30rpx;
    margin-bottom: 20rpx;
}
.no .number{
    font-size: 34rpx;
    color: #100F0F;
    letter-spacing: 0;
    line-height: 34rpx;
}
.qrcode-box{
    width: 300rpx;
    height: 300rpx;
    margin: 0 auto 57rpx;
}

.tips{
    font-size: 24rpx;
    color: #B6B7BE;
    letter-spacing: 0;
    text-align: center;
}
.main-2{
    width: 650rpx;
    height: 814rpx;
    background: url('https://resource.sa-green.cn/image/jpg/%E8%AE%A2%E5%8D%95%E8%83%8C%E6%99%AF.png') no-repeat 0 0 ;
    background-size: 100%;
    margin: 0 auto;
}
</style>
