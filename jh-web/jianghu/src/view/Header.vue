<script>
export default {
  name: "Header"
}
</script>

<template>
  <span style="margin-left: 10px">
    <router-link to="/">首页</router-link>
  </span>
  <span style="margin-left: 10px">
    <router-link to="/manager">管理</router-link>
  </span>
  <span style="margin-left: 10px">
    <router-link to="/game">游戏</router-link>
  </span>
</template>

<style scoped>

</style>