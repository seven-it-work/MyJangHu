import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";

export default class CuXinDeTunJiZheV28 extends BaseCard {
    name = "粗心的囤积者"
    ethnicity = ["鱼人"]
    attack = 5
    life = 6
    graded = 4

    descriptionStr() {
        let txt = ''
        if (this.isGold) {
            txt = '双倍'
        }
        return `当你出售本随从时，使一个友方鱼人获得本随从的${txt}属性值。`
    }

    whenSaleCardTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        console.log(`(${currentPlayer.name})的【${this.name}】触发：当你出售本随从时，使一个友方鱼人获得本随从的属性值。`)
        const baseCardObjs = currentPlayer.cardList.filter(item => item.baseCard.ethnicity.includes('鱼人'));
        if (baseCardObjs.length <= 0) {
            return;
        }
        const baseCardObj = randomUtil.pickone(baseCardObjs);
        let magnification = this.isGold ? 2 : 1;
        baseCardObj.baseCard.attackBonus.push({
            markupValue: currentCard.attack * magnification,
            baseCardId: currentCard.id,
            baseCardName: this.name,
        })
        baseCardObj.baseCard.lifeBonus.push({
            markupValue: currentCard.life * magnification,
            baseCardId: currentCard.id,
            baseCardName: this.name,
        })
    }
}
