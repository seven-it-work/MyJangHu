import ContextObj from "../objs/ContextObj";
import BaseCardObj from "../objs/BaseCardObj";
import Player from "../objs/Player";

export interface TriggerObj {
    targetPlayer?: Player;
    currentPlayer?: Player;
    contextObj: ContextObj;
    targetCard?: BaseCardObj;
    currentCard?: BaseCardObj;
    needSelectCard?: BaseCardObj;
}

export interface Trigger {

    /**
     * 当其他随从死亡时触发器
     * （复仇）
     */
    whenOtherDeadTrigger(triggerObj: TriggerObj);

    /**
     * 当前随从死亡时触发器
     * （亡语）
     */
    whenDeadTrigger(triggerObj: TriggerObj);

    /**
     * 其他随从使用时触发器
     * （从手牌中使用）
     * (场上触发)
     */
    whenOtherCardUsedTrigger(triggerObj: TriggerObj);

    /**
     * 其他随从使用时触发器
     * （从手牌中使用）
     * (手牌触发)
     */
    whenOtherHandlerCardUsedTrigger(triggerObj: TriggerObj);

    /**
     * 当前随从使用时触发器
     * （从手牌中使用）
     * (战吼) 部分属性计算
     */
    whenCardUsedTrigger(triggerObj: TriggerObj);

    /**
     * 其他随从被召唤时触发器
     * （非手牌使用的召唤）
     */
    whenOtherSummonedTrigger(triggerObj: TriggerObj);

    /**
     * 当前随从被召唤时触发器
     * （非手牌使用的召唤）
     */
    whenSummonedTrigger(triggerObj: TriggerObj);

    /**
     * 购买其他卡片时
     */
    whenBuyOtherCardTrigger(triggerObj: TriggerObj);

    /**
     * 购买当前卡片时
     */
    whenBuyCardTrigger(triggerObj: TriggerObj);

    /**
     * 当前出售其他卡片时
     * (战场监听)
     */
    whenSaleOtherCardTrigger(triggerObj: TriggerObj);

    /**
     * 当前出售其他卡片时
     * (手牌监听)
     */
    whenSaleOtherHandlerCardTrigger(triggerObj: TriggerObj);

    /**
     * 出售当前卡片时
     */
    whenSaleCardTrigger(triggerObj: TriggerObj);

    /**
     * 当前随从攻击时
     */
    whenAttackTrigger(triggerObj: TriggerObj);

    /**
     * 当前随从防御时
     */
    whenDefenseTrigger(triggerObj: TriggerObj);

    /**
     * 当回合结束时
     * (战场)
     */
    whenEndRound(triggerObj: TriggerObj);

    /**
     * 当回合结束时
     * (手牌)
     */
    whenEndRoundHandler(triggerObj: TriggerObj);

    /**
     * 当回合开始时
     * (战场)
     */
    whenStartRound(triggerObj: TriggerObj);

    /**
     * 当回合开始时
     * (手牌)
     */
    whenStartRoundHandler(triggerObj: TriggerObj);

    /**
     * 当回合开始时
     * (战场)
     */
    whenPlayerInjuries(injuring: number, triggerObj: TriggerObj);

    /**
     * 当前圣盾消失时
     */
    whenHolyShieldDisappears(triggerObj: TriggerObj);

    /**
     * 当前其他随从圣盾消失时
     */
    whenOtherHolyShieldDisappears(triggerObj: TriggerObj);

    /**
     * 当消灭一个随从时
     */
    whenKillOneTrigger(triggerObj: TriggerObj);

    /**
     * 战斗开始时
     */
    whenStartFightingTrigger(triggerObj: TriggerObj);
}
