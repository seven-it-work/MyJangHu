import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";

export default class ShouFengQinJiQiRen extends BaseCard {
    name = "手风琴机器人"
    ethnicity = ["机械"]
    attack = 3
    life = 2
    graded = 3
    description = "<div><b>磁力</b></div>。在你的回合开始时，获取一枚额外铸币。"

    isMagneticForce = true;

    whenStartRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.currentGoldCoin++;
    }
}
