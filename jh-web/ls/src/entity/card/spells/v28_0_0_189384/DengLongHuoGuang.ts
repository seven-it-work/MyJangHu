import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class DengLongHuoGuang28 extends BaseCard {
    type = '法术'
    ethnicity = ['酒馆']
    name = "灯笼火光"
    graded = 2
    spendingGoldCoin = 2
    descriptionStr(){return "使一个随从获得等同于你当前等级的属性值。"}
    isNeedSelect=true

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const needSelectCard = triggerObj.needSelectCard;
        if (!needSelectCard) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        needSelectCard.baseCard.attackBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: currentPlayer.tavern.graded})
        needSelectCard.baseCard.lifeBonus.push({baseCardId: currentCard.id, baseCardName: this.name, markupValue: currentPlayer.tavern.graded})
    }
}
