<script lang="ts" setup>
import TimeLine from '@/components/TimeLine.vue';
import MessageBox from '@/components/MessageBox.vue';
import { HistoryDataList } from '@/constant/historyData';

const openLearning = (path: string | undefined) => {
  if (!path) return;
  window.open(`https://super-zihao.github.io/learning/#/${path}`);
};
</script>

<template>
  <div class="main">
    <div class="time-line-box">
      <TimeLine v-for="item in HistoryDataList" :key="item.id" :time="item.time">
        <MessageBox background-color="#0096a4">
          <div :class="`transition ${item.path ? 'title' : ''}`" @click="openLearning(item.path)">{{ item.title }}</div>
        </MessageBox>
      </TimeLine>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  border-radius: 10px;
  margin: 0 auto;
  width: 90%;
  height: 100%;
  background-color: #e7eff8;
}
.time-line-box {
  padding: 30px;
}
.title {
  padding: 8px;
  border-radius: 8px;
  color: var(--special-color);
  &:hover {
    background-color: #e7eff8;
  }
  &:active {
    box-shadow: inset 0 0 30px var(--shadow-color);
  }
  cursor: pointer;
}
</style>
