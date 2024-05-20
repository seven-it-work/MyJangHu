import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class YiJiaoTuSiSeLaV28 extends BaseCard {
    name = "异教徒斯瑟拉"
    accompanyingRace = ["恶魔"]
    attack = 8
    life = 5
    graded = 6

    descriptionStr() {
        return ""
    }

    descriptionStr() {
        let txt = '第一个'
        if (this.isGold) {
            txt = '前2个'
        }
        return `潜行。<b>亡语</b>：召唤你在本场战斗中死亡的第${txt}恶魔，保留其额外效果。`
    }

    isSneak = true;
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
        const baseCardObjs = currentPlayer.deadCardListInFighting.filter(card => card.baseCard.ethnicity.includes("恶魔"));
        if (baseCardObjs.length <= 0) {
            return;
        }
        const magnification = this.isGold ? 2 : 1;
        for (let i = 0; i < magnification; i++) {
            const baseCardObj = baseCardObjs[i];
            if (!baseCardObj) {
                return;
            }
            currentPlayer.addCard(baseCardObj, currentPlayer.findNextCard(currentCard), triggerObj);
        }
        console.log(`(${currentPlayer.name})的【${this.name}(${currentCard.attack}/${currentCard.life})】触发亡语：召唤你在本场战斗中死亡的第一个恶魔【${baseCardObjs[0].baseCard.name}】，保留其额外效果。`)
    }
}
