<template>
  <Header></Header>
  <!--  <X6Demo></X6Demo>-->
  <!--  <ChatManager></ChatManager>-->
  <router-view></router-view>
</template>
<script>
import Header from "@/view/Header.vue";
import X6Demo from "@/demo/X6Demo.vue";
import ChatManager from "@/demo/ChatManager.vue";
import core from "@/core/core";

export default {
  mounted() {
    core.run()
  },
  unmounted() {
    core.stop()
  }
}

</script>


<style scoped>
</style>
