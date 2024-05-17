import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class CuiMianJiQiRenV28 extends BaseCard {
    name = "催眠机器人"
    ethnicity = ["机械"]
    attack = 2
    life = 2
    graded = 2
    description = "<div><b>磁力</b></div>。在你的回合结束是，获取+1/+1。"
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
        console.log(`(${currentPlayer.name})的【${this.name}】触发：在你的回合结束是，获取+1/+1。`)
        currentCard.baseCard.attackBonus.push({
            markupValue: 1,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
        currentCard.baseCard.lifeBonus.push({
            markupValue: 1,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
    }
}

