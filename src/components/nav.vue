<!-- <template>
    <div class='nav'>
       <div class="nav-item">
         <a href="/pages/index/index" class="nav-text  active">首页</a>
       </div>
       <div class="nav-item">
         <a href="/pages/depth/index" class="nav-text">深度</a>
       </div>
       <div class="nav-item">
         <a href="/pages/find/index" class="nav-text">发现</a>
       </div>
       <div class="nav-item">
         <a href="/pages/mine/index" class="nav-text">我的</a>
       </div>
   </div>
</template>

<script>
export default {
  props: []
}
</script>

<style>

</style> -->

<template>
  <div>
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
