<template>
    <div class='index video-info-container'>
        <div class="content">
            <div class="video-box">
                <video
                    class="v-box"
                    src='http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
                    />
            </div>
            <div class="video-desc">
                <div class="title">你是所有美好的起因你是所有美好的起因</div>
                <div class="time-box">时长：10m 37s</div>
                <div class="content-text">闺蜜就是西瓜分你一半闺蜜就是西瓜分你一半闺蜜就是西瓜分你一半</div>
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
      arrData: [{id: 1, title: 'Hello World', content: 'Welcome to learning Taro!'}, {id: 2, title: 'Installation', content: 'You can install Taro from npm.'}, {id: 3, title: 'Hello World', content: 'Welcome to learning Taro!'}]
    }
  },
  components: {
    moreInfo
  },
  methods: {

  },

  created () {
  }
}
</script>

<style scoped>
.video-info-container .content .video-box .v-box {
  width: 100%;
  height: 420rpx;
}
.video-info-container .content .video-desc {
  padding: 40rpx;
}
.video-info-container .content .video-desc .title {
  font-size: 36rpx;
  color: #100F0F;
  letter-spacing: 0;
  line-height: 36rpx;
  margin-bottom: 43rpx;
}
.video-info-container .content .video-desc .time-box {
  font-size: 26rpx;
  color: #656060;
  letter-spacing: 0;
  line-height: 26rpx;
  padding-bottom: 23rpx;
  border-bottom: 1rpx solid #656060;
  margin-bottom: 70rpx;
}
.video-info-container .content .video-desc .content-text {
  font-size: 28rpx;
  color: #656060;
  letter-spacing: 0;
}
</style>
