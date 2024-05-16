import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class XiangJiaoGuoPan extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "香蕉果盘"
    graded = 1
    spendingGoldCoin = 1
    description = "使一个随从+2/+2。"

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
        needSelectCard.baseCard.attackBonus.push({
            baseCardId: currentCard.id,
            baseCardName: this.name,
            markupValue: 2
        })
        needSelectCard.baseCard.lifeBonus.push({
            baseCardId: currentCard.id,
            baseCardName: this.name,
            markupValue: 2
        })
    }
}
