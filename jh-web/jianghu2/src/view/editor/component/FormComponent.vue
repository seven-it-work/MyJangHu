<template>
  <a-form :model="formData">
    <a-form-item label="id">
      <a-input disabled v-model:value="formData.id"></a-input>
    </a-form-item>
    <slot name="formData" :formData="formData"></slot>
    <a-form-item>
      <a-button type="primary" @click="doUpdateOrAdd">确定</a-button>
      <a-button style="margin-left: 10px" @click="cancel">取消</a-button>
    </a-form-item>
  </a-form>
</template>

<script>

export default {
  name: "FormComponent",
  props: {
    baseFormData: {},
    api: {},
    isAdd: false,
    submitAfter: {
      type: Function,
      default: () => {
      }
    }
  },
  methods: {
    cancel() {
      this.formData = {
        ...this.baseFormData
      }
      this.$emit('cancel')
    },
    doUpdateOrAdd() {
      const dataMap = []
      for (let i = 0; i < this.formData.high; i++) {
        const tempDataMap = []
        for (let j = 0; j < this.formData.wide; j++) {
          if (this.formData.dataMap && this.formData.dataMap[i] && this.formData.dataMap[i][j]) {
            // 存在不覆盖
          } else {
            tempDataMap.push("")
          }
        }
        dataMap.push(tempDataMap)
      }
      this.formData.dataMap = dataMap;
      if (this.isAdd) {
        this.api.add(this.formData)
      } else {
        this.api.update(this.formData)
      }
      this.submitAfter()
      this.formData = {
        ...this.baseFormData
      }
    }
  },
  data() {
    return {
      formData: {
        ...this.baseFormData
      }
    }
  },
}
</script>

<style scoped>

</style>
