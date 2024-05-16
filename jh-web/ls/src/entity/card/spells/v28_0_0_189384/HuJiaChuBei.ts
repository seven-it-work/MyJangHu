import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class HuJiaChuBei28 extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "护甲储备"
    graded = 5
    spendingGoldCoin = 2
    description = "将你的护甲值变为5点。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.currentArmor = 5
    }
}
