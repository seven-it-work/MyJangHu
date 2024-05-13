import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";

export default class ShiTangLieRen extends BaseCard {
    name = "石塘猎人"
    ethnicity = ["鱼人"]
    attack = 2
    life = 3
    graded = 1
    description = "战吼：使一个友方鱼人获得+1/+1。"
    isNeedSelect = true

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const needSelectCard = triggerObj.needSelectCard;
        if (!needSelectCard) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        needSelectCard.baseCard.attackBonus.push({
            baseCardId: currentCard.id,
            baseCardName: currentCard.baseCard.name,
            markupValue: 1
        })
        needSelectCard.baseCard.lifeBonus.push({
            baseCardId: currentCard.id,
            baseCardName: currentCard.baseCard.name,
            markupValue: 1
        })
    }

}

