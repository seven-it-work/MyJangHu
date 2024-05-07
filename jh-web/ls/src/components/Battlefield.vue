<template>
  <a-collapse-panel>
    <template #header>
      出场随从 {{ playObj.currentPlayerInfo.cardList.length }}/7
    </template>
    <a-row :gutter="16">
      <a-col v-for="cardObj in playObj.currentPlayerInfo.cardList" :key="cardObj.id">
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
              <a-button size="small" @click="saleCard(cardObj)">出售</a-button>
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

<script lang="ts">
import {defineComponent} from 'vue'
import ContextObj from "../objs/ContextObj.ts";
import {PropType} from "@vue/runtime-core";
import PlayObj from "../objs/PlayObj";

export default defineComponent({
  name: "Battlefield",
  props: {
    playObj: {
      type: Object as PropType<PlayObj>,
      required: true,
    },
  },
  methods: {
    saleCard(cardObj) {
      this.playObj.currentPlayerInfo.saleCard(cardObj, this.playObj.contextObj)
    }
  }
})
</script>

<style scoped>

</style>
