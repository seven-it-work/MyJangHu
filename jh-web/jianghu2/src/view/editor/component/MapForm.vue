<template>
  <a-form :model="mapForm">
    <a-form-item label="id">
      <a-input disabled v-model:value="mapForm.id"></a-input>
    </a-form-item>
    <a-form-item label="名称">
      <a-input v-model:value="mapForm.name"></a-input>
    </a-form-item>
    <a-form-item label="尺寸">
      <a-row>
        <a-col>高：</a-col>
        <a-col>
          <a-input-number v-model:value="mapForm.high"></a-input-number>
        </a-col>
      </a-row>
      <a-row>
        <a-col>宽：</a-col>
        <a-col>
          <a-input-number v-model:value="mapForm.wide"></a-input-number>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item label="描述">
      <a-input v-model:value="mapForm.description"></a-input>
    </a-form-item>
    <a-form-item label="备注">
      <a-input v-model:value="mapForm.remark"></a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="doUpdateOrAdd">确定</a-button>
      <a-button style="margin-left: 10px" @click="cancel">取消</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import {mapAPi} from "@/http/localApi.js";

export default {
  name: "MapForm",
  props: {
    isAdd: false,
    submitAfter: {
      type: Function,
      default: () => {
      }
    }
  },
  methods: {
    cancel() {
      this.mapForm = {
        ...this.baseMapForm
      }
      this.$emit('cancel')
    },
    doUpdateOrAdd() {
      const dataMap = []
      for (let i = 0; i < this.mapForm.high; i++) {
        const tempDataMap = []
        for (let j = 0; j < this.mapForm.wide; j++) {
          if (this.mapForm.dataMap && this.mapForm.dataMap[i] && this.mapForm.dataMap[i][j]) {
            // 存在不覆盖
          } else {
            tempDataMap.push({})
          }
        }
        dataMap.push(tempDataMap)
      }
      this.mapForm.dataMap = dataMap;
      if (this.isAdd) {
        mapAPi.add(this.mapForm)
      } else {
        mapAPi.update(this.mapForm)
      }
      this.submitAfter()
      this.mapForm = {
        ...this.baseMapForm
      }
    }
  },
  data() {
    return {
      baseMapForm: {
        id: '',
        name: '',
        high: 0,
        wide: 0,
        description: '',
        remark: '',
      },
      mapForm: {
        ...this.baseMapForm
      }
    }
  },
}
</script>

<style scoped>

</style>
