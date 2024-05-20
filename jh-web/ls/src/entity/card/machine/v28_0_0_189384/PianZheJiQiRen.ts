import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class PianZheJiQiRenV28 extends BaseCard {
    name = "偏折机器人"
    ethnicity = ["机械"]
    attack = 3
    life = 2
    graded = 3

    descriptionStr() {
        return `<div><b>圣盾</b></div>在战斗阶段中，每当你召唤一个机械，便获得+${this.isGold ? 4 : 2}攻击力和圣盾。`
    }

    isHolyShield = true;

    whenOtherSummonedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const targetCard = triggerObj.targetCard;
        if (!targetCard) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        if (currentPlayer.isEndRound) {
            if (targetCard.baseCard.ethnicity.includes("机械")) {
                const magnification = this.isGold ? 2 : 1;
                this.isHolyShield = true;
                this.attackBonus.push({
                    baseCardId: currentCard.id,
                    baseCardName: this.name,
                    markupValue: 2 * magnification
                })
            }
        }
    }
}
