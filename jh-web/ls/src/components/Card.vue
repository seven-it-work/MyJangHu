<template>
  <a-card hoverable style="width: 180px;" body-style="padding:10px">
    <template #actions>
      <Tooltip :is-html="true" :disable="(cardObj.baseCard.attackBonus.length+cardObj.baseCard.magneticForceList)<=0"
               :title="attackTips(cardObj)">
        <div>攻击力：{{ cardObj.attack }}</div>
      </Tooltip>
      <div>
        <div v-for="str in cardObj.baseCard.ethnicity" :key="str">{{ str }}</div>
      </div>
      <Tooltip :is-html="true" :disable="(cardObj.baseCard.lifeBonus.length+cardObj.baseCard.magneticForceList)<=0"
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

export default {
  name: "Card",
  components: {Tooltip},
  props: {
    cardObj: {
      type: Object as PropType<BaseCardObj>,
      required: true,
    },
  },
  methods: {
    attackTips(cardObj: BaseCardObj) {
      const magneticForceList = cardObj.baseCard.magneticForceList.map(card => {
        return {
          markupValue: card.attack,
          baseCardId: card.tempId || randomUtil.guid(),
          baseCardName: card.name,
        }
      })
      const result = groupBy([...cardObj.baseCard.attackBonus, ...magneticForceList], (card) => {
        return card.baseCardName
      })
      return Object.keys(result).map(key => {
        const number = result[key].map(data => data.markupValue).reduce((sum, data) => sum + data);
        return key + ":" + (number > 0 ? "+" : "-") + number
      })
    },
    lifeTips(cardObj: BaseCardObj) {
      const magneticForceList = cardObj.baseCard.magneticForceList.map(card => {
        return {
          markupValue: card.life,
          baseCardId: card.tempId || randomUtil.guid(),
          baseCardName: card.name,
        }
      })
      const result = groupBy([...cardObj.baseCard.lifeBonus, ...magneticForceList], (card) => {
        return card.baseCardName
      })
      return Object.keys(result).map(key => {
        const number = result[key].map(data => data.markupValue).reduce((sum, data) => sum + data);
        return key + ":" + (number > 0 ? "+" : "-") + number
      })
    }
  }
}
</script>

<style scoped>

</style>
