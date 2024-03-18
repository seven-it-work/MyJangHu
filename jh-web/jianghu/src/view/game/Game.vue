<script>
import {people, world} from "@/http/api.js";
import worldPng from "@/assets/world/world.svg"
import Cookies from "js-cookie";
import {updateCurrentPeople} from "@/util/BusinessUtils.js";

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
        this.allWorldList = res.records
      })
    },
    go2World(item) {
      people.getById(Cookies.get("peopleId")).then(res => {
        res.currentWorldId = item.id;
        res.currentCityId=''
        res.currentSceneId=''
        updateCurrentPeople(res).then(()=>
            this.$router.push({name: 'gameCity', params: {worldId: item.id}}))
      })
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
