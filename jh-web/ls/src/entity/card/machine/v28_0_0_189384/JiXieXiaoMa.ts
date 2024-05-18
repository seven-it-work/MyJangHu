import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class JiXieXiaoMaV28 extends BaseCard {
    name = "机械小马"
    ethnicity = ["机械", "野兽"]
    attack = 2
    life = 2
    graded = 1
    descriptionStr(){return "<b>亡语</b>：召唤一个1/1的迹象马驹。"}
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
        console.log(`(${currentPlayer.name})的【${this.name}】的亡语触发：召唤一个1/1的迹象马驹。`)
        currentPlayer.addCard(new BaseCardObj(baseCard), currentPlayer.findNextCard(currentCard), triggerObj)
    }
}
