import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class DianJinZhiChu28 extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "点金之触"
    graded = 5
    spendingGoldCoin = 5
    description = "随机使酒馆总的一个随从变为金色。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const baseCardObjs = Array.from(currentPlayer.tavern.currentCard.values());
        if (baseCardObjs.length <= 0) {
            return;
        }
        randomUtil.pickone(baseCardObjs).baseCard.isGold = true;
    }
}
