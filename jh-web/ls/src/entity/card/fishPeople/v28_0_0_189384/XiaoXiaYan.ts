import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class XiaoXiaYanV28 extends BaseCard {
    name = "小瞎眼"
    ethnicity = ["鱼人"]
    attack = 8
    life = 5
    graded = 6
    descriptionStr() {
        let txt = ''
        if (this.isGold) {
            txt = '2次'
        }
        return `在你的回合结束时，相邻的随从触发其战吼${txt}。`
    }

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
        let magnification = this.isGold ? 2 : 1;

        if (pre) {
            if (pre.baseCard.isWarRoars) {
                for (let i = 0; i < magnification; i++) {
                    console.log(`(${currentPlayer.name})的【${this.name}】触发左侧战吼：${pre.baseCard.descriptionStr()}`)
                    pre.whenCardUsedTrigger({
                        ...triggerObj,
                        currentCard: pre
                    })
                }
            }
        }
        if (next) {
            if (next.baseCard.isWarRoars) {
                for (let i = 0; i < magnification; i++) {
                    console.log(`(${currentPlayer.name})的【${this.name}】触发右侧战吼：${next.baseCard.descriptionStr()}`)
                    next.whenCardUsedTrigger({
                        ...triggerObj,
                        currentCard: next
                    })
                }
            }
        }
    }
}
