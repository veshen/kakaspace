<template>
<div class='index depth-container'>
  <div class="index-top-box" v-bind:style="{background: 'url('+mainPicUrl+') no-repeat top center',backgroundSize:'100% 100%'}">
    <div class="title">{{title}}</div>
    <div class="sub-title"  v-for="(data, index) in subTitleList" wx:key={index} >{{data}}</div>
  </div>
  <div class="content">
    <div class="list-title">
      <div class="line-box"></div>
      <div class="text-box">视频示意</div>
    </div>
    <div class="list-content">
      <div class="list-item" v-for="(data, index) in deepList" wx:key={index} @click="toPage(`../videoinfo/main?deepId=${data.deepId}`)">
        <div class="video-box">
          <img class="v-box" v-bind:src="data.deepUrl" alt="">
          <img class="play-icon" src="https://resource.sa-green.cn/image/jpg/kaka/%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE.png" alt="">
          <!-- <video
                      class="v-box"
                      v-bind:poster="data.poster"
                      v-bind:src="data.videoUrl"
                      /> -->
        </div>
        <div class="video-desc">
          <div class="title">{{data.deepName}}</div>
          <div class="sub-title">{{data.deepDesc}}</div>
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
import {
  get
} from './../../utils/index'
export default {
  data() {
    return {
      motto: 'depth',
      mainPicUrl : 'https://resource.sa-green.cn/image/jpg/kaka/%E9%A1%B6%E5%9B%BE.png',
      title : 'KIKYO SPACE',
      subTitleList : ['有人说，我喜欢你们的光影，尽致淋漓','有人说，我喜欢你们的人物氛围，情感细腻'],
      deepList : [],
      userInfo: {},
    }
  },

  components: {
    card,
    moreInfo
  },

  methods: {
    toPage(url) {
      wx.navigateTo({
        url
      })
    },
    async getPageData() {
      try {
        const res = await get('/deepPage/deepAll');
        this.mainPicUrl = res.mainPicUrl;
        this.deepList = res.deepList;
        this.title = res.title;
        this.subTitleList = res.subTitleList;
      } catch (e) {
        console.log('6666', e);
      }
    }
  },
  created() {
    this.getPageData();
  }
}
</script>

<style scoped>
.depth-container {
  background: rgb(241, 241, 241);
  min-height: 100%;
}

.depth-container .index-top-box {
  position: relative;
  width: 750rpx;
  height: 380rpx;
  overflow: hidden;
  color: #FFFFFF;
  margin-bottom: 30rpx;
}
.depth-container .index-top-box::before{
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    content: '';
    background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0));
}
.depth-container .index-top-box > view {
    position: relative;
    z-index: 2;
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
  background: rgb(241, 241, 241);
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
  height: 250rpx;
  position: relative;
}

.depth-container .content .list-content .list-item .video-box .v-box {
  height: 250rpx;
  width: 100%;
}
.play-icon{
    width: 80rpx;
    height: 80rpx;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 9;
}
.depth-container .content .list-content .list-item .video-desc {
  background: rgb(229, 229, 229);
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
