import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class AiZeLiTeQiangHua28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "艾泽里特强化"
    graded = 6
    spendingGoldCoin = 4
    descriptionStr(){return "使你的所有随从获得+4/+4。"}

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
            card.baseCard.attackBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: 4})
            card.baseCard.lifeBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: 4})
        })
    }
}
