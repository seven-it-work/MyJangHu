import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class XieNengYuanSuV28 extends BaseCard {
    name = "邪能元素"
    ethnicity = ["恶魔", "元素"]
    attack = 3
    life = 1
    graded = 3
    descriptionStr(){return "<b>战吼</b>：在本局对战的剩余时间内，酒馆中的随从拥有+1/+1."}
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
        currentPlayer.tavern.attackBonus.push({
            markupValue: 1,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
        currentPlayer.tavern.lifeBonus.push({
            markupValue: 1,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
    }
}
