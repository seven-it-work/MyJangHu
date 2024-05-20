import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class XieQiDaoHangYuanV28 extends BaseCard {
    name = "邪鳍导航员"
    ethnicity = ["鱼人"]
    attack = 4
    life = 4
    graded = 3
    descriptionStr() {
        let txt = '+1/+1'
        if (this.isGold) {
            txt = '+2/+2'
        }
        return `战吼：使你的其他鱼人获取${txt}。`
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
        const cardList = currentPlayer.getCardList();
        let magnification = this.isGold ? 2 : 1;
        cardList.filter(card => card.baseCard.ethnicity.includes('鱼人')).filter(card => card.id !== currentCard.id).forEach(card => {
            card.baseCard.attackBonus.push({
                baseCardId: currentCard.id,
                baseCardName: this.name,
                markupValue: magnification
            })
            card.baseCard.lifeBonus.push({
                baseCardId: currentCard.id,
                baseCardName: this.name,
                markupValue: magnification
            })
        })
    }
}
