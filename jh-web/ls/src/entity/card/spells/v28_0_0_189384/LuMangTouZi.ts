import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class LuMangTouZi28 extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "鲁莽投资"
    graded = 3
    spendingGoldCoin = 1
    description = "获得3枚铸币。下个回合，失去2枚铸币。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.currentGoldCoin += 3;
    }

    whenStartRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.currentGoldCoin -= 2;
    }
}
