<template>
  <div class="logo-wrapper">
    <span v-if="!isCollapse">logo view</span>
    <i class="el-icon-eleme" style="font-size: 32px" v-else></i>
  </div>
</template>

<script>
export default {
  name: 'logo-component',
  computed: {
    isCollapse() {
      return this.$store.state.global.isCollapse
    }
  }
}
</script>

<style lang="less">
  .logo-wrapper {
    height: 60px;
    color: #E3BB92;
    font-size: 24px;
    text-align: center;
    line-height: 60px;
    overflow: hidden;
    text-transform: uppercase;
  }
</style>