import BaseCard from "../entity/baseCard";
import ContextObj from "./ContextObj";
import {Trigger} from "../entity/Trigger";
import Chance from 'chance'

export default class BaseCardObj implements Trigger<BaseCardObj> {
    id: String;

    constructor(baseCard: BaseCard) {
        this.id = new Chance().guid();
        this.baseCard = baseCard;
    }


    get life(): Number {
        return this.baseCard.life + this.lifeBonus;
    }

    get attack(): Number {
        return this.baseCard.attack + this.attackBonus;
    }

    baseCard: BaseCard;
    lifeBonus: Number = 0;
    attackBonus: Number = 0;


    /**
     * 当其他随从死亡时触发器
     */
    whenOtherDeadTrigger(deadCardObj, contextObj: ContextObj) {
        this.baseCard.otherDeadCounter++;
        if (this.baseCard.otherDeadCounter >= this.baseCard.otherDeadMaxCounter) {
            this.baseCard.otherDeadCounter = 0;
            this.baseCard.whenOtherDeadTrigger(deadCardObj, contextObj);
        }
    }

    whenDeadTrigger(context: ContextObj) {
        for (let i = 0; i <= context.player.deadWordsExtraTriggers; i++) {
            this.baseCard.whenDeadTrigger(context);
        }
    }

    /**
     * 当前使用随从时触发器
     * (战吼)
     */
    whenCardUsedTrigger(contextObj) {
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
}
