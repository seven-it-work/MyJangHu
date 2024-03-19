<template>
  <div style="max-height: 1000px">
    <a-button @click="preview">预览</a-button>
    <div id="chatManager"></div>
    <TeleportContainer/>
  </div>
  <a-modal v-model:open="open">
    <ChatComponent  :message-data="messageData.map(item => item.data.nodeData)"></ChatComponent>
  </a-modal>
</template>

<script>
import ChatEditor from "@/demo/ChatEditor.vue";
import {Graph} from '@antv/x6'
import {register, getTeleport} from '@antv/x6-vue-shape'
import {randomUtil} from "@/random.js";
import ChatComponent from "@/demo/ChatComponent.vue";

const TeleportContainer = getTeleport()

export default {
  name: "ChatManager",
  components: {ChatComponent, TeleportContainer},
  methods: {
    preview() {
      this.open = true;
    }
  },
  data() {
    return {
      messageData: [],
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
        addNextNode: (preNode, nextNode) => {
          this.messageData.push(nextNode)
          preNode.data.nodeData.nextIdList.push(nextNode.data.nodeData.id)
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
      id: randomUtil.guid(),
      peopleObj: {},
      type: 'send',
      title: '123',
      context: '444',
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
    this.messageData.push(node1)
    graph.options.customData.addNextNode(node1,graph.addNode({
      shape: 'custom-vue-node',
      x: 100,
      y: 60,
      data:{
        nodeData: {
          id: randomUtil.guid(),
          peopleObj: {},
          type: 'received',
          title: '好',
          context: '家伙',
          nextIdList:[],
        }
      },
      anchorPoints: [[0.5, 0.5]]
    }))
  },
}
</script>

<style scoped>

</style>
