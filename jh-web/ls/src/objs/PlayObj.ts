import SharedCardPool from "./SharedCardPool";
import Player from "./Player";
import randomUtil from "../utils/RandomUtils";
import randomUtils from "../utils/RandomUtils";
import {shuffle} from "lodash";
import FightObj from "./FightObj";
import ContextObj from "./ContextObj";

/**
 * 局内对象，存放共享信息
 */
export default class PlayObj {
    sharedCardPool: SharedCardPool;

    playerObjList: Player[];

    currentPlayerInfo: Player;
    // 共享对象
    contextObj: ContextObj;


    constructor(playerObjList: Player[], sharedCardPool: SharedCardPool) {
        this.contextObj = new ContextObj(sharedCardPool)
        this.playerObjList = playerObjList;
        this.currentPlayerInfo = playerObjList[0]
        this.sharedCardPool = sharedCardPool
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
}
