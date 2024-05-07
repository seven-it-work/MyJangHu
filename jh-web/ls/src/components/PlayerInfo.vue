<template>
  <a-collapse-panel>
    <template #header>
      【{{ playObj?.currentPlayerInfo.name }}】
      英雄
      当前生命:{{ playObj?.currentPlayerInfo.currentLife }}
      当前护甲:{{ playObj?.currentPlayerInfo.currentArmor }}
      <a-button @click="endTheRound">结束回合</a-button>
      第{{playObj?.contextObj.currentRound}}回合
    </template>
    <a-row>
      <a-col>
        <a-button size="small">使用</a-button>
      </a-col>
      <a-col>技能描述：</a-col>
    </a-row>
  </a-collapse-panel>
</template>

<script lang="ts">
import PlayObj from "../objs/PlayObj";
import {PropType} from "@vue/runtime-core";
import Player from "../objs/Player";

export default {
  name: "PlayerInfo",
  props: {
    playObj: {
      type: Object as PropType<PlayObj>,
      required: true,
    },
  },
  methods: {
    endTheRound() {
      if (!this.playObj) {
        return
      }
      this.playObj.endRound()
    }
  }
}
</script>

<style scoped>

</style>
