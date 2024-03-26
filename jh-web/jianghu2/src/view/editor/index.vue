<template>
  <a-row>
    <a-col :span="12">
      <MapX6 :current-map-obj="currentMapObj"></MapX6>
    </a-col>
    <a-col :span="12">
      <a-tabs>
        <a-tab-pane key="map" tab="地图">
          <MapEditor v-model:currentMapObj="currentMapObj"></MapEditor>
        </a-tab-pane>
        <a-tab-pane key="interacting" tab="交互">交互</a-tab-pane>
        <a-tab-pane key="probability" tab="概率">概率</a-tab-pane>
        <a-tab-pane key="logic" tab="逻辑">逻辑</a-tab-pane>
        <a-tab-pane key="property" tab="属性">属性</a-tab-pane>
        <a-tab-pane key="slots" tab="插槽">插槽</a-tab-pane>
        <a-tab-pane key="skills" tab="技能">技能</a-tab-pane>
        <a-tab-pane key="articles" tab="物品">物品</a-tab-pane>
        <a-tab-pane key="production" tab="生产">生产</a-tab-pane>
        <a-tab-pane key="dealing" tab="交易">交易</a-tab-pane>
        <a-tab-pane key="rewarded" tab="奖励">奖励</a-tab-pane>
      </a-tabs>
    </a-col>
  </a-row>
</template>

<script>
import MapEditor from "@/view/editor/MapEditor.vue";
import MapX6 from "@/view/editor/MapX6.vue";

export default {
  name: "index",
  components: {MapX6, MapEditor},
  data() {
    return {
      currentMapObj: {},
    }
  },
}
</script>

<style scoped>

</style>
