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
    <header class="flex items-center justify-between pl-20 pr-20 header" style="border-bottom: 1px solid #cecece">
      <div class="no-wrap">my-blog</div>
      <ElMenu class="menu" mode="horizontal" router :default-active="currentPath" :unique-opened="true">
        <ElMenuItem v-for="item in blogMenuList" :key="item.id" :index="item.path">{{ item.title }}</ElMenuItem>
      </ElMenu>
    </header>
    <main style="background-color: #2e2e2e">
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
  padding-top: 20px;
  margin-top: 60px;
  min-height: calc(100vh - 60px);
}
.menu {
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: end;
  @media screen and (max-width: 600px){
    flex: 0;
    width: 64px;
  }
}
</style>
