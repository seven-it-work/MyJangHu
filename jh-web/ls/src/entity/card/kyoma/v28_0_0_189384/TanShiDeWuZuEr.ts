import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils.ts";

export default class TanShiDeWuZuErV28 extends BaseCard {
    name = "贪食的乌祖尔"
    ethnicity = ["恶魔"]
    attack = 4
    life = 6
    graded = 5

    descriptionStr() {
        let txt = ''
        if (this.isGold) {
            txt = '双倍'
        }
        return `<b>嘲讽</b>。在你使用一张恶魔牌后，吞食酒馆中的一个随从，获取其${txt}属性值。`
    }

    isMockery = true;
    version = ["v28.0.0.189384", "v29.2.0.198037"]

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
