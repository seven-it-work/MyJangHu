import BaseCard, {baseEthnicity} from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import {groupBy} from "lodash";
import randomUtil from "../../../../utils/RandomUtils";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class WeiMianWangYuanJing28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "位面望远镜"
    graded = 4
    spendingGoldCoin = 4
    descriptionStr(){return "发现一个你的多数随从的类型随从。"}

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const ethnicitySize = new Map<string, number>();
        currentPlayer.cardList.forEach(card => {
            card.baseCard.ethnicity.forEach(str => {
                const number = ethnicitySize.get(str) || 0;
                ethnicitySize.set(str, number + 1)
            })
        })
        let size = 0;
        let ethnicity = []
        ethnicitySize.forEach((v, k) => {
            if (v > size) {
                size = v
                ethnicity = [k]
            } else if (v === size) {
                ethnicity.push(k)
            }
        })
        const baseCards = triggerObj.contextObj.sharedCardPool.listByEthnicity([randomUtil.pickone(ethnicity)], currentPlayer.tavern.graded, false, true);
        if (baseCards.length <= 0) {
            return;
        }
        const baseCard = randomUtil.pickone(baseCards);
        triggerObj.contextObj.sharedCardPool.cardOut(baseCard)
        currentPlayer.addCardInHand(new BaseCardObj(baseCard), triggerObj.contextObj.sharedCardPool)
    }
}
