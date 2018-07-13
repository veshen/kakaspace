<template>
<div class="container online-subscribe-container">
  <div class="top-box">
    <div class="title">
      购票须知：
    </div>
    <div class="desc">
      1. 票价：99元/人
    </div>
    <div class="desc">
      2. 场馆开放时间：10:00-21:00
    </div>
    <div class="desc">
      3. 场馆凭预约电子票入场，出馆后需再次购票才能入馆
    </div>
    <div class="desc">
      4. 门票一经售出，概不退款
    </div>
    <div class="desc">
      5. 请勿携带宠物及危险物品，尊重公共秩序
    </div>
    <div class="desc">
      6. 图片仅供参考
    </div>
  </div>
  <div class="main">

    <picker @change="bindHeadCountChange" :value="0" :range="array">
      <div class="select-scope">
        <div class="tips-text">
          <div class="title">
            到店人数
          </div>
          <div class="subTitle">
            <view class="picker">
              {{array[index]}}
            </view>
          </div>
        </div>
      </div>

    </picker>

    <picker @change="bindTimeChange" :value="0" mode="date" :start="currentDate">
      <div class="select-scope">
        <div class="tips-text">
          <div class="title">
            到店日期
          </div>
          <div class="subTitle">
            <view class="picker">
              {{date}}
            </view>
          </div>
        </div>
      </div>
    </picker>

    <div class="select-scope">
      <div class="tips-text">
        <div class="title">
          联系人手机号
        </div>
        <div class="subTitle">
          <input type="text"  maxlength="11" v-model="userMobile" placeholder="请输入11位手机号码" />
        </div>
      </div>
    </div>

  </div>
  <div class="bottom-bar">
    <div class="left-price" v-show="needPayAmountOffLine!==0">
        需到店支付   ¥ <span class="price-box">{{needPayAmountOffLine}}</span>
    </div>
    <div v-show="needPayAmountOffLine===0">

    </div>
    <div class="submit-btn" v-bind:class="[index>0&&date!== '请选择 >'&&userMobile.length===11? 'active' : '']" @click="createOrder">
      立即预约
    </div>
    <!-- <button class="submit-btn" v-show="!userMobile" v-bind:class="[index>0&&date!== '请选择 >'? 'active' : '']" open-type="getPhoneNumber" @getphonenumber="bindgetphonenumber">立即预约</button> -->
  </div>
  <!-- <bindPhoneNumber/> -->
</div>
</template>

<script>
import bindPhoneNumber from '@/components/bindPhoneNumber';
import {
  get,
  showModal
} from './../../utils/index';
export default {
  data() {
    return {
      array: ['请选择 >', '1人', '2人', '3人', '4人', '5人', '6人', '7人', '8人', '9人', '10人', '11人', '12人', '13人', '14人', '15人', '16人', '17人', '18人', '19人', '20人', '21人', '22人', '23人', '24人', '25人', '26人', '27人', '28人', '29人', '30人'],
      index: 0,
      date: '请选择 >',
      currentDate: '',
      userInfo: {
        nickName: ''
      },
      userMobile: '',
      needPayAmountOffLine : 0
    }
  },

  components: {
    bindPhoneNumber
  },

  methods: {
    // bindgetphonenumber (e) {
    //     if (this.index>0&&this.date!== '请选择 >') {
    //         showModal('错误','无手机号授权无法下单')
    //     }else{
    //         if (e.target.errMsg==="getPhoneNumber:ok") {
    //             console.log(e.target.encryptedData);
    //             get('/base/wechat/user/phone',{
    //                 encryptedData : e.target.encryptedData,
    //                 iv : e.target.iv
    //             })
    //         }else{
    //             showModal('错误','无手机号授权无法下单')
    //         }
    //     }
    //
    // },
    bindHeadCountChange: function(e) {
      this.index = e.mp.detail.value;
      if (this.index > 0 && this.date !== '请选择 >') {
          this.computyed()
      }
    },
    bindTimeChange: function(e) {
      this.date = e.mp.detail.value;
      if (this.index > 0 && this.date !== '请选择 >') {
          this.computyed()
      }
    },
    async createOrder(){
        try {
            if (this.index > 0 && this.date !== '请选择 >'&&this.userMobile.length===11) {
                const bookingDay = this.date;
                const peerNumber = this.index;
                const mobile = this.userMobile;
                const token = wx.getStorageSync('token')
                const res = await get('/order/create',{bookingDay, peerNumber, mobile, token});
                const url = `../orderInfo/main?orderId=${res.orderId}`;
                wx.navigateTo({
                  url
                })
            }
        } catch (e) {
            console.log(e);
        } finally {

        }
    },
    async computyed(){
        try {
            const bookingDay = this.date;
            const peerNumber = this.index;

            const res = await get('/order/checkOrder',{
                bookingDay ,peerNumber

            })
            console.log(res);
            this.needPayAmountOffLine = res.needPayAmountOffLine;
        } catch (e) {
            console.log(e);
        }
    },
    toPage(url) {
      if (this.index > 0 && this.date !== '请选择 >'&&this.userMobile.length===11) {

        wx.navigateTo({
          url
        })
      }
    }
  },
  onShow() {
    const userInfo = getApp().globalData.userInfo
    if (userInfo) {
      this.userInfo.nickName = userInfo.nickName;
    }
    // const userMobile = wx.getStorageSync('userMobile') || false;
    // this.userMobile = userMobile;
  },
  created() {
    const dateFormat = 'YYYY/MM/DD';
    var myDate = new Date(); //获取系统当前时间
    const currentDate = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate();
    this.currentDate = currentDate;
  }
}
</script>

<style scoped>
.container {
  background: #000;
  min-height: 100%;
}

.online-subscribe-container {}

.top-box {
  padding: 90rpx 0 60rpx;
  margin: 0 50rpx;
  overflow: hidden;
}

.top-box .title {
  font-size: 36rpx;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 36rpx;
  border-left: 6rpx solid #FFE631;
  padding-left: 20rpx;
  margin-bottom: 30rpx;
}

.top-box .desc {
  font-size: 30rpx;
  color: #B6B7BE;
  letter-spacing: 0;
}

.main {
  margin: 0 50rpx;
  padding-bottom: 240rpx;
}

.main .select-scope {
  height: 180rpx;
  background: #1B1B1B;
  border: 2rpx solid #434343;
  border-radius: 10rpx;
  margin-bottom: 40rpx;
}

.main .select-scope .title {
  font-size: 36rpx;
  color: #FFE631;
  letter-spacing: 0;
  text-align: center;
  line-height: 36rpx;
  padding: 50rpx 0 20rpx;
}

.main .select-scope .subTitle {
  font-size: 28rpx;
  color: #7A7B84;
  letter-spacing: 0;
  text-align: center;
  line-height: 24rpx;
}

.bottom-bar {
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
.left-price{
    font-size: 30rpx;
    color: #FFE631;
    padding-left: 30rpx;
}
.price-box{
    font-size: 40rpx;
}
.submit-btn {
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

.active {
  background: #FFE631;
  color: #000;
}
</style>
