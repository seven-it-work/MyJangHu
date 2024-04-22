<script>
import {mapState} from "vuex";
import ChatBox from "@/components/ChatBox.vue";
import i18nUtils from "@/i18n/I18nUtils.js";

export default {
  name: "GameScene",
  components: {ChatBox},
  data() {
    return {
      i18nUtils,
      componentsData: {},
      cityObj: {},
      peopleList: [],
      peopleInteractionList: []
    }
  },
  computed: {
    ...mapState({
      currentPeople: state => state.coreContext.currentPeople,
      coreContext: state => state.coreContext,
    }),
  },
  watch: {
    coreContext: {
      handler() {
        this.listCurrentScenePeople(this.currentPeople?.currentSceneId)
      },
      deep: true
    }
  },
  created() {
    this.getCityById()
    this.listCurrentScenePeople(this.currentPeople?.currentSceneId)
  },
  methods: {
    interactionClick(interaction) {
      switch (interaction.key) {
        case 'conversation':
          break
        case 'attack':
          break
        case 'inquiring':
          break
        case 'dealing':
          break
        default:
          break
      }
    },
    getPeopleInteractionList(peopleItem) {
      if (peopleItem) {
        if (peopleItem.id === this.currentPeople.id) {
          peopleItem.interactionList = [{
            name: '自己'
          }]
        } else if (!peopleItem.interactionList) {
          /**
           * 交谈包含辱骂、赞美
           * @type {[{name: string},{name: string}]}
           */
          const interactionList = [{
            name: '交谈',
            key: "conversation",
          }, {
            name: '袭击',
            key: "attack",
          }, {
            name: '打听',
            key: "inquiring",
          }, {
            name: '交易',
            key: "dealing",
          }]
          peopleItem.interactionList = interactionList
        }
        this.peopleInteractionList = peopleItem.interactionList
      } else {
        this.peopleInteractionList = []
      }
    },
    movePlace(item) {
      if (!item) {
        return
      }
      this.currentPeople?.currentSceneObj?.peopleMoveOut(this.currentPeople);
      item.peopleMoveIn(this.currentPeople)
    },
    listCurrentScenePeople(sceneId) {
      if (sceneId) {
        this.peopleList = Array.from(this.coreContext.sceneMap.get(sceneId)?.peopleObjList?.values())
      }
    },
    getMatrixMapObj(row, col) {
      return this.coreContext.sceneMap.get(this.cityObj.matrixMap[row - 1][col - 1])
    },
    getCityById() {
      this.cityObj = this.coreContext.cityMap.get(this.$route.params.cityId)
    }
  },
}
</script>

<template>
  <a-row>
    <a-col v-for="peopleItem in peopleList" :key="peopleItem.id">
      <a-popover placement="topLeft" trigger="click" @click="getPeopleInteractionList(peopleItem)">
        <template #title>
          <span v-if="peopleItem.currentlyProgress">（{{ i18nUtils.getI18n(peopleItem.currentlyProgress)}}）</span>
        </template>
        <template #content>
          <a-row>
            <a-col :span="12">
              <div>年龄：{{peopleItem.age || 0}}</div>
              <div>性别：{{peopleItem.getSexStr()}}</div>
              <div>灵力：{{peopleItem.lingLi || 0}}</div>
              <div>父亲：{{peopleItem.father?.name || '无'}}</div>
              <div>母亲：{{peopleItem.mother?.name || '无'}}</div>

            </a-col>
            <a-col :span="12">
              <div v-for="interaction in peopleInteractionList" :key="interaction">
                <a-button @click="interactionClick(interaction)">
                  {{ interaction.name }}
                </a-button>
              </div>
            </a-col>
          </a-row>
        </template>
        <a-avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">
          {{ peopleItem.name }}
        </a-avatar>
      </a-popover>
    </a-col>
  </a-row>
  <a-row id="points" v-if="cityObj?.matrixMap && cityObj?.matrixMap.length">
    <table cellspacing="30">
      <tbody>
      <tr v-for="row in cityObj.matrixMap.length" :key="row">
        <td v-for="col in cityObj.matrixMap[0].length"
            :id="cityObj.matrixMap[row - 1][col - 1]"
            :key="col">
          <a-popover v-if="getMatrixMapObj(row,col)?.name"
                     :title="getMatrixMapObj(row,col)?.name"
                     disabled>
            <template #content>
              <a-button @click="movePlace(getMatrixMapObj(row,col))">移动到此</a-button>
            </template>
            <div class="td-info"
                 :style="(cityObj.matrixMap[row - 1][col - 1] && currentPeople?.currentSceneObj?.id===cityObj.matrixMap[row - 1][col - 1])?{background:'red'}:{}">
              {{ getMatrixMapObj(row, col)?.name }}
            </div>
          </a-popover>
          <div v-else class="td-info">
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </a-row>
  <!--  <ChatBox v-if="componentsData.type==='ChatBox'" :components-data="componentsData"></ChatBox>-->
</template>

<style scoped>

</style>
