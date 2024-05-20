import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils.ts";

export default class TiaoShiMoQuanV28 extends BaseCard {
    name = "挑食魔犬"
    ethnicity = ["恶魔"]
    attack = 1
    life = 1
    graded = 1

    descriptionStr() {
        let txt = ''
        if (this.isGold) {
            txt = '双倍'
        }
        return `<b>战吼</b>：随机吞噬酒馆一个随从，获取其${txt}属性值。`
    }

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
