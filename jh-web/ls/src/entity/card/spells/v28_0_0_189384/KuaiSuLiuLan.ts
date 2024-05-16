import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class KuaiSuLiuLan28 extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "快速浏览"
    graded = 2
    spendingGoldCoin = 2
    description = "你下三次刷新酒馆的消耗为(0)枚铸币。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.freeRefreshTimes = 3;
    }
}
