import BaseCardObj from "./BaseCardObj";
import ContextObj from "./ContextObj";
import BaseCard from "../entity/baseCard";

/**
 * cardNumber 酒馆刷新卡片数量
 * upgradeExpenses 升级花费
 * cardSize 卡牌个数
 */
export const GRADED_RULES = {
    1: {cardNumber: 3, upgradeExpenses: 5, cardSize: 18},
    2: {cardNumber: 4, upgradeExpenses: 7, cardSize: 15},
    3: {cardNumber: 4, upgradeExpenses: 8, cardSize: 13},
    4: {cardNumber: 5, upgradeExpenses: 9, cardSize: 11},
    5: {cardNumber: 5, upgradeExpenses: 11, cardSize: 9},
    6: {cardNumber: 6, upgradeExpenses: undefined, cardSize: 6},
}
export default class Taverns {
    // 酒馆攻击加成
    tavernAttackBonus: number = 0;
    // 酒馆防御加成
    tavernLifeBonus: number = 0;
    // 酒馆等级
    graded: number = 1;
    // 当前卡片
    currentCard: Map<String, BaseCardObj> = new Map<String, BaseCardObj>()
    // 是否冻结 cardId
    freezeCardId: String[] = [];
    // 刷新费用
    refreshExpenses: number = 1;
    // 当前升级费用
    currentUpgradeExpenses: number = GRADED_RULES[1].upgradeExpenses;


    refresh(context: ContextObj) {
        this.freezeCardId = []
        this.currentCard.clear()
        const baseCards: BaseCard[] = context.sharedCardPool.refreshRandom(this.graded);
        baseCards.forEach(card => {
            const baseCardObj = new BaseCardObj(card);
            baseCardObj.baseCard.attack += this.tavernAttackBonus;
            baseCardObj.baseCard.life += this.tavernLifeBonus;
            this.currentCard.set(baseCardObj.id, baseCardObj)
        })
    }

    upgrade() {
        this.graded++;
    }

    removeCard(cardObj: BaseCardObj, context: ContextObj) {
        this.currentCard.delete(cardObj.id)
        if (context.sharedCardPool) {
            context.sharedCardPool.cardOut(cardObj.baseCard)
        }
    }

    saleCard(cardObj: BaseCardObj, context: ContextObj) {
        if (context.sharedCardPool) {
            context.sharedCardPool.cardIn(cardObj.baseCard)
        }
    }
}
