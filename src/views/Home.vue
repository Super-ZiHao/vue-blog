<script lang="ts" setup>
import Menu from '@/components/Menu.vue';
import IconClose from '@/components/IconClose.vue';
import gasp from 'gsap'

import { ref } from 'vue';

const isOpen = ref(false);
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

function appscroll(e) {
  gasp.to('.title', {
    x: document.documentElement.scrollTop,
  });
}
document.body.onscroll = appscroll;
</script>

<template>
  <div :style="{ height: '200vh' }">
    <div class="flex items-center column text-main enlarge-animation">
      <h1 class="fw-400 fs-28 no-wrap">ZH-Blog</h1>
      <div class="mt-20 mb-20 slogan text-center">只要朝着一个方向努力，一切都会变的得心应手</div>
      <div class="goBlog no-wrap">Enter Blog</div>
    </div>
    <div class="title color-white fs-32 fixed">123</div>
  </div>
  <IconClose @click="toggleOpen" :isClose="isOpen" :size="60" />
  <Menu :isOpen="isOpen" :close-time="400" />
</template>

<style lang="scss" scoped>
.text-main {
  position: fixed;
  top: 50%;
  left: 50%;
  color: #fff;
  transform-origin: left top;
  transform: scale(0) translate(-50%, -50%);
}

.slogan {
  letter-spacing: 10px;
}

.goBlog {
  margin-top: 20px;
  font-size: 12px;
  padding: 10px 18px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #1e9fff;
  transition: all 0.2s;

  &:active {
    background-color: #1870b4;
  }

  &:hover {
    background-color: #1c83d0;
  }
}

.enlarge-animation {
  animation: enlarge 1.2s forwards;
}

@keyframes enlarge {
  0% {
    opacity: 0;
    transform: scale(0) translate(-50%, -50%);
  }

  100% {
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
}
</style>
