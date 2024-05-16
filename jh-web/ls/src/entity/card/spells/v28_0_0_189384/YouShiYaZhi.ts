import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class YouShiYaZhi extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "优势压制"
    graded = 5
    spendingGoldCoin = 3
    description = "战斗开始时：随机将一个敌方随从的生命值变为1。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        this.tempId = randomUtil.guid()
        currentPlayer.spellAttached.push(this);
    }

    whenStartFightingTrigger(triggerObj: TriggerObj) {
        const targetPlayer = triggerObj.targetPlayer;
        if (!targetPlayer) {
            return
        }
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const baseCardObj = randomUtil.pickone(targetPlayer.cardListInFighting);
        baseCardObj.baseCard.life = 1 - baseCardObj.life;
        currentPlayer.spellAttached = currentPlayer.spellAttached.filter(card => card.tempId !== this.tempId);
    }
}
