<script lang="ts" setup>
import { ElTimeline, ElTimelineItem, ElCard, ElDivider } from 'element-plus';
import { HistoryDataList } from '@/constant/historyData';

const handleOpen = () => {};

const openLearning = (path: string | undefined) => {
  if (!path) return;
  window.open(`https://super-zihao.github.io/learning/#/${path}`);
};
</script>

<template>
  <div :style="{ backgroundColor: '#2e2e2e' }">
    <header class="flex items-center justify-between p-20 header" style="border-bottom: 1px solid #cecece">
      <div>Logo</div>
      <div>知识里程碑</div>
    </header>
    <main class="flex justify-center p-32">
      <ElTimeline>
        <ElTimelineItem center type="warning" placement="top" v-for="item in HistoryDataList" :key="item.id">
          <ElCard class="font-wrap" @click="handleOpen">
            <div class="flex items-center">
              <div :class="`${item.path ? 'title' : ''}`" v-for="title in item.titles" :key="title" @click="openLearning(item.path)">{{ title }}</div>
            </div>
            <div class="text">{{ item.synopsis }}</div>
          </ElCard>
        </ElTimelineItem>
      </ElTimeline>
    </main>
  </div>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  z-index: 10;
}
main {
  width: 90%;
  padding-top: 80px;
  margin: 0 auto;
  background-color: #ffffff;
  min-height: calc(100vh);
  overflow-y: auto;
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
  ::v-deep(.el-card__body) {
    padding: 8px;
  }
  ::v-deep(.el-timeline-item__timestamp) {
    font-size: 16px !important;
  }
  ::v-deep(.el-timeline) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  // ::v-deep(.el-timeline-item) {
  // display: inline-block;
  // }
}
</style>
