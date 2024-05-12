import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";
import XiaoGui from "./XiaoGui";
import BaseCardObj from "../../objs/BaseCardObj";
import {TriggerObj} from "../Trigger";

export default class XiaoGuiQiuTu extends BaseCard {
    name = "小鬼囚徒"
    ethnicity = ["恶魔"]
    attack = 3
    life = 2
    graded = 1
    description = "<b>嘲讽</b>，<b>亡语</b>：召唤一个1/1的小鬼"
    isMockery = true;

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        currentPlayer.addCard(new BaseCardObj(triggerObj.contextObj.sharedCardPool.getByName("XiaoGui")),currentPlayer.findNextCard(currentCard),triggerObj);
    }
}
