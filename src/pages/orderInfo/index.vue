<template>
  <div class="container order-info-container">
      <div class="main">
          <div class="line-box">

          </div>
          <div class="order-info">
              <div class="order-info-line">
                  <div class="label">
                      订单号
                  </div>
                  <div class="content">
                        DX0299993888
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      下单时间
                  </div>
                  <div class="content">
                        2018-08-20  13:00
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      人数
                  </div>
                  <div class="content">
                        2
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      到店时间
                  </div>
                  <div class="content">
                        2018-08-20  13:00
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      订单状态
                  </div>
                  <div class="content">
                        待消费
                  </div>
              </div>
              <div class="order-info-line">
                  <div class="label">
                      支付金额
                  </div>
                  <div class="content">
                    ￥
                    <span class="price">300</span>
                  </div>
              </div>
          </div>
          <div class="no">
              票号 <span class="number">KUW2888829</span>
          </div>
          <div class="qrcode-box">
              <img class="image" v-bind:src="imgUrl" alt="">
          </div>
          <div class="tips">
              · 请到店后出示并验证入场 ·
          </div>
      </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'
export default {
  data () {
    return {
        imgUrl : 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1531328531&di=6f578a310aacfc611b3ce4e41b661f95&src=http://img1.ph.126.net/KCG0wwnes5Oh8nzyGYp_Dg==/1564156445598554981.jpg'
    }
  },

  components: {
  },

  methods: {

  },
  created () {

  },
  onLoad(){
      // let That = this;
      // QRCode.toDataURL('https://www.baidu.com', {margin:0,scale:10}, (err, url)=> {
      //     That.imgUrl=url;
      //     console.log(url,err);
      // });
  },
}
</script>

<style scoped>
.order-info-container{
    background: #000;
    padding-top: 70rpx;
    padding-bottom: 136rpx;
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
.qrcode-box .image{
    width: 100%;
    height: 100%;
}
.tips{
    font-size: 24rpx;
    color: #B6B7BE;
    letter-spacing: 0;
    text-align: center;
}
</style>
