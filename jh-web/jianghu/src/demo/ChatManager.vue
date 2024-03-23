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
      if (!nodes || nodes.length === 0) {
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
        id: randomUtil.guid(),
        nodeMap,
        startNodeId,
        historyNode: []
      }
      this.open = true;
    },
    nodeAdded(node) {
    },
    edgeConnected(sourceNode, targetNode) {
      // 获取targetNode的同层数据
      const nextNodeList = this.graph.getNeighbors(sourceNode, {outgoing: true})
      if (nextNodeList.length > 1) {
        const node = nextNodeList[0]
        targetNode.data.type = node.data.type
        targetNode.data.peopleObj = node.data.peopleObj
      }
    }
  },
  data() {
    return {
      chatData: [],
      graph: {},
      dataJson: `{"cells":[{"position":{"x":210,"y":60},"size":{"width":100,"height":100},"view":"vue-shape-view","shape":"custom-vue-node","ports":{"groups":{"in":{"position":"left","attrs":{"circle":{"magnet":true,"stroke":"#8f8f8f","r":5}}},"out":{"position":"right","attrs":{"circle":{"magnet":true,"stroke":"#8f8f8f","r":5}}}},"items":[{"id":"in-1","group":"in"},{"id":"out-1","group":"out"}]},"id":"bebecee6-6689-427c-b832-1800afc86f93","isNode":true,"data":{"componentKey":"CORE_CHAT_DEFAULT","peopleObj":{"id":"123","xing":"李","ming":"大力","name":"李大力","sex":"MAN","description":"","remark":"","currentSceneId":"","currentWorldId":"c66c5a3267e7485592506cebb52cfca1","currentCityId":"37817475185b4defb405e629c35a4898","interactionIdList":[],"peopleType":"AI_PEOPLE","createTime":1710000000000,"updateTime":1710000000000},"type":"other","title":"序章","context":"<p><span style=\\"background-color: rgba(255, 255, 255, 0.05);\\">（微微颔首，表情显得有些漠然）我是灵山圣女，我必须下山寻找四大神器以阻止即将到来的天劫。<span class=\\"ql-cursor\\">﻿</span></span></p>","nextIdList":[]},"tools":{"items":["button-remove"]},"zIndex":1},{"position":{"x":410,"y":150},"size":{"width":100,"height":100},"view":"vue-shape-view","shape":"custom-vue-node","ports":{"groups":{"in":{"position":"left","attrs":{"circle":{"magnet":true,"stroke":"#8f8f8f","r":5}}},"out":{"position":"right","attrs":{"circle":{"magnet":true,"stroke":"#8f8f8f","r":5}}}},"items":[{"id":"in-1","group":"in"},{"id":"out-1","group":"out"}]},"id":"6da879aa-3208-423b-b6b7-f6c4d3545c55","isNode":true,"data":{"componentKey":"CORE_CHAT_DEFAULT","peopleObj":{},"type":"me","title":"四大神器是什么？","context":"<p>四大神器是什么？</p>","nextIdList":[]},"tools":{"items":["button-remove"]},"zIndex":2},{"shape":"edge","attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":1}},"id":"e0885895-9179-4326-b8ff-41b729784876","connector":"smooth","source":{"cell":"bebecee6-6689-427c-b832-1800afc86f93","port":"out-1"},"target":{"cell":"6da879aa-3208-423b-b6b7-f6c4d3545c55","port":"in-1"},"zIndex":3},{"position":{"x":390,"y":310},"size":{"width":100,"height":100},"view":"vue-shape-view","shape":"custom-vue-node","ports":{"groups":{"in":{"position":"left","attrs":{"circle":{"magnet":true,"stroke":"#8f8f8f","r":5}}},"out":{"position":"right","attrs":{"circle":{"magnet":true,"stroke":"#8f8f8f","r":5}}}},"items":[{"id":"in-1","group":"in"},{"id":"out-1","group":"out"}]},"id":"b6900999-5afa-4c36-a8af-98ad9b66593e","isNode":true,"data":{"componentKey":"CORE_CHAT_DEFAULT","peopleObj":{},"type":"me","title":"天劫是什么？","context":"<p>天劫是什么？</p>","nextIdList":[]},"tools":{"items":["button-remove"]},"zIndex":4},{"shape":"edge","attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":1}},"id":"cea1344d-974f-448e-8d14-5d659123a56a","connector":"smooth","source":{"cell":"bebecee6-6689-427c-b832-1800afc86f93"},"target":{"cell":"b6900999-5afa-4c36-a8af-98ad9b66593e"},"zIndex":5},{"position":{"x":400,"y":-10},"size":{"width":100,"height":100},"view":"vue-shape-view","shape":"custom-vue-node","ports":{"groups":{"in":{"position":"left","attrs":{"circle":{"magnet":true,"stroke":"#8f8f8f","r":5}}},"out":{"position":"right","attrs":{"circle":{"magnet":true,"stroke":"#8f8f8f","r":5}}}},"items":[{"id":"in-1","group":"in"},{"id":"out-1","group":"out"}]},"id":"bcd8a22d-d2bb-472b-a085-85ed8cdf3bd2","isNode":true,"data":{"componentKey":"CORE_CHAT_DEFAULT","peopleObj":{},"type":"me","title":"帮忙","context":"<p>我能帮你什么吗？</p>","nextIdList":[]},"tools":{"items":["button-remove"]},"zIndex":6},{"shape":"edge","attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":1}},"id":"0a524158-419b-4f28-8ec2-0b753d364ef6","connector":"smooth","source":{"cell":"bebecee6-6689-427c-b832-1800afc86f93","port":"out-1"},"target":{"cell":"bcd8a22d-d2bb-472b-a085-85ed8cdf3bd2","port":"in-1"},"zIndex":7},{"position":{"x":620,"y":190},"size":{"width":100,"height":100},"view":"vue-shape-view","shape":"custom-vue-node","ports":{"groups":{"in":{"position":"left","attrs":{"circle":{"magnet":true,"stroke":"#8f8f8f","r":5}}},"out":{"position":"right","attrs":{"circle":{"magnet":true,"stroke":"#8f8f8f","r":5}}}},"items":[{"id":"in-1","group":"in"},{"id":"out-1","group":"out"}]},"id":"22576657-2788-4af9-81b4-995044060e06","isNode":true,"data":{"componentKey":"CORE_CHAT_DEFAULT","peopleObj":{"id":"123","xing":"李","ming":"大力","name":"李大力","sex":"MAN","description":"","remark":"","currentSceneId":"","currentWorldId":"c66c5a3267e7485592506cebb52cfca1","currentCityId":"37817475185b4defb405e629c35a4898","interactionIdList":[],"peopleType":"AI_PEOPLE","createTime":1710000000000,"updateTime":1710000000000},"type":"other","title":"","context":"<p><span style=\\"background-color: rgba(255, 255, 255, 0.05);\\">（眼神稍显凝重，但语气依旧保持平静）盘古斧、东皇钟、轩辕剑、太极图。</span></p>","nextIdList":[]},"tools":{"items":["button-remove"]},"zIndex":8},{"shape":"edge","attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":1}},"id":"9cba5fbc-1958-46f0-88bc-d74a5fe2759d","connector":"smooth","source":{"cell":"6da879aa-3208-423b-b6b7-f6c4d3545c55"},"target":{"cell":"22576657-2788-4af9-81b4-995044060e06"},"zIndex":9},{"position":{"x":560,"y":340},"size":{"width":100,"height":100},"view":"vue-shape-view","shape":"custom-vue-node","ports":{"groups":{"in":{"position":"left","attrs":{"circle":{"magnet":true,"stroke":"#8f8f8f","r":5}}},"out":{"position":"right","attrs":{"circle":{"magnet":true,"stroke":"#8f8f8f","r":5}}}},"items":[{"id":"in-1","group":"in"},{"id":"out-1","group":"out"}]},"id":"1e3a8296-985c-4e43-aac4-fa16072c1fc4","isNode":true,"data":{"componentKey":"CORE_CHAT_DEFAULT","peopleObj":{"id":"123","xing":"李","ming":"大力","name":"李大力","sex":"MAN","description":"","remark":"","currentSceneId":"","currentWorldId":"c66c5a3267e7485592506cebb52cfca1","currentCityId":"37817475185b4defb405e629c35a4898","interactionIdList":[],"peopleType":"AI_PEOPLE","createTime":1710000000000,"updateTime":1710000000000},"type":"other","title":"","context":"<p><span style=\\"background-color: rgba(255, 255, 255, 0.05);\\">天劫是天地间的浩劫，将带来巨大的灾难。</span></p>","nextIdList":[]},"tools":{"items":["button-remove"]},"zIndex":10},{"shape":"edge","attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":1}},"id":"571894c9-006b-4a4a-8d54-e809698c79f4","connector":"smooth","source":{"cell":"b6900999-5afa-4c36-a8af-98ad9b66593e","port":"out-1"},"target":{"cell":"1e3a8296-985c-4e43-aac4-fa16072c1fc4","port":"in-1"},"zIndex":11},{"position":{"x":570,"y":20},"size":{"width":100,"height":100},"view":"vue-shape-view","shape":"custom-vue-node","ports":{"groups":{"in":{"position":"left","attrs":{"circle":{"magnet":true,"stroke":"#8f8f8f","r":5}}},"out":{"position":"right","attrs":{"circle":{"magnet":true,"stroke":"#8f8f8f","r":5}}}},"items":[{"id":"in-1","group":"in"},{"id":"out-1","group":"out"}]},"id":"b0813c50-ea43-42f9-95af-9bb816fcb409","isNode":true,"data":{"componentKey":"CORE_CHAT_DEFAULT","peopleObj":{"id":"123","xing":"李","ming":"大力","name":"李大力","sex":"MAN","description":"","remark":"","currentSceneId":"","currentWorldId":"c66c5a3267e7485592506cebb52cfca1","currentCityId":"37817475185b4defb405e629c35a4898","interactionIdList":[],"peopleType":"AI_PEOPLE","createTime":1710000000000,"updateTime":1710000000000},"type":"other","title":"","context":"<p><span style=\\"background-color: rgba(255, 255, 255, 0.05);\\">（轻抚发丝，神情恢复冷漠）你若能帮我寻得那些神器，或许就能减少许多艰难险阻。</span></p>","nextIdList":[]},"tools":{"items":["button-remove"]},"zIndex":12},{"shape":"edge","attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":1}},"id":"7193d720-363d-429b-89b1-50ecbdd220c1","connector":"smooth","source":{"cell":"bcd8a22d-d2bb-472b-a085-85ed8cdf3bd2","port":"out-1"},"target":{"cell":"b0813c50-ea43-42f9-95af-9bb816fcb409","port":"in-1"},"zIndex":13},{"shape":"edge","attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":1}},"id":"3f88bf94-cc2d-4cd8-9e38-77b2378f9fa4","connector":"smooth","source":{"cell":"b0813c50-ea43-42f9-95af-9bb816fcb409","port":"out-1"},"target":{"cell":"6da879aa-3208-423b-b6b7-f6c4d3545c55","port":"in-1"},"zIndex":14}]}`,
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
