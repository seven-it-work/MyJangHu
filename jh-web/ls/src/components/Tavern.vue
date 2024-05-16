<script lang="ts">
import {defineComponent} from 'vue'
import BaseCardObj from "../objs/BaseCardObj.ts";
import {PropType} from "@vue/runtime-core";
import PlayObj from "../objs/PlayObj";
import Card from "./Card.vue";

export default defineComponent({
  name: "Tavern",
  components: {Card},
  props: {
    playObj: {
      type: Object as PropType<PlayObj>,
      required: true,
    }
  },
  data() {
    return {}
  },
  methods: {
    upgrade() {
      this.playObj.currentPlayerInfo.upgradeTavern()
    },
    flushed() {
      this.playObj.currentPlayerInfo.refreshTavern(this.playObj.contextObj)
    },
    buyCard(cardObj: BaseCardObj) {
      this.playObj.currentPlayerInfo.buyCard(cardObj, this.playObj.contextObj)
    },
    freezeAll() {
      this.playObj.currentPlayerInfo.freeze(Array.from(this.playObj.currentPlayerInfo.tavern.currentCard.values()))
    },
  },
})
</script>

<template>
  <a-collapse-panel>
    <template #header>
      【{{ playObj.currentPlayerInfo.tavern.graded }}级酒馆】
      <a-button size="small" type="primary" @click="upgrade">升级({{
          playObj.currentPlayerInfo.tavern.currentUpgradeExpenses
        }})
      </a-button>
      <a-button size="small" type="primary" danger @click="flushed">刷新({{
          playObj.currentPlayerInfo.freeRefreshTimes>0?0:playObj.currentPlayerInfo.tavern.refreshExpenses
        }})
      </a-button>
      <a-button size="small" @click="freezeAll">
        {{
          playObj.currentPlayerInfo.tavern.isFreezeAll() ? "解冻" : "冻结"
        }}({{ playObj.currentPlayerInfo.tavern.freezeExpenses }})
      </a-button>
      <span>当前金币：{{ playObj.currentPlayerInfo.currentGoldCoin }}/{{
          playObj.currentPlayerInfo.getMaxGoldCoin()
        }}</span>
    </template>
    <a-row :gutter="16">
      <a-col v-for="cardObj in Array.from(playObj.currentPlayerInfo.tavern.currentCard.values())" :key="cardObj.id">
        <Card :taverns="playObj.currentPlayerInfo.tavern" :card-obj="cardObj">
          <template #titleButton>
            <a-button size="small" :disabled="!playObj.currentPlayerInfo.canBuyCard(cardObj)"
                      @click="buyCard(cardObj)">购买({{ cardObj.baseCard.spendingGoldCoin }})
            </a-button>
          </template>
        </Card>
      </a-col>
    </a-row>
  </a-collapse-panel>
</template>

<style scoped>

</style>
