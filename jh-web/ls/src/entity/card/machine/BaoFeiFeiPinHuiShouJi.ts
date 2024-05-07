import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import RandomUtils from "../../../utils/RandomUtils";
import BaseCardObj from "../../../objs/BaseCardObj";

export default class BaoFeiFeiPinHuiShouJi extends BaseCard {
    name = "报废废品回收机"
    ethnicity = ["机械"]
    attack = 4
    life = 7
    graded = 4
    roundCounter: number = 2;
    description = `每2个回合，在回合结束时，随机获取一张磁力机械牌。（还剩${this.roundCounter}个回合）`

    whenEndRound(triggerObj: TriggerObj) {
        if (this.roundCounter <= 0) {
            // todo 这里要优化为回合，不然有bug，需要有总对象，存放这整局的信息
            this.roundCounter = 2;
            const currentPlayer = triggerObj.currentPlayer;
            if (!currentPlayer) {
                return
            }
            const handCardMap = currentPlayer.handCardMap;
            const baseCards = triggerObj.contextObj.sharedCardPool.listMagneticForceCard(currentPlayer.tavern.graded);
            if (baseCards.length <= 0) {
                return;
            }
            const baseCard = RandomUtils.pickone(baseCards);
            triggerObj.contextObj.sharedCardPool.cardOut(baseCard);
            const baseCardObj = new BaseCardObj(baseCard);
            handCardMap.set(baseCardObj.id, baseCardObj)
        } else {
            this.roundCounter--;
        }
    }
}

