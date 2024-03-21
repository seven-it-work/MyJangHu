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
          <a-select v-model:value="nodeData.type" :disabled="nodeData.typeDisable">
            <a-select-option :value="'other'">
              他人
            </a-select-option>
            <a-select-option :value="'me'">
              自己
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="人" v-if="nodeData.type==='other'">
          <a-select v-model:value="nodeData.peopleObj.id" @change="changePeopleObj" :disabled="nodeData.typeDisable">
            <a-select-option v-for="item in peopleList" :key="item.id" :value="item.id">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="改变人物" v-if="nodeData.typeDisable">
          <a-button @click="changePeopleOpen">改变人物</a-button>
        </a-form-item>
        <ChatForm :node-data="nodeData"></ChatForm>
        <!--                <component :is="formComponet" :node-data="nodeData"></component>-->
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary">确定</a-button>
          <a-button style="margin-left: 10px" @click="creatNext">创建下一个</a-button>
        </a-form-item>
      </a-form>
    </a-drawer>
    <a-modal v-model:open="changePeople" @cancel="changePeopleCancel" @ok="changePeopleOk">
      <a-form :model="changePeople" :label-col="{style: {width: '50px',}}" :wrapper-col="wrapperCol">
        <a-form-item label="说话人">
          <a-select v-model:value="changePeopleForm.type" :disabled="changePeopleForm.typeDisable">
            <a-select-option :value="'other'">
              他人
            </a-select-option>
            <a-select-option :value="'me'">
              自己
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="人" v-if="changePeopleForm.type==='other'">
          <a-select v-model:value="changePeopleForm.peopleObj.id" @change="changePeopleObjChange"
                    :disabled="changePeopleForm.typeDisable">
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
import {randomUtil} from "@/random.js";
import modManager from "@/mod/index.js";
import ChatForm from "@/demo/ChatForm.vue";
import {mapState} from "vuex";

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
  computed:{
  ...mapState({
      chatIdMap: state => state.chatIdMap,
    }),
  },
  data() {
    return {
      changePeopleForm: {peopleObj: {}},
      changePeople: false,
      peopleList: [],
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
        span: 24,
      },
    }
  },
  mounted() {
    const node = this.getNode()
    this.nodeData = node.data.nodeData

    this.$api.people.list(1, 999).then(res => {
      this.peopleList = res.records
    })
  },
  methods: {
    changePeopleObjChange(data) {
      this.changePeopleForm.peopleObj = this.peopleList.filter(item => item.id === data)[0]
    },
    changePeopleOk() {
      console.log(this.nodeData.preId,this.chatIdMap)
      // 同级赋值
      const pre=this.chatIdMap[this.nodeData.preId]
      if (pre){
        pre.nextIdList.map(id=>this.chatIdMap[id]).forEach(item=>{
          item.type=this.changePeopleForm.type
          item.peopleObj=this.changePeopleForm.peopleObj
        })
      }
      this.changePeopleCancel()
    },
    changePeopleCancel() {
      this.changePeople = false
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
      const node = this.getNode();
      const newNodeData = {
        id: randomUtil.guid(),
        componentKey: 'CORE_CHAT_DEFAULT',
        peopleObj: {},
        type: 'other',
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
