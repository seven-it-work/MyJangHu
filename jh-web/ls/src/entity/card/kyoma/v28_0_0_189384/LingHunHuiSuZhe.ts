import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class LingHunHuiSuZheV28 extends BaseCard {
    name = "灵魂回溯者"
    ethnicity = ["恶魔"]
    attack = 3
    life = 1
    graded = 2

    descriptionStr() {
        return `在你的英雄受到伤害后，回溯该伤害并使本随从获取+${this.isGold ? 2 : 1}生命值。`
    }

    version = ["v28.0.0.189384", "v29.2.0.198037"]

    whenPlayerInjuries(injuring: number, triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        const currentCard = triggerObj.currentCard;
        if (!currentPlayer) {
            return
        }
        if (!currentCard) {
            return
        }
        // 只有回合中，英雄受伤才行
        if (!currentPlayer.isEndRound) {
            // 伤害回溯，问题？护甲能回溯吗，回溯到护甲上吗？满血回溯到哪里，有护甲生命值没有满的问题
            currentPlayer.changeLife(injuring, triggerObj)
            currentCard.baseCard.lifeBonus.push({
                markupValue: this.isGold ? 2 : 1,
                baseCardName: this.name,
                baseCardId: currentCard.id,
            })
        }
    }
}
