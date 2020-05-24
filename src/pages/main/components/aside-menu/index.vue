<template>
  <div>
    <el-menu
      class="aside-menu"
      active-text-color="#303133"
      v-for="submenu in menuItemList"
      :key="submenu.name"
      :unique-opened="true"
      :router="true"
      :collapse="isCollapse"
      :default-active="$route.name"
      @select="handleSelectMenu"
    >
      <el-submenu class="aside-sub-menu" :index="submenu.name" v-if="submenu.children && !submenu.meta.isSingle">
        <template slot="title">
          <i :class="submenu.meta && submenu.meta.icon"></i>
          <span>{{submenu.meta && submenu.meta.title}}</span>
        </template>
        <el-menu-item
          class="aside-menu-item"
          :index="item.name"
          v-for="item in submenu.children"
          :key="item.name"
          :class="{'active-route': item.name === $route.name}"
        >{{ item.meta && item.meta.title }}</el-menu-item>
      </el-submenu>
      <el-menu-item 
        v-else
        :index="submenu.children[0].name"
        class="aside-menu-item"
        :class="{'active-route': submenu.name === $route.name}"
      >
        <template>
          <i :class="submenu.children[0].meta && submenu.children[0].meta.icon"></i>
          <span slot="title">{{submenu.children[0].meta && submenu.children[0].meta.title}}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "aside-menu",
  computed: {
    ...mapGetters({
      menuItemList: "permissionRoutes"
    }),
    isCollapse() {
      return this.$store.state.global.isCollapse
    }
  },
  methods: {
    doFilterRoute(index, indexPath) {
      const route = this.menuItemList.filter(n => n.name === indexPath[0] || n.name === '_' + indexPath[0])
      if (indexPath.length > 1) {
        return route[0].children.filter(n => n.name === index)[0]
      } else {
        return route[0].children[0]
      }
    },
    handleSelectMenu(index, indexPath) {
      this.$store.dispatch('activeRoute/pushRoute', this.doFilterRoute(index, indexPath))
    }
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
.active-route {
  color: #ffffff !important;
  background-color: @activeRoute;
}
</style>