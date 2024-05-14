<template>
  <a-card hoverable style="width: 180px;" body-style="padding:10px"
          :style="cardObj.isFreeze?'border: 3px slateblue solid':''">
    <template #actions>
      <Tooltip :is-html="true" :disable="disableAttackTips(cardObj)"
               :title="attackTips(cardObj)">
        <div>攻击力：{{ cardObj.attack }}</div>
      </Tooltip>
      <div>
        <div v-for="str in cardObj.baseCard.ethnicity" :key="str">{{ str }}</div>
      </div>
      <Tooltip :is-html="true" :disable="disableLifeTips(cardObj)"
               :title="lifeTips(cardObj)">
        <div>生命值：{{ cardObj.life }}</div>
      </Tooltip>
    </template>
    <a-card-meta>
      <template #title>
        <div :style="cardObj.baseCard.isGold?'background: gold':''">
          <slot name="titleButton"></slot>
          <a-avatar>{{ cardObj.baseCard.graded }}级</a-avatar>
          <a-tooltip :title="cardObj.baseCard.name">{{ cardObj.baseCard.name }}</a-tooltip>
        </div>
      </template>
      <template #description>
        <a-tooltip placement="bottom">
          <template #title>
            <div v-html="cardObj.baseCard.description"></div>
          </template>
          <div style="width:160px;height:90px;">
            <p style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;overflow:hidden;"
               v-html="cardObj.baseCard.description">
            </p>
          </div>
        </a-tooltip>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script lang="ts">
import {PropType} from "@vue/runtime-core";
import BaseCardObj from "../objs/BaseCardObj";
import Tooltip from "./Tooltip.vue";
import {groupBy} from "lodash";
import randomUtil from "../utils/RandomUtils";
import Taverns from "../objs/Taverns";

export default {
  name: "Card",
  components: {Tooltip},
  props: {
    cardObj: {
      type: Object as PropType<BaseCardObj>,
      required: true,
    },
    taverns: {
      type: Object as PropType<Taverns>,
      required: false,
    },
  },
  methods: {
    disableAttackTips(cardObj: BaseCardObj) {
      return this.disableTips(cardObj, "attack")
    },
    disableLifeTips(cardObj: BaseCardObj) {
      return this.disableTips(cardObj, "life")
    },
    disableTips(cardObj: BaseCardObj, type: 'life' | 'attack') {
      let len = cardObj.baseCard.magneticForceList.length
      if (type === 'life') {
        len += cardObj.baseCard.lifeBonus.length
        len += this.taverns?.lifeBonus.length || 0
      }
      if (type === 'attack') {
        len += cardObj.baseCard.attackBonus.length
        len += this.taverns?.attackBonus.length || 0
      }
      return len <= 0
    },
    toolTips(cardObj: BaseCardObj, type: 'life' | 'attack') {
      let bonus = []
      const magneticForceList = cardObj.baseCard.magneticForceList.map(card => {
        return {
          markupValue: type === "life" ? card.life : card.attack,
          baseCardId: card.tempId || randomUtil.guid(),
          baseCardName: card.name,
        }
      })
      bonus.push(...magneticForceList);
      if (this.taverns) {
        if (type === "attack" && this.taverns.attackBonus) {
          bonus.push(...this.taverns.attackBonus)
        }
        if (type === 'life' && this.taverns.lifeBonus) {
          bonus.push(...this.taverns.lifeBonus)
        }
      }
      if (type === "life") {
        bonus.push(...cardObj.baseCard.lifeBonus)
      }
      if (type === "attack") {
        bonus.push(...cardObj.baseCard.attackBonus)
      }
      const result = groupBy(bonus, (card) => {
        return card.baseCardName
      })
      return Object.keys(result).map(key => {
        const number = result[key].map(data => data.markupValue).reduce((sum, data) => sum + data);
        return key + ":" + (number > 0 ? "+" : "-") + number
      })
    },
    attackTips(cardObj: BaseCardObj) {
      return this.toolTips(cardObj, 'attack')
    },
    lifeTips(cardObj: BaseCardObj) {
      return this.toolTips(cardObj, 'life')
    }
  }
}
</script>

<style scoped>

</style>
