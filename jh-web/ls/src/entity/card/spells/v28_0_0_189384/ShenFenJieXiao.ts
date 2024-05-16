import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "身份揭晓"
    graded = 5
    spendingGoldCoin = 3
    description = "发现一个新的英雄技能。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        // todo 还没有整理英雄技能
    }
}
