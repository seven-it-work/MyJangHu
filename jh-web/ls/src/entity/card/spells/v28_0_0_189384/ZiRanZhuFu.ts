import BaseCard, {baseEthnicity} from "../../../baseCard.ts";
import BaseCardObj from "../../../../objs/BaseCardObj";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "自然祝福"
    graded = 3
    spendingGoldCoin = 3
    description = "选择一个随从，使所有该类型的随从获得+3/+2。"

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
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return;
        }
        // 这里酒馆的随从也要加
        [...currentPlayer.cardList, ...Array.from(currentPlayer.tavern.currentCard.values())].filter(card => card.baseCard.ethnicity.some(str => needSelectCard.baseCard.ethnicity.includes(str))).forEach(card => {
            card.baseCard.attackBonus.push({
                baseCardId: currentCard.id,
                baseCardName: this.name,
                markupValue: 3
            })
            card.baseCard.lifeBonus.push({
                baseCardId: currentCard.id,
                baseCardName: this.name,
                markupValue: 2
            })
        })
    }
}
