<template>
  <a-collapse-panel>
    <template #header>
      手牌 数量：{{ playObj.currentPlayerInfo.handCardList.length }}/10
    </template>
    <a-row :gutter="16">
      <a-col v-for="cardObj in Array.from(playObj.currentPlayerInfo.handCardList)" :key="cardObj.id">
        <a-card hoverable style="width: 180px;" body-style="padding:10px">
          <template #actions>
            <div>攻击力：{{ cardObj.attack }}</div>
            <div>
              <div v-for="str in cardObj.baseCard.ethnicity" :key="str">{{ str }}</div>
            </div>
            <div>生命值：{{ cardObj.life }}</div>
          </template>
          <a-card-meta>
            <template #title>
              <a-button size="small" :disabled="!playObj.currentPlayerInfo.canUseCard()" @click="useCard(cardObj)">使用</a-button>
              <a-avatar>{{ cardObj.baseCard.graded }}级</a-avatar>
              <a-tooltip :title="cardObj.baseCard.name">{{ cardObj.baseCard.name }}</a-tooltip>
            </template>
            <template #description>
              <a-tooltip placement="bottom" >
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
      </a-col>
    </a-row>
  </a-collapse-panel>
</template>

<script lang="ts">
import ContextObj from "../objs/ContextObj";
import {defineComponent} from "vue";
import {PropType} from "@vue/runtime-core";
import PlayObj from "../objs/PlayObj";

export default defineComponent({
  name: "PlayerHandler",
  props: {
    playObj: {
      type: Object as PropType<PlayObj>,
      required: true,
    },
  },
  methods: {
    useCard(cardObj) {
      this.playObj.currentPlayerInfo.useCard(cardObj, this.playObj.contextObj)
    }
  }
})
</script>

<style scoped>

</style>
