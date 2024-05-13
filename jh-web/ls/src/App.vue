<template>
  <div>
    <a-textarea v-model:value="saveInfo" show-count/>
    <a-button @click="reload">读取</a-button>
    <a-button type="primary" @click="save">保存</a-button>
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
import {message} from "ant-design-vue";
import SaveUtils from "./utils/SaveUtils";
import {deserialize, serialize} from "class-transformer";

const sharedCardPool = new SharedCardPool(['恶魔', '机械', '鱼人']);

const playerList = []
for (let i = 0; i < 2; i++) {
  const taverns = new Taverns();
  var player = new Player("玩家" + i, taverns);
  player.currentGoldCoin = 30
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
      playObj,
      saveInfo: '{}',
      autoSave: 0,
    }
  },
  mounted() {
    this.autoSave = setInterval(() => {
      // this.save()
    }, 5000)
  },
  destroyed() {
    if (this.autoSave) {
      clearInterval(this.autoSave)
    }
  },
  methods: {
    save() {
      this.saveInfo = SaveUtils.save(this.playObj);
    },
    reload() {
      this.playObj = SaveUtils.load(this.saveInfo);
    },
  },
}
</script>

<style scoped>

</style>
