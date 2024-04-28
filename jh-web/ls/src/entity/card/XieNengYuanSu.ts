import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";

export default class XieNengYuanSu extends BaseCard {
    name = "邪能元素"
    ethnicity = ["恶魔"]
    attack = 3
    life = 1
    graded = 3
    description = "在本局"

    whenCardUsedTrigger(context:ContextObj){
        context.player.tavernLifeBonus++;
        context.player.tavernAttackBonus++;
    }
}
