import BaseCardObj from "./BaseCardObj";
import ContextObj from "./ContextObj";

export default class Player {
    currentGoldCoin: Number = 0;
    currentMaxGoldCoin: Number = 0;
    currentLife: Number = 0;
    currentArmor: Number = 0;
    handCardMap: Map<String, BaseCardObj> = new Map<String, BaseCardObj>();
    tavernAttackBonus: Number = 0;
    tavernLifeBonus: Number = 0;
    // 场上的牌
    cardList: BaseCardObj[] = [];
    /**
     * 战吼额外触发次数
     */
    battleRoarExtraTriggers: Number = 0;
    /**
     * 亡语额外触发次数
     */
    deadWordsExtraTriggers: Number = 0;

    canBuyCard(cardObj: BaseCardObj) {
        return this.currentGoldCoin >= cardObj.baseCard.spendingGoldCoin
    }

    buyCard(cardObj: BaseCardObj, context: ContextObj) {
        if (!this.canBuyCard(cardObj)) {
            console.error("不能购买")
            return;
        }
        this.currentGoldCoin -= cardObj.baseCard.spendingGoldCoin;
        this.handCardMap.set(cardObj.id, cardObj);
        cardObj.whenBuyCardTrigger(context)
        this.handCardMap.forEach((v, k) => {
            v.whenBuyOtherCardTrigger(cardObj, context)
        })
    }

    userCard(cardObj: BaseCardObj, context: ContextObj) {
        if (this.handCardMap.delete(cardObj.id)) {
            cardObj.whenCardUsedTrigger(context);
            this.handCardMap.forEach((v, k) => {
                v.whenOtherCardUsedTrigger(cardObj, context)
            })
        }
    }

    canSaleCard(cardObj: BaseCardObj) {
        return cardObj.baseCard.canSold;
    }

    saleCard(cardObj: BaseCardObj, context: ContextObj) {
        if (this.handCardMap.delete(cardObj.id)) {
            this.currentGoldCoin += cardObj.baseCard.salePrice;
            cardObj.whenSaleCardTrigger(context);
            this.handCardMap.forEach((v, k) => {
                v.whenSaleOtherCardTrigger(cardObj, context)
            })
        }
    }
}
