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
  </div>
</template>

<script>
import {mapState} from "vuex";
import PlayerInfo from "@/view/game2/components/PlayerInfo.vue";
import {randomList} from "@/random.js";

export default {
  name: "fighting",
  components: {PlayerInfo},
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
      this.targetPlayer.currentRoundProperties.skill = randomList.randomFormList(Array.from(this.player.playerObj.property.skillMap.values()))

      // 执行
      this.player.playerObj.executing(this.targetPlayer);
      if (this.player.playerObj.property.health <= 0) {
        console.log("结束了")
      }
      if (this.targetPlayer.property.health <= 0) {
        delete this.getRouteCard.targetPlayerObjList[0]
        if (this.getRouteCard.targetPlayerObjList.length <= 0) {
          this.$emit('end');
          return
        }
        this.targetPlayer = this.getRouteCard.targetPlayerObjList[0]
      }
    }
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
