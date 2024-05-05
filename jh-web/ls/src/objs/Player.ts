import BaseCardObj from "./BaseCardObj";
import ContextObj from "./ContextObj";
import Taverns from "./Taverns";
import randomUtil from "../utils/RandomUtils";

export default class Player {


    constructor(tavern: Taverns) {
        this.tavern = tavern;
    }

    tavern: Taverns;

    currentGoldCoin: number = 0;
    currentMaxGoldCoin: number = 0;
    currentLife: number = 30;
    currentArmor: number = 0;
    handCardMap: Map<String, BaseCardObj> = new Map<String, BaseCardObj>();
    // 场上的牌
    cardList: BaseCardObj[] = [];
    // 战斗中的牌
    cardListInFighting: BaseCardObj[] = [];
    /**
     * 战吼额外触发次数
     */
    battleRoarExtraTriggers: number = 0;
    /**
     * 亡语额外触发次数
     */
    deadWordsExtraTriggers: number = 0;

    private readonly static MAX_HAND_CARD: number = 10;

    canBuyCard(cardObj: BaseCardObj): Boolean {
        if (this.handCardMap.size >= Player.MAX_HAND_CARD) {
            console.log("手牌满了")
            return false
        }
        return this.currentGoldCoin >= cardObj.baseCard.spendingGoldCoin
    }

    buyCard(cardObj: BaseCardObj, context: ContextObj) {
        if (!this.canBuyCard(cardObj)) {
            console.error("不能购买")
            return;
        }
        this.currentGoldCoin -= cardObj.baseCard.spendingGoldCoin;
        this.tavern.removeCard(cardObj, context)
        this.handCardMap.set(cardObj.id, cardObj);
        cardObj.whenBuyCardTrigger(context)
        this.handCardMap.forEach((v, k) => {
            v.whenBuyOtherCardTrigger(cardObj, context)
        })
    }

    canUseCard(cardObj: BaseCardObj): Boolean {
        return this.cardList.length < 7;
    }

    useCard(cardObj: BaseCardObj, context: ContextObj) {
        if (this.handCardMap.delete(cardObj.id)) {
            cardObj.whenCardUsedTrigger(context);
            this.cardList.forEach((v) => {
                v.whenOtherCardUsedTrigger(cardObj, context)
            })
            this.handCardMap.forEach((v) => {
                v.whenOtherHandlerCardUsedTrigger(cardObj, context)
            })
            this.cardList.push(cardObj)
        }
    }

    canSaleCard(cardObj: BaseCardObj): Boolean {
        return cardObj.baseCard.canSold;
    }

    saleCard(cardObj: BaseCardObj, context: ContextObj) {
        if (this.handCardMap.delete(cardObj.id)) {
            this.currentGoldCoin += cardObj.baseCard.salePrice;
            this.tavern.saleCard(cardObj, context)
            cardObj.whenSaleCardTrigger(context);
            this.handCardMap.forEach((v, k) => {
                v.whenSaleOtherCardTrigger(cardObj, context)
            })
        }
    }

    canRefreshTavern(): Boolean {
        return this.currentGoldCoin >= this.tavern.refreshExpenses
    }

    refreshTavern(context: ContextObj) {
        if (!this.canRefreshTavern()) {
            console.error("不能刷新")
        }
        this.currentGoldCoin -= this.tavern.refreshExpenses
        this.tavern.refresh(context)
    }

    canUpgradeTavern(): Boolean {
        return this.currentGoldCoin >= this.tavern.currentUpgradeExpenses
    }

    upgradeTavern() {
        if (!this.canUpgradeTavern()) {
            console.error("不能升级")
        }
        this.currentGoldCoin -= this.tavern.currentUpgradeExpenses
        this.tavern.upgrade()
    }

    changeLife(changeValue: number, onlyLife: Boolean = false) {
        if (!onlyLife) {
            if (this.currentArmor > 0) {
                this.currentArmor += changeValue;
                changeValue = 0;
            }
            if (this.currentArmor < 0) {
                changeValue = this.currentArmor;
                this.currentArmor = 0;
            }
        }
        this.currentLife += changeValue;
    }


}
