import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class YiWaiZhiGuo extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "意外之果"
    graded = 1
    spendingGoldCoin = 1
    description = "使酒馆中的随从获得+1/+3。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        currentPlayer.tavern.currentCard.forEach(value => {
            value.baseCard.attackBonus.push({
                baseCardId: currentCard.id,
                baseCardName: this.name,
                markupValue: 1
            })
            value.baseCard.lifeBonus.push({
                baseCardId: currentCard.id,
                baseCardName: this.name,
                markupValue: 3
            })
        })
    }
}
