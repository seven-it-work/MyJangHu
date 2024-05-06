import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";
import randomUtil from "../../utils/RandomUtils";
import BaseCardObj from "../../objs/BaseCardObj";

export default class JiXieJiaLaKeSuSi extends BaseCard {
    name = "机械加拉克苏斯"
    ethnicity = ["恶魔", "机械"]
    attack = 3
    life = 15
    graded = 6
    description = "战吼：随机获取一张机械-恶魔牌。"

    whenCardUsedTrigger(context: ContextObj) {
        const handCardMap = context.player.handCardMap;
        const baseCards = context.sharedCardPool.listByEthnicity(['恶魔', '机械'], context.player.tavern.graded, true);
        if (baseCards.length > 0) {
            const baseCard = randomUtil.pickone(baseCards);
            context.sharedCardPool.cardOut(baseCard);
            const baseCardObj = new BaseCardObj(baseCard);
            handCardMap.set(baseCardObj.id, baseCardObj)
        }
    }
}
