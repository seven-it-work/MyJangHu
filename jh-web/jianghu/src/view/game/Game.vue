<script>
import {world} from "@/http/api.js";
import worldPng from "@/assets/world/world.jpeg"

export default {
  name: "Game",
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
      world.list(1, 999).then(res => {
        this.allWorldList=res.records
      })
    },
    go2World(item){
      this.$router.push({name: 'gameCity', params: {id: item.id}})
    }
  },
}
</script>

<template>
  <a-popover v-for="item in allWorldList" :key="item.id" trigger="click">
    <template #content>
      <a-button @click="go2World(item)">进入</a-button>
    </template>
    <div :style="{position: 'absolute',left:item.leftValue+'px',top: item.topValue+'px'}">{{ item.name }}</div>
  </a-popover>
  <img :src="worldPng" alt="1">
</template>

<style scoped>

</style>
