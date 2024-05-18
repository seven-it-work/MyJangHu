import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class MoLaKeLiSiV28 extends BaseCard {
    name = "摩拉克力斯"
    ethnicity = ["鱼人"]
    attack = 5
    life = 2
    graded = 2
    descriptionStr(){return "每当本随从消灭一个随从时，使你手牌中的一张随从牌获得+2/+2。"}

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
        baseCardObj.baseCard.lifeBonus.push({
            baseCardName: this.name,
            baseCardId: currentCard.id,
            markupValue: 2
        })
        baseCardObj.baseCard.attackBonus.push({
            baseCardName: this.name,
            baseCardId: currentCard.id,
            markupValue: 2
        })
    }

}
