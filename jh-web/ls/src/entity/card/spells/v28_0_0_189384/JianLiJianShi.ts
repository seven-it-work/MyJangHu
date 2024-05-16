import BaseCard from "../../../baseCard.ts";
import BaseCardObj from "../../../../objs/BaseCardObj";
import {TriggerObj} from "../../../Trigger";

export default class JianLiJianShi28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "尖利箭矢"
    graded = 1
    spendingGoldCoin = 1
    description = "是一个随从获得+4攻击力。"

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
            markupValue: 4
        })
    }
}
