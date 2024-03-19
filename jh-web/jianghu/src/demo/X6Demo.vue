<template>
  <div id="container"></div>
  <TeleportContainer />
</template>

<script>
import X6MyNode from "@/demo/X6MyNode.vue";
import { Graph } from '@antv/x6'
import { register, getTeleport } from '@antv/x6-vue-shape'
const TeleportContainer= getTeleport()
export default {
  name: "X6Demo",
  components:{TeleportContainer},
  mounted() {
    register({
      shape: 'custom-vue-node',
      width: 100,
      height: 100,
      component: X6MyNode,
    })

    const graph = new Graph({
      container: document.getElementById('container'),
      autoResize: true,
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

    const node1 =  graph.addNode({
      shape: 'custom-vue-node',
      x: 100,
      y: 60,
    })
    const node2 =  graph.addNode({
      shape: 'custom-vue-node',
      x: 100,
      y: 60,
    })

    graph.addEdge({
      attrs: {
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
      source: node1,
      target: node2,
    })
  },
}
</script>

<style scoped>

</style>
