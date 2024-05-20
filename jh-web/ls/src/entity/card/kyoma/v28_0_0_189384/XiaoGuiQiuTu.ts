import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj.ts";

export default class XiaoGuiQiuTuV28 extends BaseCard {
    name = "小鬼囚徒"
    ethnicity = ["恶魔"]
    attack = 3
    life = 2
    graded = 1

    descriptionStr() {
        let txt = '1/1'
        if (this.isGold) {
            txt = '2/2'
        }
        return `<b>嘲讽</b>，<b>亡语</b>：召唤一个${txt}的小鬼。`
    }

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
        const magnification = this.isGold ? 2 : 1;
        const baseCardObj = new BaseCardObj(triggerObj.contextObj.sharedCardPool.getByName("XiaoGui"));
        baseCardObj.baseCard.life = magnification
        baseCardObj.baseCard.attack = magnification
        currentPlayer.addCard(baseCardObj, currentPlayer.findNextCard(currentCard), triggerObj);
    }
}
