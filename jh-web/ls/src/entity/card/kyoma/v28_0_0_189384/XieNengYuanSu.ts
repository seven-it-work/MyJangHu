import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class XieNengYuanSuV28 extends BaseCard {
    name = "邪能元素"
    ethnicity = ["恶魔", "元素"]
    attack = 3
    life = 1
    graded = 3
    descriptionStr() {
        let txt = '+1/+1'
        if (this.isGold) {
            txt = '+2/+2'
        }
        return `<b>战吼</b>：在本局对战的剩余时间内，酒馆中的随从拥有${txt}。`
    }
    isWarRoars = true

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        const currentCard = triggerObj.currentCard;
        if (!currentPlayer) {
            return
        }
        if (!currentCard) {
            return
        }
        const magnification = this.isGold ? 2 : 1;
        currentPlayer.tavern.attackBonus.push({
            markupValue: magnification,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
        currentPlayer.tavern.lifeBonus.push({
            markupValue: magnification,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
    }
}
