<script>
import {city, scene} from "@/http/api.js";

export default {
  name: "GameScene",
  data() {
    return {
      cityObj: {
        matrixMapObj: [[]]
      },
    }
  },
  created() {
    this.getCityById()
  },
  methods: {
    getCityById() {
      city.getById(this.$route.params.id).then(res => {
        this.cityObj = res;
        const sceneVoMap = {}
        const sceneIds = this.cityObj.matrixMap.flatMap(item => item).filter(item => !!item);
        scene.listByIds(sceneIds).then(res => {
          (res || []).forEach(item => sceneVoMap[item.id] = item)
        })
        const matrixMapObj = []
        this.cityObj.matrixMap.forEach(list => {
          const temp = []
          list.forEach(item => {
            const sceneVoMapElement = sceneVoMap[item];
            if (sceneVoMapElement && sceneVoMapElement.name) {
              temp.push(sceneVoMapElement)
            } else {
              temp.push({})
            }
          })
          matrixMapObj.push(temp)
        })
        this.cityObj.matrixMapObj = matrixMapObj
      })
    }
  },
}
</script>

<template>
  <a-row id="points">
    <table cellspacing="30">
      <tbody>
      <tr v-for="row in cityObj.matrixMapObj.length" :key="row">
        <td v-for="col in cityObj.matrixMapObj[0].length"
            :id="cityObj.matrixMapObj[row - 1][col - 1].id"
            :key="col">
          <a-popover v-if="cityObj.matrixMapObj[row - 1][col - 1].name"
                     :title="cityObj.matrixMapObj[row - 1][col - 1].name"
                     disabled>
            <template #content>
            </template>
            <div class="td-info">
              {{ cityObj.matrixMapObj[row - 1][col - 1].name }}
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
