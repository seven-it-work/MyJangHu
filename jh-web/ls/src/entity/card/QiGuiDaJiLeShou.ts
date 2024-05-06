import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";
import randomUtil from "../../utils/RandomUtils";
import BaseCardObj from "../../objs/BaseCardObj";

export default class QiGuiDaJiLeShou extends BaseCard {
    name = "奇瑰打击乐手"
    ethnicity = ["恶魔"]
    attack = 4
    life = 4
    graded = 4
    description = "战吼：发现一张恶魔牌，对你的英雄造成等同于其等级的伤害。"

    whenCardUsedTrigger(context: ContextObj) {
        // 只能发现当前等级
        const handCardMap = context.player.handCardMap;
        const baseCards = context.sharedCardPool.listByEthnicity(['恶魔'], context.player.tavern.graded);
        if (baseCards.length > 0) {
            const baseCard = randomUtil.pickone(baseCards);
            context.sharedCardPool.cardOut(baseCard);
            const baseCardObj = new BaseCardObj(baseCard);
            handCardMap.set(baseCardObj.id, baseCardObj)
            context.player.changeLife(-baseCard.graded, context)
        }
    }
}
