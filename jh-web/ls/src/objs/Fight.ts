import ContextObj from "./ContextObj";
import randomUtil from "../utils/RandomUtils";

export default class Fight {
    // 攻击发起人
    attackerContextObj: ContextObj;
    attackerIndex: Number = 0;
    defenderContextObj: ContextObj;
    defenderIndex: Number = 0;

    constructor(attackerContextObj: ContextObj, defenderContextObj: ContextObj) {
        this.attackerContextObj = attackerContextObj;
        this.defenderContextObj = defenderContextObj;
    }

    doFighting() {
        const attacker = this.attackerContextObj.player;
        const defender = this.defenderContextObj.player;
        if (attacker.cardListInFighting.length === 0 && defender.cardListInFighting.length === 0) {
            return;
        } else if (attacker.cardListInFighting.length === 0) {
            const sum = defender.cardListInFighting.map(card => card.baseCard.graded).reduce((sum, num) => sum + num, 0);
            attacker.changeLife(-sum);
            return;
        } else if (defender.cardListInFighting.length === 0) {
            const sum = attacker.cardListInFighting.map(card => card.baseCard.graded).reduce((sum, num) => sum + num, 0);
            defender.changeLife(-sum);
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
                        return;
                    }
                    this.doFight(true);
                    if (attacker.cardListInFighting.length <= 0 || defender.cardListInFighting.length <= 0) {
                        return;
                    }
                    this.doFight(false);
                }
            } else {
                while (true) {
                    if (attacker.cardListInFighting.length <= 0 || defender.cardListInFighting.length <= 0) {
                        return;
                    }
                    this.doFight(false);
                    if (attacker.cardListInFighting.length <= 0 || defender.cardListInFighting.length <= 0) {
                        return;
                    }
                    this.doFight(true);
                }
            }
        } else if (attacker.cardListInFighting.length > defender.cardListInFighting.length) {
            while (true) {
                if (attacker.cardListInFighting.length <= 0 || defender.cardListInFighting.length <= 0) {
                    return;
                }
                this.doFight(true);
                if (attacker.cardListInFighting.length <= 0 || defender.cardListInFighting.length <= 0) {
                    return;
                }
                this.doFight(false);
            }
        } else {
            while (true) {
                if (attacker.cardListInFighting.length <= 0 || defender.cardListInFighting.length <= 0) {
                    return;
                }
                this.doFight(false);
                if (attacker.cardListInFighting.length <= 0 || defender.cardListInFighting.length <= 0) {
                    return;
                }
                this.doFight(true);
            }
        }
    }

    private doFight(isAttacker: Boolean) {
        let attackerContextObj: ContextObj
        let defenderContextObj: ContextObj
        let index;
        if (isAttacker) {
            attackerContextObj = this.attackerContextObj;
            defenderContextObj = this.defenderContextObj;
            index = this.attackerIndex;
        } else {
            defenderContextObj = this.attackerContextObj;
            attackerContextObj = this.defenderContextObj;
            index = this.defenderIndex;
        }
        attackerContextObj.player.cardListInFighting[index].whenAttackTrigger(randomUtil.pick(defenderContextObj.player.cardListInFighting, 1), attackerContextObj, defenderContextObj)
        attackerContextObj.player.cardListInFighting = attackerContextObj.player.cardListInFighting.filter(card => card.isSurviving());
        attackerContextObj.player.cardListInFighting = attackerContextObj.player.cardListInFighting.filter(card => card.isSurviving());
        if (isAttacker) {
            this.attackerIndex++;
            if (this.attackerIndex >= attackerContextObj.player.cardListInFighting.length) {
                this.attackerIndex = 0;
            }
        } else {
            this.defenderIndex++;
            if (this.defenderIndex >= defenderContextObj.player.cardListInFighting.length) {
                this.defenderIndex = 0;
            }
        }
    }
}
