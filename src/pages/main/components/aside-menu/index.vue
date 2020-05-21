<template>
  <el-menu class="aside-menu" active-text-color='#000000'>
    <el-submenu class="aside-sub-menu" index='submenu.name' v-for="submenu in menuItemList" :key="submenu.name">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{submenu.meta && submenu.meta.title}}</span>
      </template>
      <el-menu-item
        class="aside-menu-item"
        :index="item.name"
        v-for="item in submenu.children"
        :key="item.name"
      >{{ item.meta && item.meta.title }}</el-menu-item>
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
  mounted() {
    console.log(this.menuItemList)
  },
  computed: {
    ...mapGetters({
      menuItemList: 'permissionRoutes'
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