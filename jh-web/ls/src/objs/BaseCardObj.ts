import BaseCard from "../entity/baseCard";
import ContextObj from "./ContextObj";
import {Trigger, TriggerObj} from "../entity/Trigger";
import Chance from 'chance'
import {cloneDeep} from "lodash";
import SharedCardPool from "./SharedCardPool";
import Player from "./Player";
import {Serialization} from "../utils/SaveUtils";
import {serialize} from "class-transformer";

export default class BaseCardObj implements Trigger, Serialization<BaseCardObj> {
    id: string;
    isFreeze: boolean = false;
    index: number;

    constructor(baseCard: BaseCard | undefined) {
        if (baseCard) {
            this.baseCard = cloneDeep(baseCard);
        }
        this.id = new Chance().guid();
    }

    getOriginalVersion(sharedCardPool: SharedCardPool) {
        return new BaseCardObj(sharedCardPool.getByName(this.baseCard.constructor.name));
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
        originalVersion.baseCard.isGold = true;

        originalVersion.baseCard.attackBonus.push(...baseCardObj1.baseCard.attackBonus)
        originalVersion.baseCard.attackBonus.push(...baseCardObj2.baseCard.attackBonus)
        originalVersion.baseCard.attackBonus.push(...baseCardObj3.baseCard.attackBonus)

        originalVersion.baseCard.lifeBonus.push(...baseCardObj1.baseCard.lifeBonus)
        originalVersion.baseCard.lifeBonus.push(...baseCardObj2.baseCard.lifeBonus)
        originalVersion.baseCard.lifeBonus.push(...baseCardObj3.baseCard.lifeBonus)

        originalVersion.baseCard.magneticForceList.push(...baseCardObj1.baseCard.magneticForceList)
        originalVersion.baseCard.magneticForceList.push(...baseCardObj2.baseCard.magneticForceList)
        originalVersion.baseCard.magneticForceList.push(...baseCardObj3.baseCard.magneticForceList)

        originalVersion.baseCard.isMockery = baseCardObj1.baseCard.isMockery || baseCardObj2.baseCard.isMockery || baseCardObj3.baseCard.isMockery
        originalVersion.baseCard.isHighlyToxic = baseCardObj1.baseCard.isHighlyToxic || baseCardObj2.baseCard.isHighlyToxic || baseCardObj3.baseCard.isHighlyToxic
        originalVersion.baseCard.hasPoison = baseCardObj1.baseCard.hasPoison || baseCardObj2.baseCard.hasPoison || baseCardObj3.baseCard.hasPoison
        originalVersion.baseCard.attackHighlyToxic = baseCardObj1.baseCard.attackHighlyToxic || baseCardObj2.baseCard.attackHighlyToxic || baseCardObj3.baseCard.attackHighlyToxic
        originalVersion.baseCard.isHolyShield = baseCardObj1.baseCard.isHolyShield || baseCardObj2.baseCard.isHolyShield || baseCardObj3.baseCard.isHolyShield
        originalVersion.baseCard.isRebirth = baseCardObj1.baseCard.isRebirth || baseCardObj2.baseCard.isRebirth || baseCardObj3.baseCard.isRebirth
        originalVersion.baseCard.isSneak = baseCardObj1.baseCard.isSneak || baseCardObj2.baseCard.isSneak || baseCardObj3.baseCard.isSneak
        originalVersion.baseCard.numberAttack = Math.max(Math.max(baseCardObj1.baseCard.numberAttack, baseCardObj2.baseCard.numberAttack), baseCardObj3.baseCard.numberAttack)

        return originalVersion;
    }

    isSurviving() {
        return this.baseCard.isSurviving();
    }

    healthChange(number: number, triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        if (number < 0) {
            if (this.baseCard.isHolyShield) {
                // 圣盾
                this.baseCard.isHolyShield = false;
                this.whenHolyShieldDisappears(triggerObj)
                if (currentPlayer.isEndRound) {
                    currentPlayer.cardListInFighting.forEach(card => {
                        this.whenOtherHolyShieldDisappears({
                            ...triggerObj,
                            currentCard: card,
                            targetCard: this,
                        })
                    })
                } else {
                    currentPlayer.cardList.forEach(card => {
                        this.whenOtherHolyShieldDisappears({
                            ...triggerObj,
                            currentCard: card,
                            targetCard: this,
                        })
                    })
                }
                number = 0;
                console.log(`(${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】的圣盾失效`)
            }
            console.log(`(${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】遭受${number}伤害`)
            this.baseCard.life += number;
            if (this.isSurviving()) {
                return;
            }
            console.log(`(${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】死亡`)
            // 加入死亡池
            currentPlayer.deadCardListInFighting.push(this)
            // 复生
            if (this.baseCard.isRebirth) {
                this.baseCard.life = 1;
                this.baseCard.isRebirth = false;
                console.log(`${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】复生`)
            } else {
                // 移除
                currentPlayer.cardRemove(this);
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
        // 风怒
        for (let i = 0; i < this.baseCard.numberAttack; i++) {
            if (this.isSurviving()) {
                this.doAttack(currentPlayer, targetPlayer, targetCard, triggerObj);
            }
        }
    }

    private doAttack(currentPlayer: Player, targetPlayer: Player, targetCard: BaseCardObj, triggerObj: TriggerObj) {
        console.log(`(${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】对(${targetPlayer.name})的【${targetCard.baseCard.name}(${targetCard.attack}/${targetCard.life})】进行攻击`)
        this.baseCard.whenAttackTrigger(this.triggerObj2BaseCard(triggerObj))
        targetCard.whenDefenseTrigger({
            ...triggerObj,
            currentPlayer: targetPlayer,
            targetPlayer: currentPlayer,
            currentCard: targetCard,
            targetCard: this
        })
        // 受到伤害
        let toBeHarmed = 0;
        // 造成伤害
        let toCauseHarm = 0;
        if (targetCard.baseCard.isHighlyToxic) {
            // 剧毒，用完就没了
            toBeHarmed = this.life;
            targetCard.baseCard.isHighlyToxic = false;
            console.log(`(${targetPlayer.name})的【${targetCard.baseCard.name}(${targetCard.attack}/${targetCard.life})】剧毒已使用`)
        } else if (targetCard.baseCard.hasPoison) {
            // 毒药，能一直毒
            toBeHarmed = this.life;
            console.log(`(${targetPlayer.name})的【${targetCard.baseCard.name}(${targetCard.attack}/${targetCard.life})】烈药触发`)
        } else if (targetCard.baseCard.attackHighlyToxic) {
            // 遭受攻击时，剧毒 todo 放到防御触发器里面 改 剧毒=true
            toBeHarmed = this.life;
            console.log(`(${targetPlayer.name})的【${targetCard.baseCard.name}(${targetCard.attack}/${targetCard.life})】遭受攻击时，剧毒`)
        } else {
            toBeHarmed = targetCard.attack;
        }

        if (this.baseCard.isHighlyToxic) {
            toCauseHarm = targetCard.life;
            console.log(`(${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】剧毒已使用`)
            this.baseCard.isHighlyToxic = false;
        } else if (this.baseCard.hasPoison) {
            console.log(`(${currentPlayer.name})的【${this.baseCard.name}(${this.attack}/${this.life})】烈药触发`)
            toCauseHarm = targetCard.life;
        } else {
            toCauseHarm = this.attack;
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

    whenHolyShieldDisappears(triggerObj: TriggerObj) {
        this.baseCard.whenHolyShieldDisappears(this.triggerObj2BaseCard(triggerObj));
    }

    whenOtherHolyShieldDisappears(triggerObj: TriggerObj) {
        this.baseCard.whenOtherHolyShieldDisappears(this.triggerObj2BaseCard(triggerObj));
    }

    whenDefenseTrigger(triggerObj: TriggerObj) {
        this.baseCard.whenDefenseTrigger(this.triggerObj2BaseCard(triggerObj));
    }

    deserialize(json: any) {
        if (typeof json === 'string') {
            json = JSON.parse(json)
        }
        this.id = json.id
        this.isFreeze = json.isFreeze
        this.index = json.index
        this.baseCard = SharedCardPool.initCardDb().getByName(json.baseCard.classType).deserialize(json.baseCard);
        return this;
    }

    serialization(): string {
        return serialize(this);
    }
}
