import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class DuoMianFuZhuWuRenJiV28 extends BaseCard {
    name = "多面辅助无人机"
    ethnicity = ["机械"]
    attack = 6
    life = 7
    graded = 5
    description = "在你的回合结束时，你的随从每拥有一个磁力效果，使其获取+1/+1。"

    whenEndRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        currentPlayer.cardList.filter(card => card.baseCard.magneticForceList.length > 0).forEach(card => {
            card.baseCard.magneticForceList.forEach(() => {
                card.baseCard.attackBonus.push({
                    markupValue: 1,
                    baseCardName: currentCard.baseCard.name,
                    baseCardId: currentCard.id,
                })
                card.baseCard.lifeBonus.push({
                    markupValue: 1,
                    baseCardName: currentCard.baseCard.name,
                    baseCardId: currentCard.id,
                })
            })
        })
    }
}

