import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class MoXueNianJiangV29 extends BaseCard {
    name = "魔血黏浆"
    ethnicity = ["恶魔", "元素"]
    attack = 3
    life = 4
    graded = 3

    isWarRoars = true

    descriptionStr() {
        return `战吼：在本局对战中，酒馆中的随从拥有+${this.isGold ? 2 : 4}生命值。`
    }

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const magnification = this.isGold ? 2 : 1;
        currentPlayer.tavern.lifeBonus.push({
            baseCardId: currentCard.id,
            baseCardName: this.name,
            markupValue: magnification * 2
        })
    }
}
