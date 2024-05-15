import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class XiaoXiaYanV28 extends BaseCard {
    name = "小瞎眼"
    ethnicity = ["鱼人"]
    attack = 8
    life = 5
    graded = 6
    description = "在你的回合结束时，相邻的随从触发其战吼。"

    whenEndRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return;
        }
        const cardList = currentPlayer.cardList;
        let pre: BaseCardObj, next: BaseCardObj
        for (let i = 0; i < cardList.length; i++) {
            if (cardList[i].id === currentCard.id) {
                if (i > 0) {
                    pre = cardList[i - 1];
                }
                if (i < cardList.length) {
                    next = cardList[cardList.length - 1]
                }
                break
            }
        }
        if (pre) {
            if (pre.baseCard.description.includes("战吼")) {
                pre.whenCardUsedTrigger({
                    ...triggerObj,
                    currentCard: pre
                })
            }
        }
        if (next) {
            if (next.baseCard.description.includes("战吼")) {
                next.whenCardUsedTrigger({
                    ...triggerObj,
                    currentCard: next
                })
            }
        }
    }
}

