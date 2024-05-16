import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class FuZuZhiZhang28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "富足之杖"
    graded = 3
    spendingGoldCoin = 3
    description = "在本局对战中，酒馆中的随从拥有+2/+2。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        currentPlayer.tavern.attackBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: 2})
        currentPlayer.tavern.lifeBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: 2})
    }
}
