<script>
import {city, scene} from "@/http/api.js";
import {message} from "ant-design-vue";
import {getClan} from "random_chinese_fantasy_names";

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
        cityId: this.$route.params.cityId,
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
      scene.listAllByCityId(this.$route.params.cityId).then(res => {
        this.datasource = res
        city.getById(this.$route.params.cityId).then(res1 => {
          this.cityObj = res1
          this.cityObj.sceneIdAndObj = {};
          this.datasource.forEach(item => {
            if (this.cityObj.enterSceneId && item.id === this.cityObj.enterSceneId) {
              item.isDefaultEntry = true;
            }
            this.cityObj.sceneIdAndObj[item.id] = item;
          })
          this.cityObj.matrixMap.flatMap(item => item).forEach(item => {
            if (!this.cityObj.sceneIdAndObj[item]) {
              this.cityObj.sceneIdAndObj[item] = {
                id: item,
                name: item,
                isError: true
              }
            }
          })
        })
      })
    },
    editorScene({row, col, record}) {
      if (row || row === 0) {
        if (col || col === 0) {
          record = this.cityObj.sceneIdAndObj[this.cityObj.matrixMap[row][col]]
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
    },
    randomCreate() {
      const location = getClan(1)[0];
      this.addForm.name = location
    },
    got2PeopleManager(record) {
      this.$router.push({name: 'peopleManager', params: {worldId:this.$route.params.worldId,cityId:this.$route.params.cityId,sceneId: record.id}})
    },
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
      <router-link :to="{name: 'cityManager', params: {worldId: cityObj.worldId || '1'}}">当前城市：{{
          cityObj.name
        }}
      </router-link>
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
            <a-button @click="got2PeopleManager(record)">管理场景</a-button>
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
    <a-col :span="12" class="table-info">
      <a-row id="points">
        <table cellspacing="30">
          <tbody>
          <tr v-for="row in cityObj.matrixMap.length" :key="row">
            <td v-for="col in cityObj.matrixMap[0].length"
                :id="cityObj.sceneIdAndObj[cityObj.matrixMap[row - 1][col - 1]].id"
                :key="col">
              <a-popover :title="cityObj.sceneIdAndObj[cityObj.matrixMap[row - 1][col - 1]].name">
                <template #content>
                  <a-button @click="editorScene({row:row-1,col:col-1})">编辑</a-button>
                  <a-button v-if="cityObj.sceneIdAndObj[cityObj.matrixMap[row - 1][col - 1]].id"
                            @click="deleteMap(row - 1, col - 1)">删除地图引用
                  </a-button>
                  <a-button v-if="!cityObj.sceneIdAndObj[cityObj.matrixMap[row - 1][col - 1]].isError"
                            style="color: red"
                            @click="deleteScene(cityObj.sceneIdAndObj[cityObj.matrixMap[row - 1][col - 1]])">删除场景
                  </a-button>
                </template>
                <div :style="cityObj.sceneIdAndObj[cityObj.matrixMap[row - 1][col - 1]].isDefaultEntry?{color:'red'}:''"
                     class="td-info">
                  {{ cityObj.sceneIdAndObj[cityObj.matrixMap[row - 1][col - 1]].name }}
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
      <a-button style="margin-right: 8px" @click="randomCreate">随机生成</a-button>
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
</style>
