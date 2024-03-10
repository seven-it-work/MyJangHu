<script>
import Cookies from "js-cookie";
import {city, scene, world} from "@/http/api.js";

export default {
  name: "Header",
  data() {
    return {
      peopleObj: {
        currentWorld: {},
        currentCity: {},
        currentScene: {},
      }
    }
  },
  created() {
    const peopleObj = Cookies.get("peopleObj")
    if (!peopleObj) {
      this.$router.push({name: "login"})
    } else {
      this.peopleObj = JSON.parse(peopleObj)
      if (this.peopleObj.currentWorldId) {
        world.getById(this.peopleObj.currentWorldId).then(res => {
          this.peopleObj.currentWorld = res
        })
      }
      if (this.peopleObj.currentCityId) {
        city.getById(this.peopleObj.currentCityId).then(res => {
          this.peopleObj.currentCity = res
        })
      }
      if (this.peopleObj.currentSceneId) {
        scene.getById(this.peopleObj.currentSceneId).then(res => {
          this.peopleObj.currentScene = res
        })
      }
    }
  }
}
</script>

<template>
  <div>
    玩家名称：{{ peopleObj.name }}
    <span v-if="peopleObj.currentWorldId" style="margin-right: 10px">当前所在地：</span>
    <span v-if="peopleObj.currentWorldId" style="margin-right: 10px">{{ peopleObj.currentWorld.name }}-></span>
    <span v-if="peopleObj.currentCityId" style="margin-right: 10px">{{ peopleObj.currentCity.name }}-></span>
    <span v-if="peopleObj.currentSceneId" style="margin-right: 10px">{{ peopleObj.currentScene.name }}</span>
  </div>
</template>

<style scoped>

</style>