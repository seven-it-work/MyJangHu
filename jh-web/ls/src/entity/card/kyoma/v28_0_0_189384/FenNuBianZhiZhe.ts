import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class FenNuBianZhiZheV28 extends BaseCard {
    name = "愤怒编织者"
    accompanyingRace = ["恶魔"]
    attack = 3
    life = 1
    graded = 1
    description = "在你使用一张恶魔牌后，对你的英雄造成1点伤害，并获得+2/+1"


    whenOtherCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        const targetCard = triggerObj.targetCard;
        const currentCard = triggerObj.currentCard;
        if (!currentPlayer) {
            return
        }
        if (!targetCard) {
            return
        }
        if (!currentCard) {
            return
        }
        if (targetCard.baseCard.ethnicity.includes("恶魔")) {
            currentPlayer.changeLife(-1, triggerObj)
            currentCard.baseCard.attackBonus.push({
                markupValue: 2,
                baseCardName: this.name,
                baseCardId: currentCard.id,
            })
            currentCard.baseCard.lifeBonus.push({
                markupValue: 1,
                baseCardName: this.name,
                baseCardId: currentCard.id,
            })
        }
    }
}
