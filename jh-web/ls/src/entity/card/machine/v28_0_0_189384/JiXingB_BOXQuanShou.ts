import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class JiXingB_BOXQuanShouV28 extends BaseCard {
    name = "极型B-Box拳手"
    ethnicity = ["机械"]
    attack = 5
    life = 10
    graded = 6
    description = "每当你对另一个随从施加磁力时，还会对本随从施加磁力。"

    whenOtherCardMagneticAdd(triggerObj:TriggerObj){

    }
}

