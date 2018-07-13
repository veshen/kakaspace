<template>
    <div class='index theme-info-container'>
        <div class="swiper-content">
            <image :src="mainPic" class="slide-image" mode="aspectFill"/>
            <!-- <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000" indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#FFE631">
                <block v-for="(item, index) in movies" :index="index" :key="key">
                    <swiper-item>
                        <image :src="mainPic" class="slide-image" mode="aspectFill"/>
                    </swiper-item>
                </block>
            </swiper> -->
        </div>
        <div class="warp">
            <div class="main">
                <div class="title">
                    {{subName}}
                </div>
                <div class="desc">{{subDesc}}</div>
                <div class="scene-list">
                    <div class="scene-item" v-for="(data, index) in subThumbList" wx:key={index}>
                        <img class="item-pic" mode="aspectFill" @click="previewImage(data.picUrl)" :src="data.picUrl" alt=""/>
                        <!-- <div class="text">{{data.name||''}}</div> -->
                    </div>
                </div>
            </div>
        </div>
        <moreInfo />
    </div>
</template>

<script>
import moreInfo from '@/components/moreInfo'
import { get } from './../../utils/index'
export default {
  data () {
    return {
      id:0,
      mainPic:'',
      subName:'',
      subDesc:'',
      subThumbList:[]
    }
  },
  methods: {
      previewImage(curImg){
          console.log(curImg);
          var imgs = [];
          this.subThumbList.map((item,index)=>{
              console.log(item,index);
              imgs.push(item.picUrl);
          });
          console.log(imgs);
        wx.previewImage({
            current: curImg, // 当前显示图片的http链接
            urls: imgs // 需要预览的图片http链接列表
        })
      }
  },
  components: {
    moreInfo
  },
  onLoad(option){
      get('/mainPage/subjectDetail',{subjectId:option.id||this.id}).then((res)=>{
          console.log(res);
          this.mainPic = res.subjectMainPicUrl;
          this.subName = res.subjectName;
          this.subDesc = res.subjectDesc;
          this.subThumbList = res.sceneSmallInfoBeanList;
      }).catch((e)=>{
          console.log(e);
      })
  },
  created () {
  }
}
</script>

<style scoped>
.swiper{
    height: 770rpx;
    background: #000;
}
.slide-image{
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 8rpx; */
    display: block;
    margin: 0 auto;
}
.warp{
    background: #000;
}
.main{
    background: #F1F1F1;
    padding: 60rpx 40rpx 0;
    border-radius: 6rpx 6rpx 0 0;
    padding-bottom: 30rpx;
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
}
.scene-list{
    background: #fff;
    padding: 40rpx 0 40rpx 30rpx;
    box-shadow: 0 2rpx 14rpx 0 rgba(0,0,0,0.11);
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.scene-item{
    width: 190rpx;
    margin-right: 20rpx;
}
.scene-item .item-pic{
    width: 190rpx;
    height: 190rpx;
    display: block;
    margin-bottom: 10rpx;;
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
