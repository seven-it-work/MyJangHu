<template>
  <a-form-item label="标题">
    <a-input v-model:value="nodeData.title"/>
  </a-form-item>
  <a-form-item label="人">
    <a-select v-model:value="nodeData.componentKey" >
      <a-select-option v-for="item in peopleList" :key="item" :value="item">
        {{ item.name }}
      </a-select-option>
    </a-select>
  </a-form-item>
</template>

<script>

export default {
  name: "ChatForm",
  inject: ['$api'],
  props: {
    nodeData: {},
  },
  data() {
    return {
      peopleList: []
    }
  },
  mounted() {
    this.$api.people.list(1, 999).then(res => {
      this.peopleList = res.records
    })
  },
  methods: {},
}
</script>

<style scoped>

</style>
