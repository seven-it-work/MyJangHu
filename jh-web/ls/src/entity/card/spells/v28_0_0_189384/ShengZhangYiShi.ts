import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class ShengZhangYiShi28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "生长仪式"
    graded = 4
    spendingGoldCoin = 2
    descriptionStr(){return "将酒馆中的所有牌替换为高一级的牌。"}

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const needSelectCard = triggerObj.needSelectCard;
        if (!needSelectCard) {
            return
        }
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        // 找到等级牌，一个个升级
        const baseCardObjs = Array.from(currentPlayer.tavern.currentCard.values());
        const newBaseCardObjs = []
        baseCardObjs.forEach(card => {
            const graded = Math.min(6, card.baseCard.graded + 1);
            if (card.baseCard.type === '法术') {
                const list = triggerObj.contextObj.sharedCardPool.listSpell(graded, 1, true);
                newBaseCardObjs.push(list[0])
            } else {
                const list = triggerObj.contextObj.sharedCardPool.refreshRandom(1, graded, true)
                const baseCard = list[0];
                triggerObj.contextObj.sharedCardPool.cardOut(baseCard)
                newBaseCardObjs.push(baseCard)
            }
            // 移除原有
            currentPlayer.tavern.removeCard(card, triggerObj.contextObj.sharedCardPool)
        })
        // 替换酒馆牌
        newBaseCardObjs.forEach(base => {
            const card = new BaseCardObj(base);
            currentPlayer.tavern.currentCard.set(card.id, card)
        })
    }
}
