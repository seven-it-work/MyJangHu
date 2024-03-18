import {createStore} from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            peopleObj: {},
            fightData:{
                currentPartner: [],
                enemy: [],
            }
        }
    },
    mutations: {
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
