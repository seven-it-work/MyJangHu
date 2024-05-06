<template>
  <a-collapse-panel>
    <template #header>
      英雄
      当前生命:{{ contextObj.player.currentLife }}
      当前护甲:{{ contextObj.player.currentArmor }}
      <a-button @click="endTheRound">结束回合</a-button>
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
import ContextObj from "../objs/ContextObj";

export default {
  name: "PlayerInfo",
  props: {
    contextObj: ContextObj
  },
  methods: {
    endTheRound() {
      this.contextObj?.player.endTheRound()
    }
  }
}
</script>

<style scoped>

</style>
