import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils.ts";
import BaseCardObj from "../../../../objs/BaseCardObj.ts";

export default class QiGuiDaJiLeShouV28 extends BaseCard {
    name = "奇瑰打击乐手"
    ethnicity = ["恶魔"]
    attack = 4
    life = 4
    graded = 4
    descriptionStr(){return ""}

    descriptionStr() {
        let txt = '一张'
        if (this.isGold) {
            txt = '2张'
        }
        return `<b>战吼</b>：发现${txt}恶魔牌，对你的英雄造成等同于其等级的伤害。`
    }
    isWarRoars=true

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        // 只能发现当前等级
        const baseCards = triggerObj.contextObj.sharedCardPool.listByEthnicity(['恶魔'], currentPlayer.tavern.graded);
        if (baseCards.length > 0) {
            const magnification = this.isGold ? 2 : 1;
            for (let i = 0; i < magnification; i++) {
                const baseCard = randomUtil.pickone(baseCards);
                triggerObj.contextObj.sharedCardPool.cardOut(baseCard);
                const baseCardObj = new BaseCardObj(baseCard);
                currentPlayer.addCardInHand(baseCardObj, triggerObj.contextObj.sharedCardPool)
                currentPlayer.changeLife(-baseCard.graded, triggerObj)
            }
        }
    }
}
