import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class FenNuBianZhiZheV28 extends BaseCard {
    name = "愤怒编织者"
    accompanyingRace = ["恶魔"]
    attack = 3
    life = 1
    graded = 1

    descriptionStr() {
        let txt = '+2/+1'
        if (this.isGold) {
            txt = '+4/+2'
        }
        return `在你使用一张恶魔牌后，对你的英雄造成1点伤害，并获得${txt}。`
    }

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
            const magnification = this.isGold ? 2 : 1;
            currentPlayer.changeLife(-1, triggerObj)
            currentCard.baseCard.attackBonus.push({
                markupValue: 2 * magnification,
                baseCardName: this.name,
                baseCardId: currentCard.id,
            })
            currentCard.baseCard.lifeBonus.push({
                markupValue: magnification,
                baseCardName: this.name,
                baseCardId: currentCard.id,
            })
        }
    }
}
