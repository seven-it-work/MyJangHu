<script>
import { mapState } from 'vuex';
import Fighting from "@/components/Fighting.vue";
import core from "@/core/core";

export default {
  name: "Header",
  components: {Fighting},
  data() {
    return {
      timeStr:"",
      timeStrInterval:null,
    }
  },
  methods: {
  },
  computed: {
    ...mapState({
      currentPeople:state => state.coreContext.currentPeople,
      coreContext:state => state.coreContext,
      fightData: state => state.fightData
    })
  },
  created() {
  },
  mounted() {
    // console.log("运行")
    core.run()
    this.timeStrInterval=setInterval(()=>{
      this.timeStr=this.coreContext.systemTimeObj.getStrFormat()
    },1000)
  },
  unmounted() {
    // console.log("关闭")
    core.stop()
    if (this.timeStrInterval){
      clearInterval(this.timeStrInterval)
    }
  }
}
</script>

<template>
  <div v-if="currentPeople">
    <span style="margin-right: 10px">当前游戏时间：{{timeStr}}</span>
    <span style="margin-right: 10px">玩家名称：{{ currentPeople?.getName() }}</span>
    <span v-if="currentPeople.currentWorldObj" style="margin-right: 10px">当前所在地：</span>
    <span v-if="currentPeople.currentWorldObj" style="margin-right: 10px">{{ currentPeople.currentWorldObj?.name }}</span>
    <span v-if="currentPeople.currentCityObj" style="margin-right: 10px">->{{ currentPeople.currentCityObj?.name }}</span>
    <span v-if="currentPeople.currentSceneObj" style="margin-right: 10px">->{{ currentPeople.currentSceneObj?.name }}</span>
    <div>
      <router-link :to="{name:'gameWorld'}" >世界地图</router-link>
    </div>
  </div>
</template>

<style scoped>

</style>
