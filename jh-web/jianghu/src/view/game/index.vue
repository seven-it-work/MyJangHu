<script>
import Cookies from "js-cookie";
import Header from "@/view/game/Header.vue";

export default {
  name: "index",
  components: {Header},
  methods: {
    checkIsLogin() {
      const peopleId = Cookies.get("peopleId");
      if (!peopleId) {
        this.$router.push({name: "login"})
      } else {
        this.$router.push({name: "gameWorld"})
      }
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