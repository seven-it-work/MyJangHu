import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class OuMiQiePoHuaiZheV28 extends BaseCard {
    name = "欧米茄破坏者"
    ethnicity = ["机械"]
    attack = 6
    life = 6
    graded = 6

    descriptionStr() {
        return ""
    }

    descriptionStr() {
        let txt = '1/1'
        if (this.isGold) {
            txt = '2/2'
        }
        return `<b>亡语</b>：召唤六个${txt}的微型机器人。每有一个放不下的机器人，便使你的机械获取${txt}。。`
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
        const magnification = this.isGold ? 2 : 1;
        for (let i = 0; i < 6; i++) {
            if (currentPlayer.cardListInFighting.length < 7) {
                const baseCardObj = new BaseCardObj(triggerObj.contextObj.sharedCardPool.getByName("WeiXingJiQiRen"));
                baseCardObj.baseCard.isGold = this.isGold
                currentPlayer.addCard(baseCardObj, currentPlayer.findNextCard(currentCard), triggerObj)
            } else {
                currentPlayer.cardListInFighting.filter(card => card.baseCard.ethnicity.includes("机械")).forEach(card => {
                    currentCard.baseCard.attackBonus.push({
                        markupValue: magnification,
                        baseCardName: this.name,
                        baseCardId: currentCard.id,
                    })
                    currentCard.baseCard.lifeBonus.push({
                        markupValue: magnification,
                        baseCardName: this.name,
                        baseCardId: currentCard.id,
                    })
                })
            }
        }
    }
}
