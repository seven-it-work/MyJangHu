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
        <a-form-item label="标题">
          <a-input v-model:value="nodeData.title" />
        </a-form-item>
        <a-form-item label="人">
          <a-input v-model:value="nodeData.title" />
        </a-form-item>
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

export default {
  name: "ChatEditor",
  inject: ['getNode','getGraph'],
  data() {
    return {
      labelCol : {
        style: {
          width: '150px',
        },
      },
      wrapperCol : {
        span: 14,
      },
      nodeData: {
        title: '',
        context: ''
      },
      editing: false,
    }
  },
  mounted() {
    const node = this.getNode()
    this.nodeData = node.data.nodeData
  },
  methods: {
    creatNext(){
      const graph = this.getGraph()
      const node = this.getNode();
      graph.options.customData.addNextNode(node,graph.addNode({
        shape: 'custom-vue-node',
        x: 100,
        y: 60,
        data:{
          nodeData: {
            id: randomUtil.guid(),
            peopleObj: {},
            type: 'received',
            title: '',
            context: '',
            nextIdList:[],
          }
        },
        anchorPoints: [[0.5, 0.5]]
      }))
    },
    closeEdit() {
      this.editing = false
    },
    edit() {
      this.editing = true
    }
  },
}
</script>

<style scoped>

</style>
