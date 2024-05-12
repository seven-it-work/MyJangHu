import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import randomUtil from "../../../utils/RandomUtils.ts";
import BaseCardObj from "../../../objs/BaseCardObj.ts";

export default class TiaoShiMoQuan extends BaseCard {
    name = "挑食魔犬"
    ethnicity = ["恶魔"]
    attack = 1
    life = 1
    graded = 1
    description = "<b>战吼</b>：随机吞噬酒馆一个随从，获取其属性值。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
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
