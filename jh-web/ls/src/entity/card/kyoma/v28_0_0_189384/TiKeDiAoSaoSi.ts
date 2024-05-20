import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class TiKeDiAoSaoSiV28 extends BaseCard {
    name = "提克迪奥扫斯"
    ethnicity = ["恶魔"]
    attack = 4
    life = 4
    graded = 5
    descriptionStr() {
        let txt = '+1/+1'
        if (this.isGold) {
            txt = '+2/+2'
        }
        return `在你的英雄受到伤害后，使你的其他恶魔获得${txt}。`
    }

    whenPlayerInjuries(injuring: number, triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        if (!currentPlayer.isEndRound) {
            const magnification = this.isGold ? 2 : 1;
            currentPlayer.cardList.filter(card => card.id !== this.tempId).forEach(card => {
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
        }
    }
}
