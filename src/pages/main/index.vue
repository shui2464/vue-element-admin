<template>
  <div>
    <el-container>
        <el-aside :width="isCollapse ? '60px' : '200px'" class="wrapper-aside">
          <LogoComponent />
          <AsideMenu />
        </el-aside>
      <el-container>
        <el-header class="wrapper-header">
          <HeaderNav />
        </el-header>
        <el-main class="wrapper-main">
          <NavBar />
          <transition name='main-wrapper'>
            <router-view />
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LogoComponent from './components/logo-view'
import AsideMenu from './components/aside-menu'
import HeaderNav from './components/header-nav'
import NavBar from './components/nav-bar'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    LogoComponent,
    AsideMenu,
    HeaderNav,
    NavBar
  },
  mounted() {
    // 第一次刷新页面，查看当前路由是否在激活的路由中
    this.pushRoute()
  },
  data () {
    return {
      main: ''
    }
  },
  computed: {
    ...mapState({
      isCollapse: state => state.global.isCollapse
    })
  },
  methods: {
    pushRoute() {
      this.$store.dispatch('activeRoute/pushRoute', this.$route)
    }
  }
}
</script>

<style lang="less">
@import url('@/assets/less/theme.less');
  .wrapper-header {
    background-color: @headerBg;
    color: @headerTex;
  }
  .wrapper-aside {
    overflow: hidden;
    background-color: @asideBg;
    color: @asideTex;
    transition: width linear .2s;
  }
  .wrapper-main {
    height: calc(100vh - 60px);
    overflow: hidden;
  }
</style>