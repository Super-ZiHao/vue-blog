<script lang="ts" setup>
import { ElDivider } from 'element-plus';
import { BlogModule, Article } from '@/constant/blog';
import { BlogTitleEnum, IconsEnum } from '@/constant/enum';
import { getTime } from '@/utils/index';
import TS from '@/components/TS.vue';
import CSS from '../components/CSS.vue';

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
      <div v-for="(item, index) in Article" :class="`relative item radius-12 p-8 ${index > 0 ? 'mt-16' : ''}`" :key="item.title">
        <div class="flex items-center fs-12 color-0">
          <div>{{ getTime(item.time) }}</div>
          <ElDivider v-if="item.subtitle" direction="vertical" />
          <div v-if="item.subtitle">{{ item.subtitle }}</div>
        </div>
        <div class="mt-8 fw-bold fs-18">
          {{ item.title }}
        </div>
        <div class="flex items-center justify-between">
          <div class="synopsis">
            <div class="mt-12 text">{{ item.synopsis }}</div>
            <div class="mt-12" v-if="item.front.length > 0">
              <span>前置：</span>
              <span v-for="(front, frontIndex) in item.front" :key="front.path">
                <ElDivider v-if="frontIndex > 0" direction="vertical" />
                <a :href="front.path" target="_blank">{{ front.title }}</a>
              </span>
            </div>
          </div>
          <TS v-if="item.icon === IconsEnum.TYPESCRIPT" />
          <CSS v-if="item.icon === IconsEnum.CSS" />
        </div>
      </div>
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
    background-color: var(--bg-color);
  }
  .synopsis {
    width: calc(100% - 116px);
    .text {
      text-indent: 2rem;
      font-size: 14px;
      color: #686868;
    }
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
    .item {
      position: relative;
    }
  }
}
</style>
