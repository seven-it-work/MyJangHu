import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class LieTouZhaoPin28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "猎头招聘"
    graded = 4
    spendingGoldCoin = 3
    description = "发现一张战吼随从牌。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const baseCards = triggerObj.contextObj.sharedCardPool.listByDescriptionCard("战吼", currentPlayer.tavern.graded);
        if (baseCards.length <= 0) {
            return;
        }
        triggerObj.contextObj.sharedCardPool.cardOut(baseCards[0]);
        currentPlayer.addCardInHand(new BaseCardObj(baseCards[0]), triggerObj.contextObj.sharedCardPool)
    }
}
