<template>
  <div class='index depth-container'>
    <div class="index-top-box"
          v-bind:style="{background: 'url('+'https://resource.sa-green.cn/image/jpg/kaka/%E9%A1%B6%E5%9B%BE.png'+') no-repeat top center',backgroundSize:'100% 100%'}">
             <div class="title">KIKYO SPACE 123123</div>
             <div class="sub-title">有人说，我喜欢你们的光影，尽致淋漓</div>
             <div class="sub-title">有人说，我喜欢你们的人物氛围，情感细腻</div>
    </div>
    <div class="content">
       <div class="list-title">
           <div class="line-box"></div>
           <div class="text-box">视频示意</div>
       </div>
       <div class="list-content">
           <div
              class="list-item"
              v-for="(data, index) in videoData"
              wx:key={index}
                @click="toPage('../videoinfo/main')"
              >
               <div class="video-box">
                  <img class="v-box" v-bind:src="data.poster" alt="">
                  <!-- <video
                      class="v-box"
                      v-bind:poster="data.poster"
                      v-bind:src="data.videoUrl"
                      /> -->
               </div>
               <div class="video-desc" >
                   <div class="title">你是所有美好的起因你是所有美好的起因</div>
                   <div class="sub-title">闺蜜就是西瓜分你一半闺蜜就是西瓜分你一半闺蜜就是西瓜分你一半</div>
               </div>
           </div>
       </div>
    </div>
    <card :text="motto"></card>
    <moreInfo />
  </div>

</template>

<script>
import card from '@/components/card'
import moreInfo from '@/components/moreInfo'

export default {
  data () {
    return {
      motto: 'depth',
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
    toPage(url) {
      wx.navigateTo({ url })
    },

  },

  created () {
  }
}
</script>

<style scoped>
.depth-container {
  background: rgb(241,241,241);
}
.depth-container .index-top-box {
  position: relative;
  width: 750rpx;
  height: 380rpx;
  overflow: hidden;
  color: #FFFFFF;
  margin-bottom: 30rpx;
}
.depth-container .index-top-box .title {
  font-size: 60rpx;
  line-height: 60rpx;
  margin: 52rpx 0 20rpx 50rpx;
}
.depth-container .index-top-box .sub-title {
  font-size: 24rpx;
  margin: 20rpx 0 0 50rpx;
}
.depth-container .content .list-title {
  height: 42rpx;
  font-size: 30rpx;
  color: #100F0F;
  letter-spacing: 0;
  text-align: center;
  text-shadow: 1rpx 1rpx 0 #FFE631;
  position: relative;
  margin-bottom: 20rpx;
}
.depth-container .content .list-title .line-box {
  height: 8rpx;
  width: 260rpx;
  border-top: 1rpx solid #100F0F;
  border-bottom: 1rpx solid #100F0F;
  position: absolute;
  top: 18rpx;
  left: 50%;
  transform: translateX(-50%);
}
.depth-container .content .list-title .text-box {
  background: #fff;
  position: relative;
  z-index: 6;
  width: 120rpx;
  margin: 0 auto;
  padding: 0 14rpx;
}
.depth-container .content .list-content {
  margin: 0 30rpx;
}
.depth-container .content .list-content .list-item {
  border-radius: 12rpx;
  overflow: hidden;
  margin-bottom: 20rpx;
}
.depth-container .content .list-content .list-item .video-box {
  background: yellow;
  height: 250rpx;
}
.depth-container .content .list-content .list-item .video-box .v-box {
  height: 250rpx;
  width: 100%;
}
.depth-container .content .list-content .list-item .video-desc {
  background: rgb(229,229,229);
  padding: 30rpx 20rpx 18rpx;
}
.depth-container .content .list-content .list-item .video-desc .title {
  font-size: 30rpx;
  color: #100F0F;
  letter-spacing: 0;
  line-height: 30rpx;
  margin-bottom: 16rpx;
}
.depth-container .content .list-content .list-item .video-desc .sub-title {
  font-size: 24rpx;
  line-height: 33rpx;
  color: #100F0F;
}
</style>
