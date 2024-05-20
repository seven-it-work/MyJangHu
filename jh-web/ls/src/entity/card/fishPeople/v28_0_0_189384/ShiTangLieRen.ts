import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class ShiTangLieRenV28 extends BaseCard {
    name = "石塘猎人"
    ethnicity = ["鱼人"]
    attack = 2
    life = 3
    graded = 1
    descriptionStr() {
        let txt = '+1/+1'
        if (this.isGold) {
            txt = '+2/+2'
        }
        return `战吼：使一个友方鱼人获得${txt}。`
    }

    isNeedSelect = true
    isWarRoars = true

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const needSelectCard = triggerObj.needSelectCard;
        if (!needSelectCard) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        let magnification = this.isGold ? 2 : 1;
        needSelectCard.baseCard.attackBonus.push({
            baseCardId: currentCard.id,
            baseCardName: this.name,
            markupValue: magnification
        })
        needSelectCard.baseCard.lifeBonus.push({
            baseCardId: currentCard.id,
            baseCardName: this.name,
            markupValue: magnification
        })
    }

}
