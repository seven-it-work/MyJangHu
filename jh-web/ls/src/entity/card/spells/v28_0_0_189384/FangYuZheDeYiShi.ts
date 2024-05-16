import BaseCard from "../../../baseCard.ts";
import BaseCardObj from "../../../../objs/BaseCardObj";
import {TriggerObj} from "../../../Trigger";

export default class FangYuZheDeYiShi28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "防御者的仪式"
    graded = 4
    spendingGoldCoin = 3
    description = "使一个友方随从获得+8/+8和嘲讽。"

    isNeedSelect = true


    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const needSelectCard = triggerObj.needSelectCard;
        if (!needSelectCard) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        needSelectCard.baseCard.attackBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: 8})
        needSelectCard.baseCard.lifeBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: 8})
    }
}
