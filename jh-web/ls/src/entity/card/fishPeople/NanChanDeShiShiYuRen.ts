import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";

export default class NanChanDeShiShiYuRen extends BaseCard {
    name = "难缠的食尸鱼人"
    ethnicity = ["鱼人"]
    attack = 5
    life = 4
    graded = 6
    description = "烈毒。复仇（5）：获得复生。"
    isHighlyToxic = true;
    // 复仇计数器
    otherDeadCounter: number = 5;
    // 复仇次数，达到清空otherDeadCounter
    otherDeadMaxCounter: number = 0;

    whenOtherDeadTrigger(triggerObj: TriggerObj) {
        this.otherDeadMaxCounter++;
        if (this.otherDeadMaxCounter >= this.otherDeadCounter) {
            this.otherDeadMaxCounter = 0;
            this.isRebirth = true
        }
    }
}

