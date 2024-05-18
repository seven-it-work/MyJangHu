import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class NanChanDeShiShiYuRenV28 extends BaseCard {
    name = "难缠的食尸鱼人"
    ethnicity = ["鱼人"]
    attack = 5
    life = 4
    graded = 6
    descriptionStr(){return "烈毒。复仇（5）：获得复生。"}
    isHighlyToxic = true;
    // 复仇次数，达到清空otherDeadCounter
    otherDeadMaxCounter: number = 5;

    whenOtherDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        if (this.otherDeadCounter >= this.otherDeadMaxCounter) {
            console.log(`(${currentPlayer.name})的【${this.name}】复仇触发：烈毒。复仇（5）：获得复生。`)
            super.otherDeadCounter = 0;
            this.isRebirth = true
        }
    }
}
