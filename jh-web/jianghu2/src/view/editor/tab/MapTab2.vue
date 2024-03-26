<template>
  <TabComponent :submit-before="submitBefore" :api="mapAPi" :columns="columns" :dataList="dataList" :change-hook="changeHook" :base-form-data="baseFormData">
    <template v-slot:formData="{formData}">
      <a-form-item label="名称">
        <a-input v-model:value="formData.name"></a-input>
      </a-form-item>
      <a-form-item label="尺寸">
        <a-row>
          <a-col>高：</a-col>
          <a-col>
            <a-input-number v-model:value="formData.high"></a-input-number>
          </a-col>
        </a-row>
        <a-row>
          <a-col>宽：</a-col>
          <a-col>
            <a-input-number v-model:value="formData.wide"></a-input-number>
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item label="描述">
        <a-input v-model:value="formData.description"></a-input>
      </a-form-item>
      <a-form-item label="备注">
        <a-input v-model:value="formData.remark"></a-input>
      </a-form-item>
    </template>
  </TabComponent>
</template>

<script>
import TabComponent from "@/view/editor/component/TabComponent.vue";
import {mapAPi} from "@/http/api.js";

export default {
  name: "MapTab2",
  components: {TabComponent},
  props: {
    dataList: []
  },
  methods: {
    submitBefore(formData){
      const dataMap = []
      for (let i = 0; i < formData.high; i++) {
        const tempDataMap = []
        for (let j = 0; j < formData.wide; j++) {
          if (formData.dataMap && formData.dataMap[i] && formData.dataMap[i][j]) {
            // 存在不覆盖
          } else {
            tempDataMap.push("")
          }
        }
        dataMap.push(tempDataMap)
      }
      formData.dataMap = dataMap;
      return formData;
    },
    changeHook() {
      this.listAllMap()
    },
    listAllMap() {
      const mapList = mapAPi.listAll()
      this.$emit('update:dataList', mapList)
    },
  },
  data() {
    return {
      mapAPi,
      baseFormData: {
        id: '',
        name: '',
        high: 0,
        wide: 0,
        description: '',
        remark: '',
      },
      columns: [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
          width: 50,
          ellipsis: true,
        },
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
          ellipsis: true,
        },
        {
          title: '描述',
          dataIndex: 'description',
          key: 'description',
          ellipsis: true,
        },
        {
          title: '操作',
          key: 'action',
          width: 200,
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
