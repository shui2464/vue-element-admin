<template>
  <div>
    <el-container>
        <el-aside width='200px' class="wrapper-aside">
          <LogoComponent />
          <AsideMenu />
        </el-aside>
      <el-container>
        <el-header class="wrapper-header"></el-header>
        <el-main class="wrapper-main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LogoComponent from './components/logo-view'
import AsideMenu from './components/aside-menu'
export default {
  name: 'main',
  components: {
    LogoComponent,
    AsideMenu
  },
  data () {
    return {
      main: ''
    }
  },
  watch: {
    '$route' (val) {
      console.log(val)
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
    background-color: @asideBg;
    color: @asideTex;
  }
  .wrapper-main {
    height: calc(100vh - 60px);
  }
</style>