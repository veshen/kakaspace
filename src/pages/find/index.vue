<template>
    <div class='index find-container'>
        <div class="filter-box">
            <div class="left-btn active" @click="isActive=!isActive">
                本周最热
                <Icon class="down" size='10' type='success'/>
                <div class="line"></div>
                <ul class="check-list" v-bind:class="[isActive ? 'check-list-active' : '', errorClass]">
                  <li class="check-list-item">本日最热</li>
                  <li class="check-list-item">本周最热</li>
                  <li class="check-list-item">本月最热</li>
                </ul>
            </div>
            <div class="center-line"></div>
            <div class="right-btn">时间倒序</div>
        </div>
        <div class="content">
            <div class="list-content">
                <div
                  class="list-item"
                  v-for="(item, index) in arrData"
                  @click="toPage('../photoinfo/main')"
                  wx:key={item.id}
                  >
                    <div class="like-box">
                        {{item.id}} <span class="like"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="add-photo-btn" @click="updataPhoto=true">
          <img class="image" src="https://resource.sa-green.cn/image/jpg/kaka%E5%8F%91%E7%8E%B0_%E7%9B%B8%E6%9C%BA.png">
        </div>
        <div class="updata-photo-box" v-show="updataPhoto">
          <div class="update-block">
            <div class="off-btn-box" @click="updataPhoto=false">
              <img class="off-btn"  src="https://resource.sa-green.cn/image/jpg/%E5%85%B3%E9%97%AD.svg">
            </div>
            <div class="update-img-list">
              <div
                class="update-img-item"
                v-for="(item, index) in tempFilePaths"
                wx:key={index}
                >
                <img class="image" v-bind:src="item">
                <div class="del-btn">x</div>
              </div>
              <div class="keep-update-btn" @click="listenerButtonChooseImage"  v-if="tempFilePaths.length<9&&tempFilePaths.length!==0">
                  <span class="add-icon">+</span>
              </div>
            </div>
            <div
              class="update-file-btn-box"
              @click="listenerButtonChooseImage"
              v-if="tempFilePaths.length===0">
              <img class="update-file-img" src="https://resource.sa-green.cn/image/jpg/%E4%B8%8A%E4%BC%A0%E7%85%A7%E7%89%87.png">
              <div class="text">上传照片</div>
            </div>
            <div class="photo-desc-input-box">

            </div>
            <div class="submit-btn">提交</div>
          </div>
        </div>
        <card :text="motto"></card>
      </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World 000',
      userInfo: {},
      arrData: [{id: 1, title: 'Hello World', content: 'Welcome to learning Taro!'}, {id: 2, title: 'Installation', content: 'You can install Taro from npm.'}, {id: 3, title: 'Hello World', content: 'Welcome to learning Taro!'}],
      isActive : false,
      updataPhoto : false,
      tempFilePaths : [
      ]
    }
  },

  components: {
    card
  },

  methods: {
     toPage(url) {
      wx.navigateTo({ url })
    },
    listenerButtonChooseImage() {
      var that = this;
      wx.chooseImage({
          count: 9,
          //original原图，compressed压缩图
          sizeType: ['original'],
          //album来源相册 camera相机
          sourceType: ['album', 'camera'],
          //成功时会回调
          success: function(res) {
              //重绘视图
              console.log(res)
              that.tempFilePaths = that.tempFilePaths.concat(res.tempFilePaths);

              // that.setData({
              //     source: res.tempFilePaths
              // })
          }
      })
  },

  },

  created () {
  }
}
</script>

<style scoped>
.find-container {
  padding-top: 100rpx;
}

.photo-desc-input-box{
  width: 510rpx;
  height: 170rpx;
  background: #F0F0F0;
  border-radius: 8px;
  position: absolute;
  bottom: 30rpx;
  left: 50%;
  transform :translateX(-50%);
}

.updata-photo-box{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.7);
  z-index: 999;
}
.updata-photo-box .update-img-list{
  margin-left: 35rpx;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.updata-photo-box .update-img-list .update-img-item{
  width: 160rpx;
  height: 160rpx;
  margin-right: 10rpx;
  margin-bottom: 10rpx;
  position: relative;
}
.del-btn{
  width: 32rpx;
  height: 32rpx;
  background: #100F0F;
  border: 2px solid #FFE631;
  border-radius: 50%;
  position: absolute;
  top: 4rpx;
  right: 4rpx;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26rpx;
  line-height: 36rpx;
}
.keep-update-btn{
  width: 159rpx;
  height: 159rpx;
  border: 1rpx dashed #BFBFBF;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFE631;
  font-size: 140rpx;
}
.keep-update-btn .add-icon{
  position: relative;
  top: -16rpx;
}
.updata-photo-box .update-img-list .update-img-item .image{
  width: 160rpx;
  height: 160rpx;
}
.updata-photo-box .update-file-btn-box{
  width: 120rpx;
  height: 120rpx;
  margin: 120rpx auto 0;
}
.update-file-btn-box .update-file-img{
  width: 110rpx;
  height: 110rpx;
  margin-bottom: 5rpx;
}
.update-file-btn-box .text{
  font-size: 30rpx;
  color: #100F0F;
  letter-spacing: 0;
  line-height: 30rpx;
}
.updata-photo-box .update-block{
  width: 570rpx;
  height: 820rpx;
  background: #fff;
  position: absolute;
  left: 50%;
  transform :translateX(-50%);
  top: 78rpx;
  border-radius: 6rpx;
}
.updata-photo-box .submit-btn{
  width: 190rpx;
  height: 50rpx;
  font-size: 28rpx;
  color: #7A7B84;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #B6B7BE;
  border-radius: 100rpx;
  position: absolute;
  left: 50%;
  transform :translateX(-50%);
  bottom: -90rpx;
}
.off-btn-box{
  height: 90rpx;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 35rpx;
}
.off-btn-box .off-btn{
  width: 24rpx;
  height: 24rpx;
}
.add-photo-btn{
  width: 110rpx;
  height: 110rpx;
  position: fixed;
  left: 50%;
  bottom: 118rpx;
  transform :translateX(-50%);
  border-radius: 50%;
  overflow: hidden;
}
.add-photo-btn .image{
  width: 110rpx;
  height: 110rpx;
}
.find-container .filter-box {
  height: 70rpx;
  width: 100%;
  background: #100F0F;
  position: fixed;
  top: 0;
  left: 0;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-around;
  font-weight: 300;
  font-size: 28rpx;
  padding-top: 30rpx;
  z-index: 999;
}
.find-container .filter-box .center-line {
  width: 1rpx;
  height: 30rpx;
  position: absolute;
  background: #B7B7B7;
  left: 50%;
  top: 35rpx;
}
.find-container .filter-box .active {
  color: #FFE631;
}
.find-container .filter-box .left-btn{

}
.find-container .filter-box .left-btn .line {
  height: 4rpx;
  width: 70rpx;
  background: #FFE631;
  margin-top: 15rpx;
  margin-left: 26rpx;
}
.find-container .filter-box .left-btn .check-list{
  width: 375rpx;
  position: absolute;
  left: 0;
  top: 100rpx;
  display: none;
}
.find-container .filter-box .left-btn .check-list .check-list-item{
  height: 85rpx;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  position: relative;
  margin-bottom: 1rpx;

}
.find-container .filter-box .left-btn .check-list li {
  opacity: 0;
  transform-origin: top center;

}
.find-container .filter-box .left-btn .check-list-active{
  display: block;
}
.find-container .filter-box .left-btn .check-list-active li:first-of-type {
  animation: menu2 0.3s ease-in-out forwards;
  animation-delay: 0.2s;
}

.find-container .filter-box .left-btn .check-list-active li:nth-of-type(2) {
  animation: menu2 0.3s ease-in-out forwards;
  animation-delay: 0.4s;
}

.find-container .filter-box .left-btn .check-list-active li:nth-of-type(3) {
  animation: menu2 0.3s ease-in-out forwards;
  animation-delay: 0.6s;
}

/*.find-container .filter-box .left-btn .check-list-active li:last-of-type {
  animation: menu2 0.3s ease-in-out forwards;
  animation-delay: 0.8s;
}*/

@keyframes menu2 {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.find-container .content .list-content {
  margin: 30rpx;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.find-container .content .list-content .list-item {
  width: 228rpx;
  height: 228rpx;
  background: yellow;
  border-radius: 8rpx;
  overflow: hidden;
  margin-bottom: 2rpx;
  position: relative;
}

.find-container .content .list-content .list-item .like-box {
  position: absolute;
  right: 10rpx;
  bottom: 10rpx;
  color: #fff;
  font-size: 20rpx;
  display: flex;
  align-items: center;
}
.find-container .content .list-content .list-item .like-box .like {
  padding-left: 13rpx;
}
</style>
