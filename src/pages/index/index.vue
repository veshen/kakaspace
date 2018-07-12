<template>
  <div class="container index index-container">
      <div class="index-top-box" v-bind:style="{background: 'url('+mainPic+') no-repeat top center',backgroundSize:'100% 100%'}" @click="toPage('../about/main')">
          <div class="title">KIKYO SPACE</div>
          <div class="city-name">上海</div>
          <div class="description">{{mainDesc}}</div>
          <div class="about-button">关于KIKYO</div>
      </div>
      <div class="content">
          <div class="list-title">
              <div class="line-box"></div>
              <div class="text-box">主题场馆</div>
          </div>
          <div class="list-content">
              <div  class="list-item"
                    v-for="(data, index) in listData"
                    wx:key={index}
                    v-bind:style="{background: 'url('+data.subjectMainPicUrl+') no-repeat top center',backgroundSize:'100% 100%'}"
                    @click="toPage(`../themeinfo/main?id=${data.subjectId}`)"
                    >
                <!-- <div class="index-box">{{index}}</div> -->
                <div class="title">{{data.subjectName}}</div>
                <div class="desc">{{data.subjectDesc}}</div>
              </div>
          </div>
      </div>
    <card :text="motto"></card>
    <moreInfo />
    <subscribe/>
  </div>
</template>

<script>
import card from '@/components/card'
import subscribe from '@/components/subscribe'
import moreInfo from '@/components/moreInfo'
import { get } from './../../utils/index'
export default {
  data () {
    return {
      motto: 'index',
      mainPic:'',
      mainDesc:'',
      userInfo: {},
      listData : []
    }
  },

  components: {
    card, subscribe, moreInfo
  },

  methods: {
    toPage(url) {
      wx.navigateTo({ url })
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: (re) => {
            console.log(re);
            const code = re.code;
            // get('/base/wechant/login',{code})
          wx.getUserInfo({
            success: (res) => {
                // console.log(res);
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    async getPage(){
        try{
            const pageData = await get('/mainPage/mainPageInfo');
            console.log(pageData);
            this.mainPic = pageData.mainPicUrl;
            this.mainDesc = pageData.mainDesc;
            this.listData = pageData.subjectInfoOverViewBeanList;
        }catch(e){
            console.log(e);
        }

    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
    this.getPage();
    // console.log(getApp());
  }
}
</script>

<style scoped>
.index-container {
  /* padding-bottom: 98rpx; */
}
.content {
    background: rgba(241,241,241,1);
    padding-top: 20rpx;
}
.index-container .index-top-box {
  position: relative;
  width: 750rpx;
  height: 860rpx;
  background: url("https://resource.sa-green.cn/image/jpg/kaka/%E9%A6%96%E9%A1%B5%E5%A4%B4%E5%9B%BE.png") no-repeat left center;
  background-size: 100% 100%;
  overflow: hidden;
  text-align: center;
  color: #FFFFFF;
  /* margin-bottom: 30rpx; */
  /* box-shadow:0 200px 1860px rgba(0,0,0,0.8) inset; */
}
.index-container .index-top-box::before{
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
.index-container .index-top-box > view {
    position: relative;
    z-index: 2;
}
.index-container .index-top-box .title {
  font-size: 34rpx;
  line-height: 48rpx;
  height: 48rpx;
  margin-top: 49rpx;
  margin-bottom: 13rpx;
}
.index-container .index-top-box .city-name {
  font-size: 60rpx;
  line-height: 84rpx;
  height: 84rpx;
  margin-bottom: 15rpx;
}
.index-container .index-top-box .description {
  font-size: 24rpx;
  color: #FFFFFF;
  width: 456rpx;
  margin: 0 auto 33rpx;
}
.index-container .index-top-box .about-button {
  width: 212rpx;
  height: 60rpx;
  margin: 0 auto;
  background: rgba(255, 230, 49, 0.75);
  border-radius: 30rpx;
  font-size: 28rpx;
  color: #100F0F;
  display: flex;
  justify-content: center;
  align-items: center;
}
.index-container .content .list-title {
  height: 42rpx;
  font-size: 30rpx;
  color: #100F0F;
  letter-spacing: 0;
  text-align: center;
  text-shadow: 1rpx 1rpx 0 #FFE631;
  position: relative;
  padding-bottom: 20rpx;
}
.index-container .content .list-title .line-box {
  height: 8rpx;
  width: 260rpx;
  border-top: 1rpx solid #100F0F;
  border-bottom: 1rpx solid #100F0F;
  position: absolute;
  top: 18rpx;
  left: 50%;
  transform: translateX(-50%);
}
.index-container .content .list-title .text-box {
  background: rgba(241,241,241,1);
  position: relative;
  z-index: 6;
  width: 120rpx;
  margin: 0 auto;
  padding: 0 14rpx;
}
.index-container .content .list-content {
  margin: 0 30rpx;
  overflow: auto;
}
.index-container .content .list-content .list-item {
  height: 240rpx;
  border-radius: 12rpx;
  margin-bottom: 20rpx;
  position: relative;
  /* box-shadow:0 20px 160px rgba(0,0,0,0.8) inset; */
}
.index-container .content .list-content .list-item::before{
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    content: '';
    background: linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0));
}
.index-container .content .list-content .list-item>view{
    position: relative;
    z-index: 2;
}
.index-container .content .list-content .list-item .index-box{

}
.index-container .content .list-content .list-item .title{
  height: 42rpx;
  line-height: 42rpx;
  font-size: 30rpx;
  color: #FFFFFF;
  padding-top: 50rpx;
  padding-left: 20rpx;
  padding-bottom: 20rpx;
}
.index-container .content .list-content .list-item .desc{
  width: 367rpx;
  padding-left: 20rpx;
  line-height: 33rpx;
  height: 66rpx;
  font-size: 24rpx;
  color: #FFFFFF;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
