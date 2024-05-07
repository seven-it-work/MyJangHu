import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";
import {TriggerObj} from "../Trigger";

export default class XieNengYuanSu extends BaseCard {
    name = "邪能元素"
    ethnicity = ["恶魔","元素"]
    attack = 3
    life = 1
    graded = 3
    description = "<b>战吼</b>：在本局对战的剩余时间内，酒馆中的随从拥有+1/+1."

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.tavern.tavernLifeBonus++;
        currentPlayer.tavern.tavernAttackBonus++;
    }
}
