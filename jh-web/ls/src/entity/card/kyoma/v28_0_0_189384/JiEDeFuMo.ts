import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils.ts";

export default class JiEDeFuMoV28 extends BaseCard {
    name = "饥饿的蝠魔"
    ethnicity = ["恶魔"]
    attack = 8
    life = 5
    graded = 6
    descriptionStr(){return "在你的回合结束时，你的恶魔各吞食酒馆中的一个随从，获取其属性值。"}

    version = ["v28.0.0.189384", "v29.2.0.198037"]
    whenEndRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const tavern = currentPlayer.tavern;
        if (tavern.currentCard.size <= 0) {
            return;
        }
        currentPlayer.cardList.filter(item => {
            return item.baseCard.ethnicity.includes("恶魔")
        }).forEach(item => {
            const baseCardObjs = Array.from(tavern.currentCard.values()).filter(card => card.baseCard.type === '随从');
            if (baseCardObjs.length <= 0) {
                return;
            }
            const pick = randomUtil.pickone(baseCardObjs);
            tavern.removeCard(pick, triggerObj.contextObj.sharedCardPool)
            item.baseCard.attackBonus.push({
                markupValue: pick.baseCard.attack,
                baseCardName: this.name,
                baseCardId: currentCard.id,
            })
            item.baseCard.lifeBonus.push({
                markupValue: pick.baseCard.life,
                baseCardName: this.name,
                baseCardId: currentCard.id,
            })
        })
    }
}
