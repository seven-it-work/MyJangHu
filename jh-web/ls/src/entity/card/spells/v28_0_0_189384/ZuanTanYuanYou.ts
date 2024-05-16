import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class ZuanTanYuanYou28 extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "钻探原油"
    graded = 2
    spendingGoldCoin = 3
    description = "你的铸币上限提高1枚。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.maxGoldCoinBonus++;
    }
}
