import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class ChenShuiZheZhiYong28 extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "沉睡者之拥"
    graded = 5
    spendingGoldCoin = 3
    description = "触发一个友方随从的战吼。"
    isNeedSelect=true

    needSelectFilter(baseCardObj: BaseCardObj[]): BaseCardObj[] {
        return baseCardObj.filter(card => card.baseCard.description.includes("战吼"));
    }

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const needSelectCard = triggerObj.needSelectCard;
        if (!needSelectCard) {
            return
        }
        needSelectCard.whenCardUsedTrigger({
            ...triggerObj,
            currentCard: needSelectCard,
        })
    }
}
