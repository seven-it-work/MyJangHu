import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class JiXingB_BOXQuanShouV28 extends BaseCard {
    name = "极型B-Box拳手"
    ethnicity = ["机械"]
    attack = 5
    life = 10
    graded = 6
    description = "每当你对另一个随从施加磁力时，还会对本随从施加磁力。"

    whenOtherCardMagneticAdd(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const targetCard = triggerObj.targetCard;
        if (!targetCard) {
            return;
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return;
        }
        console.log(`(${currentPlayer.name})的【${this.name}】触发：每当你对另一个随从施加磁力【${targetCard.baseCard.name}】时，还会对本随从施加磁力。`)
        currentCard.baseCard.magneticForceList.push(targetCard.baseCard);
        console.log(`(${currentPlayer.name})的【${this.name}】附加磁力【${targetCard.baseCard.name}】`)
    }
}

