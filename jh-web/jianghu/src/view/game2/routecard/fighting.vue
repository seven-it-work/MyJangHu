<template>
  <div>
    <a-row>
      <a-col :span="12">
        <PlayerInfo :player-obj="player.playerObj"></PlayerInfo>
      </a-col>
      <a-col :span="12">
        <PlayerInfo v-if="targetPlayer.property" :player-obj="targetPlayer"></PlayerInfo>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="3" v-for="skill in player.playerObj.property.skillMap.values()">
        <a-button @click="executionSkill(skill)">{{ skill.name }}</a-button>
      </a-col>
    </a-row>
    <footPage></footPage>
  </div>
</template>

<script>
import {mapState} from "vuex";
import PlayerInfo from "@/view/game2/components/PlayerInfo.vue";
import {randomList} from "@/random.js";
import FootPage from "@/view/game2/components/footPage.vue";
import {message} from 'ant-design-vue';
import * as htmlparser2 from "htmlparser2";
import {h} from 'vue'
import {dom2vNode} from "@/util/Utils.js";

export default {
  name: "fighting",
  components: {FootPage, PlayerInfo},
  props: {
    selectRouteCardId: String,
  },
  data() {
    return {
      targetPlayer: {}
    }
  },
  methods: {
    executionSkill(skill) {
      this.player.playerObj.previousRoundProperties = this.player.playerObj.currentRoundProperties;
      this.player.playerObj.currentRoundProperties.skill = skill;
      // 对方随机处理
      this.targetPlayer.previousRoundProperties = this.targetPlayer.currentRoundProperties;
      this.targetPlayer.currentRoundProperties.skill = randomList.randomFormList(Array.from(this.player.playerObj.property.skillMap.values()).filter(item => item.aiCanUsed))
      // 执行
      const executingResult = this.player.playerObj.executing(this.targetPlayer);
      if (executingResult && executingResult === 'RunAwaySuccess') {
        this.$emit('end');
        return
      }
      if (this.player.playerObj.property.health <= 0) {
        // todo 这里要弹窗，并进行下一步选择
        console.log("结束了")
        this.$emit('end');
        return;
      }
      if (this.targetPlayer.property.health <= 0) {
        const msg = `<span style="color: peru">${this.targetPlayer.property.name}</span>被击败了`
        this.$store.commit("log", msg)
        message.info({content: dom2vNode(msg)})
        this.getRouteCard.targetPlayerObjList.shift()
        if (this.getRouteCard.targetPlayerObjList.length <= 0) {
          // todo 加入奖励机制可以在这里加
          this.$emit('end');
          return
        }
        this.targetPlayer = this.getRouteCard.targetPlayerObjList[0]
      }
    },
  },
  mounted() {
    console.log(this.getRouteCard.targetPlayerObjList)
    this.targetPlayer = this.getRouteCard.targetPlayerObjList[0]
  },
  computed: {
    ...mapState({
      player: state => state.player,
    }),
    getRouteCard() {
      return this.player.nextRouteCardList.filter(item => item.id === this.selectRouteCardId)[0]
    },
  },
}
</script>

<style scoped>

</style>
