import BaseCard from "../entity/baseCard";
import ContextObj from "./ContextObj";
import {Trigger, TriggerObj} from "../entity/Trigger";
import Chance from 'chance'
import {cloneDeep} from "lodash";
import SharedCardPool from "./SharedCardPool";
import Player from "./Player";
import {Serialization} from "../utils/SaveUtils";
import {serialize} from "class-transformer";
import {FlipFlop, FlipFlopFunc, inversion} from "../entity/FlipFlop";

function damageCalculation(flipFlop: FlipFlop) {
    var targetCard = flipFlop.targetCard;
    var targetPlayer = flipFlop.targetPlayer;
    var currentCard = flipFlop.currentCard;
    var currentPlayer = flipFlop.currentPlayer;
    // 受到伤害
    let currentHarmed = 0;
    // 造成伤害
    let targetHarmed = 0;
    if (targetCard.baseCard.isHighlyToxic) {
        // 剧毒，用完就没了
        currentHarmed = currentCard.life;
        targetCard.baseCard.isHighlyToxic = false;
        console.log(`(${targetPlayer.name})的【${targetCard.baseCard.name}(${targetCard.attack}/${targetCard.life})】烈药已使用`)
    } else if (targetCard.baseCard.hasPoison) {
        // 毒药，能一直毒
        currentHarmed = currentCard.life;
        console.log(`(${targetPlayer.name})的【${targetCard.baseCard.name}(${targetCard.attack}/${targetCard.life})】剧毒触发`)
    } else if (targetCard.baseCard.attackHighlyToxic) {
        // 遭受攻击时，剧毒 todo 放到防御触发器里面 改 剧毒=true
        currentHarmed = currentCard.life;
        console.log(`(${targetPlayer.name})的【${targetCard.baseCard.name}(${targetCard.attack}/${targetCard.life})】遭受攻击时，剧毒`)
    } else {
        currentHarmed = targetCard.attack;
    }

    if (currentCard.baseCard.isHighlyToxic) {
        targetHarmed = targetCard.life;
        console.log(`(${currentPlayer.name})的【${currentCard.baseCard.name}(${currentCard.attack}/${currentCard.life})】烈毒已使用`)
        currentCard.baseCard.isHighlyToxic = false;
    } else if (currentCard.baseCard.hasPoison) {
        console.log(`(${currentPlayer.name})的【${currentCard.baseCard.name}(${currentCard.attack}/${currentCard.life})】剧毒触发`)
        targetHarmed = targetCard.life;
    } else {
        targetHarmed = currentCard.attack;
    }
    return {
        currentHarmed,
        targetHarmed
    }
}


export default class BaseCardObj implements Trigger, FlipFlopFunc, Serialization<BaseCardObj> {
    id: string;
    isFreeze: boolean = false;

    constructor(baseCard: BaseCard | undefined) {
        if (baseCard) {
            this.baseCard = cloneDeep(baseCard);
        }
        this.id = new Chance().guid();
    }

    getOriginalVersion(sharedCardPool: SharedCardPool) {
        return new BaseCardObj(sharedCardPool.getByName(this.baseCard.classType));
    }


    get life(): number {
        return this.baseCard.getLife();
    }

    get attack(): number {
        return this.baseCard.getAttack();
    }

    baseCard: BaseCard;

    static sanLian(baseCardObj1: BaseCardObj, baseCardObj2: BaseCardObj, baseCardObj3: BaseCardObj, sharedCardPool: SharedCardPool): BaseCardObj {
        const originalVersion = baseCardObj1.getOriginalVersion(sharedCardPool);
        originalVersion.baseCard.isGold = true;

        originalVersion.baseCard.attackBonus.push(...baseCardObj1.baseCard.attackBonus)
        originalVersion.baseCard.attackBonus.push(...baseCardObj2.baseCard.attackBonus)
        originalVersion.baseCard.attackBonus.push(...baseCardObj3.baseCard.attackBonus)

        originalVersion.baseCard.lifeBonus.push(...baseCardObj1.baseCard.lifeBonus)
        originalVersion.baseCard.lifeBonus.push(...baseCardObj2.baseCard.lifeBonus)
        originalVersion.baseCard.lifeBonus.push(...baseCardObj3.baseCard.lifeBonus)

        originalVersion.baseCard.magneticForceList.push(...baseCardObj1.baseCard.magneticForceList)
        originalVersion.baseCard.magneticForceList.push(...baseCardObj2.baseCard.magneticForceList)
        originalVersion.baseCard.magneticForceList.push(...baseCardObj3.baseCard.magneticForceList)

        originalVersion.baseCard.isMockery = baseCardObj1.baseCard.isMockery || baseCardObj2.baseCard.isMockery || baseCardObj3.baseCard.isMockery
        originalVersion.baseCard.isHighlyToxic = baseCardObj1.baseCard.isHighlyToxic || baseCardObj2.baseCard.isHighlyToxic || baseCardObj3.baseCard.isHighlyToxic
        originalVersion.baseCard.hasPoison = baseCardObj1.baseCard.hasPoison || baseCardObj2.baseCard.hasPoison || baseCardObj3.baseCard.hasPoison
        originalVersion.baseCard.attackHighlyToxic = baseCardObj1.baseCard.attackHighlyToxic || baseCardObj2.baseCard.attackHighlyToxic || baseCardObj3.baseCard.attackHighlyToxic
        originalVersion.baseCard.isHolyShield = baseCardObj1.baseCard.isHolyShield || baseCardObj2.baseCard.isHolyShield || baseCardObj3.baseCard.isHolyShield
        originalVersion.baseCard.isRebirth = baseCardObj1.baseCard.isRebirth || baseCardObj2.baseCard.isRebirth || baseCardObj3.baseCard.isRebirth
        originalVersion.baseCard.isSneak = baseCardObj1.baseCard.isSneak || baseCardObj2.baseCard.isSneak || baseCardObj3.baseCard.isSneak
        originalVersion.baseCard.numberAttack = Math.max(Math.max(baseCardObj1.baseCard.numberAttack, baseCardObj2.baseCard.numberAttack), baseCardObj3.baseCard.numberAttack)

        return originalVersion;
    }

    isSurviving() {
        return this.baseCard.isSurviving();
    }

    healthChange(number: number, triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        if (number < 0) {
            if (this.baseCard.isHolyShield) {
                // 圣盾
                this.baseCard.isHolyShield = false;
                this.whenHolyShieldDisappears(triggerObj)
                const cardList = currentPlayer.getCardList();
                cardList.forEach(card => {
                    this.whenOtherHolyShieldDisappears({
                        ...triggerObj,
                        currentCard: card,
                        targetCard: this,
                    })
                })
                number = 0;
                console.log(`(${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】的圣盾失效`)
            }
            console.log(`(${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】遭受${number}伤害`)
            this.baseCard.changeInjuriesReceived(-number);
            this.whenHarmedTrigger(number, triggerObj)
            triggerObj.currentPlayer?.getCardList().filter(item => item.id !== this.id).forEach(item => {
                item.whenOtherHarmedTrigger(number, {
                    ...triggerObj,
                    currentCard: item,
                    targetCard: this,
                })
            })
            if (this.isSurviving()) {
                return;
            }
            console.log(`(${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】死亡`)
            // 加入死亡池
            currentPlayer.deadCardListInFighting.push(this)
            // 复生，随从原本属性
            if (this.baseCard.isRebirth) {
                const baseCardTemp = triggerObj.contextObj.sharedCardPool.getByName(this.baseCard.classType);
                baseCardTemp.changeInjuriesReceived(this.baseCard.getPrimitiveLife() - 1);
                baseCardTemp.isRebirth = false;
                this.baseCard = baseCardTemp
                console.log(`${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】复生`)
            } else {
                // 移除
                currentPlayer.cardRemove(this);
            }
            // 触发亡语
            this.whenDeadTrigger(triggerObj);
            // 当其他随从死亡时触发器
            currentPlayer.getCardList().forEach(card => card.whenOtherDeadTrigger({
                ...triggerObj,
                currentCard: card,
                targetCard: this,
            }));
        } else {
            this.baseCard.life += number
        }
    }


    /**
     * 当其他随从死亡时触发器
     */
    whenOtherDeadTrigger(triggerObj: TriggerObj) {
        if (this.baseCard.otherDeadMaxCounter <= 0) {
            return;
        }
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        this.baseCard.otherDeadCounter++;
        console.log(`(${currentPlayer.name})的【${this.baseCard.name}】的复仇剩余个数${this.baseCard.otherDeadMaxCounter - this.baseCard.otherDeadCounter}`)
        if (this.baseCard.otherDeadCounter >= this.baseCard.otherDeadMaxCounter) {
            this.baseCard.whenOtherDeadTrigger(this.triggerObj2BaseCard(triggerObj));
            this.baseCard.otherDeadCounter = 0;
        }
    }

    private triggerObj2BaseCard(triggerObj: TriggerObj): TriggerObj {
        return {
            ...triggerObj,
            currentPlayer: triggerObj.currentPlayer,
            targetPlayer: triggerObj.targetPlayer,
            currentCard: triggerObj.currentCard || this,
            targetCard: triggerObj.targetCard,
        }
    }

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        for (let i = 0; i <= currentPlayer.deadWordsExtraTriggers; i++) {
            // 磁力效果
            this.baseCard.magneticForceList.forEach(base => base.whenDeadTrigger(triggerObj));
            this.baseCard.whenDeadTrigger(this.triggerObj2BaseCard(triggerObj));
        }
    }

    /**
     * 当前使用随从时触发器
     * (战吼)
     */
    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        if (this.baseCard.isWarRoars) {
            for (let i = 0; i <= currentPlayer.battleRoarExtraTriggers; i++) {
                this.baseCard.whenCardUsedTrigger(this.triggerObj2BaseCard(triggerObj));
                // 战吼监听触发
                currentPlayer.cardList.forEach((v) => {
                    v.whenOtherCardUsedTrigger({
                        ...triggerObj,
                        currentCard: v,
                        targetCard: this,
                    })
                })
            }
        } else {
            currentPlayer.cardList.forEach((v) => {
                v.whenOtherCardUsedTrigger({
                    ...triggerObj,
                    currentCard: v,
                    targetCard: this,
                })
            })
        }
    }

    whenSummonedTrigger(triggerObj: TriggerObj) {
        this.baseCard.whenSummonedTrigger(this.triggerObj2BaseCard(triggerObj))
    }

    whenBuyCardTrigger(triggerObj: TriggerObj) {
        this.baseCard.whenBuyCardTrigger(this.triggerObj2BaseCard(triggerObj))
    }

    whenSaleCardTrigger(triggerObj: TriggerObj) {
        this.baseCard.whenSaleCardTrigger(this.triggerObj2BaseCard(triggerObj))
    }


    whenBuyOtherCardTrigger(triggerObj: TriggerObj) {
        this.baseCard.whenBuyOtherCardTrigger(this.triggerObj2BaseCard(triggerObj))
    }

    whenOtherSummonedTrigger(triggerObj: TriggerObj) {
        this.baseCard.whenOtherSummonedTrigger(this.triggerObj2BaseCard(triggerObj))
    }

    whenSaleOtherCardTrigger(triggerObj: TriggerObj) {
        this.baseCard.whenSaleOtherCardTrigger(this.triggerObj2BaseCard(triggerObj))
    }

    whenSaleOtherHandlerCardTrigger(triggerObj: TriggerObj) {
        this.baseCard.whenSaleOtherHandlerCardTrigger(this.triggerObj2BaseCard(triggerObj))
    }

    whenOtherCardUsedTrigger(triggerObj: TriggerObj) {
        this.baseCard.whenOtherCardUsedTrigger(this.triggerObj2BaseCard(triggerObj))
    }

    whenOtherHandlerCardUsedTrigger(triggerObj: TriggerObj) {
        this.baseCard.whenOtherHandlerCardUsedTrigger(this.triggerObj2BaseCard(triggerObj))
    }

    whenAttackTrigger(triggerObj: TriggerObj) {
        const targetCard = triggerObj.targetCard;
        const currentPlayer = triggerObj.currentPlayer;
        const targetPlayer = triggerObj.targetPlayer;
        if (!targetCard) {
            return
        }
        if (!currentPlayer) {
            return
        }
        if (!targetPlayer) {
            return
        }
        // 风怒
        for (let i = 0; i < this.baseCard.numberAttack; i++) {
            if (this.isSurviving()) {
                this.doAttack(currentPlayer, targetPlayer, targetCard, triggerObj);
            }
        }
    }

    private doAttack(currentPlayer: Player, targetPlayer: Player, targetCard: BaseCardObj, triggerObj: TriggerObj) {
        console.log(`(${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】对(${targetPlayer.name})的【${targetCard.baseCard.name}(${targetCard.attack}/${targetCard.life})】进行攻击`)
        this.baseCard.whenAttackTrigger(this.triggerObj2BaseCard(triggerObj))
        targetCard.whenDefenseTrigger({
            ...triggerObj,
            currentPlayer: targetPlayer,
            targetPlayer: currentPlayer,
            currentCard: targetCard,
            targetCard: this
        })
        // 受到伤害
        let toBeHarmed = 0;
        // 造成伤害
        let toCauseHarm = 0;
        if (targetCard.baseCard.isHighlyToxic) {
            // 剧毒，用完就没了
            toBeHarmed = this.life;
            targetCard.baseCard.isHighlyToxic = false;
            console.log(`(${targetPlayer.name})的【${targetCard.baseCard.name}(${targetCard.attack}/${targetCard.life})】烈药已使用`)
        } else if (targetCard.baseCard.hasPoison) {
            // 毒药，能一直毒
            toBeHarmed = this.life;
            console.log(`(${targetPlayer.name})的【${targetCard.baseCard.name}(${targetCard.attack}/${targetCard.life})】剧毒触发`)
        } else if (targetCard.baseCard.attackHighlyToxic) {
            // 遭受攻击时，剧毒 todo 放到防御触发器里面 改 剧毒=true
            toBeHarmed = this.life;
            console.log(`(${targetPlayer.name})的【${targetCard.baseCard.name}(${targetCard.attack}/${targetCard.life})】遭受攻击时，剧毒`)
        } else {
            toBeHarmed = targetCard.attack;
        }

        if (this.baseCard.isHighlyToxic) {
            toCauseHarm = targetCard.life;
            console.log(`(${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】烈毒已使用`)
            this.baseCard.isHighlyToxic = false;
        } else if (this.baseCard.hasPoison) {
            console.log(`(${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】剧毒触发`)
            toCauseHarm = targetCard.life;
        } else {
            toCauseHarm = this.attack;
        }
        this.healthChange(-toBeHarmed, {
            ...triggerObj,
            currentPlayer: currentPlayer,
            targetPlayer: targetPlayer,
            currentCard: this,
            targetCard: targetCard
        })
        targetCard.healthChange(-toCauseHarm, {
            ...triggerObj,
            currentPlayer: targetPlayer,
            targetPlayer: currentPlayer,
            currentCard: targetCard,
            targetCard: this
        })
        if (!targetCard.isSurviving()) {
            this.whenKillOneTrigger({
                ...triggerObj,
                targetCard: targetCard,
            })
        }
        if (!this.isSurviving()) {
            targetCard.whenKillOneTrigger({
                ...triggerObj,
                currentPlayer: targetPlayer,
                targetPlayer: currentPlayer,
                currentCard: targetCard,
                targetCard: this
            })
        }
    }

    attacking(triggerObj: TriggerObj) {
        this.whenAttackTrigger(triggerObj)
    }

    whenEndRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        triggerObj = this.triggerObj2BaseCard(triggerObj);
        for (let i = 0; i <= currentPlayer.endRoundExtraTriggers; i++) {
            // 法术附加
            this.baseCard.spellAttached.forEach(card => {
                card.whenEndRound({
                    ...triggerObj,
                    targetCard: this,
                })
            })
            // 磁力效果
            this.baseCard.magneticForceList.forEach(card => card.whenEndRound(triggerObj))
            this.baseCard.whenEndRound(triggerObj)
        }
    }

    whenEndRoundHandler(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        for (let i = 0; i <= currentPlayer.endRoundExtraTriggers; i++) {
            this.baseCard.whenEndRoundHandler(this.triggerObj2BaseCard(triggerObj))
        }
    }

    whenStartRound(triggerObj: TriggerObj) {
        triggerObj = this.triggerObj2BaseCard(triggerObj);
        // 磁力效果
        this.baseCard.magneticForceList.forEach(card => card.whenStartRound(triggerObj))
        this.baseCard.whenStartRound(triggerObj)
    }

    whenStartRoundHandler(triggerObj: TriggerObj) {
        this.baseCard.whenStartRoundHandler(this.triggerObj2BaseCard(triggerObj))
    }

    whenPlayerInjuries(injuring: number, triggerObj: TriggerObj) {
        this.baseCard.tempId = this.id
        this.baseCard.whenPlayerInjuries(injuring, this.triggerObj2BaseCard(triggerObj))
    }

    whenHolyShieldDisappears(triggerObj: TriggerObj) {
        this.baseCard.whenHolyShieldDisappears(this.triggerObj2BaseCard(triggerObj));
    }

    whenOtherHolyShieldDisappears(triggerObj: TriggerObj) {
        this.baseCard.whenOtherHolyShieldDisappears(this.triggerObj2BaseCard(triggerObj));
    }

    whenDefenseTrigger(triggerObj: TriggerObj) {
        this.baseCard.whenDefenseTrigger(this.triggerObj2BaseCard(triggerObj));
    }

    whenKillOneTrigger(triggerObj: TriggerObj) {
        this.baseCard.whenKillOneTrigger(this.triggerObj2BaseCard(triggerObj));
    }

    whenStartFightingTrigger(triggerObj: TriggerObj) {
        this.baseCard.whenStartFightingTrigger(this.triggerObj2BaseCard(triggerObj));
    }

    deserialize(json: any) {
        if (typeof json === 'string') {
            json = JSON.parse(json)
        }
        this.id = json.id
        this.isFreeze = json.isFreeze
        this.baseCard = SharedCardPool.initCardDb().getByName(json.baseCard.classType).deserialize(json.baseCard);
        return this;
    }

    serialization(): string {
        return serialize(this);
    }

    whenEndFightingTrigger(result: "胜利" | "失败" | "平局", triggerObj: TriggerObj) {
        this.baseCard.whenEndFightingTrigger(result, triggerObj);
    }

    whenOtherCardMagneticAdd(triggerObj: TriggerObj) {
        this.baseCard.whenOtherCardMagneticAdd(this.triggerObj2BaseCard(triggerObj))
    }

    whenHarmedTrigger(injuring: number, triggerObj: TriggerObj) {
        if (injuring <= 0) {
            return
        }
        this.baseCard.whenHarmedTrigger(injuring, this.triggerObj2BaseCard(triggerObj));
    }

    whenOtherHarmedTrigger(injuring: number, triggerObj: TriggerObj) {
        if (injuring <= 0) {
            return
        }
        this.baseCard.whenOtherHarmedTrigger(injuring, this.triggerObj2BaseCard(triggerObj));
    }

    whenRefreshTavern(triggerObj: TriggerObj) {
        this.baseCard.whenRefreshTavern(this.triggerObj2BaseCard(triggerObj));
    }

    whenDeath(flipFlop: FlipFlop) {
        console.log(`(${flipFlop.currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】死亡`)
        // 加入死亡池
        flipFlop.currentPlayer.deadCardListInFighting.push(this)
        // 移除
        const findNextCard = flipFlop.currentPlayer.findNextCard(this);
        flipFlop.currentPlayer.cardRemove(this);
        // 先亡语
        for (let i = 0; i <= flipFlop.currentPlayer.deadWordsExtraTriggers; i++) {
            // 磁力效果
            this.baseCard.magneticForceList.forEach(base => base.whenDeath(flipFlop));
            this.baseCard.whenDeath(flipFlop)
        }
        // 复仇
        this.executeCurrentOtherList(flipFlop, (item: BaseCardObj, data: FlipFlop) => item.baseCard.whenDeath(data))
        // 复生
        if (this.baseCard.isRebirth) {
            const baseCardTemp = flipFlop.contextObj.sharedCardPool.getByName(this.baseCard.classType);
            baseCardTemp.changeInjuriesReceived(this.baseCard.getPrimitiveLife() - 1);
            baseCardTemp.isRebirth = false;
            this.baseCard = baseCardTemp
            // todo 调整addCard
            flipFlop.currentPlayer.addCard(this, findNextCard, flipFlop)
            console.log(`${flipFlop.currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】复生`)
        }
    }


    whenAttacking(flipFlop: FlipFlop) {
        console.log(`(${flipFlop.currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】对(${flipFlop.targetPlayer.name})的【${flipFlop.targetCard.baseCard.name}(${flipFlop.targetCard.attack}/${flipFlop.targetCard.life})】进行攻击`)
        // 攻击前执行
        this.baseCard.whenAttacking(flipFlop)
        // 被攻击触发
        // flipFlop.targetCard.
        // 伤害计算
        const damageCalculationResult = damageCalculation(flipFlop);
        flipFlop.otherData={
            harmed: damageCalculationResult.currentHarmed
        }
        this.whenInjured(flipFlop)
        flipFlop.targetCard.whenInjured({
            ...inversion(flipFlop),
            otherData: {
                harmed: damageCalculationResult.targetHarmed
            }
        })
    }

    changeHealth(value: number) {
        this.baseCard.changeInjuriesReceived(value);
    }

    whenInjured(flipFlop: FlipFlop) {
        let harmed = flipFlop.otherData?.harmed || 0;
        if (harmed > 0) {
            if (this.baseCard.isHolyShield) {
                // 圣盾
                this.baseCard.isHolyShield = false;
                // 圣盾消失触发
                harmed = 0;
                console.log(`(${flipFlop.currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】的圣盾失效`)
            }
            console.log(`(${flipFlop.currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】遭受${harmed}伤害`)
            // 生命值change
            this.changeHealth(-harmed)
            this.baseCard.whenInjured(flipFlop)
            this.executeCurrentOtherList(flipFlop, (item: BaseCardObj, data: FlipFlop) => item.baseCard.whenInjured(data))
            if (!this.isSurviving()) {
                this.whenDeath(flipFlop)
            }
        }
    }

    whenSummoned(flipFlop: FlipFlop) {
        console.log(`(${flipFlop.currentPlayer.name})召唤【${this.baseCard.name}(${this.attack}/${this.life})】`)
        // 召唤触发
        this.baseCard.whenSummoned(flipFlop);
        this.executeCurrentOtherList(flipFlop, (item: BaseCardObj, data: FlipFlop) => item.baseCard.whenSummoned(data))
    }

    whenUsed(flipFlop: FlipFlop) {
        console.log(`(${flipFlop.currentPlayer.name})使用【${this.baseCard.name}(${this.attack}/${this.life})】`)
        // 法术使用
        if (flipFlop.currentCard.isSpell()) {
            // 酒馆法术
        } else if (flipFlop.currentCard.isMinion()) {
            const nextCard = flipFlop.otherData?.nextCard || undefined;
            // 战吼
            if (this.baseCard.isWarRoars) {
                for (let i = 0; i <= flipFlop.currentPlayer.battleRoarExtraTriggers; i++) {
                    console.log(`(${flipFlop.currentPlayer.name})的【${this.baseCard.name}】触发战吼：${this.baseCard.descriptionStr()}`)
                    this.baseCard.warRoar(flipFlop)
                }
            }
            // 召唤
            flipFlop.currentPlayer.addCard2(this, nextCard, flipFlop)
        }
        this.baseCard.whenUsed(flipFlop)
        this.executeCurrentOtherList(flipFlop, (item: BaseCardObj, data: FlipFlop) => item.baseCard.whenUsed(data))
    }

    private isSpell() {
        return this.baseCard.type === '法术';
    }

    private isMinion() {
        return this.baseCard.type === '随从';
    }

    executeCurrentOtherList(flipFlop: FlipFlop, func: Function) {
        flipFlop.currentPlayer.getCardList().filter(item => item.id !== this.id).forEach(item => {
            func(item,new FlipFlop( {
                ...flipFlop,
                currentLocation: '战场',
                currentCard: item,
                targetCard: this
            }))
        })
        flipFlop.currentPlayer.handCardList.filter(item => item.id !== this.id).forEach(item => {
            func(item,new FlipFlop( {
                ...flipFlop,
                currentLocation: '手牌',
                currentCard: item,
                targetCard: this
            }))
        })
    }

    whenPurchasing(flipFlop: FlipFlop) {
        // 酒馆移除
        flipFlop.currentPlayer.tavern.removeCard(this, flipFlop.contextObj.sharedCardPool)
        // 酒馆加成写入
        this.baseCard.attackBonus.push(...flipFlop.currentPlayer.tavern.attackBonus)
        this.baseCard.lifeBonus.push(...flipFlop.currentPlayer.tavern.lifeBonus)
        // 加入手牌
        flipFlop.currentPlayer.addCardInHand(this, flipFlop.contextObj.sharedCardPool)
        console.log(`(${flipFlop.currentPlayer.name})购买【${this.baseCard.name}(${this.attack}/${this.life})】`)
        this.baseCard.whenPurchasing(flipFlop)
        this.executeCurrentOtherList(flipFlop, (item: BaseCardObj, data: FlipFlop) => item.baseCard.whenPurchasing(data))
    }

    whenBeingSold(flipFlop: FlipFlop) {
        console.log(`(${flipFlop.currentPlayer.name})出售【${this.baseCard.name}(${this.attack}/${this.life})】`)
        this.baseCard.whenBeingSold(flipFlop)
        this.executeCurrentOtherList(flipFlop, (item: BaseCardObj, data: FlipFlop) => item.baseCard.whenBeingSold(data))
    }
}
