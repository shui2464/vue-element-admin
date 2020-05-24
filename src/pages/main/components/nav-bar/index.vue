<template>
  <div class="nav-bar">
    <el-tag 
      class="el-tag-active"
      closable
      v-for="(tag, key) in mapActiveRoute"
      :key="key"
    >
      <i class="el-tag-active-circle"></i>
      {{ tag.name }}
    </el-tag>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'nav-bar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['mapActiveRoute'])
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