<script lang="ts" setup>
import { BlogModule } from '@/constant/blog';
import { BlogTitleEnum } from '@/constant/enum';

const handleGoPath = (path: string | undefined) => {
  if (!path) return;
  open(path);
};
</script>

<template>
  <div class="box">
    <aside>
      <div v-for="(item, index) in BlogModule" :class="`left-item radius-12 ${index > 0 ? 'mt-16' : ''}`" :key="item.title">
        <div class="title p-8">{{ item.title }}</div>
        <ul class="list p-8 fs-14">
          <li class="flex items-center justify-between pt-4 pb-4" v-for="(listItem, listIndex) in item.list" :key="listItem.time">
            <span class="text cp no-wrap overflow-hidden ellipsis" :title="listItem.text" :style="{ width: item.title !== BlogTitleEnum.MEI_RI_YI_WEN ? '100%' : '75%' }" @click="handleGoPath(listItem.path)"
              ><span class="ff-num">{{ listIndex + 1 }}、</span>{{ listItem.text }}</span
            >
            <span class="ff-num">{{ listItem?.time }}</span>
          </li>
        </ul>
      </div>
    </aside>
    <div class="main">
      <div v-for="(item, index) in [1, 2, 3, 4, 5]" :class="`item radius-12 ${index > 0 ? 'mt-16' : ''}`" :key="item"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  margin: 0 auto;
  max-width: 1368px;
}
.left-item {
  width: 300px;
  background-color: var(--bg-color);
  .title {
    border-bottom: 1px solid var(--border-color);
  }
  .list {
    overflow-y: auto;
    max-height: 350px;
  }
}

.main {
  flex: 1;
  margin-left: 16px;
  .item {
    width: 100%;
    height: 400px;
    max-height: 500px;
    background-color: var(--bg-color);
  }
}

@media screen and (max-width: 800px) {
  .box {
    display: block;
  }
  .left-item {
    width: 100%;
  }
  .main {
    margin-top: 16px;
    margin-left: 0;
  }
}
</style>
