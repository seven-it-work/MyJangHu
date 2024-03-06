<script>
import {city, scene} from "@/http/api.js";
import {message} from "ant-design-vue";

export default {
  name: "SceneManager",
  data() {
    return {
      cityObj: {
        worldId: '',
        matrixMap: [[]],
        sceneIdAndObj: {}
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
          title: '备注',
          dataIndex: 'remark',
          key: 'remark',
          ellipsis: true,
        },
        {
          title: 'cityId',
          dataIndex: 'cityId',
          key: 'cityId',
          ellipsis: true,
        },
        {
          title: '是否默认进入',
          dataIndex: 'isDefaultEntry',
          key: 'isDefaultEntry',
        },
        // todo 人物管理
        {
          title: '操作',
          dataIndex: 'options',
          key: 'options',
        },
      ],
      datasource: [],
      open: false,
      baseForm: {
        id: '',
        cityId: this.$route.params.id,
        name: '',
        description: '',
        remark: '',
        x: -1,
        y: -1,
        isDefaultEntry: false,
      },
      addForm: {
        ...this.baseForm
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
    querySceneList() {
      scene.listAllByCityId(this.$route.params.id).then(res => {
        this.datasource = res
        city.getById(this.$route.params.id).then(res1 => {
          this.cityObj = res1
          this.cityObj.sceneIdAndObj = {};
          console.log(this.cityObj)
          this.datasource.forEach(item => {
            if (this.cityObj.enterSceneId && item.id === this.cityObj.enterSceneId) {
              item.isDefaultEntry = true;
            }
            this.cityObj.sceneIdAndObj[item.id] = item;
          })
        })
      })
    },
    //   go2City() {
    //     // todo
    //   },
    editorScene({row, col, record}) {
      if (row || row === 0) {
        if (col || col === 0) {
          record = this.getSceneObj(row, col)
          this.addForm.x = row;
          this.addForm.y = col;
        }
      }
      if (record && record.id && !record.isError) {
        this.addForm = {
          ...this.addForm,
          ...record,
        }
      } else {
        this.addForm = {
          ...this.baseForm,
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
      let needUpdateObj = false
      if (this.addForm.id) {
        if (this.addForm.x >= 0 && this.addForm.y >= 0) {
          this.cityObj.matrixMap[this.addForm.x][this.addForm.y] = this.addForm.id;
          needUpdateObj = true
        }
        if (this.addForm.isDefaultEntry) {
          if (this.cityObj.matrixMap.flatMap(item => item).includes(this.addForm.id)) {
            this.cityObj.enterSceneId = this.addForm.id;
            needUpdateObj = true
          } else {
            message.warn({
              content: "场景必须挂载在地图上才能 勾选 是否默认进入"
            })
          }
        }
        scene.update(this.addForm).then(async () => {
          if (needUpdateObj) {
            await city.update(this.cityObj)
          }
          this.querySceneList()
          this.closeDrawer()
        })
      } else {
        scene.add(this.addForm).then(async (res) => {
          if (this.addForm.x >= 0 && this.addForm.y >= 0) {
            this.cityObj.matrixMap[this.addForm.x][this.addForm.y] = res;
            needUpdateObj = true
          }
          if (this.addForm.isDefaultEntry) {
            if (this.cityObj.matrixMap.flatMap(item => item).includes(res)) {
              this.cityObj.enterSceneId = res;
              needUpdateObj = true
            } else {
              message.warn({
                content: "场景必须挂载在地图上才能 勾选 是否默认进入"
              })
            }
          }
          if (needUpdateObj) {
            await city.update(this.cityObj)
          }
          this.querySceneList()
          this.closeDrawer()
        })
      }
    },
    deleteScene(record) {
      let updateWorldCityIdList = []
      for (let i = 0; i < this.cityObj.matrixMap.length; i++) {
        for (let j = 0; j < this.cityObj.matrixMap[i].length; j++) {
          if (record.id === this.cityObj.matrixMap[i][j]) {
            updateWorldCityIdList.push(this.cityObj.matrixMap[i][j])
            this.cityObj.matrixMap[i][j] = ''
          }
        }
      }
      scene.delete(record.id).then(async () => {
        if (updateWorldCityIdList.length > 0) {
          if (updateWorldCityIdList.includes(this.cityObj.enterSceneId)) {
            this.cityObj.enterSceneId = ''
          }
          await city.update(this.cityObj)
        }
        this.querySceneList()
      })
    },
    closeDrawer() {
      this.addForm = {...this.baseForm}
      this.open = false
    },
    getSceneObj(row, col) {
      const id = this.cityObj.matrixMap[row][col];
      if (id) {
        const obj = this.cityObj.sceneIdAndObj[id];
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
    selectSceneChange() {
      const record = this.datasource.filter(item => item.id === this.addForm.id)[0]
      if (record) {
        this.addForm = {
          ...this.addForm,
          ...record,
        }
      } else {
        this.addForm = {
          ...this.baseForm,
          x: this.addForm.x,
          y: this.addForm.y,
        }
      }
    },
    deleteMap(row, col) {
      if (this.cityObj.matrixMap[row][col] === this.cityObj.enterSceneId) {
        this.cityObj.enterSceneId = ''
      }
      this.cityObj.matrixMap[row][col] = "";
      city.update(this.cityObj).then(() => this.querySceneList())
    }
  },
  created() {
    this.addForm = {...this.baseForm}
    this.querySceneList()
  },
}
</script>

<template>
  <a-row>
    <a-col :span="12">
      <router-link :to='`/cityManager/${cityObj.wordId}`'>当前城市：{{ cityObj.name }}</router-link>
    </a-col>
    <a-col :span="12">
      <a-button @click="openMethod">添加场景</a-button>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="12">
      <a-table :columns="columns" :data-source="datasource">
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.dataIndex === 'options'">
            <!--              <a-button @click="go2City(record)">进入城市</a-button>-->
            <a-button @click="editorScene({record})">编辑</a-button>
            <a-button style="color: red" @click="deleteScene(record)">删除</a-button>
          </template>
          <template v-else-if="column.dataIndex === 'isDefaultEntry'">
                        <span :style="record.isDefaultEntry?{color:'red'}:''">{{
                            record.isDefaultEntry ? '是' : '否'
                          }}</span>
          </template>
        </template>
      </a-table>
    </a-col>
    <a-col :span="12">
      <a-row id="points">
        <table cellspacing="30">
          <tbody>
          <tr v-for="row in cityObj.matrixMap.length" :key="row">
            <td v-for="col in cityObj.matrixMap[0].length"
                :id="getSceneObj(row - 1,col - 1).id"
                :key="col">
              <div style="display:none;">{{ value = getSceneObj(row - 1, col - 1) }}</div>
              <a-popover :title="value.name">
                <div style="display:none;">{{ value = getSceneObj(row - 1, col - 1) }}</div>
                <template #content>
                  <!--                  <a-button v-if="!value.isError">进入场景</a-button>-->
                  <a-button @click="editorScene({row:row - 1,col:col - 1})">编辑</a-button>
                  <a-button v-if="value.id" @click="deleteMap(row - 1, col - 1)">删除地图引用</a-button>
                  <a-button v-if="!value.isError" style="color: red" @click="deleteScene(value)">删除场景</a-button>
                </template>
                <div :style="value.isDefaultEntry?{color:'red'}:''" class="td-info">
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
      <a-form-item label="选择场景">
        <a-select
            ref="select"
            v-model:value="addForm.id"
            @change="selectSceneChange"
        >
          <a-select-option v-for="item in datasource" :key="item.id" :value="item.id">{{ item.name }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="id">
        <a-input v-model:value="addForm.id" disabled/>
      </a-form-item>
      <a-form-item label="cityId">
        <a-input v-model:value="addForm.cityId" disabled/>
      </a-form-item>
      <a-form-item label="是否默认进入">
        <a-switch v-model:checked="addForm.isDefaultEntry" checked-children="是" un-checked-children="否"/>
      </a-form-item>
      <a-form-item label="名称">
        <a-input v-model:value="addForm.name"/>
      </a-form-item>
      <a-form-item label="描述">
        <a-input v-model:value="addForm.description"/>
      </a-form-item>
      <a-form-item label="备注">
        <a-input v-model:value="addForm.remark"/>
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
