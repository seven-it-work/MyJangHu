import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class MoLaKeLiSiV28 extends BaseCard {
    name = "摩拉克力斯"
    ethnicity = ["鱼人"]
    attack = 5
    life = 2
    graded = 2

    descriptionStr() {
        let txt = '+2/+2'
        if (this.isGold) {
            txt = '+4/+4'
        }
        return `每当本随从消灭一个随从时，使你手牌中的一张随从牌获得${txt}。`
    }


    whenKillOneTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const handCardList = currentPlayer.handCardList.filter(card => card.baseCard.type === '随从');
        if (handCardList.length <= 0) {
            return;
        }
        const baseCardObj = randomUtil.pickone(handCardList);
        let magnification = this.isGold ? 2 : 1;
        baseCardObj.baseCard.lifeBonus.push({
            baseCardName: this.name,
            baseCardId: currentCard.id,
            markupValue: 2 * magnification
        })
        baseCardObj.baseCard.attackBonus.push({
            baseCardName: this.name,
            baseCardId: currentCard.id,
            markupValue: 2 * magnification
        })
    }

}
