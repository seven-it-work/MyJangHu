import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class WanMeiXingXiang28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "完美形象"
    graded = 6
    spendingGoldCoin = 2
    descriptionStr(){return "将一个随从的属性值变为20/20。"}

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
            markupValue: 20 - needSelectCard.attack
        })
        needSelectCard.baseCard.lifeBonus.push({
            baseCardId: currentCard.id,
            baseCardName: this.name,
            markupValue: 20 - needSelectCard.life
        })
    }
}
