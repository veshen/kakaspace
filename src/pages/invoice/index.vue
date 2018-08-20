<template>
    <div class="container invoice invoice-container">
        <div class="main">
            <div class="line-box">
                <div class="label">
                  抬头类型
                </div>
                <div class="content radio-group">
                    <div v-bind:class="[invoiceType===2? 'radio-item active' : 'radio-item']" @click="invoiceType=2">
                        公司
                    </div>
                    <div v-bind:class="[invoiceType===1? 'radio-item active' : 'radio-item']" @click="invoiceType=1">
                        个人
                    </div>
                </div>
            </div>
            <div class="line-box">
                <div class="label">
                  手机号码
                </div>
                <div class="content">
                    <input class="in-text" type="text" v-model="mobile" placeholder="请填写"/>
                </div>
            </div>
            <div class="line-box">
                <div class="label">
                  收件地址
                </div>
                <div class="content">
                    <input class="in-text" type="text" v-model="address" placeholder="请填写"/>
                </div>
            </div>
            <div class="line-box" v-if="invoiceType===2">
                <div class="label">
                  发票抬头
                </div>
                <div class="content">
                    <input class="in-text" type="text" v-model="invoiceTitle" placeholder="请填写"/>
                </div>
            </div>
            <div class="line-box" v-if="invoiceType===2">
                <div class="label">
                  公司税号
                </div>
                <div class="content">
                    <input class="in-text" type="text"  v-model="taxNo" placeholder="请填写"/>
                </div>
            </div>
        </div>
        <div class="submit-btn" @click="submit">
            提交
        </div>
        <div v-show="isFetching">
          <rotateLoading/>
        </div>
    </div>
</template>

<script>
import {get,showSuccess, post, showModal} from './../../utils/index';
import rotateLoading from '@/components/rotateLoading';
export default {
  data () {
    return {
      motto: 'my',
      invoiceType: 2,
      address: '',
      invoiceTitle : null,
      taxNo : null,
      mobile : '',
      orderId : '',
      payAmount : ''
    }
  },
  components: {
      rotateLoading
  },
  methods: {
    binddivTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
      },
      calling(){
          wx.makePhoneCall({
            phoneNumber: '13120860906',
            success: function () {
                console.log("拨打电话成功！")
            },
            fail: function () {
                console.log("拨打电话失败！")
            }
        })
      },
      clearFn(){
        this.content = '';
      },
      async submit(){
          try {
              console.log(this.mobile);
              console.log(this.address);
              if (this.mobile.length!==11) {
                  showModal('请输入正确的11位手机号','')
                  return;

              }
              if (this.address==='') {
                  showModal('请输入收件地址','')
                  return;
              }
              if (this.invoiceType===2&&!this.invoiceTitle) {
                  showModal('请输入发票抬头','')
                  return;
              }
              if (this.invoiceType===2&&!this.taxNo) {
                  showModal('请输入公司税号','')
                  return;
              }
              this.isFetching = true;
              const {invoiceType,mobile,address,invoiceTitle,taxNo,orderId,payAmount} = this;
              const token = wx.getStorageSync('token');
              const res = await post('/invoice/submit',{token,invoiceType,mobile,address,invoiceTitle,taxNo,orderId,payAmount});
              this.isFetching = false;
              console.log(res);
              showSuccess('提交成功!')
              setTimeout(()=>{
                  const url = '../index/main'
                  wx.redirectTo({ url })
              },1500)
          } catch (e) {
            console.log(e);
          }
      }
  },
  inText(e){
      console.log(e);
  },
  onLoad(option){
      this.orderId = option.orderId;
      this.payAmount = option.payAmount;
  },
  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style scoped>
.invoice-container{
    padding: 30rpx 40rpx 0;
}
.main{
    background: #1B1B1B;
    border-radius: 10rpx;
    padding: 40rpx 20rpx 50rpx;
    margin-bottom: 100rpx;
}
.line-box{
    height: 120rpx;
    border-bottom: 1px solid rgba(255,255,255,.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.line-box .label{
    font-size: 30rpx;
    line-height: 30rpx;
    color: #FFFFFF;
    letter-spacing: 0;
    padding-left: 20rpx;
    border-left: 4rpx solid #FFE631;
}
.content .in-text{
    text-align: right;
    color: #fff;
    font-size: 30rpx;
}
.radio-group{
    display: flex;
}
.radio-item{
    margin: 0 15rpx;
    font-size: 28rpx;
    color: rgba(255,255,255,.6);
    padding: 2rpx 6rpx;
    border-radius: 4rpx;
}
.active{
    color: #000;
    background: #FFE631;
}
.submit-btn-low{
    width: 210rpx;
    height: 50rpx;
    background: #1B1B1B;
    border-radius: 25rpx;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28rpx;
    color: #414141;
    letter-spacing: 0;
}
.submit-btn{
    width: 210rpx;
    height: 50rpx;
    background: #585858;
    border: 1rpx solid #FFE631;
    border-radius:25rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28rpx;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    margin: 36rpx auto 0;
}
</style>
