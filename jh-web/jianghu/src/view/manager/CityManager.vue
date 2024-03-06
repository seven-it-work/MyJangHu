<script>
import {city, world} from "@/http/api.js";

export default {
  name: "CityManager",
  data() {
    return {
      worldObj: {
        matrixMap: [[]],
        cityIdAndObj: {}
      },
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
          title: 'wordId',
          dataIndex: 'wordId',
          key: 'wordId',
          ellipsis: true,
        },
        {
          title: '地图大小',
          dataIndex: 'mapSize',
          key: 'mapSize',
        },
        {
          title: 'enterSceneId',
          dataIndex: 'enterSceneId',
          key: 'enterSceneId',
        },
        {
          title: '操作',
          dataIndex: 'options',
          key: 'options',
        },
      ],
      datasource: [],
      open: false,
      addForm: {
        id: '',
        wordId: this.$route.params.id,
        name: '',
        description: '',
        enterSceneId: '',
        length: 1,
        width: 1,
        matrixMap: [[]],
        x: -1,
        y: -1,
      },
      labelCol: {
        style: {
          width: '150px',
        },
      },
      wrapperCol: {
        span: 14,
      },
    }
  },
  methods: {
    queryCityList() {
      city.listAllCityByWordId(this.$route.params.id).then(res => {
        this.datasource = res
        world.getById(this.$route.params.id).then(res1 => {
          this.worldObj = res1
          this.worldObj.cityIdAndObj = {};
          this.datasource.forEach(item => {
            this.worldObj.cityIdAndObj[item.id] = item;
          })
        })
      })
    },
    go2City() {
      // todo
    },
    editorCity({row, col, record}) {
      if (row || row === 0) {
        if (col || col === 0) {
          record = this.getCityObj(row, col)
          this.addForm.x = row;
          this.addForm.y = col;
        }
      }

      if (record && record.id && !record.isError) {
        this.addForm = {
          id: record.id,
          wordId: this.$route.params.id,
          name: record.name,
          description: record.description,
          enterSceneId: record.enterSceneId,
          length: record.matrixMap.length,
          width: record.matrixMap[0].length,
          matrixMap: record.matrixMap,
          x: this.addForm.x,
          y: this.addForm.y,
        }
      } else {
        this.addForm = {
          id: '',
          wordId: this.$route.params.id,
          name: '',
          description: '',
          enterSceneId: '',
          length: 1,
          width: 1,
          matrixMap: [[]],
          x: this.addForm.x,
          y: this.addForm.y,
        }
      }

      this.openMethod()
    },
    openMethod() {
      this.open = true;
    },
    doAddOrUpdate() {
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
      this.addForm.matrixMap = matrixMap;
      if (this.addForm.id) {
        city.update(this.addForm).then(async () => {
          if (this.addForm.x >= 0 && this.addForm.y >= 0) {
            this.worldObj.matrixMap[this.addForm.x][this.addForm.y] = this.addForm.id;
            await world.update(this.worldObj)
          }
          this.queryCityList()
          this.closeDrawer()
        })
      } else {
        city.add(this.addForm).then(async (res) => {
          if (this.addForm.x >= 0 && this.addForm.y >= 0) {
            this.worldObj.matrixMap[this.addForm.x][this.addForm.y] = res;
            await world.update(this.worldObj)
          }
          this.queryCityList()
          this.closeDrawer()
        })
      }
    },
    deleteCity(record) {
      let updateWorldObj = false
      for (let i = 0; i < this.worldObj.matrixMap.length; i++) {
        for (let j = 0; j < this.worldObj.matrixMap[i].length; j++) {
          if (record.id === this.worldObj.matrixMap[i][j]) {
            updateWorldObj = true;
            this.worldObj.matrixMap[i][j] = ''
          }
        }
      }
      city.delete(record.id).then(async () => {
        if (updateWorldObj) {
          await world.update(this.worldObj)
        }
        this.queryCityList()
      })
    },
    closeDrawer() {
      this.open = false
      this.addForm = {
        id: '',
        wordId: this.$route.params.id,
        name: '',
        description: '',
        enterSceneId: '',
        length: 1,
        width: 1,
        matrixMap: [[]],
        x: -1,
        y: -1,
      }
    },
    getCityObj(row, col) {
      const id = this.worldObj.matrixMap[row][col];
      if (id) {
        const obj = this.worldObj.cityIdAndObj[id];
        if (obj) {
          return obj
        }
      }
      return {
        id,
        name: id,
        isError: true
      };
    },
    selectCityChange() {
      const record = this.datasource.filter(item => item.id === this.addForm.id)[0]
      if (record) {
        this.addForm = {
          id: record.id,
          wordId: this.$route.params.id,
          name: record.name,
          description: record.description,
          enterSceneId: record.enterSceneId,
          length: record.matrixMap.length,
          width: record.matrixMap[0].length,
          matrixMap: record.matrixMap,
          x: this.addForm.x,
          y: this.addForm.y,
        }
      } else {
        this.addForm = {
          id: '',
          wordId: this.$route.params.id,
          name: '',
          description: '',
          enterSceneId: '',
          length: 1,
          width: 1,
          matrixMap: [[]],
          x: this.addForm.x,
          y: this.addForm.y,
        }
      }
    },
    deleteMap(row, col) {
      this.worldObj.matrixMap[row][col] = "";
      world.update(this.worldObj)
    }
  },
  created() {
    this.queryCityList()
  },
}
</script>

<template>
  <a-row>
    <a-col :span="12">
      <router-link to="/">当前世界：{{ worldObj.name }}</router-link>
    </a-col>
    <a-col :span="12">
      <a-button @click="openMethod">添加城市</a-button>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="12">
      <a-table :columns="columns" :data-source="datasource">
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.dataIndex === 'mapSize'">
            <span>{{ record.matrixMap.length }}*{{ record.matrixMap[0].length }}</span>
          </template>
          <template v-else-if="column.dataIndex === 'options'">
            <a-button @click="go2City(record)">进入城市</a-button>
            <a-button @click="editorCity({record})">编辑</a-button>
            <a-button style="color: red" @click="deleteCity(record)">删除</a-button>
          </template>
        </template>
      </a-table>
    </a-col>
    <a-col :span="12">
      <a-row id="points">
        <table cellspacing="30">
          <tbody>
          <tr v-for="row in worldObj.matrixMap.length" :key="row">
            <td v-for="col in worldObj.matrixMap[0].length"
                :id="getCityObj(row - 1,col - 1).id"
                :key="col">
              <div style="display:none;">{{ value = getCityObj(row - 1, col - 1) }}</div>
              <a-popover :title="value.name">
                <div style="display:none;">{{ value = getCityObj(row - 1, col - 1) }}</div>
                <template #content>
                  <a-button v-if="!value.isError">进入城市</a-button>
                  <a-button @click="editorCity({row:row - 1,col:col - 1})">编辑</a-button>
                  <a-button v-if="value.id" @click="deleteMap(row - 1, col - 1)">删除地图引用</a-button>
                  <a-button v-if="!value.isError" style="color: red" @click="deleteCity(value)">删除城市</a-button>
                </template>
                <div class="td-info">
                  {{ value.name }}
                </div>
              </a-popover>
            </td>
          </tr>
          </tbody>
        </table>
      </a-row>
    </a-col>
  </a-row>
  <a-drawer :open="open" :width="500" placement="top" title="添加世界" @close="closeDrawer">
    <template #extra>
      <a-button style="margin-right: 8px" @click="closeDrawer">取消</a-button>
      <a-button type="primary" @click="doAddOrUpdate">提交</a-button>
    </template>
    <a-form :label-col="labelCol" :model="addForm" :wrapper-col="wrapperCol"
            layout="horizontal">
      <a-form-item label="选择城市">
        <a-select
            ref="select"
            v-model:value="addForm.id"
            @change="selectCityChange"
        >
          <a-select-option v-for="item in datasource" :key="item.id" :value="item.id">{{ item.name }}</a-select-option>
        </a-select>
      </a-form-item>
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

      </a-form-item>
      <a-form-item :rules="[{ required: true, message: '请输入尺寸!' }]" label="尺寸" name="dimensions">
        <span class="ant-form-text">长</span>
        <a-form-item label="长" name="col" no-style>
          <a-input-number v-model:value="addForm.length" :max="100" :min="1"/>
        </a-form-item>
        <span class="ant-form-text">宽</span>
        <a-form-item label="宽" name="row" no-style>
          <a-input-number v-model:value="addForm.width" :max="100" :min="1"/>
        </a-form-item>
      </a-form-item>
    </a-form>
  </a-drawer>
</template>

<style scoped>
#points td {
  border: black 1px solid;
  width: 50px;
  height: 50px;
  text-align: center;
  max-width: 50px;
  max-height: 50px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.td-info {
  width: 50px;
  height: 50px;
  text-align: center;
  max-width: 50px;
  max-height: 50px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
