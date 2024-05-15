import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class LieYanFeiYu extends BaseCard {
    name = "烈焰飞鱼"
    ethnicity = ["鱼人", '龙']
    attack = 1
    life = 3
    graded = 2
    description = "在你使用一张战吼随从牌后，获得+1/+1。"

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
        if (targetCard.baseCard.description.includes('战吼')) {
            console.log(`(${currentPlayer.name})的【${this.name}】检测到战吼：在你使用一张战吼随从牌后，获得+1/+1。`)
            this.attackBonus.push({baseCardId: currentCard.id, baseCardName: currentCard.baseCard.name, markupValue: 1})
            this.lifeBonus.push({baseCardId: currentCard.id, baseCardName: currentCard.baseCard.name, markupValue: 1})
        }
    }

}

