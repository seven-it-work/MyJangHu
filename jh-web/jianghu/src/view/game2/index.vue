<template>
  <div style="background-color: #ececec;">
    <a-row style="padding: 20px" :gutter="16">
      <a-col :span="8" v-for="item in player.nextRouteCardList">
        <a-card :title="item.title" :bordered="false">
          <template #extra><a @click="selectRouteCardData(item)">选择</a></template>
          <div v-html="item.description"></div>
        </a-card>
      </a-col>
    </a-row>

    <PlayerInfo :player-obj="player.playerObj"></PlayerInfo>

    <a-row style="padding: 20px" :gutter="16">
      <a-col :span="20">
        <div style="height: 150px;overflow-y: scroll">
          <div v-for="logItem in player.logs" v-html="logItem.html"></div>
        </div>
      </a-col>
      <a-col :span="4">
        <div>按钮组</div>
      </a-col>
    </a-row>
  </div>

  <!--openRouteCard弹窗-->
  <a-modal width="80%" v-model:open="openRouteCard" :title="selectRouteCard.title" :closable="false" :keyboard="false"
           :maskClosable="false">
    <div v-if="selectRouteCard.type==='fighting'">
      <fighting :selectRouteCardId="selectRouteCard.id" @end="endRoute"></fighting>
    </div>
    <template #footer>
    </template>
  </a-modal>
</template>

<script>

import Fighting from "@/view/game2/routecard/fighting.vue";
import {mapState} from "vuex";
import {randomPlayerObj} from "@/view/game2/objs/playerObj";
import PlayerInfo from "@/view/game2/components/PlayerInfo.vue";
import {randomRouteCard} from "@/view/game2/objs/routeCard";

export default {
  name: "index.vue",
  components: {PlayerInfo, Fighting},
  data() {
    return {
      openRouteCard: false,
      selectRouteCard: {},
    }
  },
  computed: {
    ...mapState({
      player: state => state.player,
    }),
  },
  methods: {
    endRoute() {
      this.openRouteCard = false
      this.selectRouteCard = {};
    },
    selectRouteCardData(item) {
      this.openRouteCard = true
      this.selectRouteCard = item;
    }
  },
  created() {
    this.player.playerObj = randomPlayerObj();
    this.player.nextRouteCardList = [
      randomRouteCard(),
      randomRouteCard(),
      randomRouteCard(),
    ]
  }
}
</script>

<style scoped>

</style>
