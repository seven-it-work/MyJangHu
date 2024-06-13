import ContextObj from "../objs/ContextObj";
import {Trigger, TriggerObj} from "./Trigger";
import BaseCardObj from "../objs/BaseCardObj";
import {sum} from "lodash";
import {Bonus, BonusPlayer} from "../objs/Bonus";
import {Serialization} from "../utils/SaveUtils";
import {serialize} from "class-transformer";
import SharedCardPool from "../objs/SharedCardPool";
import {FlipFlop, FlipFlopFunc, Triggering} from "./FlipFlop";
import Player from "../objs/Player.ts";
import randomUtil from "../utils/RandomUtils";

export const baseEthnicity: string[] = ['鱼人', '机械', '恶魔', '亡灵', '龙', '野兽', '野猪人', '纳迦']
export const ethnicity: string[] = ['中立', '伙伴', ...baseEthnicity]

export default abstract class BaseCard implements FlipFlopFunc, Triggering, Serialization<BaseCard> {
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
    // version: string[] = ["v28.0.0.189384"]
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
    counter: number = 0;
    // 通用计数器重置值
    counterResetValue: number = 0;
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
    // 生命加成 弃用
    lifeBonus: Bonus[] = [];
    // 攻击加成 弃用
    attackBonus: Bonus[] = [];
    // 生命加成（永久区）
    private lifeBonusPermanently: Bonus[] = [];
    // 攻击加成（永久区）
    private attackBonusPermanently: Bonus[] = [];
    // 生命加成（临时区）三连临时变永久，开始回合时，清空所有临时区
    private lifeBonusTemporarily: Bonus[] = [];
    // 攻击加成（临时区）
    private attackBonusTemporarily: Bonus[] = [];
    // 场上影响区（影响随从的加成，比如哼鸣蜂鸟，一旦随从不存在，将清理对应区域。这个区域影响）
    private lifeBonusBattle: Bonus[] = []
    // 场上影响区（影响随从的加成，比如哼鸣蜂鸟，一旦随从不存在，将清理对应区域。这个区域影响）
    private attackBonusBattle: Bonus[] = []

    // 是否选中其他
    isNeedSelect: boolean = false;
    // 法术附加能力（回合结束时）
    spellAttached: BaseCard[] = [];
    // 是否为战吼
    isWarRoars: boolean = false;
    // 是否为亡语
    isDeadLanguage: boolean = false;
    isOtherTriggering: boolean = false;
    /**
     * 战斗开始时
     */
    atTheBeginningOfTheBattle = false
    /**
     * 回合结束时
     */
    endOfRound = false

    /**
     * 回合开始时
     */
    beginRound = false


    // 选中过滤器
    needSelectFilter(baseCardObj: BaseCardObj[]): BaseCardObj[] {
        return baseCardObj;
    }

    getLife(): number {
        return this.getPrimitiveLife() - this._injuriesReceived
    }

    getPrimitiveLife(): number {
        // 磁力加成
        const magneticAddition = sum(this.magneticForceList.map(card => card.getPrimitiveLife())) || 0
        const bonus = sum([...this.lifeBonusBattle, ...this.lifeBonusPermanently, ...this.lifeBonusTemporarily].map(bonus => bonus.markupValue)) || 0
        let life = this.life
        if (this.isGold) {
            life = life * 2;
        }
        return life + magneticAddition + bonus
    }

    getAttack(): number {
        // 磁力加成
        const magneticAddition = sum(this.magneticForceList.map(card => card.getAttack())) || 0
        const bonus = sum([...this.attackBonusBattle, ...this.attackBonusPermanently, ...this.attackBonusTemporarily].map(bonus => bonus.markupValue)) || 0
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

        this.lifeBonusPermanently = json.lifeBonusPermanently
        this.attackBonusPermanently = json.attackBonusPermanently
        this.lifeBonusTemporarily = json.lifeBonusTemporarily
        this.lifeBonusBattle = json.lifeBonusBattle
        this.attackBonusBattle = json.attackBonusBattle
        return this;
    }

    serialization(): string {
        return serialize(this);
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

    deadLanguage(flipFlop: FlipFlop) {
    }

    whenTheBattleBegan(flipFlop: FlipFlop) {
    }

    showLog(flipFlop: FlipFlop) {
        console.log(`(${flipFlop.currentPlayer.name})的【${this.name}(${this.attack}/${this.life})】触发：${this.descriptionStr()}`)
    }

    whenTheRoundIsOver(flipFlop: FlipFlop) {
    }

    whenTheRoundBegin(flipFlop: FlipFlop) {
    }

    /**
     * 加成添加
     * @param bonus
     * @param isAttack
     * @param isPermanent 是否永久区
     */
    addBonus(bonus: Bonus, isAttack: boolean, isPermanent: boolean = false) {
        let bonusList;
        if (isAttack) {
            if (isPermanent) {
                bonusList = this.attackBonusPermanently
            } else {
                bonusList = this.attackBonusTemporarily
            }
        } else {
            if (isPermanent) {
                bonusList = this.lifeBonusPermanently
            } else {
                bonusList = this.lifeBonusTemporarily
            }
        }
        bonusList.push(bonus)
    }

    /**
     * 临时加成清空
     */
    bonusTemporarilyClear() {
        this.attackBonusTemporarily = []
        this.lifeBonusTemporarily = []
    }

    /**
     * 战场加成添加
     * 一般召唤就调用这个
     * @param bonusPlayer
     * @param isAttack
     */
    bonusBattleAdd(bonusPlayer: BonusPlayer, isAttack: boolean) {
        let bonus;
        if (isAttack) {
            bonus = this.attackBonusBattle
        } else {
            bonus = this.lifeBonusBattle
        }
        bonus.push({
            baseCardId: bonusPlayer.baseCardId,
            baseCardName: bonusPlayer.baseCardName,
            markupValue: bonusPlayer.markupValue
        })
    }

    /**
     * 战场加成覆盖
     * @param bonusPlayer
     * @param isAttack
     */
    bonusBattleCovered(bonusPlayer: BonusPlayer[], isAttack: boolean) {
        const data = bonusPlayer.map(data => {
            return {
                baseCardId: data.baseCardId,
                baseCardName: data.baseCardName,
                markupValue: data.markupValue
            }
        })
        if (isAttack) {
            this.attackBonusBattle = data
        } else {
            this.lifeBonusBattle = data
        }
    }

    /**
     * 战场加成移除
     * @param id
     */
    bonusBattleRemove(id: string) {
        this.attackBonusBattle = this.attackBonusBattle.filter(data => data.baseCardId !== id)
        this.lifeBonusBattle = this.lifeBonusBattle.filter(data => data.baseCardId !== id)
    }

    /**
     * 复制永久区
     * @param base
     */
    bonusPermanently(base: BaseCard) {
        this.lifeBonusPermanently = base.lifeBonusPermanently;
        this.attackBonusPermanently = base.attackBonusPermanently
    }

    /**
     * 获取所有加成
     * @param isAttack
     */
    bonusList(isAttack: boolean = false): Bonus[] {
        let bonus = []
        if (isAttack) {
            bonus = [
                ...this.attackBonusPermanently,
                ...this.attackBonusTemporarily,
                ...this.attackBonusBattle]
        } else {
            bonus = [
                ...this.lifeBonusPermanently,
                ...this.lifeBonusTemporarily,
                ...this.lifeBonusBattle]
        }
        // 磁力加成
        const magneticForceList = this.magneticForceList.map(card => {
            return {
                markupValue: isAttack ? card.attack : card.life,
                baseCardId: card.tempId || randomUtil.guid(),
                baseCardName: card.name,
            }
        })
        bonus.push(...magneticForceList);
        return bonus;
    }

    sanLian(baseCardObj1: BaseCard, baseCardObj2: BaseCard, baseCardObj3: BaseCard) {
        // 三连将临时区变永久
        this.attackBonusPermanently.push(...[
            ...baseCardObj1.attackBonusTemporarily,
            ...baseCardObj2.attackBonusTemporarily,
            ...baseCardObj3.attackBonusTemporarily
        ])
        this.lifeBonusPermanently.push(...[
            ...baseCardObj1.lifeBonusTemporarily,
            ...baseCardObj2.lifeBonusTemporarily,
            ...baseCardObj3.lifeBonusTemporarily
        ])
        // 永久区加成
        this.attackBonusPermanently.push(...[
            ...baseCardObj1.attackBonusPermanently,
            ...baseCardObj2.attackBonusPermanently,
            ...baseCardObj3.attackBonusPermanently
        ])
        this.lifeBonusPermanently.push(...[
            ...baseCardObj1.lifeBonusPermanently,
            ...baseCardObj2.lifeBonusPermanently,
            ...baseCardObj3.lifeBonusPermanently
        ])
        // 战场区不受三连加成控制
        // 扩展属性取其一
        this.isMockery = baseCardObj1.isMockery || baseCardObj2.isMockery || baseCardObj3.isMockery
        this.isHighlyToxic = baseCardObj1.isHighlyToxic || baseCardObj2.isHighlyToxic || baseCardObj3.isHighlyToxic
        this.hasPoison = baseCardObj1.hasPoison || baseCardObj2.hasPoison || baseCardObj3.hasPoison
        this.attackHighlyToxic = baseCardObj1.attackHighlyToxic || baseCardObj2.attackHighlyToxic || baseCardObj3.attackHighlyToxic
        this.isHolyShield = baseCardObj1.isHolyShield || baseCardObj2.isHolyShield || baseCardObj3.isHolyShield
        this.isRebirth = baseCardObj1.isRebirth || baseCardObj2.isRebirth || baseCardObj3.isRebirth
        this.isSneak = baseCardObj1.isSneak || baseCardObj2.isSneak || baseCardObj3.isSneak
        this.numberAttack = Math.max(Math.max(baseCardObj1.numberAttack, baseCardObj2.numberAttack), baseCardObj3.numberAttack)
        // 三连初始化
        this.isGold = true
        this.sanLianInit()
    }

    /**
     * 三连初始化
     * 由子类扩展实现
     */
    protected sanLianInit() {

    }

    whenPlayerInjured(flipFlop: FlipFlop) {
    }
}
