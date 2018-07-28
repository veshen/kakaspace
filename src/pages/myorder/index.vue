<template>
<div class="container my-order-container">
  <div class="title-box">
      <div class="text">
          选择订单
      </div>
  </div>
  <div class="order-list-box">
    <div class="order-item" v-for="(data, index) in orderList" wx:key={index} @click="toPage(`../orderInfo/main?orderId=${data.orderId}`)">
        <div class="line-left">
        </div>
        <div class="img-box">
            <img class="image" src="https://resource.sa-green.cn/kk/20180712/logologo.jpeg" alt="">
        </div>
        <div class="order-info-box">
            <div class="order-info-top sub-content">
                <div class="order-no">
                    订单号：{{data.orderId}}
                </div>
                <div class="order-status">
                    {{data.orderStatusStr}}
                </div>
            </div>
            <div class="order-info-center sub-content">
                <div class="shop-time">
                    到店时间：{{data.bookingDay}}
                </div>
            </div>
            <div class="order-info-bottom sub-content">
                <div class="head-count">
                    人数：{{data.peerNumber}}
                </div>
                <div class="order-price">
                    ￥{{data.payAmount}}
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import card from '@/components/card'
import { get } from './../../utils/index'
export default {
  data() {
    return {
      motto: 'Hello World 000',
      orderList: []
    }
  },

  components: {
    card
  },

  methods: {
      toPage(url) {
        wx.navigateTo({
          url
        })
      },
  },
  onLoad(){
      const token = wx.getStorageSync('token')
      get('/my/order/myAllList',{token}).then((res)=>{
          console.log(res);
          this.orderList = res;
          // this.mainPic = res.subjectMainPicUrl;
          // this.subName = res.subjectName;
          // this.subDesc = res.subjectDesc;
          // this.subThumbList = res.sceneSmallInfoBeanList;
      }).catch((e)=>{
          console.log(e);
      })
  },
  created() {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style scoped>
.my-order-container {
  min-height: 100%;
  background: #000;
  overflow: hidden;
}
.title-box{
    padding: 0 30rpx;
    height: 110rpx;
    background: #1B1B1B;
    display: flex;
    align-items: center;
    margin: 30rpx 0;
}
.title-box .text{
    height: 30rpx;
    line-height: 30rpx;
    font-size: 30rpx;
    color: #FFFFFF;
    letter-spacing: 0;
    padding-left: 20rpx;
    border-left: 4rpx solid #FFE631;
}
.order-list-box{
    padding: 60rpx 30rpx;
    background: #1B1B1B;
}
.order-item{
    padding: 30rpx 20rpx 30rpx 30rpx;
    height: 130rpx;
    margin-bottom: 20rpx;
    background: #fff;
    border-radius: 12rpx;
    display: flex;
    justify-content: space-between;
    position: relative;
}
.order-item .line-left{
    width: 8rpx;
    height: 90rpx;
    background: #FFE631;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}
.order-item .img-box{
    width: 130rpx;
    height: 130rpx;
    border-radius: 8rpx;
    margin-right: 20rpx;
}
.order-item .img-box .image{
    width: 130rpx;
    height: 130rpx;
    border-radius: 8rpx;
}
.order-item .order-info-box{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.order-item .order-info-box .sub-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.order-item .order-info-box .order-info-top .order-no{
    font-size: 28rpx;
    color: #100F0F;
    letter-spacing: 0;
    line-height: 28rpx;
}
.order-item .order-info-box .order-info-top .order-status{
    font-size: 24rpx;
    color: #656060;
    letter-spacing: 0;
}
.order-item .order-info-box .order-info-center .shop-time{
    font-size: 24rpx;
    color: #7A7B84;
    letter-spacing: 0;
    line-height: 24rpx;
}
.order-item .order-info-box .order-info-bottom .head-count{
    font-size: 24rpx;
    color: #7A7B84;
    letter-spacing: 0;
    line-height: 24rpx;
}
.order-item .order-info-box .order-info-bottom .order-price{
    font-size: 28rpx;
    color: #100F0F;
    letter-spacing: 0;
    line-height: 28rpx;
}
</style>
