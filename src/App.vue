<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style style="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "PingFang SC";
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
