import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class JiuGuanBi28 extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "酒馆币"
    graded = 1
    spendingGoldCoin = 1
    description = "获得1枚铸币。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.currentGoldCoin++;
    }
}
