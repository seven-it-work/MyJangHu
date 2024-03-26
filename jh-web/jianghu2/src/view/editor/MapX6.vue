<template>
  <a-row style="height: 50%;">
    <div ref="container" style="width: 100%;height: 100%"></div>
  </a-row>
  <a-row style="height: 50%;overflow: scroll">
    <a-form>
      <a-form-item label="地图名称：">
        <a-input v-model:value="updateForm.name"></a-input>
      </a-form-item>
      <a-form-item label="描述：">
        <a-input v-model:value="updateForm.description"></a-input>
      </a-form-item>
      <a-form-item>
        <a-button @click="update">修改</a-button>
      </a-form-item>
    </a-form>
    <a-divider></a-divider>
    <div>场景内对象</div>
  </a-row>
</template>

<script>
import {Graph} from '@antv/x6'
import {GridLayout} from '@antv/layout'
import {mapState} from "vuex";
import {mapAPi, x6EdgeApi, x6NodeApi} from "@/http/localApi.js";

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
      text: "",
      fill: '#000000',
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
        this.justClear=true
        this.graph.clearCells()
        this.updateGraph()
      }
    }
  },
  data() {
    return {
      graph: undefined,
      currentNode: undefined,
      updateForm: {
        id: '',
        name: '',
        description: '',
      },
      justClear:false,
    }
  },
  methods: {
    updateGraph() {
      // 数据准备
      const wide = this.currentMapObj.wide;
      const high = this.currentMapObj.high;
      const gridLayout = new GridLayout({
        type: 'grid',
        width: wide * 100,
        height: high * 100,
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
          if (this.currentMapObj.dataMap && this.currentMapObj.dataMap[i] && this.currentMapObj.dataMap[i][j]) {
            const x6NodeId = this.currentMapObj.dataMap[i][j]
            const node = x6NodeApi.getById(x6NodeId);
            const attrs = node.attrs || {}
            const body = attrs.body || {}
            body.stroke = null;
            node.attrs = attrs
            data.nodes.push(node)
          } else {
            data.nodes.push({...nodeOptions, data: {i, j}})
          }
        }
      }
      // 查询连线
      data.edges.push(...x6EdgeApi.getByMapId(this.currentMapObj.id))
      const model = gridLayout.layout(data)
      this.graph.fromJSON(model)

      this.justClear=false
    },
    update() {
      this.currentNode.data.id = this.currentNode.id
      this.currentNode.data.mapId = this.currentMapObj.id
      this.currentNode.data.name = this.updateForm.name
      this.currentNode.data.description = this.updateForm.description
      this.currentNode.attr('label/text', this.updateForm.name)
      x6NodeApi.saveOrUpdate(this.currentNode)
      // 更新地图的中存的id
      if (this.currentNode.data.name) {
        const i = this.currentNode.data.i
        const j = this.currentNode.data.j
        this.currentMapObj.dataMap[i][j] = this.currentNode.id
        mapAPi.update(this.currentMapObj)
      }
    },
    init() {
      this.graph = new Graph({
        container: this.$refs.container,
        grid: true,
        highlighting: {
          // 当链接桩可以被链接时，在链接桩外围渲染一个 2px 宽的红色矩形框
          magnetAvailable: {
            name: 'stroke',
            args: {
              padding: 4,
              attrs: {
                'stroke-width': 2,
                stroke: 'red',
              }
            },
          },
        },
        interacting: {
          nodeMovable: false
        },
        connecting: {
          snap: true,
          allowMulti: false,
          allowBlank: false,
          allowLoop: false,
          allowNode: false,
          highlight: true,
          createEdge() {
            return this.createEdge({
              connector: 'jumpover',
              tools: ['button-remove'],
              attrs: {
                line: {
                  targetMarker: null,
                },
              },
            })
          },
          validateMagnet(data) {
            const magnet = data.magnet
            const cell = data.cell
            // 不能重复创建线条，一个链接柱只能有一个连线
            const edges = this.getEdges()
            const portId = magnet.getAttribute('port')
            const find = edges.find((edge) =>
                (cell.id === edge.target.cell && edge.getTargetPortId() === portId) ||
                (cell.id === edge.source.cell && edge.getSourcePortId() === portId)
            );
            if (find) {
              return false
            }
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

            // 不允许target再次被连接
            const edges = this.getEdges()
            const portId = targetMagnet.getAttribute('port')
            const find = edges.find((edge) =>
                (targetCell.id === edge.target.cell && edge.getTargetPortId() === portId) ||
                (targetCell.id === edge.source.cell && edge.getSourcePortId() === portId)
            );
            if (find) {
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
      // 监听器
      this.graph.on("node:click", ({node}) => {
        // 点击后，边框变红
        if (this.currentNode) {
          this.currentNode.attr('body/stroke', null)
        }
        node.attr('body/stroke', "red")
        this.currentNode = node
        if (this.currentNode && this.currentNode.data) {
          this.updateForm.id = this.currentNode.data.id
          this.updateForm.name = this.currentNode.data.name
          this.updateForm.description = this.currentNode.data.description
        }
      })
      this.graph.on("edge:connected", ({edge, isNew}) => {
        if (isNew) {
          edge.data = {
            id: edge.id,
            mapId: this.currentMapObj.id,
          }
          // 保存连线
          x6EdgeApi.saveOrUpdate(edge)
        }
      })
      this.graph.on("edge:removed", ({edge}) => {
        if (edge.target.cell && !this.justClear) {
          x6EdgeApi.delete(edge.id)
        }
      })
      this.updateGraph()
    },
  },
  created() {
    setTimeout(() => this.init(), 500)
  },

}
</script>

<style scoped>

</style>
