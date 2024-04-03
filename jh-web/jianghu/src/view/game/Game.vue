<script>
import worldPng from "@/assets/world/world.svg"
import {mapState} from "vuex";

export default {
  name: "Game",
  computed: {
    ...mapState({
      coreContext: state => state.coreContext,
    }),
  },
  data() {
    return {
      worldPng,
      allWorldList: [],
    }
  },
  created() {
    this.getWorldObj()
  },
  methods: {
    getWorldObj() {
      this.allWorldList = Array.from(this.coreContext.worldMap.values())
    },
    go2World(item) {
      this.$router.push({name: 'gameCity', params: {worldId: item.id}})
    }
  },
}
</script>

<template>
  <div style="position: absolute;width: 100%;height: 100%">
    <a-popover v-for="item in allWorldList" :key="item.id" trigger="click">
      <template #content>
        <a-button @click="go2World(item)">进入</a-button>
      </template>
      <div :style="{position: 'absolute',left:item.leftValue+'px',top: item.topValue+'px'}">{{ item.name }}</div>
    </a-popover>
    <img :src="worldPng" alt="1">
  </div>
</template>

<style scoped>

</style>
