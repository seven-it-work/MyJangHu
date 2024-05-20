import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class HeChangYuRenV28 extends BaseCard {
    name = "合唱鱼人"
    ethnicity = ["鱼人"]
    attack = 6
    life = 6
    graded = 6

    descriptionStr() {
        let txt = ''
        if (this.isGold) {
            txt = '双倍'
        }
        return `战斗开始时：获得你手牌中所有随从牌的${txt}属性值。`
    }

    whenStartFightingTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        console.log(`(${currentPlayer.name})的【${this.name}】战斗开始时触发：${this.descriptionStr()}`)
        let magnification = this.isGold ? 2 : 1;
        currentPlayer.handCardList.forEach(card => {
            currentCard.baseCard.attackBonus.push({
                baseCardId: currentCard.id,
                baseCardName: this.name,
                markupValue: card.attack * magnification
            })
            currentCard.baseCard.lifeBonus.push({
                baseCardId: currentCard.id,
                baseCardName: this.name,
                markupValue: card.life * magnification
            })
        })
    }
}
