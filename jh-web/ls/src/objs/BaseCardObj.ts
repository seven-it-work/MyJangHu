import BaseCard from "../entity/baseCard";
import ContextObj from "./ContextObj";
import {Trigger} from "../entity/Trigger";
import Chance from 'chance'
import {cloneDeep} from "lodash";

export default class BaseCardObj implements Trigger<BaseCardObj> {
    id: String;

    constructor(baseCard: BaseCard) {
        this.id = new Chance().guid();
        this.baseCard = cloneDeep(baseCard);
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


    /**
     * 当其他随从死亡时触发器
     */
    whenOtherDeadTrigger(targetCard: BaseCardObj, contextObj: ContextObj) {
        this.baseCard.otherDeadCounter++;
        if (this.baseCard.otherDeadCounter >= this.baseCard.otherDeadMaxCounter) {
            this.baseCard.otherDeadCounter = 0;
            this.baseCard.whenOtherDeadTrigger(targetCard.baseCard, contextObj);
        }
    }

    whenDeadTrigger(context: ContextObj) {
        for (let i = 0; i <= context.player.deadWordsExtraTriggers; i++) {
            const cardListInFighting = context.player.cardListInFighting;
            if (cardListInFighting.length < 7) {
                this.baseCard.whenDeadTrigger(context);
            }
        }
    }

    /**
     * 当前使用随从时触发器
     * (战吼)
     */
    whenCardUsedTrigger(contextObj: ContextObj) {
        for (let i = 0; i <= contextObj.player.battleRoarExtraTriggers; i++) {
            this.baseCard.whenCardUsedTrigger(contextObj);
        }
    }


    whenSummonedTrigger(context: ContextObj) {
        this.baseCard.whenSummonedTrigger(context)
    }

    whenBuyCardTrigger(context: ContextObj) {
        this.baseCard.whenBuyCardTrigger(context)
    }

    whenSaleCardTrigger(context: ContextObj) {
        this.baseCard.whenSaleCardTrigger(context)
    }


    whenBuyOtherCardTrigger(targetCard: BaseCardObj, context: ContextObj) {
        this.baseCard.whenBuyOtherCardTrigger(targetCard.baseCard, context)
    }

    whenOtherSummonedTrigger(targetCard: BaseCardObj, context: ContextObj) {
        this.baseCard.whenOtherSummonedTrigger(targetCard.baseCard, context)
    }

    whenSaleOtherCardTrigger(targetCard: BaseCardObj, context: ContextObj) {
        this.baseCard.whenSaleOtherCardTrigger(targetCard.baseCard, context)
    }

    whenOtherCardUsedTrigger(targetCard: BaseCardObj, context: ContextObj) {
        this.baseCard.whenOtherCardUsedTrigger(targetCard.baseCard, context)
    }

    whenOtherHandlerCardUsedTrigger(targetCard: BaseCardObj, context: ContextObj) {
    }

    whenAttackTrigger(defender: BaseCardObj, context: ContextObj, targetContext: ContextObj) {
        // todo 风怒
        this.baseCard.whenAttackTrigger(defender.baseCard, context, targetContext)
        // 受到伤害
        let toBeHarmed = 0;
        // 造成伤害
        let toCauseHarm = 0;
        if (this.baseCard.isHolyShield) {
            // 圣盾
            this.baseCard.isHolyShield = false;
            toBeHarmed = 0;
        } else if (defender.baseCard.isHighlyToxic) {
            // 剧毒，用完就没了
            toBeHarmed = this.baseCard.life;
            defender.baseCard.isHighlyToxic = false;
        } else if (defender.baseCard.hasPoison) {
            // 毒药，能一直毒
            toBeHarmed = this.baseCard.life;
        } else {
            toBeHarmed = defender.baseCard.attack;
        }
        if (defender.baseCard.isHolyShield) {
            defender.baseCard.isHolyShield = false;
            toCauseHarm = 0;
        } else if (this.baseCard.isHighlyToxic) {
            toCauseHarm = defender.baseCard.life;
            this.baseCard.isHighlyToxic = false;
        } else if (this.baseCard.hasPoison) {
            toCauseHarm = defender.baseCard.life;
        } else {
            toCauseHarm = this.baseCard.attack;
        }
        this.baseCard.life -= toBeHarmed;
        defender.baseCard.life -= toCauseHarm;
        if (this.baseCard.life <= 0) {
            // 复生
            if (this.baseCard.isRebirth) {
                this.baseCard.life = 1;
                this.baseCard.isRebirth = false;
            } else {
                // 移除
                context.player.cardListInFighting = context.player.cardListInFighting.filter(card => card.isSurviving());
            }
            this.whenDeadTrigger(context);
        }
        if (defender.baseCard.life <= 0) {
            // 复生
            if (defender.baseCard.isRebirth) {
                defender.baseCard.life = 1;
                defender.baseCard.isRebirth = false;
            } else {
                // 移除
                targetContext.player.cardListInFighting = targetContext.player.cardListInFighting.filter(card => card.isSurviving());
            }
            defender.whenDeadTrigger(targetContext);
        }
    }

    attacking(target: BaseCardObj, context: ContextObj, targetContext: ContextObj) {
        this.whenAttackTrigger(target, context, targetContext)
    }
}
