<template>
  <div>
    <Player :play-obj="playObj"></Player>
  </div>
</template>

<script lang="ts">
import PlayerVue from "./views/Player.vue";
import Taverns from "./objs/Taverns";
import SharedCardPool from "./objs/SharedCardPool";
import Player from "./objs/Player";
import ContextObj from "./objs/ContextObj";
import PlayObj from "./objs/PlayObj";

const sharedCardPool = new SharedCardPool(['恶魔', '机械']);

const playerList = []
for (let i = 0; i < 2; i++) {
  const taverns = new Taverns();
  var player = new Player("玩家" + i, taverns);
  player.currentGoldCoin = 999;
  playerList.push(player)
  // 初始刷新
  taverns.refresh({contextObj: new ContextObj(sharedCardPool)})
}
const playObj = new PlayObj(playerList, sharedCardPool);

export default {
  name: "App",
  components: {Player: PlayerVue},
  data() {
    return {
      playObj
    }
  }
}
</script>

<style scoped>

</style>
