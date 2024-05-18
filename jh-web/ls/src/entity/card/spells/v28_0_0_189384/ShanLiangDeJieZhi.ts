import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class ShanLiangDeJieZhi28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "闪亮的戒指"
    graded = 3
    spendingGoldCoin = 2
    descriptionStr(){return "使你的所有随从获得+1/+1。"}

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        currentPlayer.cardList.forEach(card => {
            card.baseCard.attackBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: 1})
            card.baseCard.lifeBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: 1})
        })
    }
}
