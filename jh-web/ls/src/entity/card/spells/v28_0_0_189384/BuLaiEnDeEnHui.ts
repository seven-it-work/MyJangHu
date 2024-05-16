import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class BuLaiEnDeEnHui28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "布莱恩的恩惠"
    graded = 4
    spendingGoldCoin = 3
    description = "直到下个回合，你的战吼会触发两次。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.battleRoarExtraTriggers++;
    }

    whenEndRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.battleRoarExtraTriggers--;
    }
}
