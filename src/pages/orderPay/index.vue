<template>
  <div class="container order-pay-container">
      <div class="main">
        <div class="top-box">支付剩余时间 15：04</div>
        <div class="pay-info">
          <div class="line-box">
            <div class="label">订单号</div>
            <div class="content">DX0299993888</div>
          </div>
          <div class="line-box">
            <div class="label">下单时间</div>
            <div class="content">2018-08-20  13:00</div>
          </div>
          <div class="line-box">
            <div class="label">人数</div>
            <div class="content">2</div>
          </div>
          <div class="line-box">
            <div class="label">到店时间</div>
            <div class="content">2018-08-20  13:00</div>
          </div>
          <div class="line-box">
            <div class="label">订单状态</div>
            <div class="content">代付款</div>
          </div>
        </div>
        <div class="pay-price">
          支付金额 ￥300
        </div>
      </div>
      <div class="pay-bottom">立即支付</div>
  </div>

</template>

<script>
// import QRCode from 'qrcode';
import { get } from './../../utils/index'
export default {
  data () {
    return {
        orderInfo : {},
    }
  },

  components: {
  },

  methods: {

  },
  created () {

  },
  onLoad(option){
      // const token = wx.getStorageSync('token')
      // const orderId = option.orderId;
      // get('/order/orderDetail',{token,orderId}).then((res)=>{
      //     console.log(res);
      //     this.orderInfo = res;
      // }).catch((e)=>{
      //     console.log(e);
      // })
  },
}
</script>

<style scoped>
.order-pay-container{
    background: #000;
    padding-top: 50rpx;
}
.order-pay-container .main{
  width: 650rpx;
  height: 814rpx;
  margin: 0 auto;
  background: url('https://resource.sa-green.cn/image/jpg/kaka/%E8%AE%A2%E5%8D%95%E8%83%8C%E6%99%AF.png') no-repeat top center;
  background-size: 100% 100%;
}
.top-box{
  height: 36rpx;
  padding: 80rpx 0 109rpx;
  text-align: center;
  font-size: 36rpx;
  color: #FFE631;
  letter-spacing: 0;
  line-height: 36rpx; 
}
.pay-info{
  margin-left: 96rpx;
  margin-bottom: 165rpx;
}
.pay-info .line-box{
  height: 30rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40rpx;
}
.pay-info .line-box .label{
  width: 170rpx;
  text-align: left;
  font-size: 30rpx;
  color: #7A7B84;
  letter-spacing: 0;
  line-height: 30rpx;
}
.pay-info .line-box .content{
  height: 30rpx;
  font-size: 30rpx;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 30rpx;
  flex-grow: 1;
}
.pay-price{
  font-size: 30rpx;
  color: #FFE631;
  margin: 0 40rpx;
  text-align: right;
  font-weight: 300;
}
.pay-bottom{
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
}
</style>
