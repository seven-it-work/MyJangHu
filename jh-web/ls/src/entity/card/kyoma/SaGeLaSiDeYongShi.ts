import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";
import {TriggerObj} from "../Trigger";

export default class SaGeLaSiDeYongShi extends BaseCard {
    name = "萨格拉斯的勇士"
    ethnicity = ["恶魔"]
    attack = 10
    life = 10
    graded = 7
    description = "酒馆中的随从拥有+10/10。"

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
            markupValue: 10,
            baseCardName: currentCard.baseCard.name,
            baseCardId: currentCard.id,
        })
        currentPlayer.tavern.attackBonus.push({
            markupValue: 10,
            baseCardName: currentCard.baseCard.name,
            baseCardId: currentCard.id,
        })
    }

    whenSaleCardTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        const currentCard = triggerObj.currentCard;
        if (!currentPlayer) {
            return
        }
        if (!currentCard) {
            return
        }
        currentPlayer.tavern.removeBonus(currentCard, 'attack')
        currentPlayer.tavern.removeBonus(currentCard, 'life')
    }
}
