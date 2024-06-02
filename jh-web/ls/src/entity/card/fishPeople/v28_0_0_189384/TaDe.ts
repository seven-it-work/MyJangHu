import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class TaDeV28 extends BaseCard {
    name = "塔德"
    ethnicity = ["鱼人"]
    attack = 2
    life = 2
    graded = 2

    descriptionStr() {
        let txt = '一张'
        if (this.isGold) {
            txt = '2张'
        }
        return `当你出售本随从时，随机获取${txt}鱼人牌。`
    }

    /**
     * 只会获得当前等级的牌
     * @param triggerObj
     */
    whenSaleCardTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
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
            currentPlayer.addCardInHand(new BaseCardObj(baseCard), triggerObj.contextObj.sharedCardPool)
        }
    }

}
