<template>
  <el-breadcrumb separator="/">
    <transition-group name='breadcrumb'>
      <el-breadcrumb-item v-for="crumb in crumbList" :to='crumb.path' :replace="true" :key="crumb.name">{{ crumb.meta && crumb.meta.title }}</el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'breadcrumb',
  data() {
    return {
      crumbList: []
    }
  },
  watch: {
    $route () {
      this.getCrumbList()
    }
  },
  mounted() {
    this.getCrumbList()
  },
  methods: {
    getCrumbList() {
      let matched = this.$route.matched.filter(route => route.meta && route.meta.title)
      const first = matched[0]

      if (first.name !== 'dashboard') {
        matched = [{ path: '/dashboard', name: 'dashboard', meta: { title: '首页', icon: 'el-icon-date' }}].concat(matched)
      }
      this.crumbList = matched
    }
  }
}
</script>