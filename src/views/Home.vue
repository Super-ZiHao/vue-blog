<script lang="ts" setup>
import Menu from '@/components/Menu.vue';
import IconClose from '@/components/IconClose.vue';
import { animation } from '@/utils/scroll';

import { ref, onMounted } from 'vue';

const isOpen = ref(false);
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
const goBlog = () => {
  open('/#/blog');
};

onMounted(() => {
  animation();
});
</script>

<template>
  <div>
    <div class="box layout-1 full-screen">
      <div class="layout-1-1 fixed">
        <div class="flex items-center column text-main enlarge-animation">
          <h1 class="fw-400 fs-28 no-wrap">ZH-Blog</h1>
          <div class="mt-20 mb-20 slogan text-center">路漫漫其修远兮,吾将上下而求索</div>
          <div class="goBlog no-wrap" @click="goBlog">前往博客</div>
        </div>
      </div>
    </div>
    <div class="box layout-2 full-screen"><div class="ba">123</div></div>
    <div class="box layout-2 full-screen"><div class="b">321</div></div>
  </div>
  <IconClose @click="toggleOpen" :isClose="isOpen" :size="50" />
  <Menu :show="isOpen" :close-time="400" />
</template>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100vh;
}
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

// 滚动动画所需
.full-screen {
  width: 100vw;
  height: 100vh;
  background-color: #151515;
}
</style>
