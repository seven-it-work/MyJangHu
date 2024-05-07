import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";
import {TriggerObj} from "../Trigger";

export default class YiJiaoTuSiSeLa extends BaseCard {
    name = "异教徒斯瑟拉"
    accompanyingRace = ["恶魔"]
    attack = 8
    life = 5
    graded = 6
    description = "潜行。<b>亡语</b>：召唤你在本场战斗中死亡的第一个恶魔，保留其额外效果。"
    isSneak = true;
    isSneaking = true;

    whenDeadTrigger(triggerObj: TriggerObj) {
        var currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        var baseCardObjs = currentPlayer.deadCardListInFighting.filter(card => card.baseCard.ethnicity.includes("恶魔"));
        if (baseCardObjs.length <= 0) {
            return;
        }
        currentPlayer.cardListInFighting.push(baseCardObjs[0]);
    }
}
