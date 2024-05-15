import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class ZiShiYingLuZhang extends BaseCard {
    name = "机械木马"
    ethnicity = ["机械", "野兽"]
    attack = 4
    life = 4
    graded = 5
    description = "<b>亡语</b>：召唤两个2/2并具有“<b>亡语</b>：召唤一个1/1的迹象马驹”的机械小马。"

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const baseCard = triggerObj.contextObj.sharedCardPool.getByName("JiXieXiaoMa");
        currentPlayer.addCard(new BaseCardObj(baseCard),currentPlayer.findNextCard(currentCard), triggerObj)
        currentPlayer.addCard(new BaseCardObj(baseCard),currentPlayer.findNextCard(currentCard), triggerObj)
    }
}

