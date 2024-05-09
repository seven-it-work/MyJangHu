import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";
import randomUtil from "../../utils/RandomUtils";
import BaseCardObj from "../../objs/BaseCardObj";
import {TriggerObj} from "../Trigger";

export default class QiGuiDaJiLeShou extends BaseCard {
    name = "奇瑰打击乐手"
    ethnicity = ["恶魔"]
    attack = 4
    life = 4
    graded = 4
    description = "<b>战吼</b>：发现一张恶魔牌，对你的英雄造成等同于其等级的伤害。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        // 只能发现当前等级
        const baseCards = triggerObj.contextObj.sharedCardPool.listByEthnicity(['恶魔'], currentPlayer.tavern.graded);
        if (baseCards.length > 0) {
            const baseCard = randomUtil.pickone(baseCards);
            triggerObj.contextObj.sharedCardPool.cardOut(baseCard);
            const baseCardObj = new BaseCardObj(baseCard);
            currentPlayer.addCardInHand(baseCardObj, triggerObj.contextObj.sharedCardPool)
            currentPlayer.changeLife(-baseCard.graded, triggerObj)
        }
    }
}
