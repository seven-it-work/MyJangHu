import BaseCard from "../entity/baseCard";
import ContextObj from "./ContextObj";
import {Trigger, TriggerObj} from "../entity/Trigger";
import Chance from 'chance'
import {cloneDeep} from "lodash";
import SharedCardPool from "./SharedCardPool";

export default class BaseCardObj implements Trigger {
    id: string;
    isFreeze: boolean = false;

    constructor(baseCard: BaseCard) {
        this.id = new Chance().guid();
        this.baseCard = cloneDeep(baseCard);
    }

    getOriginalVersion(sharedCardPool: SharedCardPool) {
        return new BaseCardObj(sharedCardPool.getByName(this.baseCard.constructor.name));
    }


    get life(): number {
        return this.baseCard.life + this.lifeBonus;
    }

    get attack(): number {
        return this.baseCard.attack + this.attackBonus;
    }

    baseCard: BaseCard;
    lifeBonus: number = 0;
    attackBonus: number = 0;

    isSurviving() {
        return this.baseCard.life > 0;
    }

    healthChange(number: number, triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        if (number < 0) {
            console.log(`(${currentPlayer.name})的【${this.baseCard.name}】遭受${number}伤害`)
            if (this.baseCard.isHolyShield) {
                // 圣盾
                this.baseCard.isHolyShield = false;
                number = 0;
                console.log(`(${currentPlayer.name})的【${this.baseCard.name}】的圣盾失效`)
            }
            this.baseCard.life += number;
            if (this.isSurviving()) {
                return;
            }
            console.log(`(${currentPlayer.name})的【${this.baseCard.name}】死亡`)
            // 加入死亡池
            currentPlayer.deadCardListInFighting.push(this)
            // 复生
            if (this.baseCard.isRebirth) {
                this.baseCard.life = 1;
                this.baseCard.isRebirth = false;
                console.log(`${currentPlayer.name})的【${this.baseCard.name}】复生`)
            } else {
                // 移除
                currentPlayer.cardListInFighting = currentPlayer.cardListInFighting.filter(card => card.isSurviving());
            }
            // 触发亡语
            this.whenDeadTrigger(triggerObj);
        } else {
            this.baseCard.life += number
        }
    }


    /**
     * 当其他随从死亡时触发器
     */
    whenOtherDeadTrigger(triggerObj: TriggerObj) {
        this.baseCard.otherDeadCounter++;
        if (this.baseCard.otherDeadCounter >= this.baseCard.otherDeadMaxCounter) {
            this.baseCard.otherDeadCounter = 0;
            this.baseCard.whenOtherDeadTrigger(this.triggerObj2BaseCard(triggerObj));
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
        for (let i = 0; i <= currentPlayer.battleRoarExtraTriggers; i++) {
            this.baseCard.whenCardUsedTrigger(this.triggerObj2BaseCard(triggerObj));
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
        // todo 风怒
        console.log(`(${currentPlayer.name})的【${this.baseCard.name}】对(${targetPlayer.name})的【${targetCard.baseCard.name}】进行攻击`)
        this.baseCard.whenAttackTrigger(this.triggerObj2BaseCard(triggerObj))
        // 受到伤害
        let toBeHarmed = 0;
        // 造成伤害
        let toCauseHarm = 0;
        if (targetCard.baseCard.isHighlyToxic) {
            // 剧毒，用完就没了
            toBeHarmed = this.baseCard.life;
            targetCard.baseCard.isHighlyToxic = false;
            console.log(`(${targetPlayer.name})的【${targetCard.baseCard.name}】剧毒已使用`)
        } else if (targetCard.baseCard.hasPoison) {
            // 毒药，能一直毒
            toBeHarmed = this.baseCard.life;
            console.log(`(${targetPlayer.name})的【${targetCard.baseCard.name}】烈药触发`)
        } else {
            toBeHarmed = targetCard.baseCard.attack;
        }

        if (this.baseCard.isHighlyToxic) {
            toCauseHarm = targetCard.baseCard.life;
            console.log(`(${currentPlayer.name})的【${this.baseCard.name}】剧毒已使用`)
            this.baseCard.isHighlyToxic = false;
        } else if (this.baseCard.hasPoison) {
            console.log(`(${currentPlayer.name})的【${this.baseCard.name}】烈药触发`)
            toCauseHarm = targetCard.baseCard.life;
        } else {
            toCauseHarm = this.baseCard.attack;
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
    }

    attacking(triggerObj: TriggerObj) {
        this.whenAttackTrigger(triggerObj)
    }

    whenEndRound(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        for (let i = 0; i <= currentPlayer.endRoundExtraTriggers; i++) {
            this.baseCard.whenEndRound(this.triggerObj2BaseCard(triggerObj))
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
        this.baseCard.whenStartRound(this.triggerObj2BaseCard(triggerObj))
    }

    whenStartRoundHandler(triggerObj: TriggerObj) {
        this.baseCard.whenStartRoundHandler(this.triggerObj2BaseCard(triggerObj))
    }

    whenPlayerInjuries(injuring: number, triggerObj: TriggerObj) {
        this.baseCard.tempId = this.id
        this.baseCard.whenPlayerInjuries(injuring, this.triggerObj2BaseCard(triggerObj))
    }
}
