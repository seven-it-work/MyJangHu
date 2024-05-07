import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj.ts";
import {TriggerObj} from "../Trigger";

export default class JunTuanJianGong extends BaseCard {
    name = "军团监工"
    ethnicity = ["恶魔"]
    attack = 4
    life = 2
    graded = 3
    description = "酒馆中的随从用于+2/+1"


    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.tavern.tavernAttackBonus += 2;
        currentPlayer.tavern.tavernLifeBonus += 1;
    }

    whenSaleCardTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        currentPlayer.tavern.tavernAttackBonus -= 2;
        currentPlayer.tavern.tavernLifeBonus -= 1;
    }
}
