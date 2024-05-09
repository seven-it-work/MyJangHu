<template>
  <a-collapse-panel>
    <template #header>
      手牌 数量：{{ playObj.currentPlayerInfo.handCardList.length }}/10
    </template>
    <a-row :gutter="16">
      <a-col v-for="cardObj in Array.from(playObj.currentPlayerInfo.handCardList)" :key="cardObj.id">
        <Card :card-obj="cardObj">
          <template #titleButton>
            <a-button size="small" :disabled="!playObj.currentPlayerInfo.canUseCard()" @click="openModal(cardObj)">
              使用
            </a-button>
          </template>
        </Card>
      </a-col>
    </a-row>
    <a-modal v-model:open="open" title="选中召唤的位置">
      <div style="width: 80%;height:300px;overflow-x: scroll">
        <div v-for="(cardObj,index) in tempCardList"
             :key="cardObj.id">
          <Card :card-obj="cardObj" v-if="cardObj.id">
            <template #titleButton>
              <a-button size="small" :disabled="!playObj.currentPlayerInfo.canUseCard()" @click="useCard(cardObj)">
                使用
              </a-button>
            </template>
          </Card>
          <a-card v-else hoverable style="width: 180px;" body-style="padding:10px" @click="selectCard(cardObj,index)">
            <a-card-meta>
              <template #description>
                <div style="width:160px;height:90px;">
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </div>
      </div>
    </a-modal>
  </a-collapse-panel>
</template>

<script lang="ts">
import ContextObj from "../objs/ContextObj";
import {defineComponent} from "vue";
import {PropType} from "@vue/runtime-core";
import PlayObj from "../objs/PlayObj";
import Card from "./Card.vue";

export default defineComponent({
  name: "PlayerHandler",
  components: {Card},
  props: {
    playObj: {
      type: Object as PropType<PlayObj>,
      required: true,
    },
  },
  data() {
    return {
      open: false,
      tempCardList: [],
      toBeUseCard: null,
    }
  },
  methods: {
    selectCard(cardObj, index) {
      console.log(cardObj, index)
      if (cardObj && cardObj.id) {
        for (let i = 0; i < this.tempCardList.length; i++) {
          if (this.tempCardList[i] && this.tempCardList[i].id && this.tempCardList[i].id === cardObj.id) {
            this.tempCardList[i] = {}
            break
          }
        }
      }
      this.tempCardList[index] = this.toBeUseCard;
      console.log(this.toBeUseCard)
      console.log(this.toBeUseCard.baseCard.attackBonus.length)
    },
    openModal(cardObj) {
      this.toBeUseCard = cardObj
      this.open = true
      const tempCardList = [{}]
      for (let i = 0; i < this.playObj.currentPlayerInfo.cardList.length; i++) {
        tempCardList.push(this.playObj.currentPlayerInfo.cardList[i])
        tempCardList.push({})
      }
      this.tempCardList = tempCardList;
    },
    useCard(cardObj) {
      this.playObj.currentPlayerInfo.useCard(cardObj, this.playObj.contextObj)
    }
  }
})
</script>

<style scoped>

</style>
