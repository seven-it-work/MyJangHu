<script lang="ts">
import {defineComponent} from 'vue'
import Player from "../objs/Player.ts";
import Taverns from "../objs/Taverns.ts";
import ContextObj from "../objs/ContextObj.ts";
import SharedCardPool from "../objs/SharedCardPool.ts";
import BaseCardObj from "../objs/BaseCardObj.ts";

var taverns = new Taverns();
var sharedCardPool = new SharedCardPool(['恶魔']);
var player = new Player(taverns);
var contextObj = new ContextObj(player, sharedCardPool);
taverns.refresh(contextObj)
console.log(taverns.currentCard)

export default defineComponent({
  name: "Tavern",
  data() {
    return {
      player,
    }
  },
  methods: {
    upgrade() {
      this.player.upgradeTavern()
    },
    flushed() {
      this.player.refreshTavern(contextObj)
    },
    buyCard(cardObj: BaseCardObj) {
      this.player.buyCard(cardObj, contextObj)
    },
    freezeAll() {
      this.player.freeze(Array.from(this.player.tavern.currentCard.values()), contextObj)
    },
  },
})
</script>

<template>
  <a-collapse-panel>
    <template #header>
      【{{ player.tavern.graded }}级酒馆】
      <a-button size="small" type="primary" @click="upgrade">升级({{ player.tavern.currentUpgradeExpenses }})</a-button>
      <a-button size="small" type="primary" danger @click="flushed">刷新({{ player.tavern.refreshExpenses }})</a-button>
      <a-button size="small" @click="freezeAll">
        {{ player.tavern.isFreezeAll() ? "解冻" : "冻结" }}({{ player.tavern.freezeExpenses }})
      </a-button>
      <span>当前金币：{{ player.currentGoldCoin }}/{{ player.getMaxGoldCoin() }}</span>
    </template>
    <a-row :gutter="16">
      <a-col v-for="cardObj in Array.from(player.tavern.currentCard.values())" :key="cardObj.id">
        <a-card hoverable style="width: 180px;" body-style="padding:10px"
                :style="cardObj.isFreeze?'border: 3px slateblue solid':''">
          <template #actions>
            <div>攻击力：{{ cardObj.baseCard.attack }}</div>
            <div>
              <div v-for="str in cardObj.baseCard.ethnicity" :key="str">{{ str }}</div>
            </div>
            <div>生命值：{{ cardObj.baseCard.life }}</div>
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
                  <p style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;overflow:hidden;">
                    {{ cardObj.baseCard.description }}
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