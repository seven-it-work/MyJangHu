import ContextObj from "../objs/ContextObj";
import {Trigger} from "./Trigger";


export default abstract class BaseCard implements Trigger<BaseCard> {
    name: String = '';
    type: String = '随从';
    // 购买价格
    spendingGoldCoin: Number = 3;
    // 是否可以出售
    canSold: Boolean = true;
    // 出售价格
    salePrice: Number = 1;
    ethnicity: String[] = [];
    accompanyingRace: String[] = [];
    attack: Number = 0;
    life: Number = 0;
    // 等级
    graded: Number = 1;
    description: String = '';
    otherDeadCounter: Number = 0;
    otherDeadMaxCounter: Number = 0;
    // 嘲讽
    isMockery: Boolean = false;
    // 是否剧毒，用完就没了
    isHighlyToxic: Boolean = false;
    // 是否毒药，能一直毒
    hasPoison: Boolean = false;
    // 受攻击时，剧毒
    attackHighlyToxic: Boolean = false;
    // 是否有圣盾
    isHolyShield: Boolean = false;

    /**
     * 当其他随从死亡时触发器
     */
    whenOtherDeadTrigger(deadCardObj, context: ContextObj) {

    }

    /**
     * 当前召唤随从时触发器
     * (战吼)
     */
    whenCardUsedTrigger(context: ContextObj) {

    }

    /**
     * 当前召唤随从时触发器
     */
    whenSummonedTrigger(contextObj) {

    }

    /**
     * 当前随从死亡时触发器
     */
    whenDeadTrigger(contextObj: ContextObj) {

    }

    whenBuyCardTrigger(context: ContextObj) {
    }

    whenSaleCardTrigger(context: ContextObj) {
    }

    whenBuyOtherCardTrigger(targetCard: BaseCard, context: ContextObj) {
    }

    whenOtherCardUsedTrigger(targetCard: BaseCard, context: ContextObj) {
    }

    whenOtherSummonedTrigger(targetCard: BaseCard, context: ContextObj) {
    }

    whenSaleOtherCardTrigger(targetCard: BaseCard, context: ContextObj) {
    }

    whenOtherHandlerCardUsedTrigger(targetCard: BaseCard, context: ContextObj) {
    }

    whenAttackTrigger(defender: BaseCardObj, context: ContextObj, targetContext: ContextObj) {
    }
}
