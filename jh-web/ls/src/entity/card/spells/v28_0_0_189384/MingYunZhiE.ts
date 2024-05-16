import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class MingYunZhiE28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "命运之颚"
    graded = 5
    spendingGoldCoin = 4
    description = "转动尤格-萨隆的命运之轮。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        // todo 这是干啥的
    }
}
