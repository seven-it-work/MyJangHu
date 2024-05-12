import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import randomUtil from "../../../utils/RandomUtils.ts";
import BaseCardObj from "../../../objs/BaseCardObj.ts";

export default class TiKeDiAoSaoSi extends BaseCard {
    name = "提克迪奥扫斯"
    ethnicity = ["恶魔"]
    attack = 4
    life = 4
    graded = 5
    description = "在你的英雄受到伤害后，使你的其他恶魔获得+1/+1"

    whenPlayerInjuries(injuring: number, triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        if (!currentPlayer.isEndRound) {
            currentPlayer.cardList.filter(card => card.id !== this.tempId).forEach(card => {
                card.baseCard.attackBonus.push({
                    markupValue: 1,
                    baseCardName: currentCard.baseCard.name,
                    baseCardId: currentCard.id,
                })
                card.baseCard.lifeBonus.push({
                    markupValue: 1,
                    baseCardName: currentCard.baseCard.name,
                    baseCardId: currentCard.id,
                })
            })
        }
    }
}
