import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils.ts";

export default class XiongEDeXieNengYouLongV28 extends BaseCard {
    name = "凶恶的邪能幼龙"
    ethnicity = ["恶魔", "龙"]
    attack = 0
    life = 2
    graded = 4

    descriptionStr() {
        return ""
    }

    descriptionStr() {
        let txt = ''
        if (this.isGold) {
            txt = '双倍'
        }
        return `<b>战吼</b>：吞食酒馆中的3个随从，获得其${txt}属性值。。`
    }

    isWarRoars = true

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
            tavern.removeCard(pick, triggerObj.contextObj.sharedCardPool)
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
        }
    }
}
