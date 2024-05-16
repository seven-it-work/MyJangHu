import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";
import {GRADED_RULES} from "../../../../objs/Taverns";
import randomUtil from "../../../../utils/RandomUtils";

export default class extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "哈缪尔遗失的法杖"
    graded = 6
    spendingGoldCoin = 2
    description = "刷新酒馆，使其中的牌变为该类型的随从。"

    isNeedSelect = true

    needSelectFilter(baseCardObj: BaseCardObj[]): BaseCardObj[] {
        return super.needSelectFilter(baseCardObj).filter(card => card.baseCard.ethnicity.length > 0);
    }

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const needSelectCard = triggerObj.needSelectCard;
        if (!needSelectCard) {
            return
        }
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        // 刷新全是同类型
        const size = GRADED_RULES[currentPlayer.tavern.graded].cardNumber
        const baseCards = triggerObj.contextObj.sharedCardPool.listByEthnicity(needSelectCard.baseCard.ethnicity, currentPlayer.tavern.graded, false, true);
        const list = randomUtil.pick(baseCards, size);
        const spellList = triggerObj.contextObj.sharedCardPool.listSpell(currentPlayer.tavern.graded, currentPlayer.tavern.spellSize).map(card => new BaseCardObj(card));
        const baseCardObjs = Array.from(currentPlayer.tavern.currentCard.values());
        baseCardObjs.forEach(card => currentPlayer.tavern.removeCard(card, triggerObj.contextObj.sharedCardPool))
        // 替换酒馆牌
        list.forEach(card => currentPlayer.tavern.currentCard.set(card.id, card))
        spellList.forEach(card => currentPlayer.tavern.currentCard.set(card.id, card))
    }
}
