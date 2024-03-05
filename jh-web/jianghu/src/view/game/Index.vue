<template>
  <div>
    <div>
      <a-button @click="()=>open=true">添加世界</a-button>
      <a-drawer :width="500" title="添加世界" placement="top" :open="open" @close="closeDrawer">
        <template #extra>
          <a-button style="margin-right: 8px" @click="closeDrawer">取消</a-button>
          <a-button type="primary" @click="doAdd">提交</a-button>
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
                v-model:value="selectCity"
                style="width: 100%"
                placeholder="选择进入的默认地图id"
                :options="cityList"
                @change="changeCity"
            ></a-select>
<!--            <a-input v-model:value="addForm.description"/>-->
          </a-form-item>
        </a-form>
      </a-drawer>
    </div>
  </div>
</template>

<script>
import {city, world} from "@/http/api.js"

export default {
  name: "Index",
  data() {
    return {
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
      },
      //   private String[][] matrixMap = new String[][]{};
      cityList:[],
      selectCity:""
    }
  },
  created() {
    this.queryCityList()
  },
  methods: {
    changeCity(value){
      console.log(value)
    },
    closeDrawer() {
      this.open = false
    },
    doAdd() {

    },
    list() {
      world.list(1, 10).then(res => {
        console.log(res)
      })
    },
    queryCityList() {
      if (!this.addForm.id) {
        return
      }
      city.listAllCityByWordId(this.addForm.id).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>