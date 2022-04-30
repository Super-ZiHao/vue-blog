<script lang="ts" setup>
import { ElMenu, ElMenuItem } from 'element-plus'
import { HistoryDataList } from '@/constant/historyData';
import TimeLine from '@/components/TimeLine.vue';
import MessageBox from '@/components/MessageBox.vue';

const openLearning = (path: string | undefined) => {
  if (!path) return;
  window.open(`https://super-zihao.github.io/learning/#/${path}`);
};
</script>

<template>
  <div :style="{ backgroundColor: '#2e2e2e', overflow: 'hidden' }">
    <header class="flex items-center justify-between p-20 header" style="border-bottom: 1px solid #cecece">
      <div>Logo</div>
      <ElMenu mode="horizontal">
        <ElMenuItem index="1">123</ElMenuItem>
        <ElMenuItem index="2">123</ElMenuItem>
        <ElMenuItem index="3">知识里程碑</ElMenuItem>
      </ElMenu>
    </header>
    <main class="flex justify-center bg-white">
      <div class="flex column">
        <TimeLine v-for="item in HistoryDataList" :key="item.id" :time="item.time">
          <MessageBox background-color="#0096a4">
            <div :class="`transition ${item.path ? 'title' : ''}`" @click="openLearning(item.path)">{{ item.title }}</div>
          </MessageBox>
        </TimeLine>
      </div>
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
  margin: 80px auto 20px;
  padding: 30px 0;
  border-radius: 10px;
  min-height: calc(100vh - 100px);
  overflow-y: scroll;
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
}
</style>
