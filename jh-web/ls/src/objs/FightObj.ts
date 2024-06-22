import ContextObj from "./ContextObj";
import randomUtil from "../utils/RandomUtils";
import Player from "./Player";
import {isEmpty} from "lodash";
import {FlipFlop} from "../entity/FlipFlop";
import {target} from "happy-dom/lib/PropertySymbol";

export default class FightObj {
    // 攻击发起人
    attackerPlayer: Player;
    attackerIndex: number = 0;
    defenderPlayer: Player;
    defenderIndex: number = 0;
    // 共享对象
    contextObj: ContextObj;


    constructor(attackerPlayer: Player, defenderPlayer: Player, contextObj: ContextObj) {
        console.log(`第${contextObj.currentRound}回合战斗开始：${attackerPlayer.name}进攻${defenderPlayer.name}`)
        // 战斗前初始化战斗list
        attackerPlayer.initCardListInFighting()
        defenderPlayer.initCardListInFighting()
        this.attackerPlayer = attackerPlayer;
        this.defenderPlayer = defenderPlayer;
        this.contextObj = contextObj;
        // 1、触发法术
        attackerPlayer.spellAttached.forEach(card => card.whenTheBattleBegan(new FlipFlop({
            contextObj: contextObj,
            currentCard: card,
            currentLocation: '战斗',
            currentPlayer: attackerPlayer,
            targetCard: card,
            targetLocation: '战斗',
            targetPlayer: attackerPlayer
        })));
        defenderPlayer.spellAttached.forEach(card => card.whenTheBattleBegan(new FlipFlop({
            contextObj: contextObj,
            currentCard: card,
            currentLocation: '战斗',
            currentPlayer: defenderPlayer,
            targetCard: card,
            targetLocation: '战斗',
            targetPlayer: defenderPlayer
        })));
        // 卡片触发
        attackerPlayer.cardListInFighting.forEach(card => card.whenTheBattleBegan(new FlipFlop({
            contextObj: contextObj,
            currentCard: card,
            currentLocation: '战斗',
            currentPlayer: attackerPlayer,
            targetCard: card,
            targetLocation: '战斗',
            targetPlayer: attackerPlayer
        })));
        defenderPlayer.cardListInFighting.forEach(card => card.whenTheBattleBegan(new FlipFlop({
            contextObj: contextObj,
            currentCard: card,
            currentLocation: '战斗',
            currentPlayer: defenderPlayer,
            targetCard: card,
            targetLocation: '战斗',
            targetPlayer: defenderPlayer
        })));
    }

    doFighting() {
        const attacker = this.attackerPlayer;
        const defender = this.defenderPlayer;
        if (attacker.cardListInFighting.length === 0 && defender.cardListInFighting.length === 0) {
            FightObj.battleSettlement(attacker, defender, this.contextObj)
            return;
        } else if (attacker.cardListInFighting.length === 0) {
            FightObj.battleSettlement(attacker, defender, this.contextObj)
            return;
        } else if (defender.cardListInFighting.length === 0) {
            FightObj.battleSettlement(attacker, defender, this.contextObj)
            return;
        }
        /**
         * 随机攻击
         * 1、数量多的先手，如果一样则随机
         */
        let isEnd = this.checkIsEnd(attacker, defender);
        if (attacker.cardListInFighting.length === defender.cardListInFighting.length) {
            if (randomUtil.bool()) {
                // 攻击者先手
                while (true) {
                    isEnd = this.checkIsEnd(attacker, defender);
                    if (isEnd) {
                        FightObj.battleSettlement(attacker, defender, this.contextObj)
                        return;
                    }
                    this.doFight(true);
                    if (isEnd) {
                        FightObj.battleSettlement(attacker, defender, this.contextObj)
                        return;
                    }
                    this.doFight(false);
                }
            } else {
                while (true) {
                    isEnd = this.checkIsEnd(attacker, defender);
                    if (isEnd) {
                        FightObj.battleSettlement(attacker, defender, this.contextObj)
                        return;
                    }
                    this.doFight(false);
                    if (isEnd) {
                        FightObj.battleSettlement(attacker, defender, this.contextObj)
                        return;
                    }
                    this.doFight(true);
                }
            }
        } else if (attacker.cardListInFighting.length > defender.cardListInFighting.length) {
            while (true) {
                isEnd = this.checkIsEnd(attacker, defender);
                if (isEnd) {
                    FightObj.battleSettlement(attacker, defender, this.contextObj)
                    return;
                }
                this.doFight(true);
                if (isEnd) {
                    FightObj.battleSettlement(attacker, defender, this.contextObj)
                    return;
                }
                this.doFight(false);
            }
        } else {
            while (true) {
                isEnd = this.checkIsEnd(attacker, defender);
                if (isEnd) {
                    FightObj.battleSettlement(attacker, defender, this.contextObj)
                    return;
                }
                this.doFight(false);
                if (isEnd) {
                    FightObj.battleSettlement(attacker, defender, this.contextObj)
                    return;
                }
                this.doFight(true);
            }
        }
    }

    private checkIsEnd(attacker: Player, defender: Player): boolean {
        return !(attacker.cardListInFighting.filter(card => card.attack > 0).length > 0 &&
            defender.cardListInFighting.filter(card => card.attack > 0).length > 0);

    }

    private static getRemainingEntourage(player: Player): string[] {
        return player.getCardList().map(card => `【(${card.baseCard.graded}级)${card.baseCard.name}(${card.attack}/${card.life})】`)
    }

    private static battleSettlement(attackerPlayer: Player, defenderPlayer: Player, contextObj: ContextObj) {
        if (attackerPlayer.cardListInFighting.length !== 0) {
            const sum = attackerPlayer.cardListInFighting.map(card => card.baseCard.graded).reduce((sum, num) => sum + num, 0);
            console.log(`${attackerPlayer.name}与${defenderPlayer.name}战斗结束，${attackerPlayer.name}获胜 ${FightObj.getRemainingEntourage(attackerPlayer)}`)
            defenderPlayer.changeLife(-sum, contextObj);
        } else if (defenderPlayer.cardListInFighting.length !== 0) {
            const sum = defenderPlayer.cardListInFighting.map(card => card.baseCard.graded).reduce((sum, num) => sum + num, 0);
            console.log(`${attackerPlayer.name}与${defenderPlayer.name}战斗结束，${defenderPlayer.name}获胜 ${FightObj.getRemainingEntourage(defenderPlayer)}`)
            attackerPlayer.changeLife(-sum, contextObj);
        } else {
            // 平局
            console.log(`${attackerPlayer.name}与${defenderPlayer.name}战斗结束，平局`)
        }
        // 结算时的法术附加
        // attackerPlayer.spellAttached.forEach(card => card.whenEndFightingTrigger('胜利', {
        //     contextObj: contextObj,
        //     currentPlayer: attackerPlayer,
        //     targetPlayer: defenderPlayer,
        // }))
        // 结算时的法术附加
        // defenderPlayer.spellAttached.forEach(card => card.whenEndFightingTrigger('失败', {
        //     contextObj: contextObj,
        //     currentPlayer: defenderPlayer,
        //     targetPlayer: attackerPlayer,
        // }))
    }

    private isOver() {
        return this.attackerPlayer.cardListInFighting.length <= 0 || this.defenderPlayer.cardListInFighting.length <= 0
    }

    private doFight(isAttacker: Boolean) {
        // 是否结束判断
        if (this.isOver()) {
            return;
        }
        let checkAttackerIndex;
        let attackerPlayer: Player
        let defenderPlayer: Player
        let index;
        if (isAttacker) {
            attackerPlayer = this.attackerPlayer;
            defenderPlayer = this.defenderPlayer;
            if (attackerPlayer.cardListInFighting.length === 0) {
                return;
            }
            checkAttackerIndex = this.attackerIndex >= attackerPlayer.cardListInFighting.length;
            if (checkAttackerIndex) {
                this.attackerIndex = 0;
            }
            index = this.attackerIndex;
        } else {
            defenderPlayer = this.attackerPlayer;
            attackerPlayer = this.defenderPlayer;
            if (attackerPlayer.cardListInFighting.length === 0) {
                return;
            }
            checkAttackerIndex = this.attackerIndex >= attackerPlayer.cardListInFighting.length;
            if (checkAttackerIndex) {
                this.attackerIndex = 0;
            }
            index = this.defenderIndex;
        }
        const attacker = attackerPlayer.cardListInFighting[index];
        // 嘲讽优先，潜行过滤掉
        let pickList = defenderPlayer.cardListInFighting.filter(card => !card.baseCard.isSneak).filter(card => card.baseCard.isMockery);
        if (pickList.length <= 0) {
            pickList = defenderPlayer.cardListInFighting.filter(card => !card.baseCard.isSneak)
        }
        //  这里为什么会为null
        if (!attacker) {
            debugger
        }
        if (isEmpty(pickList)) {
            console.log("对方有潜行，无法攻击")
            return
        }
        attacker.whenAttacking(new FlipFlop({
            contextObj: this.contextObj,
            currentCard: attacker,
            currentLocation: '战斗',
            currentPlayer: attackerPlayer,
            targetCard: randomUtil.pickone(pickList),
            targetLocation: '战斗',
            targetPlayer: defenderPlayer
        }))
        attackerPlayer.updateCardListInFighting()
        defenderPlayer.updateCardListInFighting()
        if (isAttacker) {
            this.attackerIndex++;
        } else {
            this.defenderIndex++;
        }
        if (checkAttackerIndex) {
            this.attackerIndex = 0;
        }
        if (this.defenderIndex >= defenderPlayer.cardListInFighting.length) {
            this.defenderIndex = 0;
        }
    }
}
