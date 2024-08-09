import {PlayerObj, randomPlayerObj} from "@/view/game2/objs/playerObj";
import {randomBool, randomNumber, randomUtil} from "@/random";
import {getLocation} from "random_chinese_fantasy_names";

export interface RouteCard {
    id: string,
    title: string,
    type: 'fighting'
    description: string
    targetPlayerObjList: PlayerObj[]
}

export const randomRouteCard = (): RouteCard => {
    const location = getLocation(1)[0];
    console.log(location)
    return {
        description: "小卡拉米挡住了你",
        id: randomUtil.guid(),
        targetPlayerObjList: [
            randomPlayerObj(),
            randomPlayerObj(),
        ],
        title: location.name,
        type: "fighting"
    }
}

