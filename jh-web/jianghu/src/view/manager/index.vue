<script>

export default {
  name: "index",
  components: {},
  methods: {},

  created() {
  }
}
</script>

<template>
  <div style="margin-left: 10px">
    <router-link :to="{name:'worldManager'}">世界管理</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>

</style>