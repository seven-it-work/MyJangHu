import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class FuMoLianSuo extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "附魔链索"
    graded = 1
    spendingGoldCoin = 2
    description = "随机偷取酒馆中的一个随从。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const baseCardObjs = Array.from(currentPlayer.tavern.currentCard.values());
        if (baseCardObjs.length <= 0) {
            return;
        }
        currentPlayer.addCardInHand(randomUtil.pickone(baseCardObjs), triggerObj.contextObj.sharedCardPool)
    }
}
