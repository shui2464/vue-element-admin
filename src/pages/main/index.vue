<template>
  <div>
    <el-container>
      <el-header style='background-color: red'>Header</el-header>
      <el-containe>
        <el-aside width='200px'>Aside</el-aside>
        <el-main>Main</el-main>
      </el-containe>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      main: ''
    }
  }
}
</script>