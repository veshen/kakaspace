<template>
    <div class='index photo-info-container'>
        <div class="photo-content">
            <div class="img-box" @click="toPage('../photobrowse/main')">
            	<img class="image" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg">
            </div>
            <div class="img-info-box">
            	<div>20180707</div>
            	<div>icon 277</div>
            </div>
        </div>
        <div class="warp">
            <div class="main">
                <div class="top-box">
                	<img class="head-img" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg">
                    <div class="head-name">Erik Anshkr</div>
                </div>
                <div class="desc">
                    这里是主题描述，再多几个字。
云虹很像彩虹，但颜色更浅。事实上，它们往往不会呈现出任何
可辨别的颜色，看起来就像白化的彩虹，或是彩虹的鬼魂经过。
                </div>
                <div class="scene-list">
                    <div class="scene-item">
                        <img class="item-pic" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg" alt=""/>
                    </div>
                    <div class="scene-item">
                        <img class="item-pic" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg" alt=""/>
                    </div>
                    <div class="scene-item">
                        <img class="item-pic" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg" alt=""/>
                    </div>
                    <div class="scene-item">
                        <img class="item-pic" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg" alt=""/>
                    </div>
                    <div class="scene-item">
                        <img class="item-pic" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg" alt=""/>
                    </div>
                    <div class="scene-item">
                        <img class="item-pic" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <moreInfo />
    </div>
</template>

<script>
import moreInfo from '@/components/moreInfo'
export default {
  data () {
    return {
      motto: 'Hello World 000',
      userInfo: {},
      movies: [{id: 1, title: 'Hello World', url: 'http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg'}, {id: 2, title: 'Installation', url: 'http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg'}, {id: 3, title: 'Hello World', url: 'http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg'}]
    }
  },

  methods: {
    toPage(url) {
      wx.navigateTo({ url })
    },
  },
  components: {
    moreInfo
  },
  created () {
  }
}
</script>

<style scoped>
.warp{
    background: #000;
}
.photo-content{
	height: 770rpx;
	background: #000;
	overflow: hidden;
}

.photo-content .img-box{
	width: 650rpx;
	height: 650rpx;
	margin: 32rpx auto 27rpx;
}
.photo-content .img-box .image{
	width: 650rpx;
	height: 650rpx;
}
.photo-content .img-info-box{
	padding: 0 50rpx;
	display: flex;
	justify-content: space-between;
	font-size: 24rpx;
	color: #B6B7BE;
	letter-spacing: 0;
	line-height: 33rpx;
}

.main{
    background: #F1F1F1;
    padding: 60rpx 40rpx 0;
    border-radius: 6rpx 6rpx 0 0;
    padding-bottom: 30rpx;
}
.main .top-box{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 32rpx;
}
.main .top-box .head-img{
	width: 60rpx;
	height: 60rpx;
	border-radius: 50%;
	margin-right: 20rpx;
}
.main .top-box .head-name{
	font-size: 36rpx;
	color: #100F0F;
	letter-spacing: 0;
	line-height: 36rpx;
}
.main .tite{
    font-size: 36rpx;
    color: #100F0F;
    letter-spacing: 0;
    line-height: 36rpx;
    margin-bottom: 40rpx;;
}
.main .desc{
    font-size: 28rpx;
    color: #656060;
    margin-bottom: 50rpx;
    padding-bottom: 40rpx;
    border-bottom: 1rpx solid #656060;
}
.scene-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.scene-item{
    width: 210rpx;
    border-radius: 6rpx;
}
.scene-item .item-pic{
    width: 210rpx;
    height: 210rpx;
    display: block;
    border-radius: 6rpx;
    margin-bottom: 20rpx;;
}
.scene-item .text{
    text-align: center;
    font-size: 28rpx;
    color: #656060;
    letter-spacing: 0;
    line-height: 38rpx;
    height: 76rpx;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
</style>
