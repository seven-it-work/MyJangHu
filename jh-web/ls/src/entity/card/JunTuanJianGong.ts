import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj.ts";
import {TriggerObj} from "../Trigger";

export default class JunTuanJianGong extends BaseCard {
    name = "军团监工"
    ethnicity = ["恶魔"]
    attack = 4
    life = 2
    graded = 3
    description = "酒馆中的随从用于+2/+1"


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
            markupValue: 2,
            baseCardObj: currentCard
        })
        currentPlayer.tavern.attackBonus.push({
            markupValue: 1,
            baseCardObj: currentCard
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
