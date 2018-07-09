<template>
    <div class='nav'>
       <div class="nav-item" @click="toPage('../index/main')">
         <a class="nav-text  active">首页</a>
       </div>
       <div class="nav-item" @click="toPage('../depth/main')">
         <a class="nav-text">深度</a>
       </div>
       <div class="nav-item" @click="toPage('../find/main')">
         <a class="nav-text">发现</a>
       </div>
       <div class="nav-item" @click="toPage('../my/main')">
         <a class="nav-text">我的</a>
       </div>
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

<style>
.nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 750rpx;
    height: 98rpx;
    background: #100F0F;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.nav-item{
    width: 56rpx;
    text-align: center;
}
.nav-item a{
    color: #fff;
    font-size: 22rpx;
}
</style>
