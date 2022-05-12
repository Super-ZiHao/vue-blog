<script lang="ts" setup>
import { onMounted } from 'vue'
import { demoAnimation } from '@/utils/scroll';
onMounted(() => {
  demoAnimation()
})
</script>

<template>
<div id="container">
  <div class="main">

  </div>
</div>
</template>

<style lang="scss" scoped>
#container {
  background-color: #111111;
  width: 100%;
  .main {
    height: 100vh;
  }
}
.box {
  width: 100%;
  height: 70vh;
  background-color: #111111;
  .square {
    width: 100px;
    height: 100px;
    background-color: orangered;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
