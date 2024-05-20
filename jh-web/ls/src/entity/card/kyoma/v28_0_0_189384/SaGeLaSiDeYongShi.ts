import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class SaGeLaSiDeYongShiV28 extends BaseCard {
    name = "萨格拉斯的勇士"
    ethnicity = ["恶魔"]
    attack = 10
    life = 10
    graded = 7

    descriptionStr() {
        let txt = '+10/10'
        if (this.isGold) {
            txt = '+20/20'
        }
        return `酒馆中的随从拥有${txt}。`
    }

    version = ["v28.0.0.189384", "v29.2.0.198037"]

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        const currentCard = triggerObj.currentCard;
        if (!currentPlayer) {
            return
        }
        if (!currentCard) {
            return
        }
        const magnification = this.isGold ? 2 : 1;
        currentPlayer.tavern.attackBonus.push({
            markupValue: 10 * magnification,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
        currentPlayer.tavern.attackBonus.push({
            markupValue: 10 * magnification,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
    }

    whenSaleCardTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        const currentCard = triggerObj.currentCard;
        if (!currentPlayer) {
            return
        }
        if (!currentCard) {
            return
        }
        currentPlayer.tavern.removeBonus(currentCard, 'attack')
        currentPlayer.tavern.removeBonus(currentCard, 'life')
    }
}
