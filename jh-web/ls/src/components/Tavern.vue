<script lang="ts">
import {defineComponent} from 'vue'
import BaseCardObj from "../objs/BaseCardObj.ts";
import {PropType} from "@vue/runtime-core";
import PlayObj from "../objs/PlayObj";

export default defineComponent({
  name: "Tavern",
  props: {
    playObj: {
      type: Object as PropType<PlayObj>,
      required: true,
    },
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
          playObj.currentPlayerInfo.tavern.refreshExpenses
        }})
      </a-button>
      <a-button size="small" @click="freezeAll">
        {{ playObj.currentPlayerInfo.tavern.isFreezeAll() ? "解冻" : "冻结" }}({{ playObj.currentPlayerInfo.tavern.freezeExpenses }})
      </a-button>
      <span>当前金币：{{ playObj.currentPlayerInfo.currentGoldCoin }}/{{ playObj.currentPlayerInfo.getMaxGoldCoin() }}</span>
    </template>
    <a-row :gutter="16">
      <a-col v-for="cardObj in Array.from(playObj.currentPlayerInfo.tavern.currentCard.values())" :key="cardObj.id">
        <a-card hoverable style="width: 180px;" body-style="padding:10px"
                :style="cardObj.isFreeze?'border: 3px slateblue solid':''">
          <template #actions>
            <div>攻击力：{{ cardObj.attack }}</div>
            <div>
              <div v-for="str in cardObj.baseCard.ethnicity" :key="str">{{ str }}</div>
            </div>
            <div>生命值：{{ cardObj.life }}</div>
          </template>
          <a-card-meta>
            <template #title>
              <a-button size="small" @click="buyCard(cardObj)">购买({{ cardObj.baseCard.spendingGoldCoin }})</a-button>
              <a-avatar>{{ cardObj.baseCard.graded }}级</a-avatar>
              <a-tooltip :title="cardObj.baseCard.name">{{ cardObj.baseCard.name }}</a-tooltip>
            </template>
            <template #description>
              <a-tooltip placement="bottom" :title="cardObj.baseCard.description">
                <div style="width:160px;height:90px;">
                  <p style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;overflow:hidden;"
                     v-html="cardObj.baseCard.description">
                  </p>
                </div>
              </a-tooltip>
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </a-collapse-panel>
</template>

<style scoped>

</style>
