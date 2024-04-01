import {createStore} from 'vuex'
import {CoreContext} from "@/core/entity/CoreContext";
import core from "@/core/core";

const coreContext:CoreContext=core.context
// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            coreContext,
            peopleObj: {},
            fightData:{
                currentPartner: [],
                enemy: [],
            },
            chatIdMap:[],
        }
    },
    mutations: {
        updateContext(state,context:CoreContext){
            state.coreContext={...context,time:new Date().getTime()};
        },
        updateChatIdMap(state, chatIdMap) {
            state.chatIdMap = chatIdMap;
        },
        updatePeople(state, people) {
            state.peopleObj = people;
        },
        fight(state, fightData) {
            state.fightData = fightData;
        },
        fightOver(state) {
            state.fightData = {
                currentPartner: [],
                enemy: [],
            }
        },
    }
})

export default store
