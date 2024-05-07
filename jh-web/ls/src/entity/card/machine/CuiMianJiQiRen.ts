import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";

export default class BaoBaoJiQiRen extends BaseCard {
    name = "催眠机器人"
    ethnicity = ["机械"]
    attack = 2
    life = 2
    graded = 2
    description = "<div><b>磁力</b></div>。在你的回合结束是，获取+1/+1。"
    isMagneticForce = true;

    whenEndRound(triggerObj: TriggerObj) {
        this.life++;
        this.attack++;
    }
}

