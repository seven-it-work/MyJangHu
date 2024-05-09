import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";
import randomUtil from "../../utils/RandomUtils";
import BaseCardObj from "../../objs/BaseCardObj";
import {TriggerObj} from "../Trigger";

export default class JiXieJiaLaKeSuSi extends BaseCard {
    name = "机械加拉克苏斯"
    ethnicity = ["恶魔", "机械"]
    attack = 3
    life = 15
    graded = 6
    description = "<b>战吼</b>：随机获取一张机械-恶魔牌。"

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
