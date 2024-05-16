import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class YuanShiZhiZhang28 extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "原始之杖"
    graded = 4
    spendingGoldCoin = 3
    description = "在本回合中，你的回合结束效果会生效两次。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.endRoundExtraTriggers++;
        this.tempId = randomUtil.guid()
        currentPlayer.spellAttached.push(this);
    }

    whenStartRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.endRoundExtraTriggers--;
        currentPlayer.spellAttached = currentPlayer.spellAttached.filter(card => card.tempId !== this.tempId);
    }
}
