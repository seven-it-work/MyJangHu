import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import BaseCardObj from "../../../objs/BaseCardObj";

export default class OuMiQiePoHuaiZhe extends BaseCard {
    name = "死神4000型"
    ethnicity = ["机械"]
    attack = 6
    life = 9
    graded = 6
    description = "同时对其攻击相邻的随从造成伤害。"

    whenAttackTrigger(triggerObj: TriggerObj) {
        const targetPlayer = triggerObj.targetPlayer;
        const targetCard = triggerObj.targetCard;
        const currentCard = triggerObj.currentCard;
        if (!targetPlayer) {
            return
        }
        if (!targetCard) {
            return
        }
        if (!currentCard) {
            return
        }
        let targetCardIndex = undefined;
        for (let i = 0; i < targetPlayer.cardListInFighting.length; i++) {
            if (targetPlayer.cardListInFighting[i].id === targetCard.id) {
                targetCardIndex = i;
                break
            }
        }
        if (targetCardIndex || targetCardIndex === 0) {
            let right = undefined, left = undefined;
            if (targetCardIndex === 0 && targetCardIndex === targetPlayer.cardListInFighting.length - 1) {
                // 仅有一个
            } else if (targetCardIndex === 0) {
                right = targetCardIndex + 1;
            } else if (targetCardIndex === targetPlayer.cardListInFighting.length - 1) {
                left = targetCardIndex - 1;
            } else {
                left = targetCardIndex - 1;
                right = targetCardIndex + 1;
            }
            if (right != undefined) {
                const baseCardObj: BaseCardObj = targetPlayer.cardListInFighting[right];
                baseCardObj.healthChange(-currentCard.attack, triggerObj)
            }
            if (left != undefined) {
                const baseCardObj: BaseCardObj = targetPlayer.cardListInFighting[left];
                baseCardObj.healthChange(-currentCard.attack, triggerObj)
            }
        }
    }
}

