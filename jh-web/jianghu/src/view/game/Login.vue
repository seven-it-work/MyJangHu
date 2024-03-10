<script>
import Cookies from "js-cookie";
import {people} from "@/http/api.js";

export default {
  name: "Login",
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    getPeople() {
      people.getById(Cookies.get("peopleId")).then(res => {
        Cookies.set("peopleObj", res, {
          expires: 30,
        });
      })
    },
    login() {
      const peopleId = '123'
      Cookies.set("peopleId", peopleId, {
        expires: 30,
      });
      this.getPeople()
      this.isLogin = true
    },
    checkIsLogin() {
      const peopleId = Cookies.get("peopleId");
      this.isLogin = !!peopleId
      if (this.isLogin) {
        this.getPeople()
      }
    },
    playGame() {
      this.$router.push({name: 'gameWorld'})
    },
  },
  created() {
    this.checkIsLogin()
  }
}
</script>

<template>
  <div>
    <a-button v-if="!isLogin" @click="login">登录</a-button>
    <a-button v-else @click="playGame">进入游戏</a-button>
  </div>
</template>

<style scoped>

</style>