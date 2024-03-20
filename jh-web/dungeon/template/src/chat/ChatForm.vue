<template>
    <a-form-item label="标题">
      <a-input v-model:value="nodeData.title" />
    </a-form-item>
    <a-form-item label="人">
      <a-input v-model:value="nodeData.title" />
    </a-form-item>
</template>

<script>

export default {
  name: "ChatForm",
  props:{
    nodeData:{},
  },
  data() {
    return {

    }
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style scoped>

</style>
