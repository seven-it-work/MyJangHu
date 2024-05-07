import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";

export default class OuMiQiePoHuaiZhe extends BaseCard {
    name = "死神4000型"
    ethnicity = ["机械"]
    attack = 6
    life = 9
    graded = 6
    description = "同时对其攻击相邻的随从造成伤害。"

    whenAttackTrigger(triggerObj: TriggerObj) {
        // todo 如何获取到相邻呢？
    }
}

