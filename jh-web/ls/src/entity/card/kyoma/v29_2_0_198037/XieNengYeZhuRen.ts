import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class XieNengYeZhuRenV29 extends BaseCard {
    name = "邪能野猪人"
    ethnicity = ["恶魔", "野猪人"]
    attack = 2
    life = 6
    graded = 5
    counter: number = 2;
    counterResetValue: number = 2;

    descriptionStr() {
        const text = this.isGold ? '双倍' : ''
        return `在你施放2个法术后，吞食酒馆中的一个随从，获得其${text}属性值（还剩2个）。`
    }

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const targetCard = triggerObj.targetCard;
        if (!targetCard) {
            return
        }
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        if (targetCard.baseCard.type === '法术' && targetCard.baseCard.ethnicity.includes('酒馆')) {
            this.counter--;
            if (this.counter <= 0) {
                // 吞食
                const baseCardObjs = Array.from(currentPlayer.tavern.currentCard.values()).filter(card => card.baseCard.type === '随从');
                if (baseCardObjs.length <= 0) {
                    return;
                }
                const pick = randomUtil.pickone(baseCardObjs);
                currentPlayer.tavern.removeCard(pick, triggerObj.contextObj.sharedCardPool)
                const magnification = this.isGold ? 2 : 1;
                currentCard.baseCard.attackBonus.push({
                    markupValue: pick.baseCard.attack * magnification,
                    baseCardName: this.name,
                    baseCardId: currentCard.id,
                })
                currentCard.baseCard.lifeBonus.push({
                    markupValue: pick.baseCard.life * magnification,
                    baseCardName: this.name,
                    baseCardId: currentCard.id,
                })
                this.counter = this.counterResetValue
            }
        }
    }
}
