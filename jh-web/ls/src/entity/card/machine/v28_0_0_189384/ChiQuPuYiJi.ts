import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class ChiQuPuYiJiV28 extends BaseCard {
    name = "齿驱扑翼机"
    ethnicity = ["机械"]
    attack = 1
    life = 1
    graded = 2

    descriptionStr() {
        let txt = '+1/+1'
        if (this.isGold) {
            txt = '+2/+2'
        }
        return `<div><b>圣盾</b></div>在一个友方随从失去圣盾后，在你手牌中的一张随从获得${txt}。`
    }
    isHolyShield: boolean = true;

    whenOtherHolyShieldDisappears(triggerObj: TriggerObj) {
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
        const magnification = this.isGold ? 2 : 1;
        baseCardObj.baseCard.attackBonus.push({
            markupValue: magnification,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
        baseCardObj.baseCard.lifeBonus.push({
            markupValue: magnification,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
    }
}
