<script lang="ts" setup>
import Menu from '@/components/Menu.vue';
import { ref } from 'vue';
const isOpen = ref(false);

const handleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="container">
    <div class="flex items-center column enlarge-animation">
      <h1 class="fw-400 fs-28 no-wrap">ZH-Blog</h1>
      <div class="mt-20 mb-20 slogan text-center">只要朝着一个方向努力，一切都会变的得心应手</div>
      <div class="goBlog no-wrap">Enter Blog</div>
    </div>
  </div>
  <div @click="handleOpen" :class="`menu-icon ${isOpen ? 'open' : ''}`"><span></span><span></span><span></span></div>
  <Menu :open="isOpen" />
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: white;
  background: #151515;
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

.menu-icon {
  position: fixed;
  top: 5%;
  right: 4%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s;
  span {
    position: absolute;
    width: 60%;
    height: 2.5px;
    background-color: #fff;
    transition: all 0.3s;
  }
  span:nth-of-type(1) {
    top: 30%;
  }
  span:nth-of-type(3) {
    bottom: 30%;
  }
  &:hover {
    background-color: #21c31c;
  }
  &.open {
    background-color: #dbdbd8;
    &:hover {
      background-color: #21c31c;
    }
    span:nth-of-type(1) {
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
    span:nth-of-type(2) {
      opacity: 0;
    }
    span:nth-of-type(3) {
      bottom: 50%;
      transform: translateY(50%) rotate(-45deg);
    }
  }
}

@keyframes enlarge {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
