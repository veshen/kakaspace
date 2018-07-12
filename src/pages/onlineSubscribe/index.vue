<template>
  <div class="container online-subscribe-container">
        <div class="top-box">
            <div class="title">
                国际婚纱摄影工作室
            </div>
            <div class="desc">
                国际婚纱摄影连锁机构！一流的前期拍摄，顶尖的后期制作，一站式贴心服务，专注用镜头私人定制您的永恒幸福记忆。《芈月传》《摆渡人》《丑女无敌》《王牌逗王牌》扮演者毛俊杰倾力推荐，明星助力，品质保证。婚纱摄影行业知名品牌欢迎您
            </div>
        </div>
        <div class="main">
            <div class="select-scope">
                <div class="tips-text">
                    <div class="title">
                        到店人数
                    </div>
                    <div class="subTitle">
                        <picker   @change="bindHeadCountChange" :value="0" :range="array">
                                <view class="picker">
                                  {{array[index]}}
                                </view>
                      </picker>
                    </div>
                </div>
            </div>
            <div class="select-scope">
                <div class="tips-text">
                    <div class="title">
                        到店日期
                    </div>
                    <div class="subTitle">
                        <picker
                            @change="bindTimeChange"
                            :value="0"
                            mode="date"
                            :start="currentDate"
                            >
                                <view class="picker">
                                  {{date}}
                                </view>
                      </picker>
                    </div>
                </div>
            </div>

        </div>
        <div class="bottom-bar">
            <div class="">

            </div>
            <div class="submit-btn" v-bind:class="[index>0&&date!== '请选择 >'? 'active' : '']" @click="toPage('../orderInfo/main')">
                立即预约
            </div>
        </div>
        <bindPhoneNumber/>
  </div>
</template>

<script>
import bindPhoneNumber from '@/components/bindPhoneNumber'
export default {
  data () {
    return {
        array: ['请选择 >', '1人', '2人','3人','4人','5人','6人','7人','8人','9人','10人','11人','12人','13人','14人','15人','16人','17人','18人','19人','20人','21人','22人','23人','24人','25人','26人','27人','28人','29人','30人'],
        index : 0,
        date : '请选择 >',
        currentDate : ''
    }
  },

  components: {
      bindPhoneNumber
  },

  methods: {
      bindHeadCountChange: function (e) {
        console.log('picker发送选择改变，携带值为',e.mp.detail.value)
        this.index = e.mp.detail.value;
    },
    bindTimeChange : function (e) {
        console.log('时间选择',e.mp.detail.value)
        this.date = e.mp.detail.value;

    },
    toPage(url) {
        if (this.index>0&&this.date!== '请选择 >') {
            wx.navigateTo({ url })
        }

    }
  },
  created () {
      const dateFormat = 'YYYY/MM/DD';
      var myDate = new Date();//获取系统当前时间
      const currentDate = myDate.getFullYear() + '-' + (myDate.getMonth()+1) + '-' + myDate.getDate();
      this.currentDate = currentDate;
  }
}
</script>

<style scoped>
.container{
    background: #000;
    min-height: 100%;
}
.online-subscribe-container{

}
.top-box{
    padding: 90rpx 0 60rpx;
    margin: 0 50rpx;
    overflow: hidden;
}
.top-box .title{
    font-size: 36rpx;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 36rpx;
    border-left: 6rpx solid #FFE631;
    padding-left: 20rpx;
    margin-bottom: 30rpx;
}
.top-box .desc{
    font-size: 30rpx;
    color: #B6B7BE;
    letter-spacing: 0;
}
.main{
    margin: 0 50rpx;
    padding-bottom: 240rpx;
}
.main .select-scope{
    height: 180rpx;
    background: #1B1B1B;
    border: 2rpx solid #434343;
    border-radius: 10rpx;
    margin-bottom: 40rpx;
}
.main .select-scope .title{
    font-size: 36rpx;
    color: #FFE631;
    letter-spacing: 0;
    text-align: center;
    line-height: 36rpx;
    padding: 50rpx 0 20rpx;
}
.main .select-scope .subTitle{
    font-size: 28rpx;
    color: #7A7B84;
    letter-spacing: 0;
    text-align: center;
    line-height: 24rpx;
}
.bottom-bar{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 98rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1B1B1B;
}
.submit-btn{
    background: #B6B7BE;
    width: 190rpx;
    height: 50rpx;
    border-radius: 100rpx;
    margin-right: 30rpx;
    font-size: 28rpx;
    color: #7A7B84;
    letter-spacing: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.active{
    background: #FFE631;
    color: #000;
}
</style>
