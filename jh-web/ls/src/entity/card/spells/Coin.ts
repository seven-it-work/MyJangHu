import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import BaseCardObj from "../../../objs/BaseCardObj";

export default class Coin extends BaseCard {
    type = '法术'
    isSell = false
    graded = 0
    description = '获得1枚铸币'

    name = "铸币"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.currentGoldCoin += 1;
    }
}
