import ContextObj from "../objs/ContextObj";
import {Trigger, TriggerObj} from "./Trigger";
import BaseCardObj from "../objs/BaseCardObj";
import {sum} from "lodash";
import {Bonus} from "../objs/Bonus";


export default abstract class BaseCard implements Trigger {
    classType: string = this.constructor.name

    tempId: string = '';
    name: string = '';
    // 酒馆是否出售
    isSell: boolean = true;

    type: string = '随从';
    // 购买价格
    spendingGoldCoin: number = 3;
    // 是否可以出售
    canSold: boolean = true;
    // 出售价格
    salePrice: number = 1;
    // 种族
    ethnicity: string[] = ['中立'];
    // 体系类别
    accompanyingRace: string[] = [];
    // 基础攻击力
    attack: number = 0;
    // 基础生命值
    life: number = 0;
    private _injuriesReceived: number = 0;
    // 等级
    graded: number = 1;
    description: string = '';
    // 复仇计数器
    otherDeadCounter: number = 0;
    // 复仇次数，达到清空otherDeadCounter
    otherDeadMaxCounter: number = 0;
    // 嘲讽
    isMockery: boolean = false;
    // 是否剧毒，用完就没了
    isHighlyToxic: boolean = false;
    // 是否毒药，能一直毒
    hasPoison: boolean = false;
    // 受攻击时，剧毒
    attackHighlyToxic: boolean = false;
    // 是否有圣盾
    isHolyShield: boolean = false;
    // 是否复生
    isRebirth: boolean = false;
    // 版本信息
    version: string[] = ["v28.0.0.189384"]
    // 是否花费生命值
    isSpendLife: boolean = false;
    // 是否潜行
    isSneak: boolean = false;
    // 刷新消耗生命值次数
    refreshTimes: number = 0;
    // 剩余刷新消耗生命值次数
    remainRefreshTimes: number = 0;
    // 是否磁力
    isMagneticForce: boolean = false;
    // 磁力随从list
    magneticForceList: BaseCard[] = [];
    /**
     * 攻击次数
     * 1 正常
     * 2 风怒
     * 3 超级风怒
     */
    numberAttack: number = 1;
    // 是否金色(三连)
    isGold = false;
    // 生命加成
    lifeBonus: Bonus[] = [];
    // 攻击加成
    attackBonus: Bonus[] = [];

    getLife(): number {
        // 磁力加成
        const magneticAddition = sum(this.magneticForceList.map(card => card.life)) || 0
        const bonus = sum(this.lifeBonus.map(bonus => bonus.markupValue)) || 0
        let life = this.life
        if (this.isGold) {
            life = life * 2;
        }
        return life - this._injuriesReceived + magneticAddition + bonus
    }

    getAttack(): number {
        // 磁力加成
        const magneticAddition = sum(this.magneticForceList.map(card => card.attack)) || 0
        const bonus = sum(this.attackBonus.map(bonus => bonus.markupValue)) || 0
        let attack = this.attack
        if (this.isGold) {
            attack = attack * 2;
        }
        return attack + magneticAddition + bonus
    }

    /**
     * 遭受的伤害
     */
    injuriesReceived(num: number) {
        this._injuriesReceived += num;
    }

    isSurviving() {
        return this.getLife() > this._injuriesReceived;
    }


    /**
     * 当其他随从死亡时触发器
     */
    whenOtherDeadTrigger(triggerObj: TriggerObj) {

    }

    /**
     * 当前召唤随从时触发器
     * (战吼)
     */
    whenCardUsedTrigger(triggerObj: TriggerObj) {

    }

    /**
     * 当前召唤随从时触发器
     */
    whenSummonedTrigger(triggerObj: TriggerObj) {

    }

    /**
     * 当前随从死亡时触发器
     */
    whenDeadTrigger(triggerObj: TriggerObj) {

    }

    whenBuyCardTrigger(triggerObj: TriggerObj) {
    }

    whenSaleCardTrigger(triggerObj: TriggerObj) {
    }

    whenBuyOtherCardTrigger(triggerObj: TriggerObj) {
    }

    whenOtherCardUsedTrigger(triggerObj: TriggerObj) {
    }

    whenOtherSummonedTrigger(triggerObj: TriggerObj) {
    }

    whenSaleOtherCardTrigger(triggerObj: TriggerObj) {
    }

    whenOtherHandlerCardUsedTrigger(triggerObj: TriggerObj) {
    }

    whenAttackTrigger(triggerObj: TriggerObj) {
    }

    whenSaleOtherHandlerCardTrigger(triggerObj: TriggerObj) {
    }

    whenEndRound(triggerObj: TriggerObj) {
    }

    whenEndRoundHandler(triggerObj: TriggerObj) {
    }

    whenStartRound(triggerObj: TriggerObj) {
    }

    whenStartRoundHandler(triggerObj: TriggerObj) {
    }

    whenPlayerInjuries(injuring: number, triggerObj: TriggerObj) {
    }

    whenHolyShieldDisappears(triggerObj: TriggerObj) {
    }

    whenOtherHolyShieldDisappears(triggerObj: TriggerObj) {
    }

    whenDefenseTrigger(triggerObj: TriggerObj) {
    }
}
