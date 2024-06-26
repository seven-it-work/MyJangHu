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

    descriptionStr() {
        let txt = '一张'
        if (this.isGold) {
            txt = '2张'
        }
        return `每2个回合，在回合结束时，随机获取${txt}磁力机械牌。（还剩${this.roundCounter}个回合）。`
    }

    preRoundNumber: number = -1;

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        this.preRoundNumber = triggerObj.contextObj.currentRound;
    }

    whenEndRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        console.log(triggerObj.contextObj.currentRound , this.preRoundNumber)
        this.roundCounter = 2 - (triggerObj.contextObj.currentRound - this.preRoundNumber)
        if (this.roundCounter <= 0 ) {
            this.preRoundNumber = triggerObj.contextObj.currentRound+1
            const baseCards = triggerObj.contextObj.sharedCardPool.listMagneticForceCard(currentPlayer.tavern.graded);
            if (baseCards.length <= 0) {
                return;
            }
            const magnification = this.isGold ? 2 : 1;
            for (let i = 0; i < magnification; i++) {
                const baseCard = RandomUtils.pickone(baseCards);
                console.log(`(${currentPlayer.name})的【${this.name}】触发：每2个回合，在回合结束时，随机获取一张磁力机械牌【${baseCard.name}】。`)
                triggerObj.contextObj.sharedCardPool.cardOut(baseCard);
                const baseCardObj = new BaseCardObj(baseCard);
                currentPlayer.addCardInHand(baseCardObj, triggerObj.contextObj.sharedCardPool)
            }
        }
    }
}
