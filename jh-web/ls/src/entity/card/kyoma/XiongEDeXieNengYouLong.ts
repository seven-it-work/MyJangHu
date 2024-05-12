import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import randomUtil from "../../../utils/RandomUtils.ts";
import BaseCardObj from "../../../objs/BaseCardObj.ts";

export default class XiongEDeXieNengYouLong extends BaseCard {
    name = "凶恶的邪能幼龙"
    ethnicity = ["恶魔", "龙"]
    attack = 0
    life = 2
    graded = 4
    description = "<b>战吼</b>：吞食酒馆中的3个随从，获得其属性值。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        for (let i = 0; i < 3; i++) {
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
