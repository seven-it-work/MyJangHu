import {createStore} from 'vuex'
import dayjs from "dayjs";

export const isDebug = true;




const store = createStore({
    state() {
        return {
            player: {
                playerObj: {
                    property: {
                        name: "张三",
                        sex: "男",
                        health: 90,
                        maxHealth: 100,
                        skillMap: {
                            HandAttack: {
                                key: "HandAttack",
                                name: "手部攻击",
                            },
                            footAttack: {
                                key: "footAttack",
                                name: "脚部攻击",
                            },
                            gridBlock: {
                                key: "gridBlock",
                                name: "格挡",
                            },
                            dodge: {
                                key: "dodge",
                                name: "躲避",
                            },
                            runAway: {
                                key: "runAway",
                                name: "逃跑",
                            },
                        }
                    },
                },
                logs: [],
                nextRouteCardList: [
                    {
                        id: "1",
                        title: "战斗",
                        type: "fighting",
                        description: "一群小卡拉米，在此处收过路费",
                        targetPlayerObjList: [
                            {
                                property: {
                                    name: "卡拉米1",
                                    sex: "男",
                                    health: 90,
                                    maxHealth: 100,
                                },
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "战斗",
                        type: "fighting",
                        description: "一群小卡拉米，在此处收过路费",
                        targetPlayerObjList: [
                            {
                                property: {
                                    name: "卡拉米2",
                                    sex: "男",
                                    health: 90,
                                    maxHealth: 100,
                                },
                            }
                        ]
                    }
                ]
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
