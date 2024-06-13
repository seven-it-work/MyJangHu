import BaseCard from "../entity/baseCard";
import ContextObj from "./ContextObj";
import {Trigger, TriggerObj} from "../entity/Trigger";
import Chance from 'chance'
import {cloneDeep} from "lodash";
import SharedCardPool from "./SharedCardPool";
import Player from "./Player";
import {Serialization} from "../utils/SaveUtils";
import {serialize} from "class-transformer";
import {FlipFlop, FlipFlopFunc, inversion, Triggering} from "../entity/FlipFlop";
import randomUtil from "../utils/RandomUtils";

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
        targetCard.changeIsHighlyToxic(false, targetPlayer)
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
        currentCard.changeIsHighlyToxic(false, currentPlayer)
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


export default class BaseCardObj implements FlipFlopFunc, Triggering, Serialization<BaseCardObj> {
    id: string;
    isFreeze: boolean = false;
    isLock: boolean = false
    remainingUnlockRounds: number = 0;

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
        originalVersion.baseCard.sanLian(
            baseCardObj1.baseCard,
            baseCardObj2.baseCard,
            baseCardObj3.baseCard,
        )
        return originalVersion;
    }

    isSurviving() {
        return this.baseCard.isSurviving();
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

    whenDeath(flipFlop: FlipFlop) {
        console.log(`(${flipFlop.currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】死亡`)
        // 将其的永久加成加入到cardList中
        flipFlop.currentPlayer.copyPerpetualBonus(this)
        // 加入死亡池
        flipFlop.currentPlayer.deadCardListInFighting.push(this)
        // 移除
        const findNextCard = flipFlop.currentPlayer.findNextCard(this);
        flipFlop.currentPlayer.cardRemove(this);
        // 先亡语
        this.deadLanguage(flipFlop)
        // 复仇
        this.executeCurrentOtherList(flipFlop, (item: BaseCardObj, data: FlipFlop) => item.baseCard.whenDeath(data))
        // 复生
        if (this.baseCard.isRebirth) {
            const baseCardTemp = flipFlop.contextObj.sharedCardPool.getByName(this.baseCard.classType);
            baseCardTemp.changeInjuriesReceived(this.baseCard.getPrimitiveLife() - 1);
            baseCardTemp.isRebirth = false;
            const baseCardObj = new BaseCardObj(baseCardTemp);
            flipFlop.currentPlayer.addCard2(baseCardObj, findNextCard, flipFlop)
            console.log(`${flipFlop.currentPlayer.name})的【${baseCardObj.baseCard.name}(${baseCardObj.attack}/${baseCardObj.life})】复生`)
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
        flipFlop.otherData = {
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
            if (harmed > 0) {
                this.baseCard.changeInjuriesReceived(harmed);
                this.baseCard.whenInjured(flipFlop)
                this.executeCurrentOtherList(flipFlop, (item: BaseCardObj, data: FlipFlop) => item.baseCard.whenInjured(data))
            }
            if (!this.isSurviving()) {
                this.whenDeath(flipFlop)
            }
        }
    }

    whenSummoned(flipFlop: FlipFlop) {
        // 战场影响加成
        flipFlop.currentPlayer.attackBonusBattle.forEach(data => {
            if (data.judgmentType(this)) {
                this.baseCard.bonusBattleAdd(data, true)
            }
        })
        flipFlop.currentPlayer.lifeBonusBattle.forEach(data => {
            if (data.judgmentType(this)) {
                this.baseCard.bonusBattleAdd(data, false)
            }
        })
        // 永久影响
        flipFlop.currentPlayer.attackBonusPermanently.forEach(data => {
            if (data.judgmentType(this)) {
                this.baseCard.addBonus(data, true, true)
            }
        })
        flipFlop.currentPlayer.lifeBonusPermanently.forEach(data => {
            if (data.judgmentType(this)) {
                this.baseCard.addBonus(data, false, true)
            }
        })
        // 临时影响
        flipFlop.currentPlayer.attackBonusTemporarily.forEach(data => {
            if (data.judgmentType(this)) {
                this.baseCard.addBonus(data, true, false)
            }
        })
        flipFlop.currentPlayer.lifeBonusTemporarily.forEach(data => {
            if (data.judgmentType(this)) {
                this.baseCard.addBonus(data, false, false)
            }
        })
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
            this.warRoar(flipFlop)
            // 召唤
            flipFlop.currentPlayer.addCard2(this, nextCard, flipFlop)
        }
        this.baseCard.whenUsed(flipFlop)
        this.executeCurrentOtherList(flipFlop, (item: BaseCardObj, data: FlipFlop) => item.baseCard.whenUsed(data))
    }

    deadLanguage(flipFlop: FlipFlop) {
        for (let i = 0; i <= flipFlop.currentPlayer.deadWordsExtraTriggers; i++) {
            // 亡语
            if (this.baseCard.isDeadLanguage) {
                console.log(`${flipFlop.currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】触发亡语：${this.baseCard.descriptionStr()}`)
                this.baseCard.deadLanguage(new FlipFlop({
                    ...flipFlop,
                    targetCard: this
                }))
            }
            // 磁力效果
            this.baseCard.magneticForceList.forEach(base => base.whenDeath(new FlipFlop({
                ...flipFlop,
                targetCard: this
            })));
        }
    }

    warRoar(flipFlop: FlipFlop) {
        // 战吼
        if (this.baseCard.isWarRoars) {
            for (let i = 0; i <= flipFlop.currentPlayer.battleRoarExtraTriggers; i++) {
                if (this.baseCard.isNeedSelect) {
                    if (!flipFlop.needSelectCard) {
                        // 随机选择
                        const cardList = this.baseCard.needSelectFilter(flipFlop.currentPlayer.getCardList());
                        if (cardList.length <= 0) {
                            return
                        }
                        flipFlop.needSelectCard = randomUtil.pickone(cardList)
                    }
                }
                console.log(`(${flipFlop.currentPlayer.name})的【${this.baseCard.name}】触发战吼：${this.baseCard.descriptionStr()}`)
                this.baseCard.warRoar(flipFlop)
            }
        }
    }

    private isSpell() {
        return this.baseCard.type === '法术';
    }

    private isMinion() {
        return this.baseCard.type === '随从';
    }

    executeCurrentOtherList(flipFlop: FlipFlop, func: Function, isCheckIsOtherTriggering: boolean = true) {
        const checkFilter = (item: BaseCardObj) => {
            if (item.id !== this.id) {
                return true
            }
            if (isCheckIsOtherTriggering) {
                return item.baseCard.isOtherTriggering
            }
            return true
        }
        flipFlop.currentPlayer.getCardList()
            .filter(item => checkFilter(item))
            .forEach(item => {
                func(item, new FlipFlop({
                    ...flipFlop,
                    currentCard: item,
                    targetCard: this
                }))
            })
        flipFlop.currentPlayer.handCardList
            .filter(item => checkFilter(item))
            .forEach(item => {
                func(item, new FlipFlop({
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

    changeIsHighlyToxic(b: boolean, currentPlayer: Player) {
        if (b) {
            console.log(`(${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】获得烈焰`)
        } else {
            console.log(`(${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】失去烈焰`)
        }
        this.baseCard.isHighlyToxic = b

    }

    whenTheBattleBegan(flipFlop: FlipFlop) {
        if (this.baseCard.atTheBeginningOfTheBattle && flipFlop.currentLocation === '战斗') {
            console.log(`(${flipFlop.currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】战斗开始时触发：${this.baseCard.descriptionStr()}`)
            this.baseCard.whenTheBattleBegan(flipFlop)
        }
    }

    whenTheRoundIsOver(flipFlop: FlipFlop) {
        if (this.baseCard.endOfRound && flipFlop.currentLocation === '战场') {
            console.log(`(${flipFlop.currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】回合结束时触发：${this.baseCard.descriptionStr()}`)
            this.baseCard.whenTheRoundIsOver(flipFlop)
        }
    }

    whenTheRoundBegin(flipFlop: FlipFlop) {
        // 清锁
        if (this.isLock) {
            this.remainingUnlockRounds--
            if (this.remainingUnlockRounds <= 0) {
                this.remainingUnlockRounds = 0;
                this.isLock = false
            }
        }
        // 清理临时区加成
        this.baseCard.bonusTemporarilyClear()
        // 处理开始回合
        if (this.baseCard.beginRound && flipFlop.currentLocation === '战场') {
            console.log(`(${flipFlop.currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】开始回合时触发：${this.baseCard.descriptionStr()}`)
            this.baseCard.whenTheRoundBegin(flipFlop)
        }
    }

    lock(number: number = 1) {
        this.isLock = true;
        this.remainingUnlockRounds += number
    }

    whenPlayerInjured(flipFlop: FlipFlop) {
        if (!flipFlop.otherData) {
            return;
        }
        if (!flipFlop.otherData.harmed) {
            return;
        }
        if (flipFlop.otherData.harmed <= 0) {
            return;
        }
        // 只在你的回合生效
        if (flipFlop.currentPlayer.isEndRound) {
            return
        }
        // 战场上
        this.executeCurrentOtherList(flipFlop, (item: BaseCardObj, data: FlipFlop) => {
            item.baseCard.whenPlayerInjured(new FlipFlop({
                ...data,
                currentCard: this,
                currentLocation: '战场'
            }))
        }, false)
    }
}
