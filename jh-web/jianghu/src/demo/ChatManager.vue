<template>
  <div style="max-height: 1000px">
    <a-button @click="preview">预览</a-button>
    <a-row>
      <a-col :span="22">
        <a-textarea :allowClear="true" :autosize="{ minRows: 3, maxRows: 3 }" v-model:value="dataJson"></a-textarea>
      </a-col>
      <a-col :span="2">
        <div>
          <a-button @click="importData">导入</a-button>
        </div>
        <div>
          <a-button @click="exportData">导出</a-button>
        </div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="4">
        <div id="chatStencil"></div>
      </a-col>
      <a-col :span="20">
        <div id="chatManager"></div>
        <TeleportContainer/>
      </a-col>
    </a-row>
  </div>
  <ChatComponent v-model:open="open" :chat-data="chatData"></ChatComponent>
</template>

<script>
import ChatEditor from "@/demo/ChatEditor.vue";
import {Cell, Graph} from '@antv/x6'
import {register, getTeleport} from '@antv/x6-vue-shape'
import ChatComponent from "@/demo/ChatComponent.vue";
import {Stencil} from "@antv/x6-plugin-stencil";
import {edgeMateData, graphMateData} from "@/demo/graphMateData.js";
import {randomUtil} from "@/random.js";

const TeleportContainer = getTeleport()

export default {
  name: "ChatManager",
  components: {ChatComponent, TeleportContainer},
  methods: {
    importData() {
      this.graph.parseJSON(JSON.parse(this.dataJson)).forEach(cell => this.graph.addCell(cell))
      const edges = this.graph.getEdges();
      edges.forEach(edge => {
        this.edgeConnected(edge.getSourceNode(), edge.getTargetNode())
      })
    },
    exportData() {
      this.dataJson = JSON.stringify(this.graph.toJSON())
    },
    preview() {
      const nodes = this.graph.getNodes();
      if (!nodes || nodes.length===0){
        // todo 提示没有文本
        console.log("没有文本")
        return
      }
      const nodeMap = {}
      nodes.forEach(node => {
        node.nextNodeIds = []
        node.preNodeIds = []
        nodeMap[node.id] = node;
      })
      const edges = this.graph.getEdges();
      edges.forEach(edge => {
        nodeMap[edge.source.cell].nextNodeIds.push(edge.target.cell)
        nodeMap[edge.target.cell].preNodeIds.push(edge.source.cell)
      })
      const roots = this.graph.getRootNodes();
      // todo 如果有多个入口，让用户选中，现在只选中第一个
      const startNodeId = roots[0].id
      this.chatData = {
        id:randomUtil.guid(),
        nodeMap,
        startNodeId,
        historyNode: []
      }
      this.open = true;
    },
    nodeAdded(node) {
    },
    edgeConnected(sourceNode, targetNode) {
    }
  },
  data() {
    return {
      chatData: [],
      graph: {},
      dataJson: "{\"cells\":[{\"position\":{\"x\":60,\"y\":60},\"size\":{\"width\":100,\"height\":100},\"view\":\"vue-shape-view\",\"shape\":\"custom-vue-node\",\"ports\":{\"groups\":{\"in\":{\"position\":\"left\",\"attrs\":{\"circle\":{\"magnet\":true,\"stroke\":\"#8f8f8f\",\"r\":5}}},\"out\":{\"position\":\"right\",\"attrs\":{\"circle\":{\"magnet\":true,\"stroke\":\"#8f8f8f\",\"r\":5}}}},\"items\":[{\"id\":\"in-1\",\"group\":\"in\"},{\"id\":\"out-1\",\"group\":\"out\"}]},\"id\":\"f39f7a47-f1fb-4d4c-9c2b-88fb9ff374d3\",\"isNode\":true,\"data\":{\"componentKey\":\"CORE_CHAT_DEFAULT\",\"peopleObj\":{\"id\":\"123\",\"xing\":\"李\",\"ming\":\"大力\",\"sex\":\"MAN\",\"description\":\"\",\"remark\":\"\",\"currentSceneId\":\"\",\"currentScene\":null,\"currentWorldId\":\"2cabfad5cb5e42668c205663bdca2b6e\",\"currentWorld\":null,\"currentCityId\":\"\",\"currentCity\":null,\"interactionIdList\":[],\"peopleType\":\"AI_PEOPLE\",\"createTime\":\"2024-03-10\",\"updateTime\":\"2024-03-18\",\"name\":\"李大力\"},\"type\":\"other\",\"title\":\"你好！\",\"context\":\"<p>你好！</p>\",\"nextIdList\":[]},\"zIndex\":1,\"tools\":{\"items\":[\"button-remove\"]}},{\"position\":{\"x\":280,\"y\":40},\"size\":{\"width\":100,\"height\":100},\"view\":\"vue-shape-view\",\"shape\":\"custom-vue-node\",\"ports\":{\"groups\":{\"in\":{\"position\":\"left\",\"attrs\":{\"circle\":{\"magnet\":true,\"stroke\":\"#8f8f8f\",\"r\":5}}},\"out\":{\"position\":\"right\",\"attrs\":{\"circle\":{\"magnet\":true,\"stroke\":\"#8f8f8f\",\"r\":5}}}},\"items\":[{\"id\":\"in-1\",\"group\":\"in\"},{\"id\":\"out-1\",\"group\":\"out\"}]},\"id\":\"dcbf75c4-489f-4050-9693-1be56a14e5a8\",\"isNode\":true,\"data\":{\"componentKey\":\"CORE_CHAT_DEFAULT\",\"peopleObj\":{},\"type\":\"me\",\"title\":\"我不好！\",\"context\":\"<p>我不好！</p>\",\"nextIdList\":[]},\"zIndex\":2,\"tools\":{\"items\":[\"button-remove\"]}},{\"shape\":\"edge\",\"attrs\":{\"line\":{\"stroke\":\"#8f8f8f\",\"strokeWidth\":1}},\"id\":\"55d0c419-0c88-4177-abff-b174016403d5\",\"connector\":\"smooth\",\"zIndex\":3,\"source\":{\"cell\":\"f39f7a47-f1fb-4d4c-9c2b-88fb9ff374d3\",\"port\":\"out-1\"},\"target\":{\"cell\":\"dcbf75c4-489f-4050-9693-1be56a14e5a8\",\"port\":\"in-1\"}},{\"position\":{\"x\":270,\"y\":220},\"size\":{\"width\":100,\"height\":100},\"view\":\"vue-shape-view\",\"shape\":\"custom-vue-node\",\"ports\":{\"groups\":{\"in\":{\"position\":\"left\",\"attrs\":{\"circle\":{\"magnet\":true,\"stroke\":\"#8f8f8f\",\"r\":5}}},\"out\":{\"position\":\"right\",\"attrs\":{\"circle\":{\"magnet\":true,\"stroke\":\"#8f8f8f\",\"r\":5}}}},\"items\":[{\"id\":\"in-1\",\"group\":\"in\"},{\"id\":\"out-1\",\"group\":\"out\"}]},\"id\":\"cd56aae0-41b8-4817-8b4c-8732efe4b6b5\",\"isNode\":true,\"data\":{\"componentKey\":\"CORE_CHAT_DEFAULT\",\"peopleObj\":{},\"type\":\"me\",\"title\":\"好好好！\",\"context\":\"<p>好好好！</p>\",\"nextIdList\":[]},\"tools\":{\"items\":[\"button-remove\"]},\"zIndex\":4},{\"shape\":\"edge\",\"attrs\":{\"line\":{\"stroke\":\"#8f8f8f\",\"strokeWidth\":1}},\"id\":\"69832f40-b549-43aa-9b9c-e3dcdcd8bea8\",\"connector\":\"smooth\",\"source\":{\"cell\":\"f39f7a47-f1fb-4d4c-9c2b-88fb9ff374d3\"},\"target\":{\"cell\":\"cd56aae0-41b8-4817-8b4c-8732efe4b6b5\"},\"zIndex\":5},{\"position\":{\"x\":450,\"y\":50},\"size\":{\"width\":100,\"height\":100},\"view\":\"vue-shape-view\",\"shape\":\"custom-vue-node\",\"ports\":{\"groups\":{\"in\":{\"position\":\"left\",\"attrs\":{\"circle\":{\"magnet\":true,\"stroke\":\"#8f8f8f\",\"r\":5}}},\"out\":{\"position\":\"right\",\"attrs\":{\"circle\":{\"magnet\":true,\"stroke\":\"#8f8f8f\",\"r\":5}}}},\"items\":[{\"id\":\"in-1\",\"group\":\"in\"},{\"id\":\"out-1\",\"group\":\"out\"}]},\"id\":\"130bb719-055f-4e3a-b49d-572d81a6dbc1\",\"isNode\":true,\"data\":{\"componentKey\":\"CORE_CHAT_DEFAULT\",\"peopleObj\":{},\"type\":\"me\",\"title\":\"去你妈的！\",\"context\":\"<p>去你妈的！</p>\",\"nextIdList\":[]},\"tools\":{\"items\":[\"button-remove\"]},\"zIndex\":6},{\"shape\":\"edge\",\"attrs\":{\"line\":{\"stroke\":\"#8f8f8f\",\"strokeWidth\":1}},\"id\":\"34a8dd1b-3510-4632-8e5d-b289caff2175\",\"connector\":\"smooth\",\"source\":{\"cell\":\"dcbf75c4-489f-4050-9693-1be56a14e5a8\"},\"target\":{\"cell\":\"130bb719-055f-4e3a-b49d-572d81a6dbc1\"},\"zIndex\":7}]}",
      open: false,
    }
  },
  mounted() {
    register({
      shape: 'custom-vue-node',
      width: 100,
      height: 100,
      component: ChatEditor,
      ports: {
        groups: {
          in: {
            position: 'left',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
              },
            },
          },
          out: {
            position: 'right',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
              },
            },
          },
        },
      },
    })


    const graph = new Graph({
      container: document.getElementById('chatManager'),
      width: 800,
      height: 600,
      // 背景色
      background: {
        color: '#F2F7FA',
      },
      // 网格样式
      grid: {
        visible: true,
        type: 'doubleMesh',
        args: [
          {
            color: '#eee', // 主网格线颜色
            thickness: 1, // 主网格线宽度
          },
          {
            color: '#ddd', // 次网格线颜色
            thickness: 1, // 次网格线宽度
            factor: 4, // 主次网格线间隔
          },
        ],
      },

      connecting: {
        snap: true,
        allowBlank: false,
        allowLoop: false,
        allowNode: false,
        highlight: true,

        createEdge() {
          return this.createEdge(edgeMateData)
        },

        validateMagnet({magnet}) {
          return magnet.getAttribute('port-group') !== 'in'
        },

        validateConnection({sourceMagnet, targetMagnet}) {
          // 只能从输出链接桩创建连接
          if (!sourceMagnet ||
              sourceMagnet.getAttribute('port-group') === 'in') {
            return false
          }

          // 只能连接到输入链接桩
          if (!targetMagnet ||
              targetMagnet.getAttribute('port-group') !== 'in') {
            return false
          }
          return true
        },
      },
    });
    graph.on('node:added', ({node}) => {
      this.nodeAdded(node)
    })
    graph.on('edge:connected', ({edge}) => {
      this.edgeConnected(edge.getSourceNode(), edge.getTargetNode())
    })
    graph.on('edge:removed', ({edge, index, options}) => {
    })
    graph.on('edge:mouseenter', ({cell}) => {
      cell.addTools([
        {
          name: 'target-arrowhead',
          args: {
            attrs: {
              fill: 'red',
            },
          },
        },
        {
          name: 'button-remove',
          args: {distance: -40},
        },
      ])
    })
    graph.on('edge:mouseleave', ({cell}) => {
      cell.removeTools()
    })
    graph.fromJSON({
      cells: [],
      nodes: [],
      edges: [],
    })

    this.graph = graph
    const stencil = new Stencil({
      target: graph,
      groups: [
        {
          name: '核心组件',
        },
      ],
    })

    stencil.container.getElementsByClassName("x6-widget-stencil-title")[0].innerHTML = '组件'

    document.getElementById("chatStencil").appendChild(stencil.container)
    stencil.load([
      graph.createNode(graphMateData)
    ], '核心组件')
  },
}
</script>

<style scoped>

</style>
