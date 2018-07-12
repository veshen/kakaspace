<template>
    <div class='nav'  v-bind:class="[isIphoneX ? 'isIphoneX' : '']">
       <div class="nav-item" @click="toPage('../index/main')">
           <img class="nav-icon" v-show="text!=='index'" src="http://static.sa-green.cn/image/jpg/kaka/tab_%E9%A6%96%E9%A1%B5_off.svg" alt="">
           <img class="nav-icon" v-show="text==='index'" src="http://static.sa-green.cn/image/jpg/kaka/tab_%E9%A6%96%E9%A1%B5_on.svg" alt="">
         <div class="nav-text" v-bind:class="[text==='index' ? 'active' : '']">首页</div>
       </div>
       <div class="nav-item" @click="toPage('../depth/main')">
           <img class="nav-icon" v-show="text!=='depth'" src="http://static.sa-green.cn/image/jpg/kaka/tab_%E6%B7%B1%E5%BA%A6_off.svg" alt="">
           <img class="nav-icon" v-show="text==='depth'" src="http://static.sa-green.cn/image/jpg/kaka/tab_%E6%B7%B1%E5%BA%A6_on.svg" alt="">
         <div class="nav-text" v-bind:class="[text==='depth' ? 'active' : '']">深度</div>
       </div>
       <!-- <div class="nav-item" @click="toPage('../find/main')">
           <img class="nav-icon" v-show="text!=='find'" src="http://static.sa-green.cn/image/jpg/kaka/tab_%E5%8F%91%E7%8E%B0_off.svg" alt="">
           <img class="nav-icon" v-show="text==='find'" src="http://static.sa-green.cn/image/jpg/kaka/tab_%E5%8F%91%E7%8E%B0_on.svg" alt="">
         <div class="nav-text" v-bind:class="[text==='find' ? 'active' : '']">发现</div>
       </div> -->
       <div class="nav-item" @click="toPage('../my/main')">
           <img class="nav-icon" v-show="text!=='my'" src="http://static.sa-green.cn/image/jpg/kaka/tab_%E6%88%91%E7%9A%84_off.svg" alt="">
           <img class="nav-icon" v-show="text==='my'" src="http://static.sa-green.cn/image/jpg/kaka/tab_%E6%88%91%E7%9A%84_on.svg" alt="">
         <div class="nav-text" v-bind:class="[text==='my' ? 'active' : '']">我的</div>
       </div>
   </div>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
      isIphoneX: false,
    }
  },
  onLoad(){
      this.isIphoneX = getApp().globalData.isIphoneX;
  },
  methods: {
        toPage(url) {
            var pages = getCurrentPages() //获取加载的页面
            var currentPage = pages[pages.length-1] //获取当前页面的对象
            var currentUrl = currentPage.route //当前页面url
            if (url.replace('..','pages')===currentUrl) {
                return
            }else{
                wx.redirectTo({ url })
            }
        }
    },

}
</script>

<style scoped>
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
    z-index: 10;
}
.nav-icon{
    width: 56rpx;
    height: 56rpx;
}
.nav-item{
    width: 56rpx;
    text-align: center;
}
.nav-text{
    margin-top: -12rpx;
    font-size: 22rpx;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
}
.active{
    color: #FFE631;
}
.isIphoneX{
    padding-bottom: 68rpx;
}
</style>
