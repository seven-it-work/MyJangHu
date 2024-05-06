import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";
import randomUtil from "../../utils/RandomUtils";

export default class XiongEDeXieNengYouLong extends BaseCard {
    name = "凶恶的邪能幼龙"
    ethnicity = ["恶魔", "龙"]
    attack = 0
    life = 2
    graded = 4
    description = "战吼：吞食酒馆中的3个随从，获得其属性值。"

    whenCardUsedTrigger(context: ContextObj) {
        for (let i = 0; i < 3; i++) {
            const tavern = context.player.tavern;
            const baseCardObjs = Array.from(tavern.currentCard.values()).filter(card => card.baseCard.type === '随从');
            if (baseCardObjs.length <= 0) {
                return;
            }
            const pick = randomUtil.pickone(baseCardObjs);
            tavern.removeCard(pick, context)
            this.attack += pick.baseCard.attack;
            this.life += pick.baseCard.life;
        }
    }
}
