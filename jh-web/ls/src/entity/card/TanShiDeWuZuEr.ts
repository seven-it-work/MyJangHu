import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";
import randomUtil from "../../utils/RandomUtils";

export default class TanShiDeWuZuEr extends BaseCard {
    name = "贪食的乌祖尔"
    ethnicity = ["恶魔"]
    attack = 4
    life = 6
    graded = 5
    description = "嘲讽。在你使用一张恶魔牌后，吞食酒馆中的一个随从，获取其属性值。"
    isMockery = true;

    whenOtherCardUsedTrigger(targetCard: BaseCard, context: ContextObj) {
        if (targetCard.ethnicity.includes('恶魔')) {
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
