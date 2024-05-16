import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class ZiFu28 extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "自负"
    graded = 2
    spendingGoldCoin = 1
    description = "如果你在你下一场战斗中获胜，获得3枚铸币。如果平局获得1枚金币。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        this.tempId = randomUtil.guid()
        currentPlayer.spellAttached.push(this);
    }

    whenEndFightingTrigger(result: "胜利" | "失败" | "平局", triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        if (result === '胜利') {
            currentPlayer.currentGoldCoin += 3;
        }else if (result==='平局'){
            currentPlayer.currentGoldCoin += 1;
        }
        currentPlayer.spellAttached = currentPlayer.spellAttached.filter(card => card.tempId !== this.tempId);
    }
}
