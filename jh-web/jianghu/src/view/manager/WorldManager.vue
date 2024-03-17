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
      <div style="overflow-x:scroll;position: relative">
        <a-popover v-for="item in dataSource" :key="item.id" trigger="click">
          <template #content>
            <div>
              <span style="margin-right: 5px">x</span>
              <a-input-number v-model:value="item.leftValue" :max="1587" :min="1" :step="item.leftValueStep"
                              style="width: 150px">
                <template #addonAfter>
                  <a-select v-model:value="item.leftValueStep" style="width: 70px">
                    <a-select-option value="1">1</a-select-option>
                    <a-select-option value="5">5</a-select-option>
                    <a-select-option value="10">10</a-select-option>
                    <a-select-option value="100">100</a-select-option>
                  </a-select>
                </template>
              </a-input-number>
            </div>
            <div>
              <span style="margin-right: 5px">y</span>
              <a-input-number v-model:value="item.topValue" :max="1123" :min="1" :step="item.topValueStep"
                              style="width: 150px">
                <template #addonAfter>
                  <a-select v-model:value="item.topValueStep" style="width: 70px">
                    <a-select-option value="1">1</a-select-option>
                    <a-select-option value="5">5</a-select-option>
                    <a-select-option value="10">10</a-select-option>
                    <a-select-option value="100">100</a-select-option>
                  </a-select>
                </template>
              </a-input-number>
            </div>
            <div>
              <a-button type="primary" @click="updateLeftAndTop(item)">保存</a-button>
              <a-button @click="cancelLeftAntTop(item)">还原</a-button>
            </div>
          </template>
          <div :style="{position: 'absolute',left:item.leftValue+'px',top: item.topValue+'px'}">{{ item.name }}</div>
        </a-popover>
        <img :src="worldPng" alt="1">
      </div>
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
            <span class="ant-form-text" style="margin-left: 10px">宽</span>
            <a-form-item name="row" no-style label="宽">
              <a-input-number v-model:value="addForm.width" :min="1" :max="100"/>
            </a-form-item>
          </a-form-item>
          <a-form-item :rules="[{ required: true, message: '请输入尺寸!' }]" label="地图坐标" name="dimensions">
            <span class="ant-form-text">x</span>
            <a-form-item label="x" name="col" no-style>
              <a-input-number v-model:value="addForm.leftValue" :max="1587" :min="1"/>
            </a-form-item>
            <span class="ant-form-text" style="margin-left: 10px">y</span>
            <a-form-item label="y" name="row" no-style>
              <a-input-number v-model:value="addForm.topValue" :max="1123" :min="1"/>
            </a-form-item>
          </a-form-item>
        </a-form>
      </a-drawer>
    </div>
  </div>
</template>

<script>
import {world} from "@/http/serveApi.js"
import {randomUtil} from "@/random.js";
import {getZone} from "random_chinese_fantasy_names";
import worldPng from "@/assets/world/world.svg"

export default {
  name: "WorldManager",
  data() {
    return {
      worldPng,
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
      baseForm: {
        id: '',
        name: '',
        description: '',
        entryCityId: '',
        length: 0,
        width: 0,
        matrixMap: [[]],
        cityVoList: [],
        leftValue: 0,
        topValue: 0
      },
      addForm: {},
    }
  },
  created() {
    this.addForm = {...this.baseForm}
    this.listWorld()
  },
  methods: {
    updateLeftAndTop(item) {
      world.update(item).then(res => {
        item.leftValueTemp = item.leftValue
        item.topValueTemp = item.topValue
      })
    },
    cancelLeftAntTop(item) {
      item.leftValue = item.leftValueTemp
      item.topValue = item.topValueTemp
    },
    randomCreate() {
      const location = getZone(1)[0]
      this.addForm.name = location.name
      this.addForm.width = randomUtil.integer({min: 1, max: 10})
      this.addForm.length = randomUtil.integer({min: 1, max: 10})
    },
    go2World(record) {
      this.$router.push({name: 'cityManager', params: {worldId: record.id}})
    },
    editorWorld(record) {
      this.addForm = {
        ...record,
        length: record.matrixMap.length,
        width: record.matrixMap[0].length,
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
        ...this.baseForm,
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
        ...this.addForm,
        matrixMap: matrixMap,
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
        ...this.addForm,
        matrixMap: matrixMap,
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
        this.dataSource.forEach(item => {
          item.leftValueTemp = item.leftValue
          item.topValueTemp = item.topValue
          item.topValueStep = 1
          item.leftValueStep = 1
        })
      })
    },
  }
}
</script>

<style scoped>

</style>
