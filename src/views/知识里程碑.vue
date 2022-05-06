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
        <MessageBox background-color="rgb(121, 179, 226)">
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
  background-color: #2e2e2e;
  max-width: 1368px;
}
.time-line-box {
  padding: 30px;
}
.title {
  padding: 8px;
  border-radius: 8px;
  background-color: var(--special-bg-color);
  color: var(--special-text-color);
  &:hover {
    /* background-color: var(--subtle-color); */
    box-shadow: inset 0 0 10px var(--special-shadow-color);
  }
  &:active {
    box-shadow: inset 0 0 30px var(--special-shadow-color);
  }
  cursor: pointer;
}
</style>
