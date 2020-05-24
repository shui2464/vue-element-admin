<template>
  <div class="header-nav">
    <div class="header-nav-left">
      <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" class="control-icon" @click="toggleCollapse"></i>
      <!-- 面包屑 -->
      <BreadCrumb />
    </div>
    <div class="header-nav-right">
      <i class="el-icon-rank control-icon" @click="handleScreenFull"></i>
    </div>
  </div>
</template>

<script>
import BreadCrumb from './components/breadcrumb'
import screenfull from 'screenfull'
export default {
  name: 'header-nav',
  components: {
    BreadCrumb
  },
  computed: {
    isCollapse() {
      return this.$store.state.global.isCollapse
    }
  },
  methods: {
    toggleCollapse() {
      this.$store.dispatch('global/toggleCollapse')
    },
    handleScreenFull() {
      if (screenfull.isEnabled) {
        screenfull.toggle()
      } else {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style lang="less">
  .header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    line-height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    border-left: 1px solid #E3BB92;
    > div {
      width: 50%;
      display: flex;
    }
    .header-nav-left {
      justify-content: flex-start;
    }
    .header-nav-right {
      justify-content: flex-end;
    }
  }
  .control-icon {
    font-size: 22px;
    cursor: pointer;
    margin-right: 30px;
  }
</style>