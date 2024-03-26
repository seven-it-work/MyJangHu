<template>
  <a-button>保存</a-button>
  <div ref="container" style="width: 100%;height: 100%"></div>
</template>

<script>
import {Graph} from '@antv/x6'
import {GridLayout} from '@antv/layout'
import {mapState} from "vuex";

Graph.registerNode(
    'custom-node-width-port',
    {
      inherit: 'rect',
      width: 70,
      height: 35,
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
          topLeft: {
            position: {
              name: 'line',
              args: {
                dr: 0,
                dx: -34,
                dy: -17,
              },
            },
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
              },
            },
          },
          topRight: {
            position: {
              name: 'line',
              args: {
                dr: 0,
                dx: 34,
                dy: -17,
              },
            },
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
              },
            },
          },
          bottomRight: {
            position: {
              name: 'line',
              args: {
                dr: 0,
                dx: 34,
                dy: 17,
              },
            },
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
              },
            },
          },
          bottomLeft: {
            position: {
              name: 'line',
              args: {
                dr: 0,
                dx: -34,
                dy: 17,
              },
            },
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
              },
            },
          },
          top: {
            position: 'top',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
              },
            },
          },
          bottom: {
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

const nodeOptions = {
  shape: 'custom-node-width-port',
  width: 75,
  height: 35,
  attrs: {
    body: {
      stroke: 'transparent',
    },
    label: {
      fill: '#ffffff',
    },
  },
  ports: {
    items: [
      {
        id: 'port_1',
        group: 'top',
      },
      {
        id: 'port_2',
        group: 'bottom',
      },
      {
        id: 'port_3',
        group: 'left',
      },
      {
        id: 'port_4',
        group: 'right',
      },
      {
        id: 'port_5',
        group: 'topLeft',
      },
      {
        id: 'port_6',
        group: 'topRight',
      },
      {
        id: 'port_7',
        group: 'bottomRight',
      },
      {
        id: 'port_8',
        group: 'bottomLeft',
      },
    ],
  },
}

const port_connect_map = {
  top: 'bottom',
  left: 'right',
  bottomLeft: 'topRight',
  bottomRight: 'topLeft',
}

export default {
  name: "MapX6",
  props: {
    currentMapObj: {}
  },
  watch: {
    currentMapObj: {
      handler() {
        this.graph.clearCells()
        // 数据准备
        const wide = this.currentMapObj.wide;
        const high = this.currentMapObj.high;
        const gridLayout = new GridLayout({
          type: 'grid',
          width: wide * 100,
          height: high * 90,
          rows: high,
          cols: wide,
        })
        const data = {
          nodes: [],
          edges: [],
        }
        // 先渲染空画布
        for (let i = 0; i < high; i++) {
          for (let j = 0; j < wide; j++) {
            if (this.currentMapObj.dataMap && this.currentMapObj.dataMap[i] && this.currentMapObj.dataMap[i][j] && this.currentMapObj.dataMap[i][j].id) {
              data.nodes.push(this.currentMapObj.dataMap[i][j])
            } else {
              data.nodes.push(nodeOptions)
            }
          }
        }
        const model = gridLayout.layout(data)
        this.graph.fromJSON(model)
      }
    }
  },
  data() {
    return {
      graph: undefined,
    }
  },
  computed: {
    ...mapState({
      mapDb: state => state.mapDb,
    }),
  },

  methods: {
    editMode(){
    },
    init() {
      this.graph = new Graph({
        container: this.$refs.container,
        grid: true,
        interacting: {
          nodeMovable: false
        },
        connecting: {
          snap: true,
          allowBlank: false,
          allowLoop: false,
          allowNode: false,
          highlight: true,
          createEdge() {
            return this.createEdge({
              connector: 'jumpover',
              attrs: {
                line: {
                  targetMarker: null,
                },
              },
            })
          },
          validateMagnet({magnet}) {
            // 判断是否能创建连线
            return true
          },
          validateConnection({
                               sourceCell,
                               targetCell,
                               sourceMagnet,
                               targetMagnet,
                             }) {
            // 不能连接自身
            if (sourceCell === targetCell) {
              return false
            }
            if (!sourceMagnet) {
              return false
            }
            if (!targetMagnet) {
              return false
            }
            const sourcePort = sourceMagnet.getAttribute('port-group');
            const targetPort = targetMagnet.getAttribute('port-group');

            // 不能重复连线
            const edges = this.getEdges()
            const portId = targetMagnet.getAttribute('port')
            if (edges.find((edge) => edge.getTargetPortId() === portId)) {
              return false
            }

            if (port_connect_map[sourcePort] === targetPort || port_connect_map[targetPort] === sourcePort) {
              return true
            }

            return false
          }
        },
        panning: true,
        autoResize: true,
        mousewheel: true
      })
    },
  },
  created() {
    setTimeout(() => this.init(), 500)
  },

}
</script>

<style scoped>

</style>
