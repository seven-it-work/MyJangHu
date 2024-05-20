import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class XunBaoYuRenV28 extends BaseCard {
    name = "载脍鱼人"
    ethnicity = ["鱼人"]
    attack = 5
    life = 5
    graded = 4

    descriptionStr() {
        let txt = '+3/+3'
        if (this.isGold) {
            txt = '+6/+6'
        }
        return `当本牌在你手中时，在你使用一张鱼人牌后，获得${txt}。`
    }

    whenOtherHandlerCardUsedTrigger(triggerObj: TriggerObj) {
        const targetCard = triggerObj.targetCard;
        if (!targetCard) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        if (targetCard.baseCard.ethnicity.includes('鱼人')) {
            const magnification = this.isGold ? 2 : 1;
            currentCard.baseCard.lifeBonus.push({
                baseCardId: currentCard.id,
                baseCardName: this.name,
                markupValue: 3 * magnification
            })
            currentCard.baseCard.attackBonus.push({
                baseCardId: currentCard.id,
                baseCardName: this.name,
                markupValue: 3 * magnification
            })
        }
    }
}
