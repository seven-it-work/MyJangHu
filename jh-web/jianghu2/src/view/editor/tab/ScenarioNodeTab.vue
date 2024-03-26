<template>
  <TabComponent :api="x6NodeApi" :columns="columns" :dataList="dataList" :change-hook="changeHookMe"
                :base-form-data="baseFormData" :submit-before="submitBefore">
    <template v-slot:formData="{formData}">
      <a-form-item label="场景名称">
        <a-input v-model:value="formData.data.name"></a-input>
      </a-form-item>
      <a-form-item label="描述">
        <a-input v-model:value="formData.data.description"></a-input>
      </a-form-item>
      <a-form-item label="备注">
        <a-input v-model:value="formData.data.remark"></a-input>
      </a-form-item>
      <!--      <a-row>-->
      <!--        <div>场景id</div>-->
      <!--        <div>场景名称</div>-->
      <!--        <div>进入触发</div>-->
      <!--        <div>立刻触发</div>-->
      <!--        <div>描述</div>-->
      <!--        <div>备注</div>-->
      <!--      </a-row>-->
    </template>
  </TabComponent>

</template>

<script>
import TabComponent from "@/view/editor/component/TabComponent.vue";
import {x6NodeApi} from "@/http/localApi.js";
import {cloneDeep} from "lodash";

export default {
  name: "ScenarioNodeTab",
  components: {TabComponent},
  props: {
    currentMapObj: {},
    changeHook: {
      Function,
      default() {
      }
    }
  },
  watch: {
    currentMapObj: {
      handler() {
        this.listAll()
      }
    }
  },
  methods: {
    submitBefore(item) {
      item.attrs.label.text = item.data.name
      return item;
    },
    changeHookMe() {
      this.listAll()
      this.changeHook()
    },
    listAll() {
      if (this.currentMapObj && this.currentMapObj.id) {
        this.dataList = x6NodeApi.getByMapId(this.currentMapObj.id)
      }
    },
  },
  created() {
    this.listAll()
  },
  data() {
    return {
      dataList: [],
      x6NodeApi,
      baseFormData: {
        id: '',
        attrs: {
          label: {
            text: ''
          }
        },
        data: {
          name: '',
          description: '',
          remark: '',
        },
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
          dataIndex: ['data', 'name'],
          key: 'name',
          ellipsis: true,
        },
        {
          title: '描述',
          dataIndex: ['data', 'description'],
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
