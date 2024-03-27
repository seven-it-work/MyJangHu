<template>
  <div>
    <a-button @click="()=>this.$router.go(-1)">返回</a-button>
  </div>
  <a-row>
    <a-col>
      <a-button>添加互动</a-button>
    </a-col>
    <a-col>
      <a-button>添加基础互动</a-button>
    </a-col>
    <a-col>
      <a-avatar>{{ currentPeopleObj.name }}</a-avatar>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="12">
      <a-list>
        <a-list-item>
          互动名称
          <template #actions>
            <a-button>编辑</a-button>
            <a-button>删除</a-button>
          </template>
        </a-list-item>
      </a-list>
    </a-col>
    <a-col :span="12">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="互动控制">
        </a-tab-pane>
        <a-tab-pane key="2" tab="显示控制">显示控制</a-tab-pane>
      </a-tabs>
    </a-col>
  </a-row>
</template>

<script>
import {people} from "@/http/api"

export default {
  name: "PeopleDetail",
  data() {
    return {
      activeKey: 1,
      activeKey1: 1,
      currentPeopleObj: {}
    }
  },
  methods: {
    getPeople() {
      people.getById(this.$route.params.peopleId).then(data => {
        this.currentPeopleObj = data
      })
    }
  },
  created() {
    this.getPeople()
  },
}
</script>

<style scoped>

</style>
