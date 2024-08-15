export default class Status {
    type: "Poisoning" | "Scorching" | "Freeze" | "Curse" |"Def"|"Atk"| string = ""
    name: string = ""
    rounds: number = 0
    intensity: number = 0
    /**
     * 是否为负面
     */
    isBegative: boolean = true;



    endOfRound() {
        this.rounds--;
    }

    injuring(): number {
        return 0;
    }

    constructor(rounds: number) {
        this.rounds = rounds;
    }
}

/**
 * 造成中毒强度伤害，每回合递减（至少为1）
 * 中毒次数每回合递减
 */
export class Poisoning extends Status {
    type = "Poisoning"
    name = "中毒"

    injuring(): number {
        return super.injuring() + this.intensity;
    }

    endOfRound() {
        super.endOfRound()
        this.intensity = Math.max(this.intensity - 1, 1)
    }
}

/**
 * 造成灼烧强度伤害，每回合递减（至少为1）
 * 灼烧次数每回合递减
 */
export class Scorching extends Status {
    type = "Scorching"
    name = "灼烧"

    injuring(): number {
        return super.injuring() + this.intensity;
    }

    endOfRound() {
        super.endOfRound()
        this.intensity = Math.max(this.intensity - 1, 1)
    }
}

/**
 * 冰冻
 * 冻结禁止行动
 */
export class Freeze extends Status {
    type = "Freeze"
    name = "冰冻"
}

/**
 * 诅咒
 * 降低暴击率
 */
export class Curse extends Status {
    type = "Curse"
    name = "诅咒"

    injuring(): number {
        return this.intensity;
    }
}

/**
 * 虚弱(数据小于1)
 * 降低生命值上限
 * 降低攻击力
 * 降低防御力
 */
export class Weakness extends Status {
    type = "Weakness"
    name = "虚弱"

    injuring(): number {
        return this.intensity;
    }
}
