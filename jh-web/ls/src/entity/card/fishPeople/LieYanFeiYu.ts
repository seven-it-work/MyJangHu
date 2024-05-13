import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";

export default class LieYanFeiYu extends BaseCard {
    name = "烈焰飞鱼"
    ethnicity = ["鱼人", '龙']
    attack = 1
    life = 3
    graded = 2
    description = "在你使用一张战吼随从牌后，获得+1/+1。"

    whenOtherCardUsedTrigger(triggerObj: TriggerObj) {
        var targetCard = triggerObj.targetCard;
        if (!targetCard) {
            return
        }
        var currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        if (targetCard.baseCard.description.includes('战吼')) {
            this.attackBonus.push({baseCardId: currentCard.id, baseCardName: currentCard.baseCard.name, markupValue: 1})
            this.lifeBonus.push({baseCardId: currentCard.id, baseCardName: currentCard.baseCard.name, markupValue: 1})
        }
    }

}

