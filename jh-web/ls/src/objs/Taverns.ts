import BaseCardObj from "./BaseCardObj";
import ContextObj from "./ContextObj";
import BaseCard from "../entity/baseCard";
import {TriggerObj} from "../entity/Trigger";
import {Bonus} from "./Bonus";
import {Serialization} from "../utils/SaveUtils";
import SharedCardPool from "./SharedCardPool";
import {serialize} from "class-transformer";

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
    7: {cardNumber: 6, upgradeExpenses: undefined, cardSize: 6},
}
export default class Taverns implements Serialization<Taverns> {
    // 生命加成
    lifeBonus: Bonus[] = [];
    // 攻击加成
    attackBonus: Bonus[] = [];
    // 酒馆等级
    graded: number = 1;
    // 当前卡片
    currentCard: Map<String, BaseCardObj> = new Map<String, BaseCardObj>()
    // 是否冻结 cardId
    freezeCardId: string[] = [];
    // 刷新费用
    refreshExpenses: number = 1;
    // 冻结费用
    freezeExpenses: number = 0;
    // 当前升级费用
    currentUpgradeExpenses: number = GRADED_RULES[1].upgradeExpenses;
    // 法术牌数量
    spellSize: number = 1;

    removeBonus(baseCardObj: BaseCardObj, type: 'attack' | 'life') {
        if (type === 'attack') {
            this.attackBonus = this.attackBonus.filter(b => b.baseCardId !== baseCardObj.id)
        } else {
            this.lifeBonus = this.lifeBonus.filter(b => b.baseCardId !== baseCardObj.id)
        }
    }

    isFreezeAll(): boolean {
        return this.freezeCardId.length >= this.currentCard.size;
    }

    refresh(triggerObj: TriggerObj, isClearAll = true) {
        const freezeId = []
        if (!isClearAll) {
            // 冻结随从不刷新
            freezeId.push(...this.freezeCardId)
        }
        this.freezeCardId = []
        let freezeSpellSize = 0;
        let freezeCardSize = 0;
        // 清理，冻结的不移除
        const keys = Array.from(this.currentCard.keys());
        keys.forEach((id) => {
            const baseCardObj = this.currentCard.get(id);
            if (baseCardObj) {
                if (freezeId.includes(baseCardObj.id)) {
                    if (baseCardObj.baseCard.type === '法术') {
                        freezeSpellSize++;
                    }
                    if (baseCardObj.baseCard.type === '随从') {
                        freezeCardSize++;
                    }
                    baseCardObj.isFreeze = false;
                } else {
                    // 释放已有的
                    triggerObj.contextObj.sharedCardPool.cardIn(baseCardObj.baseCard);
                    this.removeCard(baseCardObj, triggerObj.contextObj.sharedCardPool);
                }
            }
        })
        // 刷新随从
        if (freezeCardSize < GRADED_RULES[this.graded].cardNumber) {
            const baseCards: BaseCard[] = triggerObj.contextObj.sharedCardPool.refreshRandom(GRADED_RULES[this.graded].cardNumber - freezeCardSize, this.graded);
            baseCards.forEach(card => {
                // 刷新要锁定共享池，锁定新出的
                triggerObj.contextObj.sharedCardPool.cardOut(card);
                const baseCardObj = new BaseCardObj(card);
                this.currentCard.set(baseCardObj.id, baseCardObj)
            })
        }
        // 刷新法术
        if (freezeSpellSize < this.spellSize) {
            triggerObj.contextObj.sharedCardPool.listSpell(this.graded, this.spellSize - freezeSpellSize).forEach(card => {
                const spellCard = new BaseCardObj(card);
                this.currentCard.set(spellCard.id, spellCard)
            })
        }
    }

    upgrade() {
        this.graded++;
        this.currentUpgradeExpenses = GRADED_RULES[this.graded].upgradeExpenses;
    }

    /**
     * 购买后，移除
     */
    removeCard(cardObj: BaseCardObj, sharedCardPool: SharedCardPool) {
        this.currentCard.delete(cardObj.id)
        if (sharedCardPool) {
            sharedCardPool.cardOut(cardObj.baseCard)
        }
    }

    saleCard(cardObj: BaseCardObj, context: ContextObj) {
        if (context.sharedCardPool) {
            context.sharedCardPool.cardIn(cardObj.baseCard)
        }
    }

    freeze(cardList: BaseCardObj[]) {
        if (this.isFreezeAll()) {
            // 解冻
            this.freezeCardId = []
        } else {
            cardList.forEach(item => {
                this.freezeCardId.push(item.id)
            })
        }
        Array.from(this.currentCard.values()).forEach(card => {
            if (this.freezeCardId.includes(card.id)) {
                card.isFreeze = true;
            } else {
                card.isFreeze = false;
            }
        })
    }

    deserialize(json: any) {
        if (typeof json === 'string') {
            json = JSON.parse(json)
        }
        this.lifeBonus = json.lifeBonus
        this.attackBonus = json.attackBonus
        this.graded = json.graded
        Object.keys(json.currentCard).forEach(k => {
            this.currentCard.set(k, new BaseCardObj(undefined).deserialize(json.currentCard[k]))
        })
        this.freezeCardId = json.freezeCardId
        this.refreshExpenses = json.refreshExpenses
        this.freezeExpenses = json.freezeExpenses
        this.currentUpgradeExpenses = json.currentUpgradeExpenses
        return this;
    }

    serialization(): string {
        return JSON.stringify({
            ...JSON.parse(JSON.stringify(this)),
            currentCard: JSON.parse(serialize(this.currentCard))
        });
    }

    getCardList(type: '随从'): BaseCardObj[] {
        return [...this.currentCard.values()].filter(card => card.baseCard.type === type);
    }
}
