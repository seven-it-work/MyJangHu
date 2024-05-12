import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import randomUtil from "../../../utils/RandomUtils.ts";
import BaseCardObj from "../../../objs/BaseCardObj.ts";

export default class XinLingNiMo extends BaseCard {
    name = "心灵泥魔"
    ethnicity = ["恶魔"]
    attack = 3
    life = 2
    graded = 2
    description = "<b>战吼</b>：选择一个友方恶魔，使其吞食酒馆中的一个随从，获取其属性值。"
    isNeedSelect = true;

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        let needSelectCard = triggerObj.needSelectCard;
        if (!needSelectCard) {
            // 没有则随机选一个
            needSelectCard = randomUtil.pickone(currentPlayer.cardList)
        }
        if (!needSelectCard) {
            return;
        }
        const tavern = currentPlayer.tavern;
        const baseCardObjs = Array.from(tavern.currentCard.values());
        if (baseCardObjs.length <= 0) {
            return
        }
        const pick = randomUtil.pickone(baseCardObjs);
        needSelectCard.baseCard.attackBonus.push({
            markupValue: pick.baseCard.attack,
            baseCardName: currentCard.baseCard.name,
            baseCardId: currentCard.id,
        })
        needSelectCard.baseCard.lifeBonus.push({
            markupValue: pick.baseCard.life,
            baseCardName: currentCard.baseCard.name,
            baseCardId: currentCard.id,
        })
    }
}
