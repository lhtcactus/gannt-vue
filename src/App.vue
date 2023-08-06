<template>
  <div class="box">
    <div class="left-box">菜单</div>
    <div class="top-box">顶部导航兰</div>
    <div class="content-box">内容</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100vh;

  .left-box {
    top: 0px;
    left: 0px;
    position: fixed;
    width: $left-box-width;
    height: 100vh;
    background: steelblue;
  }

  .top-box {
    position: fixed;
    width: calc(100% - $left-box-width);
    height: $top-box-height;
    background: chocolate;
    top: 0px;
    left: $left-box-width;
  }

  .content-box {
    position: absolute;
    top: $top-box-height;
    left: $left-box-width;
    width: calc(100% - $left-box-width);
    height: calc(100vh - $top-box-height);
    background: cyan;
  }
}
</style>
