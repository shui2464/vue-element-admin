<template>
  <div class="nav-bar">
    <el-tag 
      :class="{ 'el-tag-active': route.name === currentRoute.name }"
      :closable="!route.meta.lockNavbar"
      v-for="(route, key) in mapActiveRoute"
      :key="key"
      @click="handleClickTag(route)"
      @close="handleCloseTag(route)"
    >
      <i class="el-tag-active-circle"></i>
      {{ route.meta && route.meta.title }}
    </el-tag>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'nav-bar',
  data() {
    return {
      currentRoute: null
    }
  },
  watch: {
    $route(route) {
      this.currentRoute = route
    },
    mapActiveRoute(list) {
      const len = list.length
      if (len) {
        this.currentRoute = list[len - 1]
      }
    }
  },
  mounted() {
    this.currentRoute = this.$route
  },
  computed: {
    ...mapGetters(['mapActiveRoute'])
  },
  methods: {
    handleClickTag(route) {
      this.$router.push(route.path)
    },
    handleCloseTag(route) {
      this.$store.dispatch('activeRoute/deleteRoute', route)
    }
  }
}
</script>

<style lang='less'>
  .nav-bar {
    height: 30px;
    padding: 0 20px;
    line-height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #E3BB92;
  }
  .el-tag-active-circle {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #ffffff;
    border-radius: 50%;
    margin-right: 3px;
  }
</style>