<script lang="ts">
import {defineComponent} from 'vue'
import Tavern from "../components/Tavern.vue";
import Taverns from "../objs/Taverns";
import SharedCardPool from "../objs/SharedCardPool";
import Player from "../objs/Player";
import ContextObj from "../objs/ContextObj";
import PlayerHandler from "../components/PlayerHandler.vue";
import Battlefield from "../components/Battlefield.vue";
import PlayerInfo from "../components/PlayerInfo.vue";

const taverns = new Taverns();
const sharedCardPool = new SharedCardPool(['恶魔']);
const player = new Player(taverns);
const contextObj = new ContextObj(player, sharedCardPool);
taverns.refresh(contextObj)

player.currentGoldCoin=999

export default defineComponent({
  name: "Player",
  components: {PlayerInfo, Battlefield, PlayerHandler, Tavern},
  data() {
    return {
      activeKey: ['1', '2', '3', '4',],
      contextObj,
    }
  },
})
</script>

<template>
  <div>
    <a-collapse v-model:activeKey="activeKey" collapsible="icon">
      <Tavern :context-obj="contextObj" key="1"></Tavern>
      <Battlefield :context-obj="contextObj" key="2"></Battlefield>
      <PlayerHandler :context-obj="contextObj" key="3"></PlayerHandler>
      <PlayerInfo :context-obj="contextObj" key="4"></PlayerInfo>
    </a-collapse>
  </div>
</template>

<style scoped>

</style>
