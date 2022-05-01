<script lang="ts" setup>
import { ElMenu, ElMenuItem } from 'element-plus';
import { useBlogMenuList } from '@/utils/hooks';

const blogMenuList = useBlogMenuList();
</script>

<template>
  <div :style="{ backgroundColor: '#2e2e2e', overflow: 'hidden' }">
    <header class="flex items-center justify-between p-20 header" style="border-bottom: 1px solid #cecece">
      <div>Logo</div>
      <ElMenu mode="horizontal" router :ellipsis="false">
        <ElMenuItem v-for="item in blogMenuList" :key="item.id" :index="item.path">{{ item.title }}</ElMenuItem>
      </ElMenu>
    </header>
    <main>
      <router-view></router-view>
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
  margin-top: 80px;
  min-height: calc(100vh - 80px);
}
</style>
