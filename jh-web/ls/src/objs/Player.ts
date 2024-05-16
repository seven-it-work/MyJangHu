import BaseCardObj from "./BaseCardObj";
import ContextObj from "./ContextObj";
import Taverns from "./Taverns";
import {message} from 'ant-design-vue';
import {cloneDeep, groupBy} from "lodash";
import {TriggerObj} from "../entity/Trigger";
import SharedCardPool from "./SharedCardPool";
import {Serialization} from "../utils/SaveUtils";
import {serialize} from "class-transformer";
import Sanlian from "../entity/card/spells/base/Sanlian.ts";
import BaseCard from "../entity/baseCard";

export default class Player implements Serialization<Player> {

    constructor(name: string | undefined, tavern: Taverns | undefined) {
        if (name) {
            this.name = name;
        }
        if (tavern) {
            this.tavern = tavern;
        }
    }

    tavern: Taverns;

    currentGoldCoin: number = 3;
    // 最大铸币加成
    private currentMaxGoldCoin: number = 3;
    // 最大铸币加成
    maxGoldCoinBonus: number = 0;
    currentLife: number = 30;
    currentArmor: number = 0;
    private _handCardMap: Map<String, BaseCardObj> = new Map<String, BaseCardObj>();
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
    // 姓名
    name: string;
    // 法术附加能力（回合结束时）
    spellAttached: BaseCard[] = [];

    private readonly static MAX_HAND_CARD: number = 10;

    get handCardList(): BaseCardObj[] {
        return Array.from(this._handCardMap.values());
    }

    addCardInHand(baseCardObj: BaseCardObj, sharedCardPool: SharedCardPool) {
        this._handCardMap.set(baseCardObj.id, baseCardObj);
        // 三连判定
        if (baseCardObj.baseCard.type === '随从' && !baseCardObj.baseCard.isGold) {
            this.sanLianCheck(sharedCardPool);
        }
    }

    private sanLianCheck(sharedCardPool: SharedCardPool) {
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
                for (let i = 0; i < Math.floor(v.length / 3); i++) {
                    const cardObj = []
                    for (let j = i * 3; j < v.length; j++) {
                        const vElement = v[j];
                        cardObj.push(vElement.baseCardObj)
                        if (vElement.form === 'cardList') {
                            delete this.cardList[vElement.index]
                        } else {
                            this._handCardMap.delete(vElement.baseCardObj.id);
                        }
                    }
                    // 给一张三连和升级牌
                    console.log("给一张三连和升级牌")
                    const baseCardObj = BaseCardObj.sanLian(cardObj[0], cardObj[1], cardObj[2], sharedCardPool);
                    this.addCardInHand(baseCardObj, sharedCardPool)
                }
                this.cardList = this.cardList.filter(item => item);
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
        if (cardObj.baseCard.isSpendLife) {
            return true
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
        cardObj.baseCard.attackBonus.push(...this.tavern.attackBonus)
        cardObj.baseCard.lifeBonus.push(...this.tavern.lifeBonus)

        this.addCardInHand(cardObj, context.sharedCardPool)
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

    canUseCard(cardObj: BaseCardObj): boolean {
        if (cardObj.baseCard.type !== '随从') {
            return true;
        }
        if (cardObj.baseCard.isMagneticForce) {
            return this.cardList.length <= 7
        }
        return this.cardList.length < 7;
    }

    initCardListInFighting() {
        this.cardListInFighting = cloneDeep(this.cardList)
    }

    addCard(cardObj: BaseCardObj, nextCard: BaseCardObj | undefined, triggerObj: TriggerObj) {
        const cardList = this.getCardList();
        if (cardList.length < 7) {
            // 召唤触发器
            cardObj.whenSummonedTrigger({
                ...triggerObj,
                currentPlayer: this,
                currentCard: cardObj,
            })
            cardList.forEach(card => {
                card.whenOtherSummonedTrigger({
                    ...triggerObj,
                    currentPlayer: this,
                    currentCard: card,
                    targetCard: cardObj
                })
            })
            if (nextCard) {
                const nextCardIndex = cardList.findIndex((card) => card.id === nextCard.id)
                cardList.splice(nextCardIndex, 0, cardObj);
            } else {
                cardList.push(cardObj)
            }
        }
    }

    useCard(cardObj: BaseCardObj, nextCard: BaseCardObj | undefined, triggerObj: TriggerObj) {
        if (!this.canUseCard(cardObj)) {
            message.error({content: '最多有7个随从'});
            return
        }
        // 如果是磁力，但是下一个不是机械，且this.cardList.length <= 7认为不能上场
        if (cardObj.baseCard.isMagneticForce && this.cardList.length <= 7) {
            if (!nextCard || !nextCard.baseCard.ethnicity.includes("机械")) {
                message.error({content: '最多有7个随从，磁力请放在机械左侧'});
                return
            }
        }
        if (this._handCardMap.delete(cardObj.id)) {
            if (cardObj.baseCard.type === '随从') {
                // 磁力判断
                if (cardObj.baseCard.isMagneticForce && nextCard && nextCard.baseCard.ethnicity.includes("机械")) {
                    nextCard.baseCard.magneticForceList.push(cardObj.baseCard);
                    // 磁力效果后，将返回卡牌池
                    triggerObj.contextObj.sharedCardPool.cardIn(cardObj.baseCard)
                    return;
                }
                cardObj.whenCardUsedTrigger({
                    ...triggerObj,
                    currentPlayer: this,
                    targetCard: cardObj,
                });
                this.cardList.forEach((v) => {
                    v.whenOtherCardUsedTrigger({
                        ...triggerObj,
                        currentCard: v,
                        currentPlayer: this,
                        targetCard: cardObj,
                    })
                })
                this._handCardMap.forEach((v) => {
                    v.whenOtherHandlerCardUsedTrigger({
                        ...triggerObj,
                        currentCard: v,
                        currentPlayer: this,
                        targetCard: cardObj,
                    })
                })
                this.addCard(cardObj, nextCard, {
                    ...triggerObj,
                    currentPlayer: this,
                    currentCard: cardObj,
                })
                if (cardObj.baseCard.isGold) {
                    // 使用金色卡，获得三连卡
                    const sanlian = new Sanlian();
                    sanlian.graded = Math.min(6, this.tavern.graded + 1)
                    this.addCardInHand(new BaseCardObj(sanlian), triggerObj.contextObj.sharedCardPool)
                }
            } else {
                cardObj.whenCardUsedTrigger(triggerObj);
            }
        }
    }

    canSaleCard(cardObj: BaseCardObj): Boolean {
        return cardObj.baseCard.canSold;
    }

    saleCard(cardObj: BaseCardObj, context: ContextObj) {
        if (this.cardList.map(card => card.id).includes(cardObj.id)) {
            this.cardList = this.cardList.filter(card => card.id !== cardObj.id)
            console.log(`(${this.name})出售【${cardObj.baseCard.name}(${cardObj.attack}/${cardObj.life})】`)
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
            this.cardList.forEach((v) => {
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
        if (this.freeRefreshTimes > 0) {
            return true
        }
        return this.currentGoldCoin >= this.tavern.refreshExpenses
    }

    // 免费刷新次数
    freeRefreshTimes: number = 0;

    refreshTavern(context: ContextObj) {
        let refreshExpenses = this.tavern.refreshExpenses;
        if (this.freeRefreshTimes > 0) {
            refreshExpenses = 0
        }
        const triggerObj = {contextObj: context, currentPlayer: this};
        // 刷新消耗生命值
        const baseCardObjs = this.cardList.filter(card => card.baseCard.remainRefreshTimes > 0);
        if (baseCardObjs.length > 0) {
            const baseCardObj = baseCardObjs[0];
            baseCardObj.baseCard.remainRefreshTimes--;
            this.changeLife(-refreshExpenses, triggerObj);
        } else {
            if (!this.canRefreshTavern()) {
                message.error({content: '金币不足，不能刷新'});
                return
            }
            this.currentGoldCoin -= refreshExpenses
        }
        if (this.freeRefreshTimes > 0) {
            this.freeRefreshTimes--;
        }
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
            this.cardList.forEach(card => card.whenPlayerInjuries(-changeValue, {
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
        this.cardList.forEach(card => card.whenEndRound({
            ...triggerObj,
            currentCard: card,
            currentPlayer: this,
        }))
        // 系统默认影响
        // 1、属性计算完成后，将cardListInFighting进行赋值
        this.cardListInFighting = cloneDeep(this.cardList)
        this.deadCardListInFighting = []
        // 系统默认影响，放在结束回合，防止金币加成导致的错误问题
        // 1、金币上限+1（最大10）
        this.currentMaxGoldCoin = Math.min(10, this.currentMaxGoldCoin + 1)
        // 2、铸币=上限值
        this.currentGoldCoin = this.getMaxGoldCoin();
        // 刷新未冻结的随从
        this.tavern.refresh(triggerObj, false)
        // 3、酒馆升级--
        this.tavern.currentUpgradeExpenses = Math.max(0, this.tavern.currentUpgradeExpenses - 1)
    }

    /**
     * 开始回合
     */
    startTheRound(triggerObj: TriggerObj) {
        this.isEndRound = false;
        this.sanLianCheck(triggerObj.contextObj.sharedCardPool);
        // 手牌影响
        Array.from(this._handCardMap.values()).forEach(card => card.whenStartRoundHandler({
            ...triggerObj,
            currentCard: card,
            currentPlayer: this,
        }))
        // 战场影响
        this.cardList.forEach(card => card.whenStartRound({
            ...triggerObj,
            currentCard: card,
            currentPlayer: this,
        }))
        // 法术能力加成，由法术自己移除
        this.spellAttached.forEach(card => card.whenStartRound(triggerObj))
    }

    /**
     * 移除卡片
     */
    cardRemove(baseCardObj: BaseCardObj) {
        if (this.isEndRound) {
            this.cardListInFighting = this.cardListInFighting.filter(card => card.id !== baseCardObj.id);
        } else {
            this.cardList = this.cardList.filter(card => card.id !== baseCardObj.id);
        }
    }

    updateCardListInFighting() {
        this.cardListInFighting = this.cardListInFighting.filter(card => card.isSurviving());
    }

    deserialize(json: any): Player {
        if (typeof json === 'string') {
            json = JSON.parse(json)
        }
        this.tavern = new Taverns().deserialize(json.tavern)
        this.currentGoldCoin = json.currentGoldCoin
        this.currentMaxGoldCoin = json.currentMaxGoldCoin
        this.maxGoldCoinBonus = json.maxGoldCoinBonus
        this.currentLife = json.currentLife
        this.currentArmor = json.currentArmor
        Object.keys(json._handCardMap).forEach(k => {
            this._handCardMap.set(k, new BaseCardObj(undefined).deserialize(json._handCardMap[k]))
        })
        this.cardList = json.cardList.map(data => new BaseCardObj(undefined).deserialize(data))
        this.cardListInFighting = json.cardList.map(data => new BaseCardObj(undefined).deserialize(data))
        this.deadCardListInFighting = json.cardList.map(data => new BaseCardObj(undefined).deserialize(data))
        this.battleRoarExtraTriggers = json.battleRoarExtraTriggers
        this.deadWordsExtraTriggers = json.deadWordsExtraTriggers
        this.endRoundExtraTriggers = json.endRoundExtraTriggers
        this.isEndRound = json.isEndRound
        this.name = json.name
        return this;
    }

    serialization(): string {
        return JSON.stringify({
            ...JSON.parse(JSON.stringify(this)),
            tavern: this.tavern.serialization(),
            _handCardMap: JSON.parse(serialize(this._handCardMap))
        });
    }

    getCardList() {
        if (this.isEndRound) {
            return this.cardListInFighting
        } else {
            return this.cardList;
        }
    }

    findNextCard(currentCard: BaseCardObj): BaseCardObj | undefined {
        const cardList = this.getCardList();
        const number = cardList.findIndex(value => value.id === currentCard.id);
        if (number >= 0 && number < cardList.length) {
            return cardList[number]
        }
        return undefined
    }
}
