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

    <footPage></footPage>
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
import dayjs from "dayjs";
import FootPage from "@/view/game2/components/footPage.vue";
import {XiangLongShiBaZhang} from "@/view/game2/objs/baseSkill";

export default {
  name: "index.vue",
  components: {FootPage, PlayerInfo, Fighting},
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
    dayjs,
    endRoute() {
      this.openRouteCard = false
      this.selectRouteCard = {};
      // todo 刷新route
      this.player.nextRouteCardList = [
        randomRouteCard(),
        randomRouteCard(),
        randomRouteCard(),
      ]
    },
    selectRouteCardData(item) {
      this.openRouteCard = true
      this.selectRouteCard = item;
    }
  },
  created() {
    const playerObj = randomPlayerObj();
    playerObj.property.health = 100;
    playerObj.property.maxHealth = 100;
    playerObj.property.armStrength = 20
    playerObj.property.skillMap.set("XiangLongShiBaZhang",new XiangLongShiBaZhang())
    this.player.playerObj = playerObj;
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
