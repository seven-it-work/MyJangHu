<script>
import {world} from "@/http/api.js";

export default {
  name: "Game",
  data() {
    return {
      allWorldList: []
    }
  },
  methods: {
    getWorldObj() {
      this.allWorldList = world.list(1, 999);
    }
  },
}
</script>

<template>
  <div>
  </div>
</template>

<style scoped>

</style>