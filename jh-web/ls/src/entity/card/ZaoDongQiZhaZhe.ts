import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj.ts";
import randomUtil from "../../utils/RandomUtils.ts";

export default class ZaoDongQiZhaZhe extends BaseCard {
    name = "躁动欺诈者"
    ethnicity = ["恶魔"]
    attack = 2
    life = 3
    graded = 2
    description = "亡语：使另一个友方随从获得本随从的生命值上限。"

    whenDeadTrigger(contextObj: ContextObj) {
        const baseCardObjs = Array.from(contextObj.player.cardListInFighting.values());
        if (baseCardObjs.length <= 0) {
            return
        }
        const baseCardObj = randomUtil.pickone(baseCardObjs);
        baseCardObj.baseCard.life += this.life;
    }
}
