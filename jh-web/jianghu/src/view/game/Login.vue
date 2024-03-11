<script>
import Cookies from "js-cookie";
import {city, people, scene, world} from "@/http/api.js";

export default {
  name: "Login",
  data() {
    return {
      isLogin: false,
      peopleObj: {}
    }
  },
  methods: {
    getPeople() {
      return people.getById(Cookies.get("peopleId")).then(async (peopleData) => {
        const peopleObj = peopleData;
        if (peopleObj.currentWorldId) {
          await world.getById(peopleObj.currentWorldId).then(res => {
            peopleObj.currentWorld = res
          })
        }
        if (peopleObj.currentCityId) {
          await city.getById(peopleObj.currentCityId).then(res => {
            peopleObj.currentCity = res
          })
        }
        if (peopleObj.currentSceneId) {
          await scene.getById(peopleObj.currentSceneId).then(res => {
            peopleObj.currentScene = res
          })
        }
        this.peopleObj = peopleObj;
        this.$store.commit('updatePeople', peopleData)
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
        this.getPeople().then(()=>{
          this.playGame()
        })
      } else {
        this.$router.push({name: 'login'})
      }
    },
    playGame() {
       if (this.peopleObj.currentCity && this.peopleObj.currentCity.id) {
        this.$router.push({name: 'gameScene', params: {id: this.peopleObj.currentCity.id}})
      } else if (this.peopleObj.currentWorld && this.peopleObj.currentWorld.id){
        this.$router.push({name: 'gameCity', params: {id: this.peopleObj.currentWorld.id}})
      } else {
        this.$router.push({name: 'gameWorld'})
      }
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
