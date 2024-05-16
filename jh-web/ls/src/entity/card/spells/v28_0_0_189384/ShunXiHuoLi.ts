import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class ShunXiHuoLi extends BaseCard {
    type = '酒馆法术'
    ethnicity = ['酒馆']
    name = "瞬息活力"
    graded = 3
    spendingGoldCoin = 1
    description = "直到小个回合，使一个随从获得+5/+5。"
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
        this.tempId = needSelectCard.id;
        needSelectCard.baseCard.attackBonus.push({baseCardId: this.tempId, baseCardName: this.name, markupValue: 5})
        needSelectCard.baseCard.lifeBonus.push({baseCardId: this.tempId, baseCardName: this.name, markupValue: 5})
        currentPlayer.spellAttached.push(this);
    }

    whenStartRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        [...Array.from(currentPlayer.tavern.currentCard.values()), ...currentPlayer.cardList, ...Array.from(currentPlayer.handCardList.values())].filter(card => {
            return card.id === this.tempId
        }).forEach(card => {
            card.baseCard.attackBonus = card.baseCard.attackBonus.filter(bonus => bonus.baseCardId !== card.id);
            card.baseCard.lifeBonus = card.baseCard.lifeBonus.filter(bonus => bonus.baseCardId !== card.id);
        })
        currentPlayer.spellAttached = currentPlayer.spellAttached.filter(card => card.tempId !== this.tempId);
    }
}
