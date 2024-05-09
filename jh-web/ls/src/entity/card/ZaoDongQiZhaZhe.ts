import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj.ts";
import randomUtil from "../../utils/RandomUtils.ts";
import {TriggerObj} from "../Trigger";

export default class ZaoDongQiZhaZhe extends BaseCard {
    name = "躁动欺诈者"
    ethnicity = ["恶魔"]
    attack = 2
    life = 3
    graded = 2
    description = "<b>亡语</b>：使另一个友方随从获得本随从的生命值上限。"

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
        baseCardObj.lifeBonus.push({
            markupValue: this.life,
            baseCardObj: currentCard,
        })
    }
}
