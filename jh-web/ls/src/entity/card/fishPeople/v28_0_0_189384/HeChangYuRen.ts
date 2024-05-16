import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class HeChangYuRenV28 extends BaseCard {
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
        console.log(`(${currentPlayer.name})的【${this.name}】触发：战斗开始时：获得你手牌中所有随从牌的属性值。`)
        currentPlayer.handCardList.forEach(card => {
            currentCard.baseCard.attackBonus.push({
                baseCardId: currentCard.id,
                baseCardName: this.name,
                markupValue: card.attack
            })
            currentCard.baseCard.lifeBonus.push({
                baseCardId: currentCard.id,
                baseCardName: this.name,
                markupValue: card.life
            })
        })
    }
}

