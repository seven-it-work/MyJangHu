import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class JiXieMuMaV28 extends BaseCard {
    name = "机械木马"
    ethnicity = ["机械", "野兽"]
    attack = 4
    life = 4
    graded = 5

    descriptionStr() {
        let txt1 = '2/2'
        let txt2 = '1/1'
        if (this.isGold) {
            txt1 = '4/4'
            txt2 = '2/2'
        }
        return `<b>亡语</b>：召唤两个${txt1}并具有“<b>亡语</b>：召唤一个${txt2}的迹象马驹”的机械小马。`
    }

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
        const baseCard = triggerObj.contextObj.sharedCardPool.getByName("JiXieXiaoMa");
        baseCard.isGold = this.isGold
        currentPlayer.addCard(new BaseCardObj(baseCard), currentPlayer.findNextCard(currentCard), triggerObj)
        currentPlayer.addCard(new BaseCardObj(baseCard), currentPlayer.findNextCard(currentCard), triggerObj)
    }
}
