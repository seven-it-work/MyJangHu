import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class HouTaiBaoAnV29 extends BaseCard {
    name = "后台保安"
    ethnicity = ["恶魔"]
    attack = 4
    life = 4
    graded = 1

    descriptionStr() {
        return `在你的回合开始时，对你的英雄造成点伤害。${this.isGold ? '触发两次' : ''}`
    }

    whenStartRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.changeLife(-1,triggerObj)
    }
}
