import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class PinMingFaJue28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "拼命发掘"
    graded = 2
    spendingGoldCoin = 3
    isSpendLife = true
    descriptionStr(){return "获得1枚铸币。购买本牌会消耗生命值，而非铸币。"}

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.currentGoldCoin ++;
    }
}
