<template>
  <a-collapse-panel>
    <template #header>
      出场随从 {{ playObj.currentPlayerInfo.cardList.length }}/7
      <a-button size="small" @click="openSort">排序</a-button>
      <a-modal v-model:open="openSortModel" @ok="sortOk" title="拖拽进行位置调整">
        <a-tree
            class="draggable-tree"
            draggable
            block-node
            :tree-data="sortData"
            @drop="onDrop"
        />
      </a-modal>
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
  data() {
    return {
      openSortModel: false,
      sortData: []
    }
  },
  props: {
    playObj: {
      type: Object as PropType<PlayObj>,
      required: true,
    },
  },
  methods: {
    sortOk() {
      this.openSortModel = false;
      this.playObj.currentPlayerInfo.cardList = this.sortData.map(temp => temp.dataInfo)
    },
    onDrop(info) {
      let dropPosition = info.dropPosition;
      if (info.dropToGap) {
        dropPosition--;
      }
      if (dropPosition < 0) {
        // 表示在上面
        this.sortData.find(item => item.key === info.dragNode.key).sortIndex = dropPosition
      } else {
        this.sortData.find(item => item.key === info.dragNode.key).sortIndex = dropPosition
      }
      this.sortData = this.sortData.sort((v1, v2) => v1.sortIndex - v2.sortIndex)
      for (let i = 0; i < this.sortData.length; i++) {
        this.sortData[i].sortIndex = i
      }
    },
    openSort() {
      this.openSortModel = true;
      this.sortData = []
      this.playObj.currentPlayerInfo.cardList.forEach(card => {
        this.sortData.push({
          title: card.baseCard.name,
          key: card.id,
          dataInfo: card,
        })
      })
      for (let i = 0; i < this.sortData.length; i++) {
        this.sortData[i].sortIndex = i
      }
    },
    saleCard(cardObj) {
      this.playObj.currentPlayerInfo.saleCard(cardObj, this.playObj.contextObj)
    }
  }
})
</script>

<style scoped>

</style>
