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
        // todo 亡语 要分是在战斗中 还是在回合中
        var baseCard = triggerObj.contextObj.sharedCardPool.getByName("JiXiangMaJu");
        currentPlayer.cardListInFighting.push(...[new BaseCardObj(baseCard), new BaseCardObj(baseCard)])
    }
}

