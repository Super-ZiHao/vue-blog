<script lang="ts" setup>
defineProps<{ open: boolean }>();
</script>

<template>
  <div class="fixed w-full h-full" style="z-index: 9px; top: 0; left: 0">
    <div :class="`mask ${open ? 'show' : ''}`"></div>
    <div :class="`main ${open ? 'open' : ''}`"></div>
    <ul :class="`menu ${open ? 'show' : ''}`">
      <li class="menu-item">首页</li>
      <li class="menu-item">知识里程碑</li>
      <li class="menu-item">关于我</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.main {
  position: fixed;
  top: -50%;
  right: -70%;
  width: 100%;
  height: 200%;
  background-color: #fff;
  transform: translateX(100%) rotate(12deg);
  @media screen and (max-width: 700px) {
    transform: translateX(100%) rotate(0deg);
  }
  transition: 0.4s all;
  &.open {
    transform: translateX(0) rotate(12deg);
    @media screen and (max-width: 700px) {
      transform: translateX(-10%) rotate(0deg);
    }
  }
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba($color: #000000, $alpha: 0.3);
  transition: 0.4s all;
  &.show {
    opacity: 1;
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
</style>
