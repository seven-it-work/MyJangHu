<template>
  <a-tooltip v-if="!disable">
    <template #title>
      <div v-if="isHtml" v-html="title"></div>
      <div v-else>{{title}}</div>
    </template>
    <slot></slot>
  </a-tooltip>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    isHtml: {
      type: Boolean,
      required: false,
      default: false
    },
    disable: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
  }
}
</script>

<style scoped>

</style>
