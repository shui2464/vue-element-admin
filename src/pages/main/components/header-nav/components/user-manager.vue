<template>
  <el-dropdown trigger="click">
    <div style="width: 40px;height: 40px;background-color: #fff;"></div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>个人中心</el-dropdown-item>
      <el-dropdown-item>退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'user-manager'
}
</script>