import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import randomUtil from "../../../utils/RandomUtils.ts";

export default class ZaoDongQiZhaZhe extends BaseCard {
    name = "躁动欺诈者"
    ethnicity = ["恶魔"]
    attack = 2
    life = 3
    graded = 2
    description = "<b>亡语</b>：使另一个友方随从获得本随从的生命值上限。"
    version = ["v28.0.0.189384", "v29.2.0.198037"]

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const baseCardObjs = Array.from(currentPlayer.cardListInFighting.values());
        if (baseCardObjs.length <= 0) {
            return
        }
        const baseCardObj = randomUtil.pickone(baseCardObjs);
        baseCardObj.baseCard.lifeBonus.push({
            markupValue: this.life,
            baseCardId: baseCardObj.id,
            baseCardName: baseCardObj.baseCard.name
        })
        console.log(`(${currentPlayer.name})的【${currentCard.baseCard.name}(${currentCard.attack}/${currentCard.life})】触发亡语：使另一个友方随从【${baseCardObj.baseCard.name}】获得本随从的生命值上限。`)
    }
}
