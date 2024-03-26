import {createStore} from 'vuex'
import mapDb from "@/vuex/db/mapDb.js";

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            mapDb,
        }
    },
    mutations: {
    }
})

export default store
