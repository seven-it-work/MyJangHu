import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class QiangGu28 extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "强固"
    graded = 1
    spendingGoldCoin = 1
    description = "使一个随从获得+3生命值和嘲讽。"

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
        needSelectCard.baseCard.lifeBonus.push({
            baseCardId: currentCard.id,
            baseCardName: this.name,
            markupValue: 3
        })
        needSelectCard.baseCard.isMockery = true
    }
}
