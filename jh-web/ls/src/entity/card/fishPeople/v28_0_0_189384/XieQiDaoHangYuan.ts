import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class XieQiDaoHangYuan extends BaseCard {
    name = "邪鳍导航员"
    ethnicity = ["鱼人"]
    attack = 4
    life = 4
    graded = 3
    description = "战吼：使你的其他鱼人获取+1/+1。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const cardList = currentPlayer.getCardList();
        cardList.filter(card => card.baseCard.ethnicity.includes('鱼人')).filter(card => card.id !== currentCard.id).forEach(card => {
            card.baseCard.attackBonus.push({
                baseCardId: currentCard.id,
                baseCardName: currentCard.baseCard.name,
                markupValue: 1
            })
            card.baseCard.lifeBonus.push({
                baseCardId: currentCard.id,
                baseCardName: currentCard.baseCard.name,
                markupValue: 1
            })
        })
    }
}

