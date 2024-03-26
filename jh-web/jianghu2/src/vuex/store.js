import {createStore} from 'vuex'
import mapDb from "@/vuex/mapDb.js";
import x6Node from "@/vuex/x6Node.js";
import x6Edge from "@/vuex/x6Edge.js";

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            mapDb,
            x6Node,
            x6Edge,
        }
    },
    mutations: {
    }
})

export default store
