import BaseCard from "../../baseCard";
import ContextObj from "../../../objs/ContextObj";
import {TriggerObj} from "../../Trigger";
import randomUtil from "../../../utils/RandomUtils";
import BaseCardObj from "../../../objs/BaseCardObj";

export default class BaoBaoJiQiRen extends BaseCard {
    name = "爆爆机器人"
    ethnicity = ["机械"]
    attack = 2
    life = 2
    graded = 2
    description = "<b>亡语</b>：随机对一个敌方随从造成4点伤害。"

    whenDeadTrigger(triggerObj: TriggerObj) {
        const targetPlayer = triggerObj.targetPlayer;
        if (!targetPlayer) {
            return
        }
        const cardListInFighting = targetPlayer.cardListInFighting;
        if (cardListInFighting.length <= 0) {
            return;
        }
        const card = randomUtil.pickone(cardListInFighting)
        card.healthChange(4, triggerObj)
    }
}

