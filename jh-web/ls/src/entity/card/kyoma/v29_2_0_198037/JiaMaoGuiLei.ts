import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class JiaMaoGuiLeiV29 extends BaseCard {
    name = "假冒鬼儡"
    ethnicity = ["恶魔"]
    attack = 1
    life = 2
    graded = 3

    descriptionStr() {
        let text = ''
        if (this.isGold) {
            text = '双倍'
        }
        return `在你的回合结束时，吞食酒馆中的一个随从以获得其${text}属性值。`
    }

    whenEndRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const baseCardObjs = Array.from(currentPlayer.tavern.currentCard.values());
        if (baseCardObjs.length <= 0) {
            return;
        }
        const baseCardObj = randomUtil.pickone(baseCardObjs);
        currentPlayer.tavern.removeCard(baseCardObj, triggerObj.contextObj.sharedCardPool)
        const magnification = this.isGold ? 2 : 1;
        this.attackBonus.push({
            baseCardId: baseCardObj.id,
            baseCardName: baseCardObj.baseCard.name,
            markupValue: baseCardObj.attack * magnification
        })
        this.lifeBonus.push({
            baseCardId: baseCardObj.id,
            baseCardName: baseCardObj.baseCard.name,
            markupValue: baseCardObj.life * magnification
        })
    }
}
