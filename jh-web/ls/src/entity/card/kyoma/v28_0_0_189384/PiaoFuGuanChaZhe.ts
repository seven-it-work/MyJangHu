import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class PiaoFuGuanChaZheV28 extends BaseCard {
    name = "漂浮观察者"
    ethnicity = ["恶魔"]
    attack = 4
    life = 4
    graded = 4
    description = "每当你的英雄在你的回合受到伤害，便获得+2/+2。"

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
        if (!currentPlayer.isEndRound) {
            currentCard.baseCard.attackBonus.push({
                markupValue: 2,
                baseCardName: this.name,
                baseCardId: currentCard.id,
            })
            currentCard.baseCard.lifeBonus.push({
                markupValue: 1,
                baseCardName: this.name,
                baseCardId: currentCard.id,
            })
        }
    }
}
