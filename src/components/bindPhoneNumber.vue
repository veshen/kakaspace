<template>
    <div class='mark'>
        <div class="main">
            <div class="content">
                <div class="tips">
                    验证手机号
                </div>
                <div class="line-box">
                    <div class="label">
                        手机号
                    </div>
                    <div class="in-box">
                        <input class="input-h" type="number" name="" value="">
                    </div>
                </div>
                <div class="line-box">
                    <div class="label">
                        验证码
                    </div>
                    <div class="in-box">
                        <input class="input-f input-h" type="number" name="" value="">
                    </div>
                    <div class="get-code-btn">
                        获取验证码
                    </div>
                </div>
            </div>
            <div class="button-box">
                <div class="cancel-box btn-box">
                    取消
                </div>
                <div class="cofrom-box btn-box">
                    确认
                </div>
            </div>
        </div>
   </div>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
    }
  },
  onLoad(){
  },
  methods: {

    },

}
</script>

<style scoped>
.mark{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);
}
.main{
    width: 650rpx;
    background: #fff;
    border-radius: 10rpx;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.content{
    padding: 46rpx 40rpx 43rpx;
}
.content .tips{
    text-align: center;
    font-size: 34rpx;
    color: #100F0F;
    letter-spacing: 0;
    margin-bottom: 60rpx;
}
.line-box{
    height: 100rpx;
    background: #F7F6F5;
    border-radius: 10px;
    margin-bottom: 30rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.line-box .label{
    width: 150rpx;
    text-align: center;
    font-size: 30rpx;
    color: #7A7B84;
    letter-spacing: 0;
}
.line-box .get-code-btn{
    width: 210rpx;
    font-size: 30rpx;
    color: #A99400;
    letter-spacing: 0;
    text-align: center;
}
.in-box{
    flex-grow: 1;
}
.input-f{
    width: 150rpx;
}
.input-h{
    height: 100rpx;
}
.button-box{
    display: flex;
    border-top: 1rpx solid  #D9D3CB;
}
.btn-box{
    width: 50%;
    height: 120rpx;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cancel-box{
    border-right: 1rpx solid #D9D3CB;
    font-size: 30rpx;
    color: #656060;
}
.cofrom-box{
    font-size: 30rpx;
    color: #A99400;
}
</style>
