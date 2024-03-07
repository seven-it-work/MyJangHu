<template>
  <div>
    <div>
      <a-button @click="openMethod">添加世界</a-button>
      <a-table :dataSource="dataSource" :columns="columns">
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.dataIndex === 'mapSize'">
            <span>{{ record.matrixMap.length }}*{{ record.matrixMap[0].length }}</span>
          </template>
          <template v-else-if="column.dataIndex === 'options'">
            <a-button @click="go2World(record)">进入世界</a-button>
            <a-button @click="editorWorld(record)">编辑</a-button>
            <a-button @click="deleteWorld(record)" style="color: red">删除</a-button>
          </template>
          <template v-else-if="column.dataIndex === 'entryCityId'">
            <span>{{
                (record.cityVoList.filter(item => item.id === record.entryCityId)[0] || {name: record.entryCityId}).name
              }}</span>
          </template>
        </template>
      </a-table>
      <a-drawer :width="500" title="添加世界" placement="top" :open="open" @close="closeDrawer">
        <template #extra>
          <a-button style="margin-right: 8px" @click="closeDrawer">取消</a-button>
          <a-button style="margin-right: 8px" @click="randomCreate">随机生成</a-button>
          <a-button type="primary" @click="doAddOrUpdate">提交</a-button>
        </template>
        <a-form :model="addForm" layout="horizontal" :label-col="labelCol"
                :wrapper-col="wrapperCol">
          <a-form-item label="id">
            <a-input v-model:value="addForm.id" disabled/>
          </a-form-item>
          <a-form-item label="名称">
            <a-input v-model:value="addForm.name"/>
          </a-form-item>
          <a-form-item label="描述">
            <a-input v-model:value="addForm.description"/>
          </a-form-item>
          <a-form-item label="进入的默认地图id">
            <a-select
                ref="select"
                v-model:value="addForm.entryCityId"
                placeholder="选择进入的默认城市id"
            >
              <a-select-option v-for="item in addForm.cityVoList" :key="item.id" :value="item.id">{{
                  item.name
                }}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="尺寸" name="dimensions" :rules="[{ required: true, message: '请输入尺寸!' }]">
            <span class="ant-form-text">长</span>
            <a-form-item name="col" no-style label="长">
              <a-input-number v-model:value="addForm.length" :min="1" :max="100"/>
            </a-form-item>
            <span class="ant-form-text">宽</span>
            <a-form-item name="row" no-style label="宽">
              <a-input-number v-model:value="addForm.width" :min="1" :max="100"/>
            </a-form-item>
          </a-form-item>
        </a-form>
      </a-drawer>
    </div>
  </div>
</template>

<script>
import {world} from "@/http/api.js"
import {randomUtil} from "@/random.js";
import {getZone} from "random_chinese_fantasy_names";

export default {
  name: "Index",
  data() {
    return {
      columns: [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
          ellipsis: true,
        },
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '描述',
          dataIndex: 'description',
          key: 'description',
          ellipsis: true,
        },
        {
          title: '进入时的城市',
          dataIndex: 'entryCityId',
          key: 'entryCityId',
        },
        {
          title: '地图大小',
          dataIndex: 'mapSize',
          key: 'mapSize',
        },
        {
          title: '操作',
          dataIndex: 'options',
          key: 'options',
        },
      ],
      dataSource: [],
      labelCol: {
        style: {
          width: '150px',
        },
      },
      wrapperCol: {
        span: 14,
      },
      open: false,
      addForm: {
        id: '',
        name: '',
        description: '',
        entryCityId: '',
        length: 0,
        width: 0,
        matrixMap: [[]],
        cityVoList: [],
      },
    }
  },
  created() {
    this.listWorld()
  },
  methods: {
    randomCreate() {
      const location = getZone(1)[0]
      this.addForm.name = location.name
      this.addForm.width = randomUtil.integer({min: 1, max: 10})
      this.addForm.length = randomUtil.integer({min: 1, max: 10})
    },
    go2World(record) {
      this.$router.push('/cityManager/' + record.id)
    },
    editorWorld(record) {
      this.addForm = {
        ...record,
        id: record.id,
        name: record.name,
        description: record.description,
        entryCityId: record.entryCityId,
        length: record.matrixMap.length,
        width: record.matrixMap[0].length,
        matrixMap: record.matrixMap
      }
      this.openMethod()
    },
    deleteWorld(record) {
      world.delete(record.id).then(() => {
        this.listWorld();
      })
    },
    openMethod() {
      this.open = true;
    },
    closeDrawer() {
      this.open = false
      this.addForm = {
        id: '',
        name: '',
        description: '',
        entryCityId: '',
        length: 0,
        width: 0,
        matrixMap: [[]]
      }
    },
    doUpdate() {
      const matrixMap = []
      for (let i = 0; i < this.addForm.length; i++) {
        const tempList = []
        for (let j = 0; j < this.addForm.width; j++) {
          if (this.addForm.matrixMap[i] && this.addForm.matrixMap[i][j]) {
            tempList.push(this.addForm.matrixMap[i][j])
          } else {
            tempList.push('')
          }
        }
        matrixMap.push(tempList)
      }
      return world.update({
        id: this.addForm.id,
        worldId: this.addForm.worldId,
        name: this.addForm.name,
        description: this.addForm.description,
        matrixMap: matrixMap,
        entryCityId: this.addForm.entryCityId
      })
    },
    doAdd() {
      const matrixMap = []
      for (let i = 0; i < this.addForm.length; i++) {
        const tempList = []
        for (let j = 0; j < this.addForm.width; j++) {
          tempList.push('')
        }
        matrixMap.push(tempList)
      }
      return world.add({
        id: this.addForm.id,
        worldId: this.addForm.worldId,
        name: this.addForm.name,
        description: this.addForm.description,
        matrixMap: matrixMap,
        entryCityId: this.addForm.entryCityId
      })
    },
    doAddOrUpdate() {
      let p
      if (this.addForm.id) {
        p = this.doUpdate()
      } else {
        p = this.doAdd()
      }
      p.then(() => {
        this.closeDrawer()
        this.listWorld()
      })
    },
    listWorld() {
      world.list(1, 10, true).then(res => {
        this.dataSource = res.records
      })
    },
  }
}
</script>

<style scoped>

</style>