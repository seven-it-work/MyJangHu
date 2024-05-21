import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";

export default class JiShiTanFanV29 extends BaseCard {
    name = "集市摊贩"
    ethnicity = ["恶魔"]
    attack = 2
    life = 4
    graded = 4

    buySpellByLifeTimes: number = 1;
    remainBuySpellByLifeTimes: number = 1;

    descriptionStr() {
        this.buySpellByLifeTimes = this.isGold ? 2 : 1
        return `每回合中,有${this.buySpellByLifeTimes}张酒馆法术牌可以用生命值购买,而非铸币。（还剩${this.remainBuySpellByLifeTimes}张）`
    }

    whenRefreshTavern(triggerObj: TriggerObj) {
        if (this.remainBuySpellByLifeTimes <= 0) {
            return;
        }
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return;
        }
        const baseCardObjs = Array.from(currentPlayer.tavern.currentCard.values()).filter(card => card.baseCard.type === '法术');
        if (baseCardObjs.length <= 0) {
            return;
        }
        baseCardObjs.forEach(card => card.baseCard.isSpendLife = true)
    }

    whenStartRound(triggerObj: TriggerObj) {
        this.remainBuySpellByLifeTimes = this.buySpellByLifeTimes;
    }

    whenBuyOtherCardTrigger(triggerObj: TriggerObj) {
        if (triggerObj.locations !== '场地') {
            return;
        }
        if (this.remainBuySpellByLifeTimes <= 0) {
            return;
        }
        const targetCard = triggerObj.targetCard;
        if (!targetCard) {
            return
        }
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return;
        }
        if (targetCard.baseCard.type !== '法术') {
            return;
        }
        const notCounting = ['PinMingFaJue']
        if (notCounting.includes(targetCard.baseCard.classType)) {
            return;
        }
        this.remainBuySpellByLifeTimes--;
        if (this.remainBuySpellByLifeTimes <= 0) {
            // 还原其他
            const baseCardObjs = Array.from(currentPlayer.tavern.currentCard.values()).filter(card => card.baseCard.type === '法术');
            if (baseCardObjs.length <= 0) {
                return;
            }
            baseCardObjs.forEach(card => {
                if (notCounting.includes(card.baseCard.classType)) {
                    return
                }
                card.baseCard.isSpendLife = false
            })
        }
    }
}
