<script lang="ts" setup>
const props = defineProps<{
  size: number;
  isClose: boolean;
}>();
</script>

<template>
  <div :class="`menu-icon ${props.isClose ? 'open' : ''}`" :style="{ width: `${props.size}px`, height: `${props.size}px` }"><span></span></div>
</template>

<style lang="scss" scoped>
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
  cursor: pointer;
  transition: all 0.3s;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 60%;
    height: 2.5px;
    background-color: #fff;
    transition: all 0.3s;
  }
  span {
    position: absolute;
    width: 60%;
    height: 2.5px;
    background-color: #fff;
    transition: all 0.3s;
  }
  &::before {
    top: 30%;
  }
  &::after {
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
    &::before {
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
    span {
      width: 0;
    }
    &::after {
      bottom: 50%;
      transform: translateY(50%) rotate(-45deg);
    }
  }
}
</style>
