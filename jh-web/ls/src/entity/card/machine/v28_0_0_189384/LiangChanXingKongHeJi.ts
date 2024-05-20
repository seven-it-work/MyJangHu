import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class LiangChanXingKongHeJiV28 extends BaseCard {
    name = "量产型恐吓机"
    ethnicity = ["机械"]
    attack = 3
    life = 2
    graded = 3

    descriptionStr() {
        let txt = '1/1'
        if (this.isGold) {
            txt = '2/2'
        }
        return "<div><b>磁力</b></div><b>亡语</b>：召唤三个${txt}的微型机器人。"
    }

    isMagneticForce = true

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        for (let i = 0; i < 3; i++) {
            const baseCardObj = new BaseCardObj(triggerObj.contextObj.sharedCardPool.getByName("WeiXingJiQiRen"));
            baseCardObj.baseCard.isGold = this.isGold
            currentPlayer.addCard(baseCardObj, currentPlayer.findNextCard(currentCard), triggerObj)
        }
    }
}
