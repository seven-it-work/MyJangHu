<script lang="ts">
import {defineComponent} from 'vue'
import ContextObj from "../objs/ContextObj.ts";
import BaseCardObj from "../objs/BaseCardObj.ts";

export default defineComponent({
  name: "Tavern",
  props: {
    contextObj: ContextObj
  },
  data() {
    return {}
  },
  methods: {
    upgrade() {
      this.contextObj?.player.upgradeTavern()
    },
    flushed() {
      this.contextObj?.player.refreshTavern(<ContextObj>this.contextObj)
    },
    buyCard(cardObj: BaseCardObj) {
      this.contextObj?.player.buyCard(cardObj, <ContextObj>this.contextObj)
    },
    freezeAll() {
      this.contextObj?.player.freeze(Array.from(this.contextObj?.player.tavern.currentCard.values()))
    },
  },
})
</script>

<template>
  <a-collapse-panel>
    <template #header>
      【{{ contextObj?.player.tavern.graded }}级酒馆】
      <a-button size="small" type="primary" @click="upgrade">升级({{
          contextObj?.player.tavern.currentUpgradeExpenses
        }})
      </a-button>
      <a-button size="small" type="primary" danger @click="flushed">刷新({{
          contextObj?.player.tavern.refreshExpenses
        }})
      </a-button>
      <a-button size="small" @click="freezeAll">
        {{ contextObj?.player.tavern.isFreezeAll() ? "解冻" : "冻结" }}({{ contextObj?.player.tavern.freezeExpenses }})
      </a-button>
      <span>当前金币：{{ contextObj?.player.currentGoldCoin }}/{{ contextObj?.player.getMaxGoldCoin() }}</span>
    </template>
    <a-row :gutter="16">
      <a-col v-for="cardObj in Array.from(contextObj?.player.tavern.currentCard.values())" :key="cardObj.id">
        <a-card hoverable style="width: 180px;" body-style="padding:10px"
                :style="cardObj.isFreeze?'border: 3px slateblue solid':''">
          <template #actions>
            <div>攻击力：{{ cardObj.baseCard.attack+contextObj.player.tavern.tavernAttackBonus }}</div>
            <div>
              <div v-for="str in cardObj.baseCard.ethnicity" :key="str">{{ str }}</div>
            </div>
            <div>生命值：{{ cardObj.baseCard.life + contextObj.player.tavern.tavernLifeBonus }}</div>
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
