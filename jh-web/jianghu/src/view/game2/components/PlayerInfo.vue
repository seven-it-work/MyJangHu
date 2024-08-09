<template>
  <div>
    <a-row style="padding: 20px" :gutter="16">
      <a-col :span="6">
        <a-avatar :size="40">{{ playerObj.property.name }}</a-avatar>
        <div>装备(完善中...)</div>
      </a-col>
      <a-col :span="18">
        <!--            这里是变化值-->
        <a-row :gutter="18">
          <a-col :span="4">生命：</a-col>
          <a-col :span="8">
            <a-progress :percent="percentageCalculation(playerObj.property.health,playerObj.property.maxHealth)"
                        status="active"
                        :stroke-color="{'0%': '#108ee9','100%': '#87d068',}"/>
          </a-col>
          <a-col :span="4">生命：</a-col>
          <a-col :span="8">
            <a-progress :percent="percentageCalculation(playerObj.property.health,playerObj.property.maxHealth)"
                        status="active"
                        :stroke-color="{'0%': '#108ee9','100%': '#87d068',}"/>
          </a-col>
        </a-row>
        <!--这里是固定值，当大于多少时 颜色可以不一样-->
        <!--        armStrength-->
        <!--        footStrength-->
        <!--        agility-->
        <!--        fixedForce-->
        <a-row>
          <a-col :span="8">
            <a-row>
              <a-col :span="8">臂力：</a-col>
              <a-col :span="16">
                <a-progress style="float: right" :showInfo="false"
                            :percent="percentageCalculationLevel(playerObj.property.armStrength)"
                            status="active"
                            :stroke-color="levelColorUtil.getLevelColor(playerObj.property.armStrength)"/>
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="8">
            <a-row>
              <a-col :span="8">脚力：</a-col>
              <a-col :span="16">
                <a-progress style="float: right" :showInfo="false"
                            :percent="percentageCalculationLevel(playerObj.property.footStrength)"
                            status="active"
                            :stroke-color="levelColorUtil.getLevelColor(playerObj.property.footStrength)"/>
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="8">
            <a-row>
              <a-col :span="8">敏捷：</a-col>
              <a-col :span="16">
                <a-progress style="float: right" :showInfo="false"
                            :percent="percentageCalculationLevel(playerObj.property.agility)"
                            status="active"
                            :stroke-color="levelColorUtil.getLevelColor(playerObj.property.agility)"/>
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="8">
            <a-row>
              <a-col :span="8">定力：</a-col>
              <a-col :span="16">
                <a-progress style="float: right" :showInfo="false"
                            :percent="percentageCalculationLevel(playerObj.property.fixedForce)"
                            status="active"
                            :stroke-color="levelColorUtil.getLevelColor(playerObj.property.fixedForce)"/>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row>
    </a-row>
  </div>
</template>

<script>
import {percentageCalculation} from "@/view/game2/objs/baseSkill";
import {levelColorUtil, percentageCalculationLevel} from "@/view/game2/objs/playerObj";

export default {
  name: "PlayerInfo",
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
