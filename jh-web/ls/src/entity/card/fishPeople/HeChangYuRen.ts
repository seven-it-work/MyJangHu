import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";

export default class HeChangYuRen extends BaseCard {
    name = "合唱鱼人"
    ethnicity = ["鱼人"]
    attack = 6
    life = 6
    graded = 6
    description = "战斗开始时：获得你手牌中所有随从牌的属性值。"

    whenStartFightingTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        currentPlayer.handCardList.forEach(card => {
            this.attackBonus.push({
                baseCardId: currentCard.id,
                baseCardName: currentCard.baseCard.name,
                markupValue: card.attack
            })
            this.lifeBonus.push({
                baseCardId: currentCard.id,
                baseCardName: currentCard.baseCard.name,
                markupValue: card.life
            })
        })
    }
}
