<template>
  <a-row style="padding: 20px" :gutter="16">
    <a-col :span="20">
      <div ref="logDom" style="height: 150px;overflow-y: scroll">
        <div v-for="logItem in logs" v-html="`${logItem.time}：${logItem.html}`"></div>
      </div>
    </a-col>
    <a-col :span="4">
      <div>按钮组</div>
    </a-col>
  </a-row>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "footPage",
  computed: {
    ...mapState({
      logs: state => state.player.logs,
    }),
  },
  methods: {
    scrollIt() {
      setTimeout(() => {
        const logDom = this.$refs.logDom;
        logDom.scrollTop = logDom.scrollHeight
      }, 200)
    }
  },
  mounted() {
    this.scrollIt();
  },
  watch: {
    "logs.length": {
      handler() {
        this.scrollIt()
      }
    }
  },
}
</script>

<style scoped>

</style>
