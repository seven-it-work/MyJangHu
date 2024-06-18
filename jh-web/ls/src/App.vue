<template>
  <div>
    <!--    <FileGenerator2></FileGenerator2>-->
    <a-textarea v-model:value="saveInfo" show-count/>
    <a-button @click="reload">读取</a-button>
    <a-button type="primary" @click="save">保存</a-button>
    <a-button type="primary" @click="refresh">刷新</a-button>
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
import SaveUtils from "./utils/SaveUtils";
import FileGenerator2 from "./views/edit/FileGenerator2.vue";

const sharedCardPool = new SharedCardPool(['野兽', '恶魔', '鱼人', '野猪人', '酒馆法术', '中立']);

const playerList = []
for (let i = 0; i < 2; i++) {
  const taverns = new Taverns();
  const player = new Player("玩家" + i, taverns);
  player.currentGoldCoin = 999
  player.currentArmor = 99
  playerList.push(player)
  // 初始刷新
  taverns.refresh(new ContextObj(sharedCardPool))
}
const playObj = new PlayObj(playerList, sharedCardPool);

export default {
  name: "App",
  components: {FileGenerator2, Player: PlayerVue},
  data() {
    return {
      playObj,
      saveInfo: '{}',
      autoSave: 0,
    }
  },
  mounted() {
    // this.autoSave = setInterval(() => {
    //   // this.save()
    // }, 5000)
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
    refresh() {
      window.location.reload()
    },
  },
}
</script>

<style scoped>

</style>
