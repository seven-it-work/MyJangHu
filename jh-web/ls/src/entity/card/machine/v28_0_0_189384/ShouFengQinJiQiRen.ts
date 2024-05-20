import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class ShouFengQinJiQiRenV28 extends BaseCard {
    name = "手风琴机器人"
    ethnicity = ["机械"]
    attack = 3
    life = 2
    graded = 3

    descriptionStr() {
        let txt = '一枚'
        if (this.isGold) {
            txt = '2枚'
        }
        return `<div><b>磁力</b></div>。在你的回合开始时，获取额外${txt}铸币。`
    }

    isMagneticForce = true;

    whenStartRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.currentGoldCoin += this.isGold ? 2 : 1;
    }
}
