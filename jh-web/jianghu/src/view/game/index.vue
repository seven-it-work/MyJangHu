<script>
import Cookies from "js-cookie";

export default {
  name: "index",
  components: {},
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
  }
}
</script>

<template>
  <div>头</div>
  <router-view></router-view>
</template>

<style scoped>

</style>