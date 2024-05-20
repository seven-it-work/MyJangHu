import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class JiXieXiaoMaV28 extends BaseCard {
    name = "机械小马"
    ethnicity = ["机械", "野兽"]
    attack = 2
    life = 2
    graded = 1

    descriptionStr() {
        let txt = '1/1'
        if (this.isGold) {
            txt = '2/2'
        }
        return `<b>亡语</b>：召唤一个${txt}的迹象马驹。`
    }

    isSell = false
    isDeadLanguage = true

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const baseCard = triggerObj.contextObj.sharedCardPool.getByName("JiXiangMaJu");
        baseCard.isGold = this.isGold
        currentPlayer.addCard(new BaseCardObj(baseCard), currentPlayer.findNextCard(currentCard), triggerObj)
    }
}
