<script>
import {city, people, scene} from "@/http/api.js";
import {mapState} from "vuex";
import {cloneDeep} from "lodash";

export default {
  name: "GameScene",
  data() {
    return {
      cityObj: {
        matrixMapObj: [[]]
      },
      peopleList: [],
    }
  },
  computed: {
    ...mapState({
      peopleObj: state => state.peopleObj,
    })
  },
  created() {
    this.getCityById()
    this.listCurrentScenePeople(this.peopleObj.currentSceneId)
  },
  methods: {
    movePlace(item) {
      this.peopleObj.currentSceneId = item.id
      this.peopleObj.currentScene = item
      people.update(this.peopleObj).then(() => {
        this.listCurrentScenePeople(item.id)
      })
    },
    listCurrentScenePeople(sceneId) {
      if (sceneId) {
        people.list(1, 100, {
          currentPlaceObj: true,
          currentSceneId: sceneId
        }).then(res => {
          this.peopleList = res.records
        })
      }
    },
    getCityById() {
      city.getById(this.$route.params.cityId).then(res => {
        this.cityObj = res;
        const sceneVoMap = {}
        const sceneIds = this.cityObj.matrixMap.flatMap(item => item).filter(item => !!item);
        scene.listByIds(sceneIds).then(res => {
          (res || []).forEach(item => sceneVoMap[item.id] = item)
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
      })
    }
  },
}
</script>

<template>
  <a-row>
    <a-col v-for="peopleItem in peopleList" :key="peopleItem.id">
      <a-avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">
        {{peopleItem.name}}
      </a-avatar>
    </a-col>
  </a-row>
  <a-row id="points" v-if="cityObj.matrixMapObj && cityObj.matrixMapObj.length">
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
              <a-button @click="movePlace(cityObj.matrixMapObj[row - 1][col - 1])">移动到此</a-button>
            </template>
            <div class="td-info"
                 :style="peopleObj.currentSceneId===cityObj.matrixMapObj[row - 1][col - 1].id?{background:'red'}:{}">
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
