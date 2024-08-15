import {createStore} from 'vuex'
import dayjs from "dayjs";
import {PlayerObj} from "@/view/game2/objs/playerObj";

export const isDebug = false;

const store = createStore({
    state():{
        player: {
            playerObjList: PlayerObj[],
            logs: any[],
            nextRouteCardList: []
        }
    } {
        return {
            player: {
                playerObjList: [],
                logs: [],
                nextRouteCardList: []
            }
        }
    },
    mutations: {
        log(state, html) {
            // console.log(html)
            state.player.logs.push({
                time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
                html: html
            })
        }
    }
})

export default store
