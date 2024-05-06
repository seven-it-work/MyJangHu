import BaseCardObj from "./BaseCardObj";
import ContextObj from "./ContextObj";
import Taverns from "./Taverns";
import {message} from 'ant-design-vue';
import {cloneDeep} from "lodash";

export default class Player {


    constructor(tavern: Taverns) {
        this.tavern = tavern;
    }

    tavern: Taverns;

    currentGoldCoin: number = 3;
    // 最大铸币加成
    private currentMaxGoldCoin: number = 3;
    // 最大铸币加成
    private maxGoldCoinBonus: number = 0;
    currentLife: number = 30;
    currentArmor: number = 0;
    handCardMap: Map<String, BaseCardObj> = new Map<String, BaseCardObj>();
    // 场上的牌
    cardList: BaseCardObj[] = [];
    // 战斗中的牌
    cardListInFighting: BaseCardObj[] = [];
    // 战斗死亡池
    deadCardListInFighting: BaseCardObj[] = [];
    /**
     * 战吼额外触发次数
     */
    battleRoarExtraTriggers: number = 0;
    /**
     * 亡语额外触发次数
     */
    deadWordsExtraTriggers: number = 0;
    /**
     * 回合结束额外触发次数
     */
    endRoundExtraTriggers: number = 0;
    /**
     * 回合是否结束
     */
    isEndRound: boolean = false;

    private readonly static MAX_HAND_CARD: number = 10;

    getMaxGoldCoin(): number {
        return this.currentMaxGoldCoin + this.maxGoldCoinBonus
    }

    canBuyCard(cardObj: BaseCardObj): Boolean {
        if (this.handCardMap.size >= Player.MAX_HAND_CARD) {
            console.log("手牌满了")
            return false
        }
        return this.currentGoldCoin >= cardObj.baseCard.spendingGoldCoin
    }

    freeze(cardList: BaseCardObj[]) {
        this.tavern.freeze(cardList);
    }

    buyCard(cardObj: BaseCardObj, context: ContextObj) {
        if (!this.canBuyCard(cardObj)) {
            message.error({content: '金币不足，不能购买'});
            return;
        }
        if (cardObj.baseCard.isSpendLife) {
            this.changeLife(-cardObj.baseCard.spendingGoldCoin, context);
            //  todo 死亡判断
        } else {
            this.currentGoldCoin -= cardObj.baseCard.spendingGoldCoin;
        }
        this.tavern.removeCard(cardObj, context)
        // 酒馆加成写入
        cardObj.baseCard.attack += this.tavern.tavernAttackBonus;
        cardObj.baseCard.life += this.tavern.tavernLifeBonus;

        this.handCardMap.set(cardObj.id, cardObj);
        cardObj.whenBuyCardTrigger(context)
        this.handCardMap.forEach((v) => {
            v.whenBuyOtherCardTrigger(cardObj, context)
        })
    }

    canUseCard(): boolean {
        return this.cardList.length < 7;
    }

    useCard(cardObj: BaseCardObj, context: ContextObj) {
        if (!this.canUseCard()) {
            message.error({content: '最多有7个随从'});
            return
        }
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
        if (this.cardList.map(card => card.id).includes(cardObj.id)) {
            this.cardList = this.cardList.filter(card => card.id !== cardObj.id)
            this.currentGoldCoin += cardObj.baseCard.salePrice;
            this.tavern.saleCard(cardObj, context)
            cardObj.whenSaleCardTrigger(context);
            // 手牌出售监听，战场出售监听
            this.handCardMap.forEach((v) => {
                v.whenSaleOtherHandlerCardTrigger(cardObj, context)
            })
            this.cardList.forEach((v) => {
                v.whenSaleOtherCardTrigger(cardObj, context)
            })
        }
    }

    canRefreshTavern(): Boolean {
        return this.currentGoldCoin >= this.tavern.refreshExpenses
    }

    refreshTavern(context: ContextObj) {
        // 刷新消耗生命值
        const baseCardObjs = this.cardList.filter(card => card.baseCard.remainRefreshTimes > 0);
        if (baseCardObjs.length > 0) {
            const baseCardObj = baseCardObjs[0];
            baseCardObj.baseCard.remainRefreshTimes--;
            this.changeLife(-1, context);
            this.tavern.refresh(context)
            return;
        }
        if (!this.canRefreshTavern()) {
            message.error({content: '金币不足，不能刷新'});
            return
        }
        this.currentGoldCoin -= this.tavern.refreshExpenses
        this.tavern.refresh(context)
    }

    canUpgradeTavern(): Boolean {
        return this.currentGoldCoin >= this.tavern.currentUpgradeExpenses
    }

    upgradeTavern() {
        if (!this.canUpgradeTavern()) {
            message.error({content: '金币不足，不能升级'});
            return
        }
        this.currentGoldCoin -= this.tavern.currentUpgradeExpenses
        this.tavern.upgrade()
    }

    changeLife(changeValue: number, contextObj: ContextObj, onlyLife: Boolean = false) {
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
        if (changeValue < 0) {
            this.cardList.forEach(card => card.whenPlayerInjuries(-changeValue, contextObj))
        }
    }

    /**
     * 结束回合
     */
    endTheRound(contextObj: ContextObj) {
        this.isEndRound = true;
        // 手牌影响
        Array.from(this.handCardMap.values()).forEach(card => card.whenEndRoundHandler(contextObj))
        // 战场影响
        this.cardList.forEach(card => card.whenEndRound(contextObj))
        // 系统默认影响
        // 1、属性计算完成后，将cardListInFighting进行赋值
        this.cardListInFighting = cloneDeep(this.cardList)
        this.deadCardListInFighting = []
    }

    /**
     * 开始回合
     */
    startTheRound(contextObj: ContextObj) {
        this.isEndRound = false;
        // 手牌影响
        Array.from(this.handCardMap.values()).forEach(card => card.whenStartRoundHandler(contextObj))
        // 战场影响
        this.cardList.forEach(card => card.whenStartRound(contextObj))
        // 系统默认影响
        // 1、金币上限+1（最大10）
        this.currentMaxGoldCoin = Math.min(10, this.currentMaxGoldCoin + 1)
        // 2、铸币=上限值
        this.currentGoldCoin = this.getMaxGoldCoin();
        // 刷新未冻结的随从
        this.tavern.refresh(contextObj)
    }
}
