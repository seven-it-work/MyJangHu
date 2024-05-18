import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class LieYanFeiYuV28 extends BaseCard {
    name = "烈焰飞鱼"
    ethnicity = ["鱼人", '龙']
    attack = 1
    life = 3
    graded = 2
    descriptionStr(){return "在你使用一张战吼随从牌后，获得+1/+1。"}

    whenOtherCardUsedTrigger(triggerObj: TriggerObj) {
        const targetCard = triggerObj.targetCard;
        if (!targetCard) {
            return
        }
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        if (targetCard.baseCard.isWarRoars) {
            console.log(`(${currentPlayer.name})的【${this.name}】检测到战吼：在你使用一张战吼随从牌后，获得+1/+1。`)
            currentCard.baseCard.attackBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: 1})
            currentCard.baseCard.lifeBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: 1})
        }
    }

}
