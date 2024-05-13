import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import randomUtil from "../../../utils/RandomUtils";

export default class CuXinDeTunJiZhe extends BaseCard {
    name = "粗心的囤积者"
    ethnicity = ["鱼人"]
    attack = 5
    life = 6
    graded = 4
    description = "当你出售本随从时，使一个友方鱼人获得本随从的属性值。"

    whenSaleCardTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const baseCardObjs = currentPlayer.cardList.filter(item => item.baseCard.ethnicity.includes('鱼人'));
        if (baseCardObjs.length <= 0) {
            return;
        }
        const baseCardObj = randomUtil.pickone(baseCardObjs);
        baseCardObj.baseCard.attackBonus.push({
            markupValue: currentCard.attack,
            baseCardId: currentCard.id,
            baseCardName: this.name,
        })
        baseCardObj.baseCard.lifeBonus.push({
            markupValue: currentCard.attack,
            baseCardId: currentCard.id,
            baseCardName: this.name,
        })
    }
}

