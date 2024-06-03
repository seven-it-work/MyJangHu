import ContextObj from "../objs/ContextObj";
import {Trigger, TriggerObj} from "./Trigger";
import BaseCardObj from "../objs/BaseCardObj";
import {sum} from "lodash";
import {Bonus} from "../objs/Bonus";
import {Serialization} from "../utils/SaveUtils";
import {serialize} from "class-transformer";
import SharedCardPool from "../objs/SharedCardPool";
import {FlipFlop, FlipFlopFunc, Triggering} from "./FlipFlop";

export const baseEthnicity: string[] = ['鱼人', '机械', '恶魔', '亡灵', '龙', '野兽', '野猪人', '纳迦']
export const ethnicity: string[] = ['中立', '伙伴', ...baseEthnicity]

export default abstract class BaseCard implements Trigger,FlipFlopFunc,Triggering, Serialization<BaseCard> {
    classType: string

    tempId: string = '';
    name: string = '';
    // 酒馆是否出售
    isSell: boolean = true;

    type: '随从' | '法术' | string = '随从';
    // 购买价格
    spendingGoldCoin: number = 3;
    // 是否可以出售
    canSold: boolean = true;
    // 出售价格
    salePrice: number = 1;
    // 种族
    ethnicity: string[] = [];
    // 体系类别
    accompanyingRace: string[] = [];
    // 基础攻击力
    attack: number = 0;
    // 基础生命值
    life: number = 0;
    private _injuriesReceived: number = 0;
    // 等级
    graded: number = 1;
    // 是否锁定(无法召唤)
    isLocked: boolean = false
    // 剩余锁定回合（每次回合开始时会-- 直到0）
    lockTheRound: number = 0

    descriptionStr(): string {
        return ''
    }

    // 复仇计数器
    otherDeadCounter: number = 0;
    // 复仇次数，达到清空otherDeadCounter
    otherDeadMaxCounter: number = 0;
    // 嘲讽
    isMockery: boolean = false;
    // 是否烈毒，用完就没了
    isHighlyToxic: boolean = false;
    // 是否剧毒，能一直毒
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
    // 购买法术消耗生命次数
    buySpellByLifeTimes: number = 0;
    // 剩余购买法术消耗生命次数
    remainBuySpellByLifeTimes: number = 0;
    // 通用计数器
    counter:number=0;
    // 通用计数器重置值
    counterResetValue:number=0;
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
    // 是否选中其他
    isNeedSelect: boolean = false;
    // 法术附加能力（回合结束时）
    spellAttached: BaseCard[] = [];
    // 是否为战吼
    isWarRoars: boolean = false;
    // 是否为亡语
    isDeadLanguage: boolean = false;

    // 选中过滤器
    needSelectFilter(baseCardObj: BaseCardObj[]): BaseCardObj[] {
        return baseCardObj;
    }

    getLife(): number {
        // 磁力加成
        const magneticAddition = sum(this.magneticForceList.map(card => card.getLife())) || 0
        const bonus = sum(this.lifeBonus.map(bonus => bonus.markupValue)) || 0
        let life = this.life
        if (this.isGold) {
            life = life * 2;
        }
        return life - this._injuriesReceived + magneticAddition + bonus
    }

    getPrimitiveLife(): number {
        // 磁力加成
        const magneticAddition = sum(this.magneticForceList.map(card => card.getPrimitiveLife())) || 0
        const bonus = sum(this.lifeBonus.map(bonus => bonus.markupValue)) || 0
        let life = this.life
        if (this.isGold) {
            life = life * 2;
        }
        return life + magneticAddition + bonus
    }

    getAttack(): number {
        // 磁力加成
        const magneticAddition = sum(this.magneticForceList.map(card => card.getAttack())) || 0
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
    changeInjuriesReceived(num: number) {
        this._injuriesReceived += num;
    }

    isSurviving() {
        return this.getPrimitiveLife() > this._injuriesReceived;
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

    whenKillOneTrigger(triggerObj: TriggerObj) {

    }

    whenHarmedTrigger(injuring: number, triggerObj: TriggerObj) {

    }

    whenOtherHarmedTrigger(injuring: number, triggerObj: TriggerObj) {

    }

    deserialize(json: any) {
        if (typeof json === 'string') {
            json = JSON.parse(json)
        }
        this.classType = json.classType
        this.tempId = json.tempId
        this.name = json.name
        this.isSell = json.isSell
        this.type = json.type
        this.spendingGoldCoin = json.spendingGoldCoin
        this.canSold = json.canSold
        this.salePrice = json.salePrice
        this.ethnicity = json.ethnicity
        this.accompanyingRace = json.accompanyingRace
        this.attack = json.attack
        this.life = json.life
        this._injuriesReceived = json._injuriesReceived
        this.graded = json.graded
        this.otherDeadCounter = json.otherDeadCounter
        this.otherDeadMaxCounter = json.otherDeadMaxCounter
        this.isMockery = json.isMockery
        this.isHighlyToxic = json.isHighlyToxic
        this.hasPoison = json.hasPoison
        this.attackHighlyToxic = json.attackHighlyToxic
        this.isHolyShield = json.isHolyShield
        this.isRebirth = json.isRebirth
        this.version = json.version
        this.isSpendLife = json.isSpendLife
        this.isSneak = json.isSneak
        this.refreshTimes = json.refreshTimes
        this.remainRefreshTimes = json.remainRefreshTimes
        this.isMagneticForce = json.isMagneticForce
        this.magneticForceList = json.magneticForceList.map(data => {
            return SharedCardPool.initCardDb().getByName(data.classType).deserialize(data)
        })
        this.numberAttack = json.numberAttack
        this.isGold = json.isGold
        this.lifeBonus = json.lifeBonus
        this.attackBonus = json.attackBonus
        return this;
    }

    serialization(): string {
        return serialize(this);
    }

    whenStartFightingTrigger(triggerObj: TriggerObj) {
    }

    whenEndFightingTrigger(result: "胜利" | "失败" | "平局", triggerObj: TriggerObj) {
    }

    whenOtherCardMagneticAdd(triggerObj: TriggerObj) {

    }

    whenRefreshTavern(triggerObj: TriggerObj) {
    }

    whenDeath(flipFlop: FlipFlop) {
    }

    whenAttacking(flipFlop: FlipFlop) {
    }

    whenInjured(flipFlop: FlipFlop) {
    }

    whenSummoned(flipFlop: FlipFlop) {
    }

    whenUsed(flipFlop: FlipFlop) {
    }

    whenPurchasing(flipFlop: FlipFlop) {
    }

    warRoar(flipFlop: FlipFlop) {
    }

    whenBeingSold(flipFlop: FlipFlop) {
    }
}
