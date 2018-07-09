<template>
    <div class='index photo-browse-container'>
        <div class="img-box">
        	<img class="bir-img" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg">
        </div>
        <div class="img-desc">没有时间丧，这周是忙碌充实的快乐女孩 
韩说：“因为我们想进步啊！” 瞬间有点儿想哭。
		</div>
        <div class="img-info-box">
        	<div>20180707</div>
        	<div>icon 277</div>
        </div>
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

  },
  components: {
    moreInfo
  },
  created () {
  }
}
</script>

<style scoped>
.photo-browse-container{
	background: #000;
	height: 100%;
	padding-bottom: 90rpx;
}
.img-box {
	margin-bottom: 30rpx;
}
.img-box .bir-img{
	width: 100%;
}
.img-desc{
	font-size: 28rpx;
	color: #FFFFFF;
	letter-spacing: 0;
	margin: 0 50rpx;
}
.img-info-box{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 650rpx;
	margin: 0 50rpx;
	height: 90rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 24rpx;
	color: #B6B7BE;
	letter-spacing: 0;
	line-height: 33rpx;
	border-top: 1rpx solid #656060;
}
</style>
