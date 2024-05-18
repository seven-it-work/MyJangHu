import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class ShenFenJieXiao28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "身份揭晓"
    graded = 5
    spendingGoldCoin = 3
    descriptionStr(){return "发现一个新的英雄技能。"}

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        // todo 还没有整理英雄技能
    }
}
