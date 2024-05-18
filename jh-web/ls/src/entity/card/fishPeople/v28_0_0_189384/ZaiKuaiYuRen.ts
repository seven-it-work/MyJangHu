import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class XunBaoYuRenV28 extends BaseCard {
    name = "载脍鱼人"
    ethnicity = ["鱼人"]
    attack = 5
    life = 5
    graded = 4
    descriptionStr(){return "当本牌在你手中时，在你使用一张鱼人牌后，获得+3/+3。"}

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
            currentCard.baseCard.lifeBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: 3})
            currentCard.baseCard.attackBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: 3})
        }
    }
}
