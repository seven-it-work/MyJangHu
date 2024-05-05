import ContextObj from "../objs/ContextObj";

export interface Trigger<T> {

    /**
     * 当其他随从死亡时触发器
     */
    whenOtherDeadTrigger(targetCard: T, context: ContextObj);

    /**
     * 当前随从死亡时触发器
     */
    whenDeadTrigger(context: ContextObj);

    /**
     * 其他随从使用时触发器
     * (场上触发)
     */
    whenOtherCardUsedTrigger(targetCard: T, context: ContextObj);

    /**
     * 其他随从使用时触发器
     * (手牌触发)
     */
    whenOtherHandlerCardUsedTrigger(targetCard: T, context: ContextObj);

    /**
     * 当前随从使用时触发器
     * (战吼) 部分属性计算
     */
    whenCardUsedTrigger(context: ContextObj);

    /**
     * 其他随从被召唤时触发器
     */
    whenOtherSummonedTrigger(targetCard: T, context: ContextObj);

    /**
     * 当前随从被召唤时触发器
     */
    whenSummonedTrigger(context: ContextObj);

    /**
     * 购买其他卡片时
     */
    whenBuyOtherCardTrigger(targetCard: T, context: ContextObj);

    /**
     * 购买当前卡片时
     */
    whenBuyCardTrigger(context: ContextObj);

    /**
     * 当前出售其他卡片时
     */
    whenSaleOtherCardTrigger(targetCard: T, context: ContextObj);

    /**
     * 出售当前卡片时
     */
    whenSaleCardTrigger(context: ContextObj);

    /**
     * 当前随从攻击时
     */
    whenAttackTrigger(defender: T, context: ContextObj, targetContext: ContextObj);
}
