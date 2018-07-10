<template>
  <div class="container ilike-container">
      <div class="like-list">
          <div
            class="like-item"
            v-for="(data, index) in listData"
            wx:key={index}
            v-bind:style="{background: 'url('+data.imgUrl+') no-repeat top center',backgroundSize:'100% 100%'}"
            >
          </div>
      </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
        listData : [
          {imgUrl:'https://resource.sa-green.cn/image/jpg/kaka/Bitmap.png',title:'这是主标题',desc:'这是描述 好多个字的描述,这是描述 好多个字的描述,这是描述 好多个字的描述'},
          {imgUrl:'https://resource.sa-green.cn/image/jpg/kaka/Bitmap%202.png',title:'这是主标题',desc:'这是描述 好多个字的描述'},
          {imgUrl:'https://resource.sa-green.cn/image/jpg/kaka/Bitmap%203.png',title:'这是主标题',desc:'这是描述 好多个字的描述'},
          {imgUrl:'https://resource.sa-green.cn/image/jpg/kaka/Bitmap%204.png',title:'这是主标题',desc:'这是描述 好多个字的描述'}
          ]
    }
  },

  components: {
    card
  },

  methods: {

  },

  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style scoped>
.ilike-container{
    min-height: 100%;
    background: #000;
}
.like-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.like-list .like-item{
    width: 248rpx;
    height: 248rpx;
    margin-bottom: 3rxp;
}
</style>
