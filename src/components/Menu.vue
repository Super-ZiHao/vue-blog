<script lang="ts" setup>
import { defineProps, ref, watch } from 'vue';
const props = defineProps<{ isOpen: boolean; closeTime: number }>();
const isClose = ref(props.isOpen);

watch(props, newValue => {
  if (newValue.isOpen === true) {
    isClose.value = true;
  } else {
    setTimeout(() => {
      isClose.value = false;
    }, newValue.closeTime);
  }
});
</script>

<template>
  <div>
    <div v-if="isClose" :class="`mask ${isOpen ? 'show' : 'unShow'}`"></div>
    <div :class="`main ${isOpen ? 'open' : ''}`">
      <div class="main-bg"></div>
      <ul :class="`menu ${isOpen ? 'show' : ''}`">
        <li class="menu-item">首页</li>
        <li class="menu-item">知识里程碑</li>
        <li class="menu-item">关于我</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: 100vh;
  overflow: hidden;
  transition: 0.4s all;
  @media screen and (max-width: 1680px) {
    width: 40%;
  }
  @media screen and (max-width: 1280px) {
    width: 50%;
  }
  transform: translateX(100%);
  &.open {
    transform: translateX(0);
  }
}
.main-bg {
  position: absolute;
  width: 100%;
  height: 200%;
  left: 10%;
  top: -10%;
  background-color: #fff;
  transform: rotate(12deg);
  @media screen and (max-width: 600px) {
    transform: rotate(0deg);
  }
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.3);
  &.show {
    animation: maskAnimation 0.4s forwards;
  }
  &.unShow {
    animation: maskAnimation 0.4s forwards reverse;
  }
}

.menu {
  position: fixed;
  top: 50%;
  right: 30px;
  z-index: 10;
  transform: translateY(-50%);
  opacity: 0;
  transition: 0.2s all;

  &.show {
    opacity: 1;
  }
  .menu-item {
    color: #787a77;
    font-size: 24px;
    height: 40px;
  }
}

@keyframes maskAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
