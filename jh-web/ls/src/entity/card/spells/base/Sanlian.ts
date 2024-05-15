import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger.ts";
import BaseCardObj from "../../../../objs/BaseCardObj.ts";

export default class Sanlian extends BaseCard {
    type = '法术'
    isSell = false
    graded = 1
    private _description = `获取一个{0}的随从`
    get description(): string {
        return `获取一个等级为${this.graded}的随从`;
    }

    set description(value: string) {
        this._description = `获取一个等级为${this.graded}的随从`;
    }

    name = "奖励"


    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const baseCards = triggerObj.contextObj.sharedCardPool.refreshRandom(1, this.graded, true);
        if (baseCards.length <= 0) {
            return;
        }
        currentPlayer.addCardInHand(new BaseCardObj(baseCards[0]), triggerObj.contextObj.sharedCardPool)
    }
}
