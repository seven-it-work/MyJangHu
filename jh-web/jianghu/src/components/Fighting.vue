<template>
  <a-row>自动战斗</a-row>
  <a-row id="points">
    <table cellspacing="30">
      <tbody>
      <tr v-for="row in fightMap.length" :key="row">
        <td v-for="col in fightMap[0].length"
            :id="fightMap[row - 1][col - 1].id"
            :key="col">
          <div v-if="fightMap[row - 1][col - 1].people.name" class="td-info">
            {{ fightMap[row - 1][col - 1].people.name }}
          </div>
          <a-popover v-else>
            <template #content>
              <a-button @click="movePlace(row - 1,col - 1)">移动到此</a-button>
            </template>
            <div class="td-info"></div>
          </a-popover>
        </td>
      </tr>
      </tbody>
    </table>
  </a-row>
</template>

<script>
import {randomUtil} from "@/random.js";
import {mapState} from "vuex";

export default {
  name: "Fighting",
  computed: {
    ...mapState({
      fightData: state => state.fightData
    }),
  },
  data() {
    return {
      fightMap: []
    }
  },
  created() {
    this.initFightMap()
  },
  methods: {
    movePlace(row, col) {
    },
    initFightMap() {
      const fightMap = []
      for (let i = 0; i < 10; i++) {
        const temp = []
        for (let j = 0; j < 10; j++) {
          temp.push({
            people: {}
          })
        }
        fightMap.push(temp)
      }
      const currentPartner = this.fightData.currentPartner
      const enemy = this.fightData.enemy
      for (let i = 0; i < currentPartner.length; i++) {
        const people = currentPartner[i]
        const putList = fightMap.flatMap(item => item).filter(item => !item.people || !item.people.id)
        if (putList && putList.length > 0) {
          const number = randomUtil.integer({min: 0, max: putList.length - 1});
          putList[number].people = people
        }
      }
      for (let i = 0; i < enemy.length; i++) {
        const people = enemy[i]
        const putList = fightMap.flatMap(item => item).filter(item => !item.people || !item.people.id)
        if (putList && putList.length > 0) {
          const number = randomUtil.integer({min: 0, max: putList.length - 1});
          putList[number].people = people
          putList[number].peopleType = "enemy"
        }
      }
      this.fightMap = fightMap;
    }
  },
}
</script>

<style scoped>

</style>
