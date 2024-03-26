<template>
  <a-row>
    <a-button @click="openDrawer(true)">新增地图</a-button>
  </a-row>
  <a-table :data-source="dataList" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <a-button @click="doUpdate(record)">更新</a-button>
        <a-button style="color: red" @click="doDelete(record)">删除</a-button>
      </template>
    </template>
  </a-table>
  <a-drawer v-model:open="open" width="50%">
    <FormComponent ref="form" :isAdd="isAdd" :submit-after="submitAfter" @cancel="closeDrawer" :api="api"
                   :base-form-data="baseFormData" :submit-before="submitBefore">
      <template v-slot:formData="{formData}">
        <slot name="formData" :formData="formData"></slot>
      </template>
    </FormComponent>
  </a-drawer>
</template>

<script>
import {cloneDeep} from "lodash";
import FormComponent from "@/view/editor/component/FormComponent.vue";

export default {
  name: "TabComponent",
  props: {
    baseFormData: {},
    api: {},
    columns: [],
    dataList: [],
    changeHook: {
      type: Function,
      default: () => {
      }
    },
    submitBefore: {
      type: Function,
      default (formData){
        return formData
      }
    },
  },
  components: {FormComponent,},
  methods: {
    submitAfter() {
      this.changeHook()
      this.closeDrawer()
    },
    closeDrawer() {
      this.open = false
    },
    openDrawer(isAdd) {
      this.open = true;
      this.isAdd = isAdd || false
    },
    doUpdate(item) {
      this.openDrawer(false)
      setTimeout(() => this.$refs.form.$data.formData = cloneDeep(item), 200)
    },
    doDelete(item) {
      this.api.delete(item.id)
      this.changeHook();
    },
  },
  data() {
    return {
      isAdd: false,
      open: false,
    }
  },
}
</script>

<style scoped>

</style>
