<script lang="ts" setup>
import { Fold } from "@element-plus/icons-vue";
</script>

<template>
  <div class="container">
    <div class="flex items-center column enlarge-animation">
      <h1 class="fw-400 fs-28">ZH-Blog</h1>
      <div class="mt-20 mb-20 slogan">
        只要朝着一个方向努力，一切都会变的得心应手
      </div>
      <div class="goBlog">Enter Blog</div>
    </div>
  </div>
  <Fold class="menu-icon" />
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
  z-index: 10;
  top: 40px;
  right: 60px;
  width: 32px;
  height: 32px;
  color: #fff;
  cursor: pointer;
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
