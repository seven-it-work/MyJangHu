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

    descriptionStr() {
        let txt = '一张'
        if (this.isGold) {
            txt = '2张'
        }
        return `战吼：如果你控制其他任何鱼人，则发现${txt}鱼人。`
    }

    isWarRoars = true

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
        baseCards = randomUtil.pick(baseCards, 2);
        if (baseCards.length <= 0) {
            return;
        }
        let magnification = this.isGold ? 2 : 1;
        for (let i = 0; i < magnification; i++) {
            const baseCard = baseCards[i];
            if (!baseCard) {
                return;
            }
            triggerObj.contextObj.sharedCardPool.cardOut(baseCard)
            currentPlayer.addCardInHand(new BaseCardObj(baseCard), triggerObj.contextObj.sharedCardPool)
        }
    }
}
