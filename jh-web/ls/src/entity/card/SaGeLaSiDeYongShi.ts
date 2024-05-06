import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";

export default class SaGeLaSiDeYongShi extends BaseCard {
    name = "萨格拉斯的勇士"
    ethnicity = ["恶魔"]
    attack = 10
    life = 10
    graded = 7
    description = "酒馆中的随从拥有+10/10。"

    whenCardUsedTrigger(context: ContextObj) {
        context.player.tavern.tavernAttackBonus += 10;
        context.player.tavern.tavernLifeBonus += 10;
    }

    whenSaleCardTrigger(context: ContextObj) {
        context.player.tavern.tavernAttackBonus -= 10;
        context.player.tavern.tavernLifeBonus -= 10;
    }
}
