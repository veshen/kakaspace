<template>
    <div class='index video-info-container'>
        <div class="content">
            <div class="video-box">
                <video
                    class="v-box"
                    v-bind:src="videoUrl"
                    v-bind:poster="deepUrl"

                    />
            </div>
            <div class="video-desc">
                <div class="title">{{videoName}}</div>
                <div class="time-box" v-show="videoTime&&videoTime!==''">时长：{{videoTime}}</div>
                <div class="content-text">{{videoDesc}}</div>
            </div>
        </div>
        <moreInfo />
      </div>
</template>

<script>
import moreInfo from '@/components/moreInfo';
import { get } from './../../utils/index';
export default {
  data () {
    return {
        videoUrl : '',
        videoName : '',
        videoDesc : '',
        videoTime : '',
        deepUrl : ''
    }
  },
  components: {
    moreInfo
  },
  methods: {

  },
  onLoad(option){
      get('/deepPage/deepDetail',{deepId:option.deepId||this.id}).then((res)=>{
          console.log(res);
          this.videoUrl = res.videoUrl;
          this.videoName = res.videoName;
          this.videoDesc = res.videoDesc;
          this.videoTime = res.videoTime;
          this.deepUrl = res.deepUrl;
      }).catch((e)=>{
          console.log(e);
      })
  },
  created () {
  }
}
</script>

<style scoped>
.video-info-container{
    min-height: 100%;
    background: rgb(241, 241, 241);
}
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
