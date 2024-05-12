import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import randomUtil from "../../../utils/RandomUtils.ts";
import BaseCardObj from "../../../objs/BaseCardObj.ts";

export default class SaGeLaSiDeYongShi extends BaseCard {
    name = "萨格拉斯的勇士"
    ethnicity = ["恶魔"]
    attack = 10
    life = 10
    graded = 7
    description = "酒馆中的随从拥有+10/10。"
    version = ["v28.0.0.189384", "v29.2.0.198037"]

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
