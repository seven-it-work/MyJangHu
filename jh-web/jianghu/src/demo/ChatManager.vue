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
import {Graph} from '@antv/x6'
import {register, getTeleport} from '@antv/x6-vue-shape'
import {randomUtil} from "@/random.js";
import ChatComponent from "@/demo/ChatComponent.vue";
import {mapState} from "vuex";
import {Stencil} from "@antv/x6-plugin-stencil";

const TeleportContainer = getTeleport()

export default {
  name: "ChatManager",
  components: {ChatComponent, TeleportContainer},
  methods: {
    importData() {
      // todo加入提示 将清空所有画布，请自己备份数据
      this.graph.clearCells()
    },
    exportData() {
      this.chatData.messageData = this.chatData.nodeData.map(item => item.data.nodeData)
      const jsonData = {
        history: this.chatData.history,
        messageData: this.chatData.messageData,
        nowMessageId: this.chatData.nowMessageId,
      }
      this.dataJson = JSON.stringify(jsonData)
      console.log(this.dataJson)
    },
    preview() {
      this.chatData.messageData = this.chatData.nodeData.map(item => item.data.nodeData)
      this.chatData.nowMessageId = this.chatData.messageData[0].id
      this.open = true;
    }
  },
  data() {
    return {
      graph: {},
      root: {},
      chatIdMap: {},
      dataJson: "{\"history\":[],\"messageData\":[{\"componentKey\":\"CORE_CHAT_DEFAULT\",\"id\":\"91a9a231-7823-5f01-9d48-0f50dafa8eab\",\"peopleObj\":{},\"type\":\"other\",\"title\":\"123\",\"context\":\"<p>家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家</p><p><br></p><p>伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙</p><p>家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙</p>\",\"nextIdList\":[\"c828f430-f224-5fbe-9a34-6383f61a7b99\"]},{\"componentKey\":\"CORE_CHAT_DEFAULT\",\"id\":\"c828f430-f224-5fbe-9a34-6383f61a7b99\",\"peopleObj\":{},\"type\":\"other\",\"title\":\"好\",\"context\":\"家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙\",\"nextIdList\":[],\"typeDisable\":false,\"preId\":\"91a9a231-7823-5f01-9d48-0f50dafa8eab\"}],\"nowMessageId\":\"\"}",
      chatData: {
        history: [],
        nodeData: [],
        messageData: [],
        nowMessageId: "",
      },
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
      customData: {
        delNode: (node) => {
          // 如果有下游不允许删除
        },
        addNextNode: (preNode, nextNode) => {
          this.chatData.nodeData.push(nextNode)
          const nextIdList = preNode.data.nodeData.nextIdList
          if (nextIdList.length > 0) {
            const peerData = this.chatIdMap[nextIdList[0]]
            // 判断同级的type必须一致，人员必须一致
            nextNode.data.nodeData.type = peerData.type
            nextNode.data.nodeData.peopleObj = peerData.peopleObj
            peerData.typeDisable = true
            nextNode.data.nodeData.typeDisable = true
          } else {
            nextNode.data.nodeData.typeDisable = false
          }
          preNode.data.nodeData.nextIdList.push(nextNode.data.nodeData.id)
          this.chatIdMap[nextNode.data.nodeData.id] = nextNode.data.nodeData
          // 设置父节点
          nextNode.data.nodeData.preId = preNode.data.nodeData.id
          this.$store.commit('updateChatIdMap', this.chatIdMap)
          graph.addEdge({
            attrs: {
              line: {
                stroke: '#8f8f8f',
                strokeWidth: 1,
              },
            },
            connector: {
              name: 'smooth',
            },
            source: preNode,
            target: nextNode,
          })
        }
      },
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
          return this.createEdge({
            connector: 'smooth',
            attrs: {
              line: {
                stroke: '#8f8f8f',
                strokeWidth: 1,
              },
            },
          })
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
    this.graph = graph

    const stencil = new Stencil({
      target: graph,
      groups: [
        {
          name: '核心组件',
        },
      ],
    })


    document.getElementById("chatStencil").appendChild(stencil.container)
    stencil.load([
      graph.createNode({
        shape: 'custom-vue-node',
        x: 100,
        y: 60,
        data: {
          nodeData:  {
            componentKey: 'CORE_CHAT_DEFAULT',
            id: randomUtil.guid(),
            peopleObj: {},
            type: '',
            title: '',
            context: '',
            nextIdList: [],
          }
        },
        ports: [
          {id: 'in-1', group: 'in'},
          {id: 'out-1', group: 'out'},
        ],
        tools: ['button-remove'],
      })
    ], '核心组件')
  },
}
</script>

<style scoped>

</style>
