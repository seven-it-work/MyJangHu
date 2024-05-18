import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class HuoBanZhuLi28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "伙伴助力"
    graded = 5
    spendingGoldCoin = 3
    descriptionStr(){return "发现一个伙伴。"}

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        // todo 伙伴的定义是什么
    }
}
