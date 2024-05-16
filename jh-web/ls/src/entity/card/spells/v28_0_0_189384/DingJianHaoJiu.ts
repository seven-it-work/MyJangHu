import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";
import {GRADED_RULES} from "../../../../objs/Taverns";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class DingJianHaoJiu28 extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "顶尖好酒"
    graded = 6
    spendingGoldCoin = 2
    description = "刷新酒馆，使其中变为酒馆法术牌。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const size = GRADED_RULES[currentPlayer.tavern.graded].cardNumber + currentPlayer.tavern.spellSize
        const spellList = triggerObj.contextObj.sharedCardPool.listSpell(currentPlayer.tavern.graded, size).map(card => new BaseCardObj(card));
        const baseCardObjs = Array.from(currentPlayer.tavern.currentCard.values());
        baseCardObjs.forEach(card => currentPlayer.tavern.removeCard(card, triggerObj.contextObj.sharedCardPool))
        // 替换酒馆牌
        spellList.forEach(card => currentPlayer.tavern.currentCard.set(card.id, card))
    }
}
