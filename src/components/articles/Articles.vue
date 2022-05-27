<script lang="ts" setup>
import { ElDivider } from 'element-plus';
import { ConstantArticle } from '@/constant/blog';
import { getTime } from '@/utils/index';
import { IconsEnum } from '@/constant/enum';
import TS from './TS.vue';
import CSS from './CSS.vue';

// 打开文章
const handleOpenArticle = (path: string | null) => {
  if (!(typeof path === 'string')) return;
  open(`https://super-zihao.github.io/learning/#/article/${path}`);
};
</script>

<template>
  <div v-for="(item, index) in ConstantArticle" :class="`relative item radius-12 p-8 ${index > 0 ? 'mt-16' : ''}`" :key="item.title">
    <div :class="`${!(typeof item.path === 'string') ? 'cd' : 'cp'}`" @click="handleOpenArticle(item.path)">
      <div class="flex items-center fs-12 color-0">
        <div>{{ getTime(item.time) }}</div>
        <ElDivider v-if="item.subtitle" direction="vertical" />
        <div v-if="item.subtitle">{{ item.subtitle }}</div>
      </div>
      <div class="mt-8 mb-12 fw-bold fs-18">
        {{ item.title }}
      </div>
      <div class="flex items-center justify-between">
        <div class="synopsis">
          <div class="text">{{ item.synopsis }}</div>
        </div>
        <TS v-if="item.icon === IconsEnum.TYPESCRIPT" />
        <CSS v-if="item.icon === IconsEnum.CSS" />
      </div>
    </div>
    <div class="mt-12" v-if="item.front.length > 0">
      <span>前置：</span>
      <span v-for="(front, frontIndex) in item.front" :key="front.path">
        <ElDivider v-if="frontIndex > 0" direction="vertical" />
        <a :href="front.path" target="_blank">{{ front.title }}</a>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
