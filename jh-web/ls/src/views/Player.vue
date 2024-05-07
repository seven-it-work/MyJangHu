<script lang="ts">
import {defineComponent} from 'vue'
import Tavern from "../components/Tavern.vue";
import PlayerHandler from "../components/PlayerHandler.vue";
import Battlefield from "../components/Battlefield.vue";
import PlayerInfo from "../components/PlayerInfo.vue";
import {PropType} from "@vue/runtime-core";
import PlayObj from "../objs/PlayObj";


export default defineComponent({
  name: "Player",
  components: {PlayerInfo, Battlefield, PlayerHandler, Tavern},
  props: {
    playObj: {
      type: Object as PropType<PlayObj>,
      required: true,
    },
  },
  data() {
    return {
      activeKey: ['1', '2', '3', '4',],
    }
  },
})
</script>

<template>
  <div>
    <a-collapse v-model:activeKey="activeKey" collapsible="icon">
      <Tavern :play-obj="playObj" key="1"></Tavern>
      <Battlefield :play-obj="playObj" key="2"></Battlefield>
      <PlayerHandler :play-obj="playObj" key="3"></PlayerHandler>
      <PlayerInfo :play-obj="playObj" key="4"></PlayerInfo>
    </a-collapse>
  </div>
</template>

<style scoped>

</style>
