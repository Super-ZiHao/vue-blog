<script lang="ts" setup>
import { BlogModule } from '@/constant/blog'
import { BlogTitleEnum } from '@/constant/enum'


const handleGoPath = (path: string | undefined) => {
  if (!path) return
  open(path);
}
</script>

<template>
  <div class="box">
    <aside>
      <div v-for="item, index in BlogModule" :class="`left-item radius-8 ${index > 0 ? 'mt-16' : ''}`">
        <div class="title p-8">{{ item.title }}</div>
        <ul  class="list p-8 fs-14">
          <li class="flex items-center justify-between pt-4 pb-4" v-for="listItem, listIndex in item.list">
            <span class="text cp no-wrap overflow-hidden ellipsis" :title="listItem.text" :style="{width: item.title !== BlogTitleEnum.MEI_RI_YI_WEN ? '100%' : '65%'}" @click="handleGoPath(listItem.path)">{{ listIndex + 1 }}、{{ listItem.text }}</span>
            <span>{{ listItem?.time }}</span>
          </li>
        </ul>
      </div>
    </aside>
    <div class="main radius-8 ml-16"></div>
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
  background-color: #000;
}


</style>
