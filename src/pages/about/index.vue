<template>
  <div class='index about-container'>
  	<div class="header">
  		<div class="content">
  			<div class="img-box">
  				<img class="image" src="https://resource.sa-green.cn/image/jpg/kaka/%E9%A1%B6%E5%9B%BE.png">
  			</div>
  			<div class="img-desc">
  				<h3 class="title">KILKYO  SPACE</h3>
  				<div class="desc">
  					<div class="left-box">拍照艺术空间</div>
  					<div class="right-box">30元/半小时</div>
  				</div>
  			</div>
  		</div>
  	</div>
  	<div class="main">
  		<div class="about-space">
  			<div class="title">关于空间</div>
  			<div class="desc">KIKYO SPACE 是一家关于拍照的艺术空间为用户提供很多不同场景的。
说一句是一句，清早上火车站长街黑暗无行人卖豆浆的小店冒着热气 从前的日色变得慢 车马邮件都慢 。</div>
  		</div>
  		<div class="address-box">
  			<div class="title">地址</div>
  			<div class="desc">上海市黄浦区局门路411号（8号桥2期）9号线马当路站步行8分钟可到</div>
  			<div class="map-box">
  				<map
  					id="map"
  					longitude="36.0614156482"
  					latitude="89.3853189945"
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

export default {
  data () {
    return {
      motto: 'Hello World 000',
      userInfo: {},
      imgUrl : 'https://resource.sa-green.cn/image/jpg/kaka/%E9%A1%B6%E5%9B%BE.png',
      videoData : [
        {
          poster : 'https://resource.sa-green.cn/image/jpg/kaka/Bitmap%20Copy.png',
          videoUrl : 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
        },
        {
          poster : 'https://resource.sa-green.cn/image/jpg/kakaBitmap%202.png',
          videoUrl : 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
        },
        {
          poster : 'https://resource.sa-green.cn/image/jpg/kakaBitmap%203.png',
          videoUrl : 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
        },
      ]
    }
  },

  components: {
    card, moreInfo
  },

  methods: {

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
</style>
