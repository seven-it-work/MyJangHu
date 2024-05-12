import ContextObj from "./ContextObj";
import randomUtil from "../utils/RandomUtils";
import Player from "./Player";

export default class FightObj {
    // 攻击发起人
    attackerPlayer: Player;
    attackerIndex: number = 0;
    defenderPlayer: Player;
    defenderIndex: number = 0;
    // 共享对象
    contextObj: ContextObj;


    constructor(attackerPlayer: Player, defenderPlayer: Player, contextObj: ContextObj) {
        // 战斗前初始化战斗list
        attackerPlayer.initCardListInFighting()
        defenderPlayer.initCardListInFighting()
        this.attackerPlayer = attackerPlayer;
        this.defenderPlayer = defenderPlayer;
        this.contextObj = contextObj;
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
        if (attacker.cardListInFighting.length === defender.cardListInFighting.length) {
            if (randomUtil.bool()) {
                // 攻击者先手
                while (true) {
                    if (attacker.cardListInFighting.length <= 0 || defender.cardListInFighting.length <= 0) {
                        FightObj.battleSettlement(attacker, defender, this.contextObj)
                        return;
                    }
                    this.doFight(true);
                    if (attacker.cardListInFighting.length <= 0 || defender.cardListInFighting.length <= 0) {
                        FightObj.battleSettlement(attacker, defender, this.contextObj)
                        return;
                    }
                    this.doFight(false);
                }
            } else {
                while (true) {
                    if (attacker.cardListInFighting.length <= 0 || defender.cardListInFighting.length <= 0) {
                        FightObj.battleSettlement(attacker, defender, this.contextObj)
                        return;
                    }
                    this.doFight(false);
                    if (attacker.cardListInFighting.length <= 0 || defender.cardListInFighting.length <= 0) {
                        FightObj.battleSettlement(attacker, defender, this.contextObj)
                        return;
                    }
                    this.doFight(true);
                }
            }
        } else if (attacker.cardListInFighting.length > defender.cardListInFighting.length) {
            while (true) {
                if (attacker.cardListInFighting.length <= 0 || defender.cardListInFighting.length <= 0) {
                    FightObj.battleSettlement(attacker, defender, this.contextObj)
                    return;
                }
                this.doFight(true);
                if (attacker.cardListInFighting.length <= 0 || defender.cardListInFighting.length <= 0) {
                    FightObj.battleSettlement(attacker, defender, this.contextObj)
                    return;
                }
                this.doFight(false);
            }
        } else {
            while (true) {
                if (attacker.cardListInFighting.length <= 0 || defender.cardListInFighting.length <= 0) {
                    FightObj.battleSettlement(attacker, defender, this.contextObj)
                    return;
                }
                this.doFight(false);
                if (attacker.cardListInFighting.length <= 0 || defender.cardListInFighting.length <= 0) {
                    FightObj.battleSettlement(attacker, defender, this.contextObj)
                    return;
                }
                this.doFight(true);
            }
        }
    }

    private static battleSettlement(attackerPlayer: Player, defenderPlayer: Player, contextObj: ContextObj) {
        if (attackerPlayer.cardListInFighting.length !== 0 &&
            defenderPlayer.cardListInFighting.length !== 0) {
            throw new Error("错误战斗结算")
        } else if (attackerPlayer.cardListInFighting.length !== 0) {
            const sum = attackerPlayer.cardListInFighting.map(card => card.baseCard.graded).reduce((sum, num) => sum + num, 0);
            console.log(`${attackerPlayer.name}与${defenderPlayer.name}战斗结束，${attackerPlayer.name}获胜`)
            defenderPlayer.changeLife(-sum, {contextObj: contextObj});
        } else if (defenderPlayer.cardListInFighting.length !== 0) {
            const sum = defenderPlayer.cardListInFighting.map(card => card.baseCard.graded).reduce((sum, num) => sum + num, 0);
            console.log(`${attackerPlayer.name}与${defenderPlayer.name}战斗结束，${defenderPlayer.name}获胜`)
            attackerPlayer.changeLife(-sum, {contextObj: contextObj});
        } else {
            // 平局
            console.log(`${attackerPlayer.name}与${defenderPlayer.name}战斗结束，平局`)
        }
    }

    private doFight(isAttacker: Boolean) {
        let attackerPlayer: Player
        let defenderPlayer: Player
        let index;
        if (isAttacker) {
            attackerPlayer = this.attackerPlayer;
            defenderPlayer = this.defenderPlayer;
            if (this.attackerIndex >= attackerPlayer.cardListInFighting.length) {
                this.attackerIndex = 0;
            }
            index = this.attackerIndex;
        } else {
            defenderPlayer = this.attackerPlayer;
            attackerPlayer = this.defenderPlayer;
            if (this.attackerIndex >= attackerPlayer.cardListInFighting.length) {
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
        if (!attacker){
            debugger
        }
        attacker.whenAttackTrigger({
            targetPlayer: defenderPlayer,
            currentPlayer: attackerPlayer,
            targetCard: randomUtil.pickone(pickList),
            currentCard: attacker,
            contextObj: this.contextObj,
        })
        attackerPlayer.updateCardListInFighting()
        defenderPlayer.updateCardListInFighting()
        if (isAttacker) {
            this.attackerIndex++;
        } else {
            this.defenderIndex++;
        }
        if (this.attackerIndex >= attackerPlayer.cardListInFighting.length) {
            this.attackerIndex = 0;
        }
        if (this.defenderIndex >= defenderPlayer.cardListInFighting.length) {
            this.defenderIndex = 0;
        }
    }
}
