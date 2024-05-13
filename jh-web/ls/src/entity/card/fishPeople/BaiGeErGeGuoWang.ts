import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import BaseCardObj from "../../../objs/BaseCardObj";

export default class BaiGeErGeGuoWang extends BaseCard {
    name = "拜戈尔格国王"
    ethnicity = ["鱼人"]
    attack = 6
    life = 4
    graded = 5
    description = "战吼：使你的其他鱼人获得+2/+3。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        console.log(`(${currentPlayer.name})的【${this.name}】触发战吼：使你的其他鱼人获得+2/+3。`)
        const baseCardObjs = currentPlayer.getCardList().filter(card => card.baseCard.ethnicity.includes('鱼人')).filter(card => card.id !== currentCard.id);
        if (baseCardObjs.length <= 0) {
            return;
        }
        baseCardObjs.forEach(card => {
            card.baseCard.attackBonus.push({
                baseCardId: currentCard.id, baseCardName: currentCard.baseCard.name, markupValue: 2
            })
            card.baseCard.lifeBonus.push({
                baseCardId: currentCard.id, baseCardName: currentCard.baseCard.name, markupValue: 3
            })
        })
    }
}

