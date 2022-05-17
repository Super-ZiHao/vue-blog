<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { menuList, isBlogMenu } from '@/constant/menu';

// 是否显示
const props = defineProps<{ show: boolean; closeTime: number }>();
const isClose = ref(props.show);
watch(props, newValue => {
  if (newValue.show === true) {
    isClose.value = true;
  } else {
    setTimeout(() => {
      isClose.value = false;
    }, newValue.closeTime);
  }
});

// 路由
const router = useRouter();
const handleOpenPath = (path: string) => {
  const isOpen = !!isBlogMenu.find(item => item === path);
  // 判断是否打开一个新窗口
  if (isOpen) {
    sessionStorage.setItem('menu-path', path)
    window.open(`/#/blog/${path}`);
  } else {
    router.push(`?id=${path}`);
  }
};
</script>

<template>
  <div class="relative" style="z-index:3">
    <div :class="`mask ${show ? 'show' : 'unShow'}`" :style="{ display: isClose ? 'block' : 'none' }"></div>
    <div :class="`main ${show ? 'open' : ''}`">
      <div class="main-bg"></div>
      <ul :class="`menu ${show ? 'show' : ''}`">
        <li class="menu-item transition" v-for="item in menuList" :key="item.id" @click="handleOpenPath(item.path)"><span class="text">{{ item.title }}</span></li>
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
    animation: RmaskAnimation 0.4s forwards;
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
    display: flex;
    align-items: center;
    font-size: 24px;
    height: 40px;
    cursor: pointer;
    .text {
      position: relative;
      color: #787a77;
      transition: color 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 40%;
        width: 120%;
        height: 2px;
        background-color: #21c31c;
        transform: translate(-50%, -50%) scaleX(0);
        transform-origin: right;
        transition: transform 0.3s;
      }
      &:hover{
        color: #95a5a6;
        &::after {
          transform: translate(-50%, -50%) scaleX(1);
          transform-origin: left;
        }
      }
    }
    &:hover {
      color: #575857;
    }
    & + .menu-item {
      margin-top: 8px;
    }
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
@keyframes RmaskAnimation {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
