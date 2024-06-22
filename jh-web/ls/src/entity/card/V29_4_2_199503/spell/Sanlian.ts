import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger.ts";
import BaseCardObj from "../../../../objs/BaseCardObj.ts";
import {FlipFlop} from "../../../FlipFlop";

export default class Sanlian extends BaseCard {
    type = '法术'
    isSell = false
    graded = 1

    descriptionStr(): string {
        return `获取一个等级为${this.graded}的随从`;
    }

    name = "奖励"

    whenUsed(flipFlop: FlipFlop) {
        const baseCards = flipFlop.contextObj.sharedCardPool.refreshRandom(1, this.graded, true);
        if (baseCards.length <= 0) {
            return;
        }
        this.showLog(flipFlop)
        flipFlop.currentPlayer.addCardInHand(new BaseCardObj(baseCards[0]), flipFlop.contextObj.sharedCardPool)
    }
}
