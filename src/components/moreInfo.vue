<template>
   <div class='more-info'   v-bind:class="[isIphoneX ? 'isIphoneX' : '']">
   	<div>
        <img class="images" src="http://static.sa-green.cn/image/jpg/kaka/KIKYO%20SPACE%20%C2%B7%20SHANGH.png" alt="">
    </div>
   	<p>更多场馆敬请期待</p>
   </div>
</template>

<script>
export default {
    data () {
      return {
        isIphoneX: false,
      }
    },
    onLoad(){
        this.isIphoneX = getApp().globalData.isIphoneX;
    },
}
</script>

<style scoped>
.more-info{
	text-align: center;
	height: 163rpx;
	background: rgb(241,241,241);
	display: flex;
	justify-content: center;
	flex-direction: column;
}
.images{
    width: 280rpx;
    height: 18rpx;
}
.more-info p{
	font-size: 22rpx;
	color: #100F0F;
	letter-spacing: 0;
	text-align: center;
	line-height: 22rpx;
}
.isIphoneX{
    padding-bottom: 68rpx;
}
</style>
