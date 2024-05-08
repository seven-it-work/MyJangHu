import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";

export default class KanGeErDeXueTu extends BaseCard {
    name = "坎格尔的学徒"
    ethnicity = ["中立"]
    accompanyingRace = ["机械"]
    attack = 3
    life = 6
    graded = 5
    description = "<b>亡语</b>：召唤你本场战斗中最先死亡的2个机械。"

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const baseCardObjs = currentPlayer.deadCardListInFighting.filter(card => card.baseCard.ethnicity.includes('机械'));
        if (baseCardObjs[0]) {
            currentPlayer.addCard(baseCardObjs[0].getOriginalVersion(triggerObj.contextObj.sharedCardPool),triggerObj)
        }
        if (baseCardObjs[1]) {
            currentPlayer.addCard(baseCardObjs[1].getOriginalVersion(triggerObj.contextObj.sharedCardPool),triggerObj)
        }
    }
}

