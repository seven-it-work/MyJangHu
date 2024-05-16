import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class TiTuSiDeZhuangBei extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "提图斯的装备"
    graded = 4
    spendingGoldCoin = 3
    description = "直到下个回合，你的亡语会触发两次。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.deadWordsExtraTriggers++;
        this.tempId = randomUtil.guid()
        currentPlayer.spellAttached.push(this);
    }

    whenStartRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.deadWordsExtraTriggers--;
        currentPlayer.spellAttached = currentPlayer.spellAttached.filter(card => card.tempId !== this.tempId);
    }
}
