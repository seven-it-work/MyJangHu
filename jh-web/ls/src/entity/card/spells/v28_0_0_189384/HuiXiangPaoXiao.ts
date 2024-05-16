import BaseCard from "../../../baseCard.ts";
import BaseCardObj from "../../../../objs/BaseCardObj";
import {TriggerObj} from "../../../Trigger";

export default class HuiXiangPaoXiao28 extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "回响咆哮"
    graded = 3
    spendingGoldCoin = 2
    description = "使一个友方随从获得“在你的回合结束时，获得+2/+2。"
    isNeedSelect = true

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const needSelectCard = triggerObj.needSelectCard;
        if (!needSelectCard) {
            return
        }
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        // 法术附加能力
        needSelectCard.baseCard.spellAttached.push(currentCard.baseCard)
    }

    whenEndRound(triggerObj: TriggerObj) {
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const targetCard = triggerObj.targetCard;
        if (!targetCard) {
            return
        }
        targetCard.baseCard.attackBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: 2})
        targetCard.baseCard.lifeBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: 2})
    }
}
