<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style style="scss">
@import 'element-plus/dist/index.css';

:root {
  --shadow-color: rgba(191, 187, 222, 1);
  --special-color: rgba(128, 111, 222, 1);

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
