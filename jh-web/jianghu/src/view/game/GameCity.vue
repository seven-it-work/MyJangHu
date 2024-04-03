<script>
import {mapState} from "vuex";
import {randomList, randomUtil} from "@/random.js";

export default {
  name: "GameCity",
  data() {
    return {
      worldObj: {},
    }
  },
  created() {
    this.getWorldById()
  },
  computed: {
    ...mapState({
      coreContext: state => state.coreContext,
    }),
  },
  methods: {
    getCityObj(row, col) {
      const id = this.worldObj.matrixMap[row - 1][col - 1];
      if (id) {
        return this.coreContext.cityMap.get(id);
      }
      return undefined
    },
    go2City(item) {
      const sceneObj = randomList.randomFormList(item?.sceneObjList)
      this.coreContext.currentPeople?.currentSceneObj?.peopleMoveOut(this.coreContext.currentPeople)
      sceneObj?.peopleMoveIn(this.coreContext.currentPeople)
      this.$router.push({name: 'gameScene', params: {worldId: this.$route.params.worldId, cityId: item.id}})
    },
    getWorldById() {
      this.worldObj = this.coreContext.worldMap.get(this.$route.params.worldId);
    }
  },
}
</script>

<template>
  <a-row id="points">
    <table cellspacing="30">
      <tbody>
      <tr v-for="row in worldObj?.matrixMap.length" :key="row">
        <td v-for="col in worldObj?.matrixMap[0].length"
            :id="worldObj?.matrixMap[row - 1][col - 1]"
            :key="col">
          <a-popover v-if="getCityObj(row,col)?.name"
                     :title="getCityObj(row,col)?.name">
            <template #content>
              <a-button @click="go2City(getCityObj(row,col))">进入城市</a-button>
            </template>
            <div class="td-info">
              {{ getCityObj(row, col)?.name }}
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
