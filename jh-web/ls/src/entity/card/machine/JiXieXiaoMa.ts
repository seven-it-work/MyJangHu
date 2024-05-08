import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import BaseCardObj from "../../../objs/BaseCardObj";

export default class JiXieXiaoMa extends BaseCard {
    name = "机械小马"
    ethnicity = ["机械", "野兽"]
    attack = 2
    life = 2
    graded = 1
    description = "<b>亡语</b>：召唤一个1/1的迹象马驹"
    isSell = false

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const baseCard = triggerObj.contextObj.sharedCardPool.getByName("JiXiangMaJu");
        currentPlayer.addCard(new BaseCardObj(baseCard),triggerObj)
        currentPlayer.addCard(new BaseCardObj(baseCard),triggerObj)
    }
}

