import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class ZhaoMuXinRen28 extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "招募新人"
    graded = 1
    spendingGoldCoin = 2
    description = "随机获取一张等级1的随从牌。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const baseCards = triggerObj.contextObj.sharedCardPool.listByDescriptionCard('', 1);
        if (baseCards.length <= 0) {
            return;
        }
        triggerObj.contextObj.sharedCardPool.cardOut(baseCards[0]);
        currentPlayer.addCardInHand(new BaseCardObj(baseCards[0]), triggerObj.contextObj.sharedCardPool)
    }
}
