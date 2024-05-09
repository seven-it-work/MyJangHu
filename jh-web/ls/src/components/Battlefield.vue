<template>
  <a-collapse-panel>
    <template #header>
      出场随从 {{ playObj.currentPlayerInfo.cardList.length }}/7
    </template>
    <a-row :gutter="16">
      <a-col v-for="cardObj in playObj.currentPlayerInfo.cardList" :key="cardObj.id">
        <Card :card-obj="cardObj">
          <template #titleButton>
            <a-button size="small" :disabled="!playObj.currentPlayerInfo.canSaleCard(cardObj)"
                      @click="saleCard(cardObj)">出售
            </a-button>
          </template>
        </Card>
      </a-col>
    </a-row>
  </a-collapse-panel>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {PropType} from "@vue/runtime-core";
import PlayObj from "../objs/PlayObj";
import Card from "./Card.vue";

export default defineComponent({
  name: "Battlefield",
  components: {Card},
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
