import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";
import {TriggerObj} from "../Trigger";

export default class FenNuBianZhiZhe extends BaseCard {
    name = "愤怒编织者"
    ethnicity = ["中立"]
    accompanyingRace = ["恶魔"]
    attack = 3
    life = 1
    graded = 1
    description = "在你使用一张恶魔牌后，对你的英雄造成1点伤害，并获得+2/+1"


    whenOtherCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        const targetCard = triggerObj.targetCard;
        if (!currentPlayer) {
            return
        }
        if (!targetCard) {
            return
        }
        if (targetCard.baseCard.ethnicity.includes("恶魔")) {
            currentPlayer.changeLife(-1, triggerObj)
            this.attack += 2
            this.life += 1;
        }
    }
}

