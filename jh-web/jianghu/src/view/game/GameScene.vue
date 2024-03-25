<script>
import {city, people, scene} from "@/http/api.js";
import {mapState} from "vuex";
import ChatBox from "@/components/ChatBox.vue";

export default {
  name: "GameScene",
  components: {ChatBox},
  data() {
    return {
      componentsData: {},
      cityObj: {
        matrixMapObj: [[]]
      },
      peopleList: [],
      peopleInteractionList: []
    }
  },
  computed: {
    ...mapState({
      peopleObj: state => state.peopleObj,
    }),
  },
  created() {
    this.getCityById()
    this.listCurrentScenePeople(this.peopleObj.currentSceneId)
  },
  methods: {
    interactionClick(interaction) {
      switch (interaction.key){
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
      // console.log(interaction)
      // // todo 调用后台 请求相关 type 和 数据对象
      // this.componentsData = {
      //   type: 'ChatBox',
      //   visible: true,
      //   dataNowId: "1",
      //   data: [
      //     {
      //       id: "1",
      //       nextId: "2",
      //       peopleObj: {id: '1', name: "测试"},
      //       message: "好好好",
      //       selectItem: []
      //     },
      //     {
      //       id: "2",
      //       nextId: "3",
      //       peopleObj: {id: '2', name: "测试2"},
      //       message: "对地段",
      //       selectItem: []
      //     },
      //     {
      //       id: "3",
      //       nextId: "4",
      //       peopleObj: {id: '1', name: "测试2"},
      //       message: "",
      //       // selectItem 也是事件对象
      //       selectItem: [
      //         {
      //           id: 'jg',
      //           name: '交谈',
      //         }
      //       ]
      //     },
      //     {
      //       id: "4",
      //       nextId: "",
      //       peopleObj: {id: '2', name: "测试2"},
      //       message: "去吧",
      //     },
      //   ]
      // }
      // this.componentsData.dataNowObj = this.componentsData.data.filter(item => item.id === this.componentsData.dataNowId)[0]
      // if (!this.componentsData.dataNowObj) {
      //   this.componentsData.visible = false
      // }
    },
    getPeopleInteractionList(peopleItem) {
      if (peopleItem) {
        if (peopleItem.id === this.peopleObj.id) {
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
      <a-popover trigger="click" @click="getPeopleInteractionList(peopleItem)">
        <template #content>
          <a-button v-for="interaction in peopleInteractionList" :key="interaction"
                    @click="interactionClick(interaction)">
            {{ interaction.name }}
          </a-button>
        </template>
        <a-avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">
          {{ peopleItem.name }}
        </a-avatar>
      </a-popover>
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
  <!--  <ChatBox v-if="componentsData.type==='ChatBox'" :components-data="componentsData"></ChatBox>-->
</template>

<style scoped>

</style>
