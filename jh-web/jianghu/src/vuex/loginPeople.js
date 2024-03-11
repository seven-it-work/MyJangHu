import {createStore} from 'vuex'

// 创建一个新的 store 实例
const loginPeople = createStore({
    state() {
        return {
            peopleObj: {}
        }
    },
    mutations: {
        updatePeople(state, people) {
            state.peopleObj = people;
        },
    }
})

export default loginPeople
