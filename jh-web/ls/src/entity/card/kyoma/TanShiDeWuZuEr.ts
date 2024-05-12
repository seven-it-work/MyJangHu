import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import randomUtil from "../../../utils/RandomUtils.ts";
import BaseCardObj from "../../../objs/BaseCardObj.ts";

export default class TanShiDeWuZuEr extends BaseCard {
    name = "贪食的乌祖尔"
    ethnicity = ["恶魔"]
    attack = 4
    life = 6
    graded = 5
    description = "<b>嘲讽</b>。在你使用一张恶魔牌后，吞食酒馆中的一个随从，获取其属性值。"
    isMockery = true;

    whenOtherCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        const targetCard = triggerObj.targetCard;
        if (!currentPlayer) {
            return
        }
        if (!targetCard) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        if (targetCard.baseCard.ethnicity.includes('恶魔')) {
            const tavern = currentPlayer.tavern;
            const baseCardObjs = Array.from(tavern.currentCard.values()).filter(card => card.baseCard.type === '随从');
            if (baseCardObjs.length <= 0) {
                return;
            }
            const pick = randomUtil.pickone(baseCardObjs);
            tavern.removeCard(pick, triggerObj.contextObj)
            this.attackBonus.push({
                markupValue: pick.baseCard.attack,
                baseCardName: currentCard.baseCard.name,
                baseCardId: currentCard.id,
            })
            this.lifeBonus.push({
                markupValue: pick.baseCard.life,
                baseCardName: currentCard.baseCard.name,
                baseCardId: currentCard.id,
            })
        }
    }
}
