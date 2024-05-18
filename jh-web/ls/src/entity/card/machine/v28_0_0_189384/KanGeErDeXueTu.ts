import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class KanGeErDeXueTuV28 extends BaseCard {
    name = "坎格尔的学徒"
    accompanyingRace = ["机械"]
    attack = 3
    life = 6
    graded = 5
    description = "<b>亡语</b>：召唤你本场战斗中最先死亡的2个机械。"
    isDeadLanguage = true

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const baseCardObjs = currentPlayer.deadCardListInFighting.filter(card => card.baseCard.ethnicity.includes('机械'));
        if (baseCardObjs.length <= 0) {
            return;
        }
        console.log(`(${currentPlayer.name})的【${this.name}】的亡语触发：召唤你本场战斗中最先死亡的2个机械。`)
        if (baseCardObjs[0]) {
            currentPlayer.addCard(baseCardObjs[0].getOriginalVersion(triggerObj.contextObj.sharedCardPool), currentPlayer.findNextCard(currentCard), triggerObj)
        }
        if (baseCardObjs[1]) {
            currentPlayer.addCard(baseCardObjs[1].getOriginalVersion(triggerObj.contextObj.sharedCardPool), currentPlayer.findNextCard(currentCard), triggerObj)
        }
    }
}

