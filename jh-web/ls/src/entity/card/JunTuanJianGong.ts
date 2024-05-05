import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj.ts";

export default class JunTuanJianGong extends BaseCard {
    name = "军团监工"
    ethnicity = ["恶魔"]
    attack = 4
    life = 2
    graded = 3
    description = "酒馆中的随从用于+2/+1"


    whenCardUsedTrigger(context: ContextObj) {
        context.player.tavern.tavernAttackBonus += 2;
        context.player.tavern.tavernLifeBonus += 1;
    }

    whenSaleCardTrigger(context: ContextObj) {
        context.player.tavern.tavernAttackBonus -= 2;
        context.player.tavern.tavernLifeBonus -= 1;
    }
}
