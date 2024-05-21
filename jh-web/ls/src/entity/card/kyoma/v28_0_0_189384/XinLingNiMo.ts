import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils.ts";

export default class XinLingNiMoV28 extends BaseCard {
    name = "心灵泥魔"
    ethnicity = ["恶魔"]
    attack = 3
    life = 2
    graded = 2

    descriptionStr() {
        let txt = ''
        if (this.isGold) {
            txt = '双倍'
        }
        return `<b>战吼</b>：选择一个友方恶魔，使其吞食酒馆中的一个随从，获取其${txt}属性值。`
    }

    isNeedSelect = true;
    version = ["v28.0.0.189384", "v29.2.0.198037"]
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
        tavern.removeCard(pick, triggerObj.contextObj.sharedCardPool)
        const magnification = this.isGold ? 2 : 1;
        needSelectCard.baseCard.attackBonus.push({
            markupValue: pick.baseCard.attack * magnification,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
        needSelectCard.baseCard.lifeBonus.push({
            markupValue: pick.baseCard.life * magnification,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
    }
}
