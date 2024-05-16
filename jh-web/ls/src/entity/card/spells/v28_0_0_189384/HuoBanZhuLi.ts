import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "伙伴助力"
    graded = 5
    spendingGoldCoin = 3
    description = "发现一个伙伴。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        // todo 伙伴的定义是什么
    }
}
