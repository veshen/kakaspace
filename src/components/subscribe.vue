<template>
    <div class='subscribe-btn' @click="toPage('../onlineSubscribe/main')">
        <img class="image" src="http://static.sa-green.cn/image/jpg/kaka/%E9%A2%84%E7%BA%A6.png" alt="">
   </div>
</template>

<script>
export default {
  props: ['text'],
  methods: {
      toPage(url) {
          wx.navigateTo({ url })
      }
  }
}
</script>

<style scoped>
.subscribe-btn{
    width: 140rpx;
    height: 140rpx;
    position: fixed;
    z-index: 999;
    border-radius: 50%;
    overflow: hidden;
    top: 732rpx;
    right: 30rpx;
}
.subscribe-btn .image{
    width: 100%;
    height: 100%;
}
</style>
