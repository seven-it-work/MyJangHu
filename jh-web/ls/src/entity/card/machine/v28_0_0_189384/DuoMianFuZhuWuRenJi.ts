import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class DuoMianFuZhuWuRenJiV28 extends BaseCard {
    name = "多面辅助无人机"
    ethnicity = ["机械"]
    attack = 6
    life = 7
    graded = 5
    descriptionStr() {
        let txt = '+1/+1'
        if (this.isGold) {
            txt = '+2/+2'
        }
        return `在你的回合结束时，你的随从每拥有一个磁力效果，使其获取${txt}。`
    }
    whenEndRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const magnification = this.isGold ? 2 : 1;
        currentPlayer.cardList.filter(card => card.baseCard.magneticForceList.length > 0).forEach(card => {
            card.baseCard.magneticForceList.forEach(() => {
                card.baseCard.attackBonus.push({
                    markupValue: magnification,
                    baseCardName: this.name,
                    baseCardId: currentCard.id,
                })
                card.baseCard.lifeBonus.push({
                    markupValue: magnification,
                    baseCardName: this.name,
                    baseCardId: currentCard.id,
                })
            })
        })
    }
}
