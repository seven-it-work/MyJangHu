<script>
import {people, world} from "@/http/api.js";
import Cookies from "js-cookie";

export default {
  name: "GameCity",
  data() {
    return {
      worldObj: {
        matrixMapObj: [[]]
      },
    }
  },
  created() {
    this.getWorldById()
  },
  methods: {
    go2City(item) {
      this.$router.push({name: 'gameScene', params: {id: item.id}})
      people.getById(Cookies.get("peopleId")).then(res => {
        res.currentCityId = item.id;
        people.update(res)
      })
    },
    getWorldById() {
      world.getById(this.$route.params.id, true).then(res => {
        this.worldObj = res;
        const cityVoMap = {}
        this.worldObj.cityVoList.forEach(item => cityVoMap[item.id] = item);
        const matrixMapObj = []
        this.worldObj.matrixMap.forEach(list => {
          const temp = []
          list.forEach(item => {
            const cityVoMapElement = cityVoMap[item];
            if (cityVoMapElement && cityVoMapElement.name) {
              temp.push(cityVoMapElement)
            } else {
              temp.push({})
            }
          })
          matrixMapObj.push(temp)
        })
        this.worldObj.matrixMapObj = matrixMapObj
      })
    }
  },
}
</script>

<template>
  <a-row id="points">
    <table cellspacing="30">
      <tbody>
      <tr v-for="row in worldObj.matrixMapObj.length" :key="row">
        <td v-for="col in worldObj.matrixMapObj[0].length"
            :id="worldObj.matrixMapObj[row - 1][col - 1].id"
            :key="col">
          <a-popover v-if="worldObj.matrixMapObj[row - 1][col - 1].name"
                     :title="worldObj.matrixMapObj[row - 1][col - 1].name">
            <template #content>
              <a-button @click="go2City(worldObj.matrixMapObj[row - 1][col - 1])">进入城市</a-button>
            </template>
            <div class="td-info">
              {{ worldObj.matrixMapObj[row - 1][col - 1].name }}
            </div>
          </a-popover>
          <div v-else class="td-info">
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </a-row>
</template>

<style scoped>

</style>
