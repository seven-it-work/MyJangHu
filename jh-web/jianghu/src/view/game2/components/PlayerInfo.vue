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
      <a-card-meta :title="playerObj.property.name" >
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
<!--    <a-row style="padding: 20px" :gutter="16">-->
<!--      <a-col :span="6">-->
<!--        <a-avatar :size="40">{{ playerObj.property.name }}</a-avatar>-->
<!--        <div>装备(完善中...)</div>-->
<!--      </a-col>-->
<!--      <a-col :span="18">-->
<!--        &lt;!&ndash;            这里是变化值&ndash;&gt;-->
<!--        <a-row :gutter="18">-->
<!--          <a-col :span="4">生命：<span v-if="isDebug">{{ playerObj.property.hp.toFixed(2) }}</span></a-col>-->
<!--          <a-col :span="8">-->
<!--            <a-progress :percent="percentageCalculation(playerObj.property.health,playerObj.property.maxHealth)"-->
<!--                        status="active"-->
<!--                        :stroke-color="{'0%': '#108ee9','100%': '#87d068',}"/>-->
<!--          </a-col>-->
<!--          <a-col :span="4">生命：<span v-if="isDebug">{{ playerObj.property.hp }}</span></a-col>-->
<!--          <a-col :span="8">-->
<!--            <a-progress :percent="percentageCalculation(playerObj.property.health,playerObj.property.maxHealth)"-->
<!--                        status="active"-->
<!--                        :stroke-color="{'0%': '#108ee9','100%': '#87d068',}"/>-->
<!--          </a-col>-->
<!--        </a-row>-->
<!--        &lt;!&ndash;这里是固定值，当大于多少时 颜色可以不一样&ndash;&gt;-->
<!--        &lt;!&ndash;        armStrength&ndash;&gt;-->
<!--        &lt;!&ndash;        footStrength&ndash;&gt;-->
<!--        &lt;!&ndash;        agility&ndash;&gt;-->
<!--        &lt;!&ndash;        fixedForce&ndash;&gt;-->
<!--        <a-row>-->
<!--          <a-col :span="8">-->
<!--            <a-row>-->
<!--              <a-col :span="8">臂力：<span v-if="isDebug">{{ playerObj.property.armStrength }}</span></a-col>-->
<!--              <a-col :span="16">-->
<!--                <a-progress style="float: right" :showInfo="false"-->
<!--                            :percent="percentageCalculationLevel(playerObj.property.armStrength)"-->
<!--                            status="active"-->
<!--                            :stroke-color="levelColorUtil.getLevelColor(playerObj.property.armStrength)"/>-->
<!--              </a-col>-->
<!--            </a-row>-->
<!--          </a-col>-->
<!--          <a-col :span="8">-->
<!--            <a-row>-->
<!--              <a-col :span="8">脚力：<span v-if="isDebug">{{ playerObj.property.footStrength }}</span></a-col>-->
<!--              <a-col :span="16">-->
<!--                <a-progress style="float: right" :showInfo="false"-->
<!--                            :percent="percentageCalculationLevel(playerObj.property.footStrength)"-->
<!--                            status="active"-->
<!--                            :stroke-color="levelColorUtil.getLevelColor(playerObj.property.footStrength)"/>-->
<!--              </a-col>-->
<!--            </a-row>-->
<!--          </a-col>-->
<!--          <a-col :span="8">-->
<!--            <a-row>-->
<!--              <a-col :span="8">敏捷：<span v-if="isDebug">{{ playerObj.property.agility }}</span></a-col>-->
<!--              <a-col :span="16">-->
<!--                <a-progress style="float: right" :showInfo="false"-->
<!--                            :percent="percentageCalculationLevel(playerObj.property.agility)"-->
<!--                            status="active"-->
<!--                            :stroke-color="levelColorUtil.getLevelColor(playerObj.property.agility)"/>-->
<!--              </a-col>-->
<!--            </a-row>-->
<!--          </a-col>-->
<!--          <a-col :span="8">-->
<!--            <a-row>-->
<!--              <a-col :span="8">定力：<span v-if="isDebug">{{ playerObj.property.fixedForce }}</span></a-col>-->
<!--              <a-col :span="16">-->
<!--                <a-progress style="float: right" :showInfo="false"-->
<!--                            :percent="percentageCalculationLevel(playerObj.property.fixedForce)"-->
<!--                            status="active"-->
<!--                            :stroke-color="levelColorUtil.getLevelColor(playerObj.property.fixedForce)"/>-->
<!--              </a-col>-->
<!--            </a-row>-->
<!--          </a-col>-->
<!--        </a-row>-->
<!--      </a-col>-->
<!--    </a-row>-->
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
