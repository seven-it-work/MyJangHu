import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils.ts";
import BaseCardObj from "../../../../objs/BaseCardObj.ts";

export default class JiXieJiaLaKeSuSiV28 extends BaseCard {
    name = "机械加拉克苏斯"
    ethnicity = ["恶魔", "机械"]
    attack = 3
    life = 15
    graded = 6
    descriptionStr(){return "<b>战吼</b>：随机获取一张机械-恶魔牌。"}
    isWarRoars = true
    /**
     * 这个版本只有一个机械-恶魔牌，这样就能无限循环获取，导致不公平bug
     */
    isSell = false

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const baseCards = triggerObj.contextObj.sharedCardPool.listByEthnicity(['恶魔', '机械'], currentPlayer.tavern.graded, true);
        if (baseCards.length > 0) {
            const baseCard = randomUtil.pickone(baseCards);
            triggerObj.contextObj.sharedCardPool.cardOut(baseCard);
            const baseCardObj = new BaseCardObj(baseCard);
            currentPlayer.addCardInHand(baseCardObj, triggerObj.contextObj.sharedCardPool)
        }
    }
}
