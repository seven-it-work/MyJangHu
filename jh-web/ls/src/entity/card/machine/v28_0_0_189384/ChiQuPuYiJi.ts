import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class ChiQuPuYiJiV28 extends BaseCard {
    name = "齿驱扑翼机"
    ethnicity = ["机械"]
    attack = 1
    life = 1
    graded = 2
    description = "<div><b>圣盾</b></div>在一个友方随从失去圣盾后，在你手牌中的一张随从获得+1/+1。"
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
        console.log(`(${currentPlayer.name})的【${this.name}】触发在一个友方随从失去圣盾后，在你手牌中的一张随从【${baseCardObj.baseCard.name}】获得+1/+1。`)
        baseCardObj.baseCard.attackBonus.push({
            markupValue: 1,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
        baseCardObj.baseCard.lifeBonus.push({
            markupValue: 1,
            baseCardName: this.name,
            baseCardId: currentCard.id,
        })
    }
}

