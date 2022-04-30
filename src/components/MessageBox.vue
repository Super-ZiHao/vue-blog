<script lang="ts" setup>
import { withDefaults } from 'vue';
withDefaults(
  defineProps<{
    backgroundColor: string;
  }>(),
  {
    backgroundColor: 'white'
  }
);
</script>

<template>
  <div class="message" :style="{ backgroundColor }">
    <div class="text"><slot /></div>
    <div class="arrow">
      <div :style="{ backgroundColor }"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message {
  position: relative;
  padding: 8px;
  border-radius: 6px;
}
.text {
  position: relative;
  z-index: 1;
}
.arrow {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-10%, -50%);
  div {
    width: 20px;
    height: 20px;
    background-color: currentColor;
    transform: rotate(45deg);
  }
}
</style>
