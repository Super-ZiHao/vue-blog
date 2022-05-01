<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style style="scss">
@import 'element-plus/dist/index.css';

:root {
  --bg-color: rgba(30,125,180, 1);
  --text-color: rgba(255,255,255, 1);
  --text-soft-color: rgba(255,255,255, 1);
  --text-strong-color: rgba(255,255,255, 1);
  --subtle-color: rgba(29,119,173, 1);
  --border-color: rgba(117,166,211, 1);
  --shadow-color: rgba(17,82,121, 1);
  --input-color: rgba(24,104,151, 1);
  --outline-color: rgba(127,190,245, 1);
  --mark-color: rgba(255,255,255, 0.08);
  --special-color: rgba(255,255,255, 1);
  --special-bg-color: rgba(255,255,255, 1);
  --special-text-color: rgba(30,125,180, 1);
  --special-shadow-color: rgba(113,161,204, 1);
  --special-mark-color: rgba(30,125,180, 0.08);
  --light-color: rgba(236,244,254, 1);
  --dark-color: rgba(49,73,95, 1);
  --text-color-rgb: 255,255,255;
  --bg-color-rgb: 30,125,180;
  --subtle-color-rgb: 29,119,173;
  --special-color-rgb: 255,255,255;
  --special-text-color-rgb: 30,125,180;
  --special-bg-color-rgb: 255,255,255;
  --shadow-color-rgb: 17,82,121;
  --special-shadow-color-rgb: 113,161,204;
  --outline-color-rgb: 127,190,245;
  --dark-color-rgb: 49,73,95;
  --light-color-rgb: 236,244,254;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'PingFang SC';
  box-sizing: border-box;
}
ul li {
  list-style: none;
}
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-thumb {
  background-color: #275ca2;
}

.transition {
  transition: all 0.3s linear;
}
</style>
