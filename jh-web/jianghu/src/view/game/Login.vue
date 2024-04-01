<script>
import Cookies from "js-cookie";
import {city, people, scene, world} from "@/http/api.js";
import {mapState} from "vuex";

export default {
  name: "Login",
  data() {
    return {
      isLogin: false,
    }
  },
  computed: {
    ...mapState({
      coreContext: state => state.coreContext,
    })
  },
  methods: {
    getPeople() {
      this.coreContext.currentPeople = this.coreContext.peopleMap.get(Cookies.get("peopleId"))
      this.$store.commit('updateContext', this.coreContext)

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
        console.log("登录了，当前用户id", peopleId)
        this.getPeople().then(() => {
          this.playGame()
        })
      } else {
        console.log("没有登录")
        // this.$router.push({name: 'login'})
      }
    },
    playGame() {
      const currentPeople = this.coreContext?.currentPeople;
      if (!currentPeople){
        return
      }
      if (currentPeople.currentCityObj && currentPeople.currentCityObj.id) {
        this.$router.push({
          name: 'gameScene',
          params: {worldId: currentPeople.currentWorldObj.id, cityId: currentPeople.currentCityObj.id}
        })
      } else if (currentPeople.currentWorldObj && currentPeople.currentWorldObj.id) {
        this.$router.push({name: 'gameCity', params: {worldId: currentPeople.currentWorldObj.id}})
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
    <!--    todo 通过user email 来查询用 再查询people-->
    <a-button v-if="!isLogin" @click="login">登录</a-button>
    <a-button v-else @click="playGame">进入游戏</a-button>
  </div>
</template>

<style scoped>

</style>
