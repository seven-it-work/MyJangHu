import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj.ts";
import randomUtil from "../../utils/RandomUtils.ts";
import BaseCardObj from "../../objs/BaseCardObj.ts";

export default class XinLingNiMo extends BaseCard {
    name = "心灵泥魔"
    ethnicity = ["恶魔"]
    attack = 3
    life = 2
    graded = 2
    description = "战吼：选择一个友方恶魔，使其吞食酒馆中的一个随从，获取其属性值。"

    whenCardUsedTrigger(context: ContextObj) {
        var tavern = context.player.tavern;
        var baseCardObjs = Array.from(tavern.currentCard.values());
        if (baseCardObjs.length <= 0) {
            return
        }
        var baseCardObj = randomUtil.pickone(baseCardObjs);
        // todo 战吼的选择
        let targetCardObj: BaseCardObj;
        targetCardObj.baseCard.life += baseCardObj.baseCard.life;
        targetCardObj.baseCard.attack += baseCardObj.baseCard.attack;
    }
}
