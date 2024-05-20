import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class CuiMianJiQiRenV28 extends BaseCard {
    name = "催眠机器人"
    ethnicity = ["机械"]
    attack = 2
    life = 2
    graded = 2
    descriptionStr() {
        let txt = '+1/+1'
        if (this.isGold) {
            txt = '+2/+2'
        }
        return `<div><b>磁力</b></div>。在你的回合结束是，获取${txt}。`
    }

    isMagneticForce = true;

    whenEndRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        const currentCard = triggerObj.currentCard;
        if (!currentPlayer) {
            return
        }
        if (!currentCard) {
            return
        }
        const magnification = this.isGold ? 2 : 1;
        currentCard.baseCard.attackBonus.push({
            markupValue: magnification,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
        currentCard.baseCard.lifeBonus.push({
            markupValue: magnification,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
    }
}
