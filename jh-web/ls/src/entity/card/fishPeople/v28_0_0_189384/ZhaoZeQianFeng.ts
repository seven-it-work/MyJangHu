import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class ZhaoZeQianFengV28 extends BaseCard {
    name = "沼泽前锋"
    ethnicity = ["鱼人"]
    attack = 1
    life = 4
    graded = 1
    description = "在你召唤一个鱼人后，获得+1攻击力。"

    whenOtherSummonedTrigger(triggerObj: TriggerObj) {
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const targetCard = triggerObj.targetCard;
        if (!targetCard) {
            return
        }
        if (targetCard.baseCard.ethnicity.includes('鱼人')) {
            currentCard.baseCard.attackBonus.push({
                baseCardId: currentCard.id,
                baseCardName: currentCard.baseCard.name,
                markupValue: 1
            })
        }
    }
}

