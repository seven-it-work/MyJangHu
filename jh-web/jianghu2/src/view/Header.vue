<script>

export default {
  name: "Header",
  components: {},
  data() {
    return {
      urlInterval: null,
      currentUrl: ''
    }
  },
  methods: {
    reload() {
      // console.log("刷新")
      window.location.reload()
    }
  },
  mounted() {
    if (this.urlInterval) {
      clearInterval(this.urlInterval)
    }
    this.urlInterval = setInterval(() => {
      this.currentUrl = window.location.href;
    }, 1000);
  }
}
</script>

<template>
  <div>{{ currentUrl }}
    <a-button @click="reload">刷新</a-button>
  </div>
  <span style="margin-left: 10px">
<!--    <router-link to="/">首页</router-link>-->
  </span>
</template>

<style scoped>

</style>
