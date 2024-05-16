import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class ShenZhongTouZi28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "慎重投资"
    graded = 2
    spendingGoldCoin = 1
    description = "下回合获得2枚举金币。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        this.tempId = randomUtil.guid()
        currentPlayer.spellAttached.push(this)
    }

    whenStartRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.currentGoldCoin += 2;
        // 用完即焚
        currentPlayer.spellAttached = currentPlayer.spellAttached.filter(card => card.tempId !== this.tempId);
    }
}
