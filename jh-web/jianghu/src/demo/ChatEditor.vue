<template>
  <div>
    <a-card @dblclick="edit"
            style="border: hsl(212, 90%, 90%) 1px solid;height: 100%"
            :title="nodeData.title"
            :bodyStyle="{margin:0,padding:0,textOverflow: 'ellipsis',overflow:'hidden'}"
            :head-style="{margin:0,padding:0,textOverflow: 'ellipsis',minHeight:'20px'}">
      <div v-html="nodeData.context"
           style="text-overflow: ellipsis;height: 100px;width: 100%;overflow: hidden;white-space: nowrap;"></div>
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
        <a-form-item label="说话人">
          <a-select v-model:value="nodeData.type" :disabled="typeDisable">
            <a-select-option :value="'other'">
              他人
            </a-select-option>
            <a-select-option :value="'me'">
              自己
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="人" v-if="nodeData.type==='other'">
          <a-select v-model:value="nodeData.peopleObj.id" @change="changePeopleObj" :disabled="typeDisable">
            <a-select-option v-for="item in peopleList" :key="item.id" :value="item.id">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="改变人物" v-if="typeDisable">
          <a-button @click="changePeopleOpen">改变人物</a-button>
        </a-form-item>
        <ChatForm v-model:node-data="nodeData"></ChatForm>
        <!--                <component :is="formComponet" :node-data="nodeData"></component>-->
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="closeEdit">确定</a-button>
          <a-button style="margin-left: 10px" @click="creatNext">创建下一个</a-button>
          <a-button style="margin-left: 10px" @click="reset">重置</a-button>
        </a-form-item>
      </a-form>
    </a-drawer>
    <a-modal v-model:open="changePeople" @cancel="changePeopleCancel" @ok="changePeopleOk">
      <a-form :model="changePeople" :label-col="{style: {width: '50px',}}" :wrapper-col="wrapperCol">
        <a-form-item label="说话人">
          <a-select v-model:value="changePeopleForm.type">
            <a-select-option :value="'other'">
              他人
            </a-select-option>
            <a-select-option :value="'me'">
              自己
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="人" v-if="changePeopleForm.type==='other'">
          <a-select v-model:value="changePeopleForm.peopleObj.id" @change="changePeopleObjChange">
            <a-select-option v-for="item in peopleList" :key="item.id" :value="item.id">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import modManager from "@/mod/index.js";
import ChatForm from "@/demo/ChatForm.vue";
import {cloneDeep} from "lodash";
import {edgeMateData, graphMateData} from "@/demo/graphMateData.js";

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
  components: {ChatForm},
  inject: ['getNode', 'getGraph', '$api'],
  computed: {},
  data() {
    return {
      nodeData: {},
      layerNodes: [],
      typeDisable: false,
      changePeopleForm: {peopleObj: {}},
      changePeople: false,
      peopleList: [],
      formComponet: CORE_CHAT_DEFAULT,
      formList,
      editing: false,
      labelCol: {
        style: {
          width: '150px',
        },
      },
      wrapperCol: {
        span: 24,
      },
    }
  },
  mounted() {
    this.nodeData = cloneDeep(this.getNode().data)
  },
  created() {
    this.$api.people.list(1, 999).then(res => {
      this.peopleList = res.records
    })
  },
  methods: {
    reset() {
      this.nodeData = cloneDeep(this.getNode().data)
    },
    changePeopleObjChange(data) {
      this.changePeopleForm.peopleObj = this.peopleList.filter(item => item.id === data)[0]
    },
    changePeopleOk() {
      // 同级赋值
      if (this.layerNodes.length > 0) {
        this.layerNodes.forEach(node => {
          node.data.type = this.changePeopleForm.type
          node.data.peopleObj = this.changePeopleForm.peopleObj
        })
      }
      this.changePeopleCancel()
    },
    changePeopleCancel() {
      this.changePeople = false
      this.nodeData = cloneDeep(this.getNode().data)
    },
    changePeopleOpen() {
      this.changePeople = true
      this.changePeopleForm.type = this.nodeData.type
      this.changePeopleForm.peopleObj = this.nodeData.peopleObj
    },
    changePeopleObj(data) {
      this.nodeData.peopleObj = this.peopleList.filter(item => item.id === data)[0]
    },
    changeComponent() {
      this.formComponet = (formKeyMap[this.nodeData.componentKey] || {}).component || CORE_CHAT_DEFAULT
    },
    creatNext() {
      const graph = this.getGraph()
      const target = graph.addNode(graphMateData)
      graph.addEdge({
        ...edgeMateData,
        source: this.getNode(),
        target: target,
      })
    },
    closeEdit() {
      this.getNode().data = this.nodeData
      this.editing = false
    },
    edit() {
      const graph = this.getGraph()
      const node = this.getNode()
      this.nodeData = cloneDeep(this.getNode().data)
      const preNodeList = graph.getNeighbors(node, {incoming: true})
      if (preNodeList && preNodeList.length > 0) {
        const nextNodeList = graph.getNeighbors(preNodeList[0], {outgoing: true})
        if (nextNodeList.length > 1) {
          this.layerNodes = nextNodeList
          this.typeDisable = true
        }
      }
      this.editing = true
    },
  },
}
</script>

<style scoped>

</style>
