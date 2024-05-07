import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";
import {TriggerObj} from "../Trigger";

export default class SaGeLaSiDeYongShi extends BaseCard {
    name = "萨格拉斯的勇士"
    ethnicity = ["恶魔"]
    attack = 10
    life = 10
    graded = 7
    description = "酒馆中的随从拥有+10/10。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.tavern.tavernAttackBonus += 10;
        currentPlayer.tavern.tavernLifeBonus += 10;
    }

    whenSaleCardTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.tavern.tavernAttackBonus -= 10;
        currentPlayer.tavern.tavernLifeBonus -= 10;
    }
}
