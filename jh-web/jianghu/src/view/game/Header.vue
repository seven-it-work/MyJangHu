<script>
import Cookies from "js-cookie";
import {city, people, scene, world} from "@/http/api.js";
import { mapState } from 'vuex';

export default {
  name: "Header",
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    ...mapState({
      peopleObj:state => state.peopleObj,
    })},
  mounted() {
  },
  created() {
  }
}
</script>

<template>
  <div>
    玩家名称：{{ peopleObj.name }}
    <span v-if="peopleObj.currentWorldId" style="margin-right: 10px">当前所在地：</span>
    <span v-if="peopleObj.currentWorldId" style="margin-right: 10px">{{ peopleObj.currentWorld?.name }}</span>
    <span v-if="peopleObj.currentCityId" style="margin-right: 10px">->{{ peopleObj.currentCity?.name }}</span>
    <span v-if="peopleObj.currentSceneId" style="margin-right: 10px">->{{ peopleObj.currentScene?.name }}</span>
    <div>
      <router-link :to="{name:'gameWorld'}" >世界地图</router-link>
    </div>
  </div>
</template>

<style scoped>

</style>
