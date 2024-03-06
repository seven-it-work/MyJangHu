<script>
import {city, scene} from "@/http/api.js";

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
        {
          title: '地图大小',
          dataIndex: 'mapSize',
          key: 'mapSize',
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
      addForm: {
        //       id: '',
        //       wordId: this.$route.params.id,
        //       name: '',
        //       description: '',
        //       length: 1,
        //       width: 1,
        //       matrixMap: [[]],
        //       x: -1,
        //       y: -1,
        //       isDefaultEntry: false,
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
    //   editorCity({row, col, record}) {
    //     if (row || row === 0) {
    //       if (col || col === 0) {
    //         record = this.getCityObj(row, col)
    //         this.addForm.x = row;
    //         this.addForm.y = col;
    //       }
    //     }
    //
    //     if (record && record.id && !record.isError) {
    //       this.addForm = {
    //         ...record,
    //         id: record.id,
    //         wordId: this.$route.params.id,
    //         name: record.name,
    //         description: record.description,
    //         length: record.matrixMap.length,
    //         width: record.matrixMap[0].length,
    //         matrixMap: record.matrixMap,
    //         x: this.addForm.x,
    //         y: this.addForm.y,
    //       }
    //     } else {
    //       this.addForm = {
    //         id: '',
    //         wordId: this.$route.params.id,
    //         name: '',
    //         description: '',
    //         length: 1,
    //         width: 1,
    //         matrixMap: [[]],
    //         x: this.addForm.x,
    //         y: this.addForm.y,
    //       }
    //     }
    //
    //     this.openMethod()
    //   },
    openMethod() {
      this.open = true;
    },
    doAddOrUpdate() {
      //     const matrixMap = []
      //     for (let i = 0; i < this.addForm.length; i++) {
      //       const tempList = []
      //       for (let j = 0; j < this.addForm.width; j++) {
      //         if (this.addForm.matrixMap[i] && this.addForm.matrixMap[i][j]) {
      //           tempList.push(this.addForm.matrixMap[i][j])
      //         } else {
      //           tempList.push('')
      //         }
      //       }
      //       matrixMap.push(tempList)
      //     }
      //     this.addForm.matrixMap = matrixMap;
      //     let needUpdatecityObj = false
      //     if (this.addForm.id) {
      //       if (this.addForm.isDefaultEntry) {
      //         if (this.cityObj.matrixMap.flatMap(item => item).includes(this.addForm.id)) {
      //           this.cityObj.enterSceneId = this.addForm.id;
      //           needUpdatecityObj = true
      //         } else {
      //           message.warn({
      //             content: "城市必须挂载在地图上才能 勾选 是否默认进入"
      //           })
      //         }
      //       }
      //       city.update(this.addForm).then(async () => {
      //         if (this.addForm.x >= 0 && this.addForm.y >= 0) {
      //           this.cityObj.matrixMap[this.addForm.x][this.addForm.y] = this.addForm.id;
      //           needUpdatecityObj = true
      //         }
      //         if (needUpdatecityObj) {
      //           await world.update(this.cityObj)
      //         }
      //         this.querySceneList()
      //         this.closeDrawer()
      //       })
      //     } else {
      //       city.add(this.addForm).then(async (res) => {
      //         if (this.addForm.isDefaultEntry) {
      //           this.cityObj.enterSceneId = res;
      //           needUpdatecityObj = true
      //         }
      //         if (this.addForm.x >= 0 && this.addForm.y >= 0) {
      //           this.cityObj.matrixMap[this.addForm.x][this.addForm.y] = res;
      //           needUpdatecityObj = true
      //         }
      //         if (needUpdatecityObj) {
      //           await world.update(this.cityObj)
      //         }
      //         this.querySceneList()
      //         this.closeDrawer()
      //       })
      //     }
    },
    //   deleteCity(record) {
    //     let updateWorldCityIdList = []
    //     for (let i = 0; i < this.cityObj.matrixMap.length; i++) {
    //       for (let j = 0; j < this.cityObj.matrixMap[i].length; j++) {
    //         if (record.id === this.cityObj.matrixMap[i][j]) {
    //           updateWorldCityIdList.push(this.cityObj.matrixMap[i][j])
    //           this.cityObj.matrixMap[i][j] = ''
    //         }
    //       }
    //     }
    //     city.delete(record.id).then(async () => {
    //       if (updateWorldCityIdList.length > 0) {
    //         if (updateWorldCityIdList.includes(this.cityObj.enterSceneId)) {
    //           this.cityObj.enterSceneId = ''
    //         }
    //         await world.update(this.cityObj)
    //       }
    //       this.querySceneList()
    //     })
    //   },
    closeDrawer() {
      this.open = false
      //     this.addForm = {
      //       id: '',
      //       wordId: this.$route.params.id,
      //       name: '',
      //       description: '',
      //       length: 1,
      //       width: 1,
      //       matrixMap: [[]],
      //       x: -1,
      //       y: -1,
      //     }
    },
    //   getCityObj(row, col) {
    //     const id = this.cityObj.matrixMap[row][col];
    //     if (id) {
    //       const obj = this.cityObj.sceneIdAndObj[id];
    //       if (obj) {
    //         return obj
    //       }
    //     }
    //     return {
    //       id,
    //       name: id,
    //       isError: true
    //     };
    //   },
    selectSceneChange() {
      //     const record = this.datasource.filter(item => item.id === this.addForm.id)[0]
      //     if (record) {
      //       this.addForm = {
      //         ...record,
      //         id: record.id,
      //         wordId: this.$route.params.id,
      //         name: record.name,
      //         description: record.description,
      //         length: record.matrixMap.length,
      //         width: record.matrixMap[0].length,
      //         matrixMap: record.matrixMap,
      //         x: this.addForm.x,
      //         y: this.addForm.y,
      //       }
      //     } else {
      //       this.addForm = {
      //         id: '',
      //         wordId: this.$route.params.id,
      //         name: '',
      //         description: '',
      //         length: 1,
      //         width: 1,
      //         matrixMap: [[]],
      //         x: this.addForm.x,
      //         y: this.addForm.y,
      //       }
      //     }
    },
    //   deleteMap(row, col) {
    //     if (this.cityObj.matrixMap[row][col] === this.cityObj.enterSceneId) {
    //       this.cityObj.enterSceneId = ''
    //     }
    //     this.cityObj.matrixMap[row][col] = "";
    //     world.update(this.cityObj).then(() => this.querySceneList())
    //   }
  },
  created() {
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
          <template v-if="column.dataIndex === 'mapSize'">
            <span>{{ record.matrixMap.length }}*{{ record.matrixMap[0].length }}</span>
          </template>
          <template v-else-if="column.dataIndex === 'options'">
            <!--              <a-button @click="go2City(record)">进入城市</a-button>-->
            <!--              <a-button @click="editorCity({record})">编辑</a-button>-->
            <!--              <a-button style="color: red" @click="deleteCity(record)">删除</a-button>-->
          </template>
          <!--            <template v-else-if="column.dataIndex === 'isDefaultEntry'">-->
          <!--              <span :style="record.isDefaultEntry?{color:'red'}:''">{{-->
          <!--                  record.isDefaultEntry ? '是' : '否'-->
          <!--                }}</span>-->
          <!--            </template>-->
        </template>
      </a-table>
    </a-col>
    <a-col :span="12">
      <!--      <a-row id="points">-->
      <!--        <table cellspacing="30">-->
      <!--          <tbody>-->
      <!--          <tr v-for="row in cityObj.matrixMap.length" :key="row">-->
      <!--            <td v-for="col in cityObj.matrixMap[0].length"-->
      <!--                :id="getCityObj(row - 1,col - 1).id"-->
      <!--                :key="col">-->
      <!--              <div style="display:none;">{{ value = getCityObj(row - 1, col - 1) }}</div>-->
      <!--              <a-popover :title="value.name">-->
      <!--                <div style="display:none;">{{ value = getCityObj(row - 1, col - 1) }}</div>-->
      <!--                <template #content>-->
      <!--                  <a-button v-if="!value.isError">进入城市</a-button>-->
      <!--                  <a-button @click="editorCity({row:row - 1,col:col - 1})">编辑</a-button>-->
      <!--                  <a-button v-if="value.id" @click="deleteMap(row - 1, col - 1)">删除地图引用</a-button>-->
      <!--                  <a-button v-if="!value.isError" style="color: red" @click="deleteCity(value)">删除城市</a-button>-->
      <!--                </template>-->
      <!--                <div :style="value.isDefaultEntry?{color:'red'}:''" class="td-info">-->
      <!--                  {{ value.name }}-->
      <!--                </div>-->
      <!--              </a-popover>-->
      <!--            </td>-->
      <!--          </tr>-->
      <!--          </tbody>-->
      <!--        </table>-->
      <!--      </a-row>-->
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
