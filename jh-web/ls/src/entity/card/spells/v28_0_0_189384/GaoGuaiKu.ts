import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class GaoGuaiKu28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "搞怪裤"
    graded = 3
    spendingGoldCoin = 1
    descriptionStr(){return "是一个随从获得+1/+2和嘲讽。如果它已经拥有嘲讽，则移除。"}

    isNeedSelect = true

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const needSelectCard = triggerObj.needSelectCard;
        if (!needSelectCard) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        needSelectCard.baseCard.attackBonus.push({
            baseCardId: currentCard.id,
            baseCardName: this.name,
            markupValue: 1
        })
        needSelectCard.baseCard.lifeBonus.push({
            baseCardId: currentCard.id,
            baseCardName: this.name,
            markupValue: 2
        })
        needSelectCard.baseCard.isMockery = !needSelectCard.baseCard.isMockery
    }
}
