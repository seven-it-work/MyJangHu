<template>
  <a-row justify="start">
    <a-col :span="12">
      <a-row justify="start">
        <a-col>当前地图：</a-col>
        <a-col :span="12">
          <a-select style="width: 100%;" v-model:value="currentMapObj.id" @change="changeCurrentMapObj">
            <a-select-option v-for="item in mapList" :key="item.id" :value="item.id">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-col>
      </a-row>
    </a-col>
    <a-col>地图宽：{{ currentMapObj.wide }}</a-col>
    <a-col :offset="1">地图高：{{ currentMapObj.high }}</a-col>
  </a-row>
  <a-row>
    <a-tabs>
      <a-tab-pane key="map" tab="地图">
        <MapTab :change-hook="mapChangeHook" :map-list="mapList"></MapTab>
      </a-tab-pane>
      <a-tab-pane key="scenarioNode" tab="场景节点">
        <a-table></a-table>
        <a-row>
          <a-col>
            <a-button>互动编辑</a-button>
          </a-col>
          <a-col>
            <a-button>更新数据</a-button>
          </a-col>
          <a-col>
            <a-button>删除数据</a-button>
          </a-col>
        </a-row>
        <a-row>
          <div>场景id</div>
          <div>场景名称</div>
          <div>进入触发</div>
          <div>立刻触发</div>
          <div>描述</div>
          <div>备注</div>
        </a-row>
      </a-tab-pane>
      <a-tab-pane key="pathway" tab="路径">
        <a-table></a-table>
        <a-row>
          <a-col>
            <a-button>互动编辑</a-button>
          </a-col>
          <a-col>
            <a-button>更新数据</a-button>
          </a-col>
          <a-col>
            <a-button>删除数据</a-button>
          </a-col>
        </a-row>
        <a-row>
          <div>路径id</div>
          <div>通过触发</div>
          <div>可开合</div>
          <div>状态</div>
          <div>出口方向</div>
          <div>出口</div>
          <div>入口</div>
          <div>备注</div>
        </a-row>
      </a-tab-pane>
      <a-tab-pane key="sceneObject" tab="场景对象">
        <a-table></a-table>
        <a-row>
          <a-col>
            <a-button>导入数据</a-button>
          </a-col>
          <a-col>
            <a-button>导出数据</a-button>
          </a-col>
          <a-col>
            <a-button>互动编辑</a-button>
          </a-col>
          <a-col>
            <a-button>更新数据</a-button>
          </a-col>
          <a-col>
            <a-button>删除数据</a-button>
          </a-col>
        </a-row>
        <a-row>
          <div>对象id</div>
          <div>对象名称</div>
          <div>描述</div>
          <div>备注</div>
        </a-row>
      </a-tab-pane>
      <a-tab-pane key="objectInteraction" tab="对象交互">
        <a-table></a-table>
        <a-row>
          <a-col>
            <a-button>导入数据</a-button>
          </a-col>
          <a-col>
            <a-button>导出数据</a-button>
          </a-col>
          <a-col>
            <a-button>互动编辑</a-button>
          </a-col>
          <a-col>
            <a-button>更新数据</a-button>
          </a-col>
          <a-col>
            <a-button>删除数据</a-button>
          </a-col>
        </a-row>
        <a-row>
          <div>互动id</div>
          <div>互动名称</div>
          <div>互动名称</div>
          <div>触发类型</div>
          <div>显示控制</div>
          <div>内容名称</div>
          <div>备注</div>
        </a-row>
      </a-tab-pane>
    </a-tabs>
  </a-row>
</template>

<script>
import {mapAPi} from "@/http/api.js";
import MapTab from "@/view/editor/map/MapTab.vue";

export default {
  name: "MapEditor",
  components: {MapTab},
  methods: {
    mapChangeHook() {
      this.listAllMap()
    },
    changeCurrentMapObj(id) {
      this.currentMapObj = this.mapList.filter(item => item.id === id)[0]
      // 改变mapX6
    },


    listAllMap() {
      this.mapList = mapAPi.listAll()
    },
  },
  created() {
    this.listAllMap()
  },
  data() {
    return {
      mapList: [],
      currentMapObj: {
        id: '',
        name: '',
        high: 0,
        wide: 0,
        description: '',
        remark: '',
      },
    }
  },
}
</script>

<style scoped>

</style>
