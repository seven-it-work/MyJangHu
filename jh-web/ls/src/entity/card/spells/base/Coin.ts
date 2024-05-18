import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger.ts";
import BaseCardObj from "../../../../objs/BaseCardObj.ts";

export default class Coin extends BaseCard {
    type = '法术'
    isSell = false
    graded = 0
    descriptionStr(){return '获得1枚铸币'}

    name = "铸币"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.currentGoldCoin += 1;
    }
}
