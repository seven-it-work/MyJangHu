import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";

export default class XieNengYuanSu extends BaseCard {
    name = "邪能元素"
    ethnicity = ["恶魔","元素"]
    attack = 3
    life = 1
    graded = 3
    description = "战吼：在本局对战的剩余时间内，酒馆中的随从拥有+1/+1."

    whenCardUsedTrigger(context: ContextObj) {
        context.player.tavern.tavernLifeBonus++;
        context.player.tavern.tavernAttackBonus++;
    }
}
