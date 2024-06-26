import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class LieYanFeiYuV28 extends BaseCard {
    name = "烈焰飞鱼"
    ethnicity = ["鱼人", '龙']
    attack = 1
    life = 3
    graded = 2

    descriptionStr() {
        let txt = '+1/+1'
        if (this.isGold) {
            txt = '+2/+2'
        }
        return `在你使用一张战吼随从牌后，获得${txt}。`
    }

    whenOtherCardUsedTrigger(triggerObj: TriggerObj) {
        const targetCard = triggerObj.targetCard;
        if (!targetCard) {
            return
        }
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        let magnification = this.isGold ? 2 : 1;
        if (targetCard.baseCard.isWarRoars) {
            console.log(`(${currentPlayer.name})的【${this.name}】检测到战吼：在你使用一张战吼随从牌后，获得+1/+1。`)
            currentCard.baseCard.attackBonus.push({
                baseCardId: currentCard.id,
                baseCardName: this.name,
                markupValue: magnification
            })
            currentCard.baseCard.lifeBonus.push({
                baseCardId: currentCard.id,
                baseCardName: this.name,
                markupValue: magnification
            })
        }
    }

}
