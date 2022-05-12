<script lang="ts" setup>
import { withDefaults, VueElement } from 'vue';

withDefaults(
  defineProps<{
    color: string;
    size: number;
    time: string | VueElement;
  }>(),
  {
    color: '#f0a22d',
    size: 16,
    time: '2022-03-03'
  }
);
</script>

<template>
  <div class="time-line relative flex items-center justify-start pb-20" :style="{ marginLeft: 100 }">
    <div class="time no-wrap">{{ time }}</div>
    <div class="r mr-20 flex-shrink" :style="{ width: `${size}px`, height: `${size}px`, backgroundColor: color }"></div>
    <div class="line"></div>
    <div class="flex items-center font-wrap">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.time-line {
  margin-left: 100px;
  & + .time-line {
    .line {
      height: 100%;
      transform: translate(-50%, 0%);
    }
  }
  &:last-child {
    .line {
      transform: translate(-50%, -50%);
    }
  }
}
.r {
  position: relative;
  z-index: 1;
  border-radius: 50%;
}
.time {
  position: absolute;
  right: calc(100% + 20px);
}
.line {
  position: absolute;
  left: 8px;
  width: 1px;
  height: 50%;
  background-color: red;
  transform: translate(-50%, 50%);
}
</style>
