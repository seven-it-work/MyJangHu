import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class HuJiaChuBei28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "护甲储备"
    graded = 5
    spendingGoldCoin = 2
    descriptionStr(){return "将你的护甲值变为5点。"}

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.currentArmor = 5
    }
}
