<template>
  <a-row>
    <a-col :span="4">
      <div id="stencilContainer"></div>
    </a-col>
    <a-col :span="20">
      <div id="container"></div>
    </a-col>
  </a-row>


  <TeleportContainer/>
</template>

<script>
import X6MyNode from "@/demo/X6MyNode.vue";
import {Graph,} from '@antv/x6'
import {register, getTeleport} from '@antv/x6-vue-shape'
import {Stencil} from '@antv/x6-plugin-stencil'
import {Snapline} from '@antv/x6-plugin-snapline'

const TeleportContainer = getTeleport()
export default {
  name: "X6Demo",
  components: {TeleportContainer},
  data() {
    return {
      graph: '',
    }
  },
  methods: {},
  mounted() {
    register({
      shape: 'custom-vue-node',
      width: 100,
      height: 100,
      component: X6MyNode,
      ports: {
        groups: {
          in: {
            position: 'top',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
              },
            },
          },
          out: {
            position: 'bottom',
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

    Graph.registerNode(
        'custom-node-width-port',
        {
          inherit: 'rect',
          width: 100,
          height: 40,
          attrs: {
            body: {
              stroke: '#8f8f8f',
              strokeWidth: 1,
              fill: '#fff',
              rx: 6,
              ry: 6,
            },
          },
          ports: {
            groups: {
              in: {
                position: 'top',
                attrs: {
                  circle: {
                    magnet: true,
                    stroke: '#8f8f8f',
                    r: 5,
                  },
                },
              },
              out: {
                position: 'bottom',
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
        },
        true,
    )

    const magnetAvailabilityHighlighter = {
      name: 'stroke',
      args: {
        padding: 3,
        attrs: {
          strokeWidth: 3,
          stroke: '#52c41a',
        },
      },
    }

    const graph = new Graph({
      container: document.getElementById('container'),
      autoResize: true,
      width: 800,
      height: 600,
      // 背景色
      background: {
        color: '#F2F7FA',
      },
      highlighting: {
        magnetAvailable: magnetAvailabilityHighlighter,
      },
      connecting: {
        snap: true,
        allowBlank: false,
        allowLoop: false,
        allowNode: false,
        highlight: true,

        createEdge() {
          return this.createEdge({
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
    })

    const source = graph.addNode({
      shape: 'custom-node-width-port',
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      label: 'source',
      ports: [
        {id: 'in-1', group: 'in'},
        {id: 'in-2', group: 'in'},
        {id: 'out-1', group: 'out'},
        {id: 'out-2', group: 'out'},
      ],
      tools: ['button-remove'],
    })

    const target = graph.addNode({
      shape: 'custom-node-width-port',
      x: 140,
      y: 240,
      width: 100,
      height: 40,
      label: 'target',
      ports: [
        {id: 'in-1', group: 'in'},
        {id: 'in-2', group: 'in'},
        {id: 'out-1', group: 'out'},
        {id: 'out-2', group: 'out'},
      ],
      tools: ['button-remove'],
    })

    graph.addNode({
      shape: 'custom-vue-node',
      x: 320,
      y: 120,
      width: 100,
      height: 40,
      label: 'hello',
      ports: [
        {id: 'in-1', group: 'in'},
        {id: 'in-2', group: 'in'},
        {id: 'out-1', group: 'out'},
        {id: 'out-2', group: 'out'},
      ],
      tools: ['button-remove'],
    })

    graph.addEdge({
      source: {cell: source.id, port: 'out-2'},
      target: {cell: target.id, port: 'in-1'},
      attrs: {
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    })

    graph.on('edge:mouseenter', ({cell}) => {
      cell.addTools([
        {
          name: 'source-arrowhead',
        },
        {
          name: 'target-arrowhead',
          args: {
            attrs: {
              fill: 'red',
            },
          },
        },
      ])
    })

    graph.on('edge:mouseleave', ({cell}) => {
      cell.removeTools()
    })

    graph.centerContent()


    const stencil = new Stencil({
      target: graph,
      groups: [
        {
          name: 'group1',
        },
        {
          name: 'group2',
        },
      ],
    })
    const rect1 = graph.createNode({
      shape: 'custom-node-width-port',
      x: 140,
      y: 240,
      width: 100,
      height: 40,
      label: 'target',
      ports: [
        {id: 'in-1', group: 'in'},
        {id: 'in-2', group: 'in'},
        {id: 'out-1', group: 'out'},
        {id: 'out-2', group: 'out'},
      ],
      tools: ['button-remove'],
    })
    const rect2 = graph.createNode({
      shape: 'custom-vue-node',
      x: 140,
      y: 240,
      width: 100,
      height: 40,
      label: 'target',
      ports: [
        {id: 'in-1', group: 'in'},
        {id: 'in-2', group: 'in'},
        {id: 'out-1', group: 'out'},
        {id: 'out-2', group: 'out'},
      ],
      tools: ['button-remove'],
    })

    const stencilContainer = document.getElementById("stencilContainer");
    // 需要一个容纳 stencil 的 Dom 容器 stencilContainer
    stencilContainer.appendChild(stencil.container)
    stencil.load([rect1,rect2], 'group1')


    this.graph = graph;
  },
}
</script>

<style scoped>

</style>
