<script>
import Cookies from "js-cookie";
import Header from "@/view/game/Header.vue";

export default {
  name: "index",
  components: {Header},
  methods: {
    checkIsLogin() {
      this.$router.push({name: "login"})
    }
  },
  created() {
    this.checkIsLogin()
  },
}
</script>

<template>
  <Header></Header>
  <router-view></router-view>
</template>

<style scoped>

</style>
