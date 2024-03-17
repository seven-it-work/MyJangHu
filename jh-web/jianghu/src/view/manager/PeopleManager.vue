<template>
  <a-row>
    <a-col>
      <router-link :to="{name: 'sceneManager', params: {worldId:$route.params.worldId,cityId:$route.params.cityId}}">
        当前场景：{{ sceneObj.name }}
      </router-link>
    </a-col>
    <a-col>
      <a-button @click="toBePeople({})">添加人物</a-button>
    </a-col>

    <a-col>
      <a-button @click="listAll">查看所有</a-button>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="12" style="max-height: 200px;overflow-y: scroll">
      <a-form-item
          label="流动人物管理"
          name="流动人物管理"
      >
        <a-button
            @click="toBePeople({peopleType:'AI_PEOPLE'},['peopleType','currentWorldId','currentCityId','currentSceneId'])">
          创建人物
        </a-button>
      </a-form-item>
      <a-list item-layout="horizontal" :data-source="movePeopleData">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta
                :description="item.description"
            >
              <template #title>
                <!-- todo 跳转到人物详情-->
                <a href="#">{{ item.name }}</a>
              </template>
              <template #avatar>
                <!--头像-->
                <a-avatar src="https://joeschmoe.io/api/v1/random"/>
              </template>
            </a-list-item-meta>
            <template #actions>
              <a-button @click="toBePeople(item,['peopleType','currentWorldId','currentCityId','currentSceneId'])">
                编辑
              </a-button>
              <a-button @click="remove(item)">移除</a-button>
              <a-button @click="deletePeople(item)">删除</a-button>
            </template>
          </a-list-item>
        </template>
      </a-list>
    </a-col>
    <a-col :span="12" style="max-height: 200px;overflow-y: scroll">
      <a-form-item
          label="固定人物管理"
          name="固定人物管理"
      >
        <a-button
            @click="toBePeople({peopleType:'FIXED_PEOPLE'},['peopleType','currentWorldId','currentCityId','currentSceneId'])">
          创建人物
        </a-button>
      </a-form-item>
      <a-list item-layout="horizontal" :data-source="fixPeopleData">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta
                :description="item.description"
            >
              <template #title>
                <!-- todo 跳转到人物详情(管理人物交互事件)-->
                <a href="#">{{ item.name }}</a>
              </template>
              <template #avatar>
                <!--头像-->
                <a-avatar src="https://joeschmoe.io/api/v1/random"/>
              </template>
            </a-list-item-meta>
            <template #actions>
              <a-button @click="toBePeople(item,['peopleType','currentWorldId','currentCityId','currentSceneId'])">
                编辑
              </a-button>
              <a-button @click="remove(item)">移除</a-button>
              <a-button @click="deletePeople(item)">删除</a-button>
            </template>
          </a-list-item>
        </template>
      </a-list>
    </a-col>
  </a-row>

  <a-menu v-model:selectedKeys="currentTag" mode="horizontal" @click="handleClick">
    <a-menu-item key="ALL">所有人物</a-menu-item>
    <a-menu-item key="SCENE">所在当前场景人物</a-menu-item>
    <a-menu-item key="CITY">所在当前城市人物</a-menu-item>
    <a-menu-item key="WORLD">所在当前世界人物</a-menu-item>
    <a-menu-item key="NONE">没有挂载的人物</a-menu-item>
  </a-menu>
  <a-row>
    <a-table :columns="columns" :data-source="datasource" :pagination="pagination" @change="handleTableChange">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'options'">
          <a-dropdown>
            <template #overlay>
              <a-menu @click="({key})=>handleMenuClick(key,record)">
                <a-menu-item key="1">
                  加入到当前节点<span style="font-weight:bold ">固定</span>人物
                </a-menu-item>
                <a-menu-item key="2">
                  加入到当前节点<span style="color: sandybrown">流动</span>人物
                </a-menu-item>
              </a-menu>
            </template>
            <a-button>加入
              <DownOutlined/>
            </a-button>
          </a-dropdown>
          <a-button @click="toBePeople(record)">编辑
            <FormOutlined/>
          </a-button>
          <a-button @click="deletePeople(record)">删除
            <DeleteOutlined/>
          </a-button>
        </template>
        <template v-else-if="column.dataIndex === 'sex'">
          {{ SEX_MAP[record.sex] || '未知' }}
        </template>
        <template v-else-if="column.dataIndex === 'currentScene'">
          {{ (record.currentScene || {}).name }}
        </template>
        <template v-else-if="column.dataIndex === 'currentWorld'">
          {{ (record.currentWorld || {}).name }}
        </template>
        <template v-else-if="column.dataIndex === 'currentCity'">
          {{ (record.currentCity || {}).name }}
        </template>
        <template v-else-if="column.dataIndex === 'peopleType'">
          {{ PLAYER_TYPE[record.peopleType] || '' }}
        </template>
      </template>
    </a-table>
  </a-row>
  <a-drawer :open="open" :width="500" placement="top" title="添加人物" @close="closeDrawer" style="overflow-y: scroll">
    <template #extra>
      <a-button style="margin-right: 8px" @click="closeDrawer">取消</a-button>
      <a-button style="margin-right: 8px" @click="randomCreate">随机生成</a-button>
      <a-button type="primary" @click="submit">提交</a-button>
    </template>
    <a-form :label-col="labelCol" :model="addForm" :wrapper-col="wrapperCol"
            layout="horizontal">
      <a-form-item label="id">
        <a-input v-model:value="addForm.id" disabled/>
      </a-form-item>
      <a-form-item label="姓">
        <a-input v-model:value="addForm.xing" allowClear/>
      </a-form-item>
      <a-form-item label="名">
        <a-input v-model:value="addForm.ming" allowClear/>
      </a-form-item>
      <a-form-item label="名字">
        <a-input :value="addForm.xing+addForm.ming" disabled/>
      </a-form-item>
      <a-form-item label="性别">
        <a-select
            ref="select"
            v-model:value="addForm.sex"
            @change="(value)=>this.addForm.sex=value"
            allow-clear
        >
          <a-select-option v-for="item in Object.entries(SEX_MAP)" :key="item[0]" :value="item[0]">
            {{ item[1] }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="描述">
        <a-input v-model:value="addForm.description" allowClear/>
      </a-form-item>
      <a-form-item label="备注">
        <a-input v-model:value="addForm.remark" allowClear/>
      </a-form-item>
      <a-form-item label="人员类型">
        <a-select
            ref="select"
            v-model:value="addForm.peopleType"
            @change="(value)=>this.addForm.peopleType=value"
            allow-clear
            :disabled="disableList.includes('peopleType')"
        >
          <a-select-option v-for="item in Object.entries(PLAYER_TYPE)" :key="item[0]" :value="item[0]">
            {{ item[1] }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="当前所在世界">
        <a-select
            :disabled="disableList.includes('currentWorldId')"
            v-model:value="addForm.currentWorldId"
            @change="changeWorldId"
            allow-clear
        >
          <a-select-option v-for="item in worldList" :key="item.id" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="当前所在城市">
        <a-select
            :disabled="disableList.includes('currentCityId')"
            v-model:value="addForm.currentCityId"
            @change="changeCityId"
            allow-clear
        >
          <a-select-option v-for="item in cityList" :key="item.id" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="当前所在场景">
        <a-select
            :disabled="disableList.includes('currentSceneId')"
            v-model:value="addForm.currentSceneId"
            @change="(value)=>this.addForm.currentSceneId=value"
            allow-clear
        >
          <a-select-option v-for="item in sceneList" :key="item.id" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-drawer>
</template>

<script>
import {city, people, scene, world} from "@/http/serveApi.js";
import {getName} from "random_chinese_fantasy_names";
import {randomUtil} from "@/random.js";
import {DeleteOutlined, DownOutlined, FormOutlined} from '@ant-design/icons-vue';

const SEX_MAP = {
  MAN: "男",
  WOMAN: "女",
}
const PLAYER_TYPE = {
  PLAYER: "玩家",
  FIXED_PEOPLE: "固定NPC",
  AI_PEOPLE: "AI-NPC",
}
export default {
  name: "PeopleManager",
  components: {DownOutlined, DeleteOutlined, FormOutlined},
  data() {
    return {
      sceneObj: {},
      sceneList: [],
      cityList: [],
      worldList: [],
      open: false,
      addForm: {},
      pagination: {
        total: 0,
        current: 1,
        pageSize: 10,
      },
      currentTag: ['SCENE'],
      SEX_MAP,
      PLAYER_TYPE,
      columns: [{
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        ellipsis: true,
      },
        {
          title: '姓',
          dataIndex: 'xing',
          key: 'xing',
        },
        {
          title: '名',
          dataIndex: 'ming',
          key: 'ming',
        },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          key: 'sex',
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
          title: '当前所在场景',
          dataIndex: 'currentScene',
          key: 'currentScene',
          ellipsis: true,
        },
        {
          title: '当前所在城市',
          dataIndex: 'currentCity',
          key: 'currentCity',
          ellipsis: true,
        },
        {
          title: '当前所在世界',
          dataIndex: 'currentWorld',
          key: 'currentWorld',
          ellipsis: true,
        },
        {
          title: '人物类型',
          dataIndex: 'peopleType',
          key: 'peopleType',
          ellipsis: true,
        },
        {
          title: '操作',
          dataIndex: 'options',
          key: 'options',
        },
      ],
      datasource: [],
      movePeopleData: [
        {
          name: '人物1',
          description: '人物描述',
        },
        {
          name: '人物2',
          description: '人物描述',
        },
        {
          name: '人物3',
          description: '人物描述',
        },
        {
          name: '人物4',
          description: '人物描述',
        },],
      fixPeopleData: [
        {
          name: '人物1',
          description: '人物描述',
        },
        {
          name: '人物2',
          description: '人物描述',
        },
        {
          name: '人物3',
          description: '人物描述',
        },
        {
          name: '人物4',
          description: '人物描述',
        },],
      labelCol: {
        style: {
          width: '150px',
        },
      },
      wrapperCol: {
        span: 14,
      },
      disableList: []
    }
  },
  methods: {
    listAll() {
      people.list(1, 9999)
    },
    changeWorldId(id) {
      this.addForm.currentWorldId = id
      this.addForm.currentCityId = ''
      this.addForm.currentSceneId = ''
      const worldInfo = this.worldList.filter(item => item.id === id)[0]
      if (worldInfo) {
        const cityIdList = worldInfo.matrixMap.flatMap(item => item).filter(item => !!item)
        city.listByIds(cityIdList).then(res1 => {
          this.cityList = res1
        })
      }
      this.sceneList = []
    },
    changeCityId(id) {
      this.addForm.currentCityId = id
      this.addForm.currentSceneId = ''
      const cityInfo = this.cityList.filter(item => item.id === id)[0]
      if (cityInfo) {
        const sceneIdList = cityInfo.matrixMap.flatMap(item => item).filter(item => !!item)
        scene.listByIds(sceneIdList).then(res2 => {
          this.sceneList = res2
        })
      }
    },
    deletePeople(item) {
      people.delete(item.id).then(() => {
        this.updateChange()
      })
    },
    submit() {
      this.doAddOrUpdate(this.addForm).then(() => {
        this.closeDrawer()
      })
    },
    remove(item) {
      item.peopleType = ''
      this.doAddOrUpdate(item)
    },
    doAddOrUpdate(peopleObj) {
      if (peopleObj.id) {
        return people.update(peopleObj).then(() => this.updateChange())
      } else {
        return people.add(peopleObj).then(() => this.updateChange())
      }
    },
    randomCreate() {
      if (randomUtil.bool()) {
        this.addForm.sex = "MAN"
      } else {
        this.addForm.sex = "WOMAN"
      }
      if (randomUtil.bool()) {
        this.addForm.xing = ""
      }
      const options = {
        isFemale: this.addForm.sex === 'WOMAN'
      }
      if (this.addForm.xing) {
        options.familyName = this.addForm.xing;
      }
      const name = getName(1, options)[0]
      this.addForm.xing = name.substring(0, 1)
      this.addForm.ming = name.substring(1)
    },
    closeDrawer() {
      this.open = false
      this.addForm = {}
    },
    toBePeople(basePeople, disableList = []) {
      this.addForm = {
        ...basePeople,
        currentSceneId: this.$route.params.sceneId,
        currentWorldId: this.$route.params.worldId,
        currentCityId: this.$route.params.cityId,
        sex: 'MAN'
      };
      this.open = true
      this.disableList = disableList
    },
    handleTableChange(pag, filters, sorter) {
      console.log(pag, filters, sorter)
    },
    listPeople(view = 'SCENE') {
      const params = {
        currentPlaceObj: true
      }
      switch (view) {
        case "ALL":
          break;
        case "SCENE":
          params['currentSceneId'] = this.$route.params.sceneId
          break;
        case "CITY":
          params['currentCityId'] = this.$route.params.cityId
          break;
        case "WORLD":
          params['currentWorldId'] = this.$route.params.worldId
          break;
        case "NONE":
          params['currentSceneId'] = ''
          params['currentCityId'] = ''
          params['currentWorldId'] = ''
          break;
      }
      return people.list(this.pagination.current, this.pagination.pageSize, params)
    },
    handleClick({key}) {
      return this.listPeople(key).then(res => {
        this.pagination.total = res.total
        this.pagination.current = res.current
        this.datasource = res.records
      })
    },
    initData() {
      scene.getById(this.$route.params.sceneId).then(res => {
        this.sceneObj = res
      })
      world.list(1, 999).then(res => {
        this.worldList.push(...res.records)
        const worldInfo = this.worldList.filter(item => item.id === this.$route.params.worldId)[0]
        if (worldInfo) {
          const cityIdList = worldInfo.matrixMap.flatMap(item => item).filter(item => !!item)
          city.listByIds(cityIdList).then(res1 => {
            this.cityList = res1
            const cityInfo = this.cityList.filter(item => item.id === this.$route.params.cityId)[0]
            if (cityInfo) {
              const sceneIdList = cityInfo.matrixMap.flatMap(item => item).filter(item => !!item)
              scene.listByIds(sceneIdList).then(res2 => {
                this.sceneList = res2
              })
            }
          })
        }
      })
    },
    handleMenuClick(key, record) {
      if (key + "" === "1") {
        record.peopleType = 'FIXED_PEOPLE'
        record.currentSceneId = this.$route.params.sceneId;
        record.currentWorldId = this.$route.params.worldId;
        record.currentCityId = this.$route.params.cityId;
        this.doAddOrUpdate(record)
      } else if (key + "" === "2") {
        record.peopleType = 'AI_PEOPLE'
        record.currentSceneId = this.$route.params.sceneId;
        record.currentWorldId = this.$route.params.worldId;
        record.currentCityId = this.$route.params.cityId;
        this.doAddOrUpdate(record)
      }
    },
    updateChange() {
      this.handleClick({key: this.currentTag[0]})
      this.listPeople().then(res => {
        this.fixPeopleData = res.records.filter(item => item.peopleType === 'FIXED_PEOPLE')
        this.movePeopleData = res.records.filter(item => item.peopleType === 'AI_PEOPLE')
      })
    }
  },
  created() {
    this.initData()
    this.handleClick({key: this.currentTag[0]}).then(res => {
      this.fixPeopleData = this.datasource.filter(item => item.peopleType === 'FIXED_PEOPLE')
      this.movePeopleData = this.datasource.filter(item => item.peopleType === 'AI_PEOPLE')
    })
  }
}
</script>

<style scoped>

</style>
