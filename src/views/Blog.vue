<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ElMenu, ElMenuItem } from 'element-plus';
import { useBlogMenuList } from '@/utils/hooks';

const route = useRoute();
const currentPath = route.path.split('/')[2];
const blogMenuList = useBlogMenuList();
</script>

<template>
  <div>
    <header class="flex items-center justify-between pl-20 pr-20 header">
      <div></div>
      <ElMenu class="menu" mode="horizontal" router :default-active="currentPath" :unique-opened="true">
        <ElMenuItem v-for="item in blogMenuList" :key="item.id" :index="item.path">{{ item.title }}</ElMenuItem>
      </ElMenu>
    </header>
    <main style="background-color: #2e2e2e;">
      <router-view />
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
  z-index: 10;
  background-color: var(--bg-color);
}
::v-deep(.el-menu--horizontal) {
  border: none;
}
main {
  padding: 20px;
  margin-top: 60px;
  min-height: calc(100vh - 60px);
}
.menu {
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: end;
}
</style>
