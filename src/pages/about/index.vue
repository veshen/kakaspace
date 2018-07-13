<template>
  <div class='index about-container'>
  	<div class="header">
  		<div class="content">
  			<div class="img-box">
  				<img class="image" v-bind:src="mainPic">
  			</div>
  			<div class="img-desc">
  				<h3 class="title">KILKYO  SPACE</h3>
  				<div class="desc">
  					<div class="left-box">拍照艺术空间</div>
  					<div class="right-box">{{priceDes}}</div>
  				</div>
  			</div>
  		</div>
  	</div>
  	<div class="main">
  		<div class="about-space">
  			<div class="title">关于空间</div>
  			<div class="desc">{{desc}}</div>
  		</div>
  		<div class="address-box">
  			<div class="title">地址</div>
  			<div class="desc">{{addr}}</div>
  			<div class="map-box">
  				<map
  					id="map"
  					:longitude="lng"
  					:latitude="lat"
                    :markers="markers"
  					scale="14"
  					bindcontroltap="controltap"
  					bindregionchange="regionchange"
  					show-location
  					style="width: 670rpx; height: 440rpx;"
  					>
				</map>
  			</div>
  		</div>
  	</div>
    <moreInfo />
  </div>

</template>

<script>
import card from '@/components/card'
import moreInfo from '@/components/moreInfo'
import { get } from './../../utils/index'

export default {
  data () {
    return {
        addr:'',
        desc:'',
        priceDes:'',
        lat:'',
        lng:'',
        markers:[],
        mainPic: '',
    }
  },

  components: {
    card, moreInfo
  },

  methods: {

  },
  onLoad(option){
      console.log(option);
  },
  onShow(){
      get('/mainPage/withUs').then((res)=>{
          console.log(res);
          this.addr=res.address;
          this.desc=res.introduce;
          this.priceDes=res.priceDes;
          this.lat=res.latitude;
          this.lng=res.longitude;
          this.mainPic=res.picUrl;
          this.markers = [{
              id: 0,
              latitude: res.latitude,
              longitude: res.longitude,
              width: 50,
              height: 50
          }]
      }).catch((e)=>{
          console.log(e);
      })
  },
  created () {
  }
}
</script>

<style scoped>
.about-container{
}
.about-container .header{
	height: 1110rpx;
	background: #000;
	display: flex;
	justify-content: center;
	align-items: center;
}
.about-container .header .content{
	width: 650rpx;
	height: 1010rpx;
	border: 2rpx solid #fff;
	border-radius: 2rpx;
}
.about-container .header .content .img-box{
	width: 100%;
	height: 840rpx;
}
.about-container .header .content .img-box .image{
	width: 650rpx;
	height: 840rpx;
}
.about-container .header .content .img-desc{
	padding-top: 40rpx;
	margin: 0 30rpx;
}
.about-container .header .content .img-desc .title{
	font-size: 40rpx;
	color: #FFFFFF;
	letter-spacing: 0;
	line-height: 40rpx;
	margin-bottom: 10rpx;
}
.about-container .header .content .img-desc .desc{
	display: flex;
	justify-content: space-between;
}
.about-container .header .content .img-desc .desc .left-box{
	font-size: 32rpx;
	color: #FFFFFF;
	letter-spacing: 0;
	line-height: 40rpx;
}
.about-container .header .content .img-desc .desc .right-box{
	font-size: 28rpx;
	color: #FFFFFF;
	letter-spacing: 0;
	line-height: 40rpx;
	padding-left: 10rpx;
	border-left: 8rpx solid #fff;
}
.about-container .main{
	border-radius: 20rpx 20rpx 0 0;
	overflow: hidden;
	padding: 0 40rpx;
    background: #f1f1f1;
}
.about-space{
	border-radius: 20rpx 20rpx 0 0;
	overflow: hidden;
	border-bottom: 1rpx solid #656060;
	padding-bottom: 40rpx;
}
.about-container .main .title{
	font-size: 36rpx;
	color: #100F0F;
	letter-spacing: 0;
	line-height: 36rpx;
	margin-bottom: 40rpx;
}
.about-container .main .desc{
	font-size: 28rpx;
	color: #656060;
	letter-spacing: 0;
}
.about-space, .address-box{
	padding-top: 60rpx;
}
.about-space, .address-box .desc {
    margin-bottom: 20rpx;
}
</style>
