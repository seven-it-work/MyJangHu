import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import RandomUtils from "../../../../utils/RandomUtils";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class BaoFeiFeiPinHuiShouJiV28 extends BaseCard {
    name = "报废废品回收机"
    ethnicity = ["机械"]
    attack = 4
    life = 7
    graded = 4
    roundCounter: number = 2;
    description = `每2个回合，在回合结束时，随机获取一张磁力机械牌。（还剩${this.roundCounter}个回合）`
    preRoundNumber: number = -1;

    whenEndRound(triggerObj: TriggerObj) {
        this.roundCounter = 2 - (triggerObj.contextObj.currentRound - this.preRoundNumber)
        if (this.roundCounter <= 0 || triggerObj.contextObj.currentRound === this.preRoundNumber) {
            this.preRoundNumber = triggerObj.contextObj.currentRound
            const currentPlayer = triggerObj.currentPlayer;
            if (!currentPlayer) {
                return
            }
            const baseCards = triggerObj.contextObj.sharedCardPool.listMagneticForceCard(currentPlayer.tavern.graded);
            if (baseCards.length <= 0) {
                return;
            }
            const baseCard = RandomUtils.pickone(baseCards);
            triggerObj.contextObj.sharedCardPool.cardOut(baseCard);
            const baseCardObj = new BaseCardObj(baseCard);
            currentPlayer.addCardInHand(baseCardObj, triggerObj.contextObj.sharedCardPool)
        }
    }
}

