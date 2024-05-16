import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class ShenShengZengLi28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "神圣赠礼"
    graded = 6
    spendingGoldCoin = 5
    description = "使一个随从获得圣盾。"

    isNeedSelect = true

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const needSelectCard = triggerObj.needSelectCard;
        if (!needSelectCard) {
            return
        }
        needSelectCard.baseCard.isHolyShield= true
    }
}
