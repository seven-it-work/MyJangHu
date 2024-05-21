import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class MoXueYanJiangV29 extends BaseCard {
    name = "魔血岩浆"
    ethnicity = ["恶魔","元素"]
    attack = 4
    life = 3
    graded = 3
    descriptionStr() {
        return `亡语:在本局对战中,酒馆中的随从拥有+${this.isGold ? 6 : 3}攻击力。`
    }

    isDeadLanguage = true

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const magnification = this.isGold ? 2 : 1;
        currentPlayer.tavern.attackBonus.push({
            baseCardId: currentCard.id,
            baseCardName: this.name,
            markupValue: 3 * magnification
        })
    }
}
