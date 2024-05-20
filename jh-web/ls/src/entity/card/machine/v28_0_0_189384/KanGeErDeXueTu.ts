import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class KanGeErDeXueTuV28 extends BaseCard {
    name = "坎格尔的学徒"
    accompanyingRace = ["机械"]
    attack = 3
    life = 6
    graded = 5

    descriptionStr() {
        return `<b>亡语</b>：召唤你本场战斗中最先死亡的${this.isGold ? 4 : 2}个机械。`
    }

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
        const magnification = this.isGold ? 2 : 1;
        for (let i = 0; i < magnification * 2; i++) {
            const magnificationElement = magnification[i];
            if (!magnificationElement) {
                return;
            }
            currentPlayer.addCard(magnificationElement.getOriginalVersion(triggerObj.contextObj.sharedCardPool), currentPlayer.findNextCard(currentCard), triggerObj)
        }
    }
}
