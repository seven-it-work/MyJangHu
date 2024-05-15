import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class ManYuChiHouV28 extends BaseCard {
    name = "蛮鱼斥候"
    ethnicity = ["鱼人"]
    attack = 3
    life = 2
    graded = 4
    description = "战吼：如果你控制其他任何鱼人，则发现一张鱼人。"

    /**
     * 发现只会发现当前等级及以下的 而且有数量限制，发现一张随从池就少一张
     */
    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const cardList = currentPlayer.getCardList().filter(card => card.baseCard.ethnicity.includes('鱼人'));
        if (cardList.length <= 0) {
            return;
        }
        let baseCards = triggerObj.contextObj.sharedCardPool.listByEthnicity(['鱼人'], currentPlayer.tavern.graded, false, true);
        if (baseCards.length <= 0) {
            // 发现完了，只能发现1级鱼人
            baseCards = triggerObj.contextObj.sharedCardPool.listByEthnicity(['鱼人'], 1);
        }
        const baseCard = randomUtil.pickone(baseCards);
        if (!baseCard) {
            return;
        }
        triggerObj.contextObj.sharedCardPool.cardOut(baseCard)
        currentPlayer.addCardInHand(new BaseCardObj(baseCard), triggerObj.contextObj.sharedCardPool)
    }
}

