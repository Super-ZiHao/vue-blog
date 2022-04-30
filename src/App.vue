<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style style="scss">
@import 'element-plus/dist/index.css';

:root {
  --bg-color: rgba(255, 255, 255, 1);
  --text-color: rgba(48, 43, 82, 1);
  --text-soft-color: rgba(74, 71, 99, 1);
  --text-strong-color: rgba(74, 74, 74, 1);
  --subtle-color: rgba(249, 249, 253, 1);
  --border-color: rgba(231, 229, 247, 1);
  --shadow-color: rgba(191, 187, 222, 1);
  --input-color: rgba(255, 255, 255, 1);
  --outline-color: rgba(191, 187, 229, 1);
  --mark-color: rgba(128, 111, 222, 0.08);
  --special-color: rgba(128, 111, 222, 1);
  --special-bg-color: rgba(132, 116, 223, 1);
  --special-text-color: rgba(255, 255, 255, 1);
  --special-shadow-color: rgba(89, 86, 115, 1);
  --special-mark-color: rgba(255, 255, 255, 0.08);
  --light-color: rgba(244, 243, 252, 1);
  --dark-color: rgba(71, 66, 106, 1);
  --text-color-rgb: 48, 43, 82;
  --bg-color-rgb: 255, 255, 255;
  --subtle-color-rgb: 249, 249, 253;
  --special-color-rgb: 128, 111, 222;
  --special-text-color-rgb: 255, 255, 255;
  --special-bg-color-rgb: 132, 116, 223;
  --shadow-color-rgb: 191, 187, 222;
  --special-shadow-color-rgb: 89, 86, 115;
  --outline-color-rgb: 191, 187, 229;
  --dark-color-rgb: 71, 66, 106;
  --light-color-rgb: 244, 243, 252;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: rgba(32, 32, 32, 1);
    --text-color: rgba(223, 222, 228, 1);
    --text-soft-color: rgba(187, 187, 193, 1);
    --text-strong-color: rgba(187, 187, 187, 1);
    --subtle-color: rgba(36, 36, 41, 1);
    --border-color: rgba(48, 47, 60, 1);
    --shadow-color: rgba(0, 0, 0, 1);
    --input-color: rgba(28, 28, 28, 1);
    --outline-color: rgba(159, 151, 215, 1);
    --mark-color: rgba(139, 129, 206, 0.08);
    --special-color: rgba(139, 129, 206, 1);
    --special-bg-color: rgba(99, 84, 182, 1);
    --special-text-color: rgba(223, 222, 228, 1);
    --special-shadow-color: rgba(30, 29, 41, 1);
    --special-mark-color: rgba(223, 222, 228, 0.08);
    --light-color: rgba(212, 209, 237, 1);
    --dark-color: rgba(53, 50, 70, 1);
    --text-color-rgb: 223, 222, 228;
    --bg-color-rgb: 32, 32, 32;
    --subtle-color-rgb: 36, 36, 41;
    --special-color-rgb: 139, 129, 206;
    --special-text-color-rgb: 223, 222, 228;
    --special-bg-color-rgb: 99, 84, 182;
    --shadow-color-rgb: 0, 0, 0;
    --special-shadow-color-rgb: 30, 29, 41;
    --outline-color-rgb: 159, 151, 215;
    --dark-color-rgb: 53, 50, 70;
    --light-color-rgb: 212, 209, 237;
  }
}

@media (prefers-color-scheme: light) and (prefers-contrast: more) {
  :root {
    --bg-color: rgba(255, 255, 255, 1);
    --text-color: rgba(32, 28, 58, 1);
    --text-soft-color: rgba(32, 30, 45, 1);
    --text-strong-color: rgba(74, 74, 74, 1);
    --subtle-color: rgba(249, 249, 253, 1);
    --border-color: rgba(182, 179, 206, 1);
    --shadow-color: rgba(156, 153, 184, 1);
    --input-color: rgba(255, 255, 255, 1);
    --outline-color: rgba(175, 169, 222, 1);
    --mark-color: rgba(98, 73, 209, 0.16);
    --special-color: rgba(98, 73, 209, 1);
    --special-bg-color: rgba(102, 78, 210, 1);
    --special-text-color: rgba(255, 255, 255, 1);
    --special-shadow-color: rgba(33, 32, 45, 1);
    --special-mark-color: rgba(255, 255, 255, 0.16);
    --light-color: rgba(244, 243, 252, 1);
    --dark-color: rgba(71, 68, 95, 1);
    --text-color-rgb: 32, 28, 58;
    --bg-color-rgb: 255, 255, 255;
    --subtle-color-rgb: 249, 249, 253;
    --special-color-rgb: 98, 73, 209;
    --special-text-color-rgb: 255, 255, 255;
    --special-bg-color-rgb: 102, 78, 210;
    --shadow-color-rgb: 156, 153, 184;
    --special-shadow-color-rgb: 33, 32, 45;
    --outline-color-rgb: 175, 169, 222;
    --dark-color-rgb: 71, 68, 95;
    --light-color-rgb: 244, 243, 252;
  }
}

@media (prefers-color-scheme: dark) and (prefers-contrast: more) {
  :root {
    --bg-color: rgba(32, 32, 32, 1);
    --text-color: rgba(239, 239, 241, 1);
    --text-soft-color: rgba(239, 239, 240, 1);
    --text-strong-color: rgba(187, 187, 187, 1);
    --subtle-color: rgba(36, 36, 41, 1);
    --border-color: rgba(81, 80, 90, 1);
    --shadow-color: rgba(0, 0, 0, 1);
    --input-color: rgba(28, 28, 28, 1);
    --outline-color: rgba(156, 148, 214, 1);
    --mark-color: rgba(175, 169, 222, 0.16);
    --special-color: rgba(175, 169, 222, 1);
    --special-bg-color: rgba(80, 64, 160, 1);
    --special-text-color: rgba(239, 239, 241, 1);
    --special-shadow-color: rgba(0, 0, 0, 1);
    --special-mark-color: rgba(239, 239, 241, 0.16);
    --light-color: rgba(228, 226, 244, 1);
    --dark-color: rgba(53, 51, 68, 1);
    --text-color-rgb: 239, 239, 241;
    --bg-color-rgb: 32, 32, 32;
    --subtle-color-rgb: 36, 36, 41;
    --special-color-rgb: 175, 169, 222;
    --special-text-color-rgb: 239, 239, 241;
    --special-bg-color-rgb: 80, 64, 160;
    --shadow-color-rgb: 0, 0, 0;
    --special-shadow-color-rgb: 0, 0, 0;
    --outline-color-rgb: 156, 148, 214;
    --dark-color-rgb: 53, 51, 68;
    --light-color-rgb: 228, 226, 244;
  }
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
