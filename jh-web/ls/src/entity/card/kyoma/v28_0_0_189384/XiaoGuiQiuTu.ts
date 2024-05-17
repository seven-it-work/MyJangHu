import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj.ts";

export default class XiaoGuiQiuTuV28 extends BaseCard {
    name = "小鬼囚徒"
    ethnicity = ["恶魔"]
    attack = 3
    life = 2
    graded = 1
    description = "<b>嘲讽</b>，<b>亡语</b>：召唤一个1/1的小鬼"
    isMockery = true;
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
        console.log(`(${currentPlayer.name})的【${this.name}】触发：亡语：召唤一个1/1的小鬼。`)
        currentPlayer.addCard(new BaseCardObj(triggerObj.contextObj.sharedCardPool.getByName("XiaoGui")),currentPlayer.findNextCard(currentCard),triggerObj);
    }
}
