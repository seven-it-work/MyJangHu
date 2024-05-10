import SharedCardPool from "./SharedCardPool";
import Player from "./Player";
import randomUtil from "../utils/RandomUtils";
import randomUtils from "../utils/RandomUtils";
import {shuffle} from "lodash";
import FightObj from "./FightObj";
import ContextObj from "./ContextObj";
import {Serialization} from "../utils/SaveUtils";

/**
 * 局内对象，存放共享信息
 */
export default class PlayObj implements Serialization<PlayObj> {
    sharedCardPool: SharedCardPool;

    playerObjList: Player[];

    currentPlayerInfo: Player;
    // 共享对象
    contextObj: ContextObj;


    constructor(playerObjList: Player[] | undefined, sharedCardPool: SharedCardPool | undefined) {
        if (sharedCardPool) {
            this.contextObj = new ContextObj(sharedCardPool)
            this.sharedCardPool = sharedCardPool
        }
        if (playerObjList) {
            this.playerObjList = playerObjList;
            this.currentPlayerInfo = playerObjList[0]
        }
    }

    endRound() {
        const triggerObj = {contextObj: this.contextObj};
        this.currentPlayerInfo.endTheRound(triggerObj);
        const survivalPlayers = this.playerObjList.filter(player => player.isSurvival());
        const notEndRoundPlayers = survivalPlayers.filter(player => !player.isEndRound);
        if (notEndRoundPlayers.length > 0) {
            // 没有全部结束
            this.currentPlayerInfo = randomUtil.pickone(notEndRoundPlayers);
        } else {
            // 全部结束
            console.log("全部结束")
            this.contextObj.currentRound++;
            // 只有一个人存活，结束
            if (survivalPlayers.length === 1) {
                console.log("完事了")
                return
            }
            // 准备分配战斗
            if (survivalPlayers.length % 2 != 0) {
                survivalPlayers.push(randomUtils.pickone(this.playerObjList.filter(player => !player.isSurvival())))
            }
            const fightPlayers = shuffle(survivalPlayers)
            for (let i = 0; i < fightPlayers.length / 2; i++) {
                const fightObj = new FightObj(fightPlayers[i], fightPlayers[i + 1], this.contextObj);
                fightObj.doFighting();
            }
            // 将playerObjList进行重排序，进行顺序处理
            this.playerObjList = shuffle(this.playerObjList)
            // 战斗完成
            this.playerObjList.filter(player => player.isSurvival()).forEach(player => player.startTheRound(triggerObj))
        }
    }

    deserialize(json: string | any): PlayObj {
        let dataObj = json;
        if (typeof json === 'string') {
            dataObj = JSON.parse(json)
        }
        this.sharedCardPool = new SharedCardPool(undefined).deserialize(dataObj.sharedCardPool)
        this.playerObjList = dataObj.playerObjList.map(data => new Player(undefined, undefined).deserialize(data))
        this.currentPlayerInfo = new Player(undefined, undefined).deserialize(dataObj.currentPlayerInfo)
        return this;
    }

    serialization(): string {
        return "";
    }
}
