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
    <a-modal v-model:open="open" title="选中召唤的位置" @ok="useCard">
      <div style="height:220px;width: 100%;overflow-x: auto;white-space: nowrap;display: flex;">
        <div style="padding: 5px" v-for="(cardObj,index) in tempCardList"
             :key="cardObj.id">
          <Card :card-obj="cardObj" v-if="cardObj.id">
          </Card>
          <a-card v-else hoverable style="width: 180px;" body-style="padding:10px" @click="selectCard(cardObj,index)">
            <a-card-meta>
              <template #description>
                <div style="width:160px;height:180px;">
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
  mounted() {
    document.onkeydown = e => {
      if (e.key == 'Enter' && this.open) {
        this.useCard()
      }
    }
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
      if (!cardObj || !cardObj.id) {
        for (let i = 0; i < this.tempCardList.length; i++) {
          if (this.tempCardList[i] && this.tempCardList[i].id && this.tempCardList[i].id === this.toBeUseCard.id) {
            this.tempCardList[i] = {}
            break
          }
        }
      }
      this.tempCardList[index] = this.toBeUseCard;
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
    useCard() {
      let nextCard = undefined;
      let findCurrent = false;
      for (let i = 0; i < this.tempCardList.length; i++) {
        if (this.tempCardList[i] && this.tempCardList[i].id) {
          if (findCurrent) {
            nextCard = this.tempCardList[i];
            break
          }
          if (this.tempCardList[i].id === this.toBeUseCard.id) {
            findCurrent = true;
          }
        }
      }
      if (this.toBeUseCard) {
        this.playObj.currentPlayerInfo.useCard(this.toBeUseCard, nextCard, this.playObj.contextObj)
      }
      this.open = false
    }
  }
})
</script>

<style scoped>

</style>
