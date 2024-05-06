import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";
import randomUtil from "../../utils/RandomUtils";

export default class JiEDeFuMo extends BaseCard {
    name = "饥饿的蝠魔"
    ethnicity = ["恶魔"]
    attack = 8
    life = 5
    graded = 6
    description = "在你的回合结束时，你的恶魔各吞食酒馆中的一个随从，获取其属性值。"

    whenEndRound(context: ContextObj) {
        const tavern = context.player.tavern;
        const currentCard = tavern.currentCard;
        if (currentCard.size <= 0) {
            return;
        }
        context.player.cardList.filter(item => {
            return item.baseCard.ethnicity.includes("恶魔")
        }).forEach(item => {
            const baseCardObjs = Array.from(tavern.currentCard.values()).filter(card => card.baseCard.type === '随从');
            if (baseCardObjs.length <= 0) {
                return;
            }
            const pick = randomUtil.pickone(baseCardObjs);
            tavern.removeCard(pick, context)
            item.baseCard.attack += pick.baseCard.attack;
            item.baseCard.life += pick.baseCard.life;
        })
    }
}
