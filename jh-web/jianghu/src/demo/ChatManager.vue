<template>
  <div style="max-height: 1000px">
    <a-button @click="preview">预览</a-button>
    <div id="chatManager"></div>
    <TeleportContainer/>
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

const TeleportContainer = getTeleport()

export default {
  name: "ChatManager",
  components: {ChatComponent, TeleportContainer},
  methods: {
    preview() {
      this.chatData.messageData = this.chatData.nodeData.map(item => item.data.nodeData)
      this.chatData.nowMessageId = this.chatData.messageData[0].id
      this.open = true;
    }
  },
  data() {
    return {
      chatIdMap: {},
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
    });
    const data1 = {
      componentKey: 'CORE_CHAT_DEFAULT',
      id: randomUtil.guid(),
      peopleObj: {},
      type: 'other',
      title: '123',
      context: '<p>家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家</p><p><br></p><p>伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙</p><p>家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙</p>',
      nextIdList: [],
    }
    const node1 = graph.addNode({
      shape: 'custom-vue-node',
      x: 100,
      y: 60,
      data: {
        nodeData: data1
      },
      anchorPoints: [[0.5, 0.5]]
    })
    this.chatData.nodeData.push(node1)
    graph.options.customData.addNextNode(node1, graph.addNode({
      shape: 'custom-vue-node',
      x: 100,
      y: 60,
      data: {
        nodeData: {
          componentKey: 'CORE_CHAT_DEFAULT',
          id: randomUtil.guid(),
          peopleObj: {},
          type: 'other',
          title: '好',
          context: '家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙家伙',
          nextIdList: [],
        }
      },
      anchorPoints: [[0.5, 0.5]]
    }))
  },
}
</script>

<style scoped>

</style>
