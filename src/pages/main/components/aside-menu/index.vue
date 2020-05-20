<template>
  <el-menu class="aside-menu" active-text-color='#000000'>
    <el-submenu class="aside-sub-menu" index='1'>
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item
        class="aside-menu-item"
        :index="item.idx"
        v-for="item in menuItemList"
        :key="item.idx"
      >{{ item.title }}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "aside-menu",
  data() {
    return {}
  },
  watch: {
    '$route' (val) {
      console.log(val)
    }
  },
  computed: {
    ...mapGetters({
      menuItemList: 'getRouterList'
    })
  }
};
</script>

<style lang="less">
@import url("@/assets/less/theme.less");
.aside-menu {
  background-color: @asideBg !important;
}
.aside-sub-menu {
  background-color: @asideBg !important;
}
.aside-menu-item {
  color: @asideItemColor !important;
}
</style>