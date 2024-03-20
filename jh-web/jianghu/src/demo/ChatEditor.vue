<template>
  <div style="width: 100%;height: 100%">
    <a-card @dblclick="edit"
            style="border: hsl(212, 90%, 90%) 1px solid;height: 100%"
            :title="nodeData.title"
            :bodyStyle="{margin:0,padding:0,textOverflow: 'ellipsis'}"
            :head-style="{margin:0,padding:0,textOverflow: 'ellipsis',minHeight:'20px'}">
      <p>{{ nodeData.context }}</p>
    </a-card>
    <a-drawer
        :width="'50%'"
        v-model:open="editing"
        title="编辑"
        :maskClosable="false"
        placement="right"
        @close="closeEdit"
    >
      <a-form :model="nodeData" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="组件">
          <a-select v-model:value="nodeData.componentKey" @change="changeComponent">
            <a-select-option v-for="item in formList" :key="item" :value="item.key">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <component :is="formComponet" :node-data="nodeData"></component>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary">确定</a-button>
          <a-button style="margin-left: 10px" @click="creatNext">创建下一个</a-button>
        </a-form-item>
      </a-form>
    </a-drawer>
  </div>
</template>

<script>
import {randomUtil} from "@/random.js";
import modManager from "@/mod/index.js";

const formList = Object.values(modManager).map(item => item.components).filter(item => item).flatMap(item => Object.values(item.chat))
let formKeyMap = {}
Object.values(modManager).map(item => item.components).filter(item => item).map(item => item.chat).forEach(item => {
  formKeyMap = {
    ...formKeyMap,
    ...item
  }
})
const CORE_CHAT_DEFAULT = formKeyMap['CORE_CHAT_DEFAULT'].component
export default {
  name: "ChatEditor",
  components: {},
  inject: ['getNode', 'getGraph'],
  data() {
    return {
      formComponet: CORE_CHAT_DEFAULT,
      formList,
      nodeData: {
        componentKey: 'CORE_CHAT_DEFAULT',
        title: '',
        context: '',
      },
      editing: false,
      labelCol: {
        style: {
          width: '150px',
        },
      },
      wrapperCol: {
        span: 14,
      },
    }
  },
  mounted() {
    const node = this.getNode()
    this.nodeData = node.data.nodeData
  },
  methods: {
    changeComponent() {
      this.formComponet = (formKeyMap[this.nodeData.componentKey] || {}).component || CORE_CHAT_DEFAULT
    },
    creatNext() {
      const graph = this.getGraph()
      const node = this.getNode();
      const newNodeData = {
        id: randomUtil.guid(),
        componentKey: 'CORE_CHAT_DEFAULT',
        peopleObj: {},
        type: 'received',
        title: '',
        context: '',
        nextIdList: [],
      }
      graph.options.customData.addNextNode(node, graph.addNode({
        shape: 'custom-vue-node',
        x: 100,
        y: 60,
        data: {
          nodeData: newNodeData
        },
        anchorPoints: [[0.5, 0.5]]
      }))
    },
    closeEdit() {
      this.editing = false
    },
    edit() {
      this.editing = true
    },
  },
}
</script>

<style scoped>

</style>
