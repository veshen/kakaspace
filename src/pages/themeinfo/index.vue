<template>
    <div class='index theme-info-container'>
        <div class="swiper-content">
            <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000" indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#FFE631">
                <block v-for="(item, index) in movies" :index="index" :key="key">
                    <swiper-item>
                        <image :src="item.url" class="slide-image" mode="aspectFill"/>
                    </swiper-item>
                </block>
            </swiper>
        </div>
        <div class="warp">
            <div class="main">
                <div class="title">
                    关于空间
                </div>
                <div class="desc">
                    这里是主题描述，再多几个字。
云虹很像彩虹，但颜色更浅。事实上，它们往往不会呈现出任何
可辨别的颜色，看起来就像白化的彩虹，或是彩虹的鬼魂经过。
                </div>
                <div class="scene-list">
                    <div class="scene-item">
                        <img class="item-pic" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg" alt=""/>
                        <div class="text">这是文字描述这是文字描述这是文字描述这是文字描述</div>
                    </div>
                    <div class="scene-item">
                        <img class="item-pic" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg" alt=""/>
                        <div class="text">这是文字描述这是文字描述这是文字描述这是文字描述</div>
                    </div>
                    <div class="scene-item">
                        <img class="item-pic" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg" alt=""/>
                        <div class="text">这是文字描述这是文字描述这是文字描述这是文字描述</div>
                    </div>
                    <div class="scene-item">
                        <img class="item-pic" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg" alt=""/>
                        <div class="text">这是文字描述这是文字描述这是文字描述这是文字描述</div>
                    </div>
                    <div class="scene-item">
                        <img class="item-pic" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg" alt=""/>
                        <div class="text">这是文字描述这是文字描述这是文字描述这是文字描述</div>
                    </div>
                    <div class="scene-item">
                        <img class="item-pic" src="http://b.zol-img.com.cn/sjbizhi/images/6/320x510/138493998617.jpg" alt=""/>
                        <div class="text">这是文字描述这是文字描述这是文字描述这是文字描述</div>
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

  },
  components: {
    moreInfo
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 8rpx;
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
