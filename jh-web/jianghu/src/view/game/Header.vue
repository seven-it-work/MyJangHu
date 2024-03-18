<script>
import Cookies from "js-cookie";
import {city, people, scene, world} from "@/http/api.js";
import { mapState } from 'vuex';
import Fighting from "@/components/Fighting.vue";

export default {
  name: "Header",
  components: {Fighting},
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    ...mapState({
      peopleObj:state => state.peopleObj,
      fightData: state => state.fightData
    })
  },
  mounted() {
  },
  created() {
    this.$store.commit('fight',{
      currentPartner: [{id:1,name:"哈哈哈"}],
      enemy: [{id:2,name:"xixi"},{id:3,name:"qiqi"}],
    })
  },
}
</script>

<template>
  <div>
    <Fighting ></Fighting>
  </div>
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
