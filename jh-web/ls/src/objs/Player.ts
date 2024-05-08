import BaseCardObj from "./BaseCardObj";
import ContextObj from "./ContextObj";
import Taverns from "./Taverns";
import {message} from 'ant-design-vue';
import {cloneDeep, groupBy} from "lodash";
import {TriggerObj} from "../entity/Trigger";

export default class Player {
    get cardList(): BaseCardObj[] {
        return cloneDeep(this._cardList);
    }

    get cardListInFighting(): BaseCardObj[] {
        return cloneDeep(this._cardListInFighting);
    }

    constructor(name: string, tavern: Taverns) {
        this.name = name;
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
    private _handCardMap: Map<String, BaseCardObj> = new Map<String, BaseCardObj>();
    // 场上的牌
    private _cardList: BaseCardObj[] = [];
    // 战斗中的牌
    private _cardListInFighting: BaseCardObj[] = [];
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
    // 姓名
    name: string;

    private readonly static MAX_HAND_CARD: number = 10;

    get handCardList(): BaseCardObj[] {
        return Array.from(this._handCardMap.values());
    }

    addCardInHand(baseCardObj: BaseCardObj) {
        this._handCardMap.set(baseCardObj.id, baseCardObj);
        // 三连判定
        this.sanLianCheck();
    }

    private sanLianCheck() {
        if (!this.isEndRound) {
            const merges = new Map<string, { index: number, form: 'handCardList' | 'cardList', baseCardObj: BaseCardObj }[]>();
            for (let i = 0; i < this.handCardList.length; i++) {
                const merge = merges.get(this.handCardList[i].baseCard.constructor.name) || [];
                merge.push({
                    index: i,
                    form: 'handCardList',
                    baseCardObj: this.handCardList[i],
                })
                merges.set(this.handCardList[i].baseCard.constructor.name, merge)
            }
            for (let i = 0; i < this.cardList.length; i++) {
                const merge = merges.get(this.cardList[i].baseCard.constructor.name) || [];
                merge.push({
                    index: i,
                    form: 'cardList',
                    baseCardObj: this.cardList[i],
                })
                merges.set(this.cardList[i].baseCard.constructor.name, merge)
            }
            merges.forEach((v) => {
                console.log(v.length)
                for (let i = 0; i < Math.floor(v.length / 3); i++) {
                    for (let j = i * 3; j < v.length; j++) {
                        const vElement = v[j];
                        if (vElement.form === 'cardList') {
                            delete this._cardList[vElement.index]
                        } else {
                            this._handCardMap.delete(vElement.baseCardObj.id);
                        }
                    }
                    // 给一张三连和升级牌
                    console.log("给一张三连和升级牌")
                    // todo 设计如何三连 和 升级牌
                }
            })
        }
    }

    isSurvival(): boolean {
        return this.currentLife > 0;
    }

    getMaxGoldCoin(): number {
        return this.currentMaxGoldCoin + this.maxGoldCoinBonus
    }

    canBuyCard(cardObj: BaseCardObj): Boolean {
        if (this._handCardMap.size >= Player.MAX_HAND_CARD) {
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
            this.changeLife(-cardObj.baseCard.spendingGoldCoin, {
                currentCard: cardObj,
                contextObj: context,
                currentPlayer: this
            });
            //  todo 死亡判断
        } else {
            this.currentGoldCoin -= cardObj.baseCard.spendingGoldCoin;
        }
        this.tavern.removeCard(cardObj, context)
        // 酒馆加成写入
        cardObj.baseCard.attack += this.tavern.tavernAttackBonus;
        cardObj.baseCard.life += this.tavern.tavernLifeBonus;

        this.addCardInHand(cardObj)
        cardObj.whenBuyCardTrigger({
            currentCard: cardObj,
            contextObj: context,
            currentPlayer: this
        })
        this._handCardMap.forEach((v) => {
            v.whenBuyOtherCardTrigger({
                currentCard: v,
                contextObj: context,
                currentPlayer: this,
                targetCard: cardObj,
            })
        })
    }

    canUseCard(): boolean {
        return this._cardList.length < 7;
    }

    initCardListInFighting() {
        this._cardListInFighting = cloneDeep(this._cardList)
    }

    addCard(cardObj: BaseCardObj, triggerObj: TriggerObj) {
        if (this.isEndRound) {
            // 回合结束完成，召唤都在战场上
            if (this._cardListInFighting.length < 7) {
                // 召唤触发器
                cardObj.whenSummonedTrigger({
                    ...triggerObj,
                    currentPlayer: this,
                    currentCard: cardObj,
                })
                this._cardListInFighting.forEach(card => {
                    card.whenOtherSummonedTrigger({
                        ...triggerObj,
                        currentPlayer: this,
                        currentCard: card,
                        targetCard: cardObj
                    })
                })
                this._cardListInFighting.push(cardObj)
            }
        } else {
            if (this._cardList.length < 7) {
                // 召唤触发器
                cardObj.whenSummonedTrigger({
                    ...triggerObj,
                    currentPlayer: this,
                    currentCard: cardObj,
                })
                this._cardList.forEach(card => {
                    card.whenOtherSummonedTrigger({
                        ...triggerObj,
                        currentPlayer: this,
                        currentCard: card,
                        targetCard: cardObj
                    })
                })
                this._cardList.push(cardObj)
            }
        }
    }

    useCard(cardObj: BaseCardObj, context: ContextObj) {
        if (!this.canUseCard()) {
            message.error({content: '最多有7个随从'});
            return
        }
        if (this._handCardMap.delete(cardObj.id)) {
            cardObj.whenCardUsedTrigger({
                contextObj: context,
                currentPlayer: this,
                targetCard: cardObj,
            });
            this._cardList.forEach((v) => {
                v.whenOtherCardUsedTrigger({
                    currentCard: v,
                    contextObj: context,
                    currentPlayer: this,
                    targetCard: cardObj,
                })
            })
            this._handCardMap.forEach((v) => {
                v.whenOtherHandlerCardUsedTrigger({
                    currentCard: v,
                    contextObj: context,
                    currentPlayer: this,
                    targetCard: cardObj,
                })
            })
            this.addCard(cardObj, {
                contextObj: context,
                currentPlayer: this,
                currentCard: cardObj,
            })
        }
    }

    canSaleCard(cardObj: BaseCardObj): Boolean {
        return cardObj.baseCard.canSold;
    }

    saleCard(cardObj: BaseCardObj, context: ContextObj) {
        if (this._cardList.map(card => card.id).includes(cardObj.id)) {
            this._cardList = this._cardList.filter(card => card.id !== cardObj.id)
            this.currentGoldCoin += cardObj.baseCard.salePrice;
            this.tavern.saleCard(cardObj, context)
            cardObj.whenSaleCardTrigger({
                contextObj: context,
                currentPlayer: this,
                targetCard: cardObj,
            });
            // 手牌出售监听，战场出售监听
            this._handCardMap.forEach((v) => {
                v.whenSaleOtherHandlerCardTrigger({
                    currentCard: v,
                    contextObj: context,
                    currentPlayer: this,
                    targetCard: cardObj,
                })
            })
            this._cardList.forEach((v) => {
                v.whenSaleOtherCardTrigger({
                    currentCard: v,
                    contextObj: context,
                    currentPlayer: this,
                    targetCard: cardObj,
                })
            })
        }
    }

    canRefreshTavern(): Boolean {
        return this.currentGoldCoin >= this.tavern.refreshExpenses
    }

    refreshTavern(context: ContextObj) {
        const triggerObj = {contextObj: context, currentPlayer: this};
        // 刷新消耗生命值
        const baseCardObjs = this._cardList.filter(card => card.baseCard.remainRefreshTimes > 0);
        if (baseCardObjs.length > 0) {
            const baseCardObj = baseCardObjs[0];
            baseCardObj.baseCard.remainRefreshTimes--;
            this.changeLife(-1, triggerObj);
            this.tavern.refresh(triggerObj)
            return;
        }
        if (!this.canRefreshTavern()) {
            message.error({content: '金币不足，不能刷新'});
            return
        }
        this.currentGoldCoin -= this.tavern.refreshExpenses
        this.tavern.refresh(triggerObj)
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

    changeLife(changeValue: number, triggerObj: TriggerObj, onlyLife: Boolean = false) {
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
            this._cardList.forEach(card => card.whenPlayerInjuries(-changeValue, {
                ...triggerObj,
                currentCard: card,
                currentPlayer: this,
            }))
        }
    }

    /**
     * 结束回合
     */
    endTheRound(triggerObj: TriggerObj) {
        this.isEndRound = true;
        console.log(`玩家：【${this.name}】结束当前回合`)
        // 手牌影响
        Array.from(this._handCardMap.values()).forEach(card => card.whenEndRoundHandler({
            ...triggerObj,
            currentCard: card,
            currentPlayer: this,
        }))
        // 战场影响
        this._cardList.forEach(card => card.whenEndRound({
            ...triggerObj,
            currentCard: card,
            currentPlayer: this,
        }))
        // 系统默认影响
        // 1、属性计算完成后，将cardListInFighting进行赋值
        this._cardListInFighting = cloneDeep(this._cardList)
        this.deadCardListInFighting = []
    }

    /**
     * 开始回合
     */
    startTheRound(triggerObj: TriggerObj) {
        this.isEndRound = false;
        this.sanLianCheck();
        // 手牌影响
        Array.from(this._handCardMap.values()).forEach(card => card.whenStartRoundHandler({
            ...triggerObj,
            currentCard: card,
            currentPlayer: this,
        }))
        // 战场影响
        this._cardList.forEach(card => card.whenStartRound({
            ...triggerObj,
            currentCard: card,
            currentPlayer: this,
        }))
        // 系统默认影响
        // 1、金币上限+1（最大10）
        this.currentMaxGoldCoin = Math.min(10, this.currentMaxGoldCoin + 1)
        // 2、铸币=上限值
        this.currentGoldCoin = this.getMaxGoldCoin();
        // 刷新未冻结的随从
        this.tavern.refresh(triggerObj)
    }

    /**
     * 移除卡片
     */
    cardRemove(baseCardObj: BaseCardObj) {
        if (this.isEndRound) {
            this._cardListInFighting = this._cardListInFighting.filter(card => card.id !== baseCardObj.id);
        } else {
            this._cardList = this._cardList.filter(card => card.id !== baseCardObj.id);
        }
    }

    updateCardListInFighting() {
        this._cardListInFighting = this._cardListInFighting.filter(card => card.isSurviving());
    }
}
