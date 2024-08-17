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

    <div v-for="item in player.playerObjList">
      <a-row>
        <a-col :span="6">
          <PlayerInfo :player-obj="item"></PlayerInfo>
        </a-col>
        <a-col :span="18">
          <a-row style="padding: 20px" :gutter="16">
            <a-col :span="6">
              <a-avatar :size="40">{{ item.property.name }}</a-avatar>
              <div>装备(完善中...)</div>
            </a-col>
            <a-col :span="18">
              <!--这里是固定值，当大于多少时 颜色可以不一样-->
              <a-row>
                <a-col :span="8">
                  <a-row>
                    <a-col :span="8">敏捷：<span v-if="isDebug">{{ item.property.agility }}</span></a-col>
                    <a-col :span="16">
                      <a-progress style="float: right" :showInfo="false"
                                  :percent="percentageCalculationLevel(item.property.agility)"
                                  status="active"
                                  :stroke-color="levelColorUtil.getLevelColor(item.property.agility)"/>
                    </a-col>
                  </a-row>
                </a-col>
                <a-col :span="8">
                  <a-row>
                    <a-col :span="8">身法：<span v-if="isDebug">{{ item.property.shenFa }}</span></a-col>
                    <a-col :span="16">
                      <a-progress style="float: right" :showInfo="false"
                                  :percent="percentageCalculationLevel(item.property.shenFa)"
                                  status="active"
                                  :stroke-color="levelColorUtil.getLevelColor(item.property.shenFa)"/>
                    </a-col>
                  </a-row>
                </a-col>
                <a-col :span="8">
                  <a-row>
                    <a-col :span="8">力量：<span v-if="isDebug">{{ item.property.power }}</span></a-col>
                    <a-col :span="16">
                      <a-progress style="float: right" :showInfo="false"
                                  :percent="percentageCalculationLevel(item.property.power)"
                                  status="active"
                                  :stroke-color="levelColorUtil.getLevelColor(item.property.power)"/>
                    </a-col>
                  </a-row>
                </a-col>
                <a-col :span="8">
                  <a-row>
                    <a-col :span="8">耐力：<span v-if="isDebug">{{ item.property.stamina }}</span></a-col>
                    <a-col :span="16">
                      <a-progress style="float: right" :showInfo="false"
                                  :percent="percentageCalculationLevel(item.property.stamina)"
                                  status="active"
                                  :stroke-color="levelColorUtil.getLevelColor(item.property.stamina)"/>
                    </a-col>
                  </a-row>
                </a-col>
                <a-col :span="8">
                  <a-row>
                    <a-col :span="8">体质：<span v-if="isDebug">{{ item.property.physique }}</span></a-col>
                    <a-col :span="16">
                      <a-progress style="float: right" :showInfo="false"
                                  :percent="percentageCalculationLevel(item.property.physique)"
                                  status="active"
                                  :stroke-color="levelColorUtil.getLevelColor(item.property.physique)"/>
                    </a-col>
                  </a-row>
                </a-col>
                <a-col :span="8">
                  <a-row>
                    <a-col :span="8">天赋：<span v-if="isDebug">{{ item.property.gifted }}</span></a-col>
                    <a-col :span="16">
                      <a-progress style="float: right" :showInfo="false"
                                  :percent="percentageCalculationLevel(item.property.gifted)"
                                  status="active"
                                  :stroke-color="levelColorUtil.getLevelColor(item.property.gifted)"/>
                    </a-col>
                  </a-row>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>

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
import {levelColorUtil, percentageCalculationLevel, randomPlayerObj} from "@/view/game2/objs/playerObj";
import PlayerInfo from "@/view/game2/components/PlayerInfo.vue";
import {randomRouteCard} from "@/view/game2/objs/routeCard";
import dayjs from "dayjs";
import FootPage from "@/view/game2/components/footPage.vue";
import {percentageCalculation, XiangLongShiBaZhang} from "@/view/game2/objs/baseSkill";
import {isDebug} from "@/view/game2/store";

export default {
  name: "index.vue",
  components: {FootPage, PlayerInfo, Fighting},
  data() {
    return {
      openRouteCard: false,
      selectRouteCard: {},
      percentageCalculation,
      percentageCalculationLevel,
      levelColorUtil,
    }
  },
  computed: {
    ...mapState({
      player: state => state.player,
    }),
    isDebug() {
      return isDebug
    }
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
    playerObj.property.hp = 100;
    // item.property.maxHp = 100;
    // item.property.armStrength = 20
    // item.property.skillMap.set("XiangLongShiBaZhang",new XiangLongShiBaZhang())
    this.player.playerObjList.push(playerObj);
    // this.player.nextRouteCardList = [
    //   randomRouteCard(),
    //   randomRouteCard(),
    //   randomRouteCard(),
    // ]
  }
}
</script>

<style scoped>

</style>
