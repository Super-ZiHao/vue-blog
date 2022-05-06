<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style style="scss">
@import 'element-plus/dist/index.css';

:root {
  --bg-color: rgba(255,255,255, 1);
  --text-color: rgba(38,48,70, 1);
  --text-soft-color: rgba(68,74,90, 1);
  --text-strong-color: rgba(74,74,74, 1);
  --subtle-color: rgba(248,249,253, 1);
  --border-color: rgba(224,230,249, 1);
  --shadow-color: rgba(177,191,227, 1);
  --input-color: rgba(255,255,255, 1);
  --outline-color: rgba(174,192,238, 1);
  --mark-color: rgba(56,129,230, 0.08);
  --special-color: rgba(56,129,230, 1);
  --special-bg-color: rgba(58,133,236, 1);
  --special-text-color: rgba(255,255,255, 1);
  --special-shadow-color: rgba(79,91,121, 1);
  --special-mark-color: rgba(255,255,255, 0.08);
  --light-color: rgba(240,243,254, 1);
  --dark-color: rgba(61,70,94, 1);
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
