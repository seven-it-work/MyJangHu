import BaseCard, {baseEthnicity} from "../../../baseCard.ts";
import randomUtil from "../../../../utils/RandomUtils";
import BaseCardObj from "../../../../objs/BaseCardObj";
import {TriggerObj} from "../../../Trigger";

export default class ZhuChuZhenXuan28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "主厨甄选"
    graded = 2
    spendingGoldCoin = 2
    description = "选择一个随从。获取相同类型的另一张随从牌。"

    isNeedSelect = true


    needSelectFilter(baseCardObj: BaseCardObj[]): BaseCardObj[] {
        return baseCardObj.filter(card => baseEthnicity.some(str => card.baseCard.ethnicity.includes(str)));
    }

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return;
        }
        const needSelectCard = triggerObj.needSelectCard;
        if (!needSelectCard) {
            return;
        }
        let baseCards = triggerObj.contextObj.sharedCardPool.listByEthnicity(needSelectCard.baseCard.ethnicity, currentPlayer.tavern.graded, false, true);
        if (baseCards.length <= 0) {
            // 发现完了，只能发现1级
            baseCards = triggerObj.contextObj.sharedCardPool.listByEthnicity(needSelectCard.baseCard.ethnicity, 1);
        }
        const baseCard: BaseCard = randomUtil.pickone(baseCards);
        if (!baseCard) {
            return;
        }
        currentPlayer.addCardInHand(new BaseCardObj(baseCard), triggerObj.contextObj.sharedCardPool)
    }
}
