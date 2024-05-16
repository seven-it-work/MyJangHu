import BaseCard, {baseEthnicity} from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";
import randomUtils from "../../../../utils/RandomUtils";

export default class LuanFaDeChaJu28 extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "乱发的茶具"
    graded = 4
    spendingGoldCoin = 3
    description = "使每个类型的各一个友方随从获得+3/+3。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        baseEthnicity.forEach(str => {
            const baseCardObjs = currentPlayer.cardList.filter(card => card.baseCard.ethnicity.includes(str));
            if (baseCardObjs.length > 0) {
                randomUtils.pickone(baseCardObjs).baseCard.attackBonus.push({
                    baseCardId: currentCard.id,
                    baseCardName: this.name,
                    markupValue: 3
                })
                randomUtils.pickone(baseCardObjs).baseCard.lifeBonus.push({
                    baseCardId: currentCard.id,
                    baseCardName: this.name,
                    markupValue: 3
                })
            }
        })

    }
}
