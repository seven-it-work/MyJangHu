import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class ChenShuiZheZhiYong28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "沉睡者之拥"
    graded = 5
    spendingGoldCoin = 3
    descriptionStr(){return "触发一个友方随从的战吼。"}
    isNeedSelect=true

    needSelectFilter(baseCardObj: BaseCardObj[]): BaseCardObj[] {
        return baseCardObj.filter(card => card.location === '战场').filter(card => card.baseCard.isWarRoars);
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
