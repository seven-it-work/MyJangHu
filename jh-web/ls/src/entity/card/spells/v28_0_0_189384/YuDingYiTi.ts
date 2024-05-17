import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class YuDingYiTi28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "预定遗体"
    graded = 4
    spendingGoldCoin = 3
    description = "发现一张亡语随从牌。"


    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const baseCards = triggerObj.contextObj.sharedCardPool.listByDeadLanguageCard( currentPlayer.tavern.graded);
        if (baseCards.length <= 0) {
            return;
        }
        triggerObj.contextObj.sharedCardPool.cardOut(baseCards[0]);
        currentPlayer.addCardInHand(new BaseCardObj(baseCards[0]), triggerObj.contextObj.sharedCardPool)
    }
}
