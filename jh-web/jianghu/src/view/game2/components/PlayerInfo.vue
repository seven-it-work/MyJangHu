<template>
  <div>
    <a-card hoverable style="width: 300px">
      <template #cover>
        <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      </template>
      <template #actions>
      </template>
      <a-card-meta  >
        <template #title>
          <span>{{playerObj.property.name}}</span> |
          <span style="color: dodgerblue">{{playerObj.property.level}} LV</span>
        </template>
        <template #description >
          <a-row style="margin: 10px">
            <a-col :span="5">生命：<span v-if="isDebug">{{ playerObj.property.hp.toFixed(2) }}</span></a-col>
            <a-col :span="19">
              <a-progress  :percent="percentageCalculation(playerObj.property.hp,playerObj.getMaxHp())"
                          status="active"
                          :stroke-color="{'0%': '#108ee9','100%': '#87d068',}"/>
            </a-col>
          </a-row>
        </template>
      </a-card-meta>
    </a-card>
    <a-row>
    </a-row>
  </div>
</template>

<script>
import {percentageCalculation} from "@/view/game2/objs/baseSkill";
import {levelColorUtil, percentageCalculationLevel} from "@/view/game2/objs/playerObj";
import {isDebug} from "@/view/game2/store.ts";

export default {
  name: "PlayerInfo",
  computed: {
    isDebug() {
      return isDebug
    }
  },
  props: {
    playerObj: Object
  },
  data() {
    return {
      percentageCalculation,
      percentageCalculationLevel,
      levelColorUtil
    }
  },
}
</script>

<style scoped>

</style>
