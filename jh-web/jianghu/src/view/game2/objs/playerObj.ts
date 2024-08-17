import {percentageCalculation} from "@/view/game2/objs/baseSkill";
import {randomBool, randomList} from "@/random";
import {getName} from "random_chinese_fantasy_names";
import Status from "@/view/game2/objs/status";

const level_color = {
    0: "#252a34",
    10: "#FF7E79",
    20: "#FFD479",
    30: "#FFFC79",
    40: "#D4FB79",
    50: "#73FA79",
    100: "#73FCD6",
    500: "#73FDFF",
    1000: "#76D6FF",
    2000: "#7A81FF",
    3000: "#D783FF",
    4000: "#FF85FF",
    5000: "#FF8AD8",
    10000: "#FF2600",
    50000: "#FF2F92",
    100000: "#941100",
}
export const percentageCalculationLevel = (level: number): string => {
    if (level <= 0) {
        return "0"
    }
    const strings: string[] = Object.keys(level_color);
    for (let i = 0; i < strings.length; i++) {
        const number = Number.parseInt(strings[i]);
        if (level < number) {
            return percentageCalculation(level, number)
        }
    }
    return "100"
}
export const levelColorUtil = {
    getLevelColor(level: number): { '0%': string, '100%': string, } {
        if (level <= 0) {
            return {'0%': level_color["0"], '100%': level_color["0"]}
        }
        const strings: string[] = Object.keys(level_color);
        for (let i = 0; i < strings.length; i++) {
            if (level < Number.parseInt(strings[i])) {
                return {'0%': level_color[strings[i - 1]], '100%': level_color[strings[i]]}
            }
        }
        return {'0%': level_color["100000"], '100%': level_color["100000"]}
    },
}

export interface Property {
    name: string,
    sex: '男' | '女',
    level: number,
    hp: number,
    physique: number,
    mp: number,
    power: number,
    stamina: number,
    agility: number,
    shenFa: number,
    gifted: number,
}

export const randomPlayerObj = (level = 1): PlayerObj => {
    const name = getName(1)[0]
    const skillPoint = level * 5;
    const propertyInfo: Property = {
        agility: 0,
        hp: 0,
        level: level,
        mp: 0,
        name: name,
        physique: 0,
        power: 0,
        sex: randomBool() ? "男" : '女',
        shenFa: 0,
        stamina: 0,
        gifted: 0,
    }
    const type = ['physique', 'power', 'agility', 'shenFa', 'stamina', 'gifted']
    // 随机增加点数
    for (let i = 0; i < skillPoint; i++) {
        const randomFormList = randomList.randomFormList(type);
        propertyInfo[randomFormList] += 1;
    }
    return new PlayerObj(propertyInfo);
}

/**
 * 初始技能点5个
 * 每次升级有5个技能点
 */
export class PlayerObj {

    constructor(property: Property) {
        this.property = property;
    }


    /**
     * 初始值100+ 等级x2 +（体质x10）
     */
    getMaxHp(): number {
        let number = (this.property.level || 0) * 2 + (this.property.physique || 0) * 10;
        const weakness = this.status['Weakness'];
        number = number * (1 - weakness?.injuring() || 0);
        return 100 + number
    }

    /**
     * 初始值50+ 等级x1.5 +（天赋x5）
     */
    getMaxMp(): number {
        return 50 + (this.property.level || 0) * 1.5 + (this.property.gifted || 0) * 5
    }

    /**
     * 自身攻击力（力量x2+武功等级x5）
     * 攻击力=武器攻击力+人物自身攻击力
     */
    getAtk(): number {
        let selfAttackPower = this.property.power * 2 + this.martialArt?.level * 5;
        const weakness = this.status['Weakness'];
        const atk = this.status['Atk'];
        selfAttackPower = selfAttackPower * (1 - (weakness?.injuring() || 0) + (atk?.injuring() || 0));
        return this.weaponry?.num + selfAttackPower
    }


    /**
     * 自身防御（耐力x2+内功等级x5）
     * 攻击力=装备防御力+人物自身防御力
     */
    getDef(): number {
        let number = this.property.stamina * 2 + this.internalSkill?.level * 5;
        const def = this.status['def'];
        number = number * (1 + (def?.injuring() || 0));
        return this.armor?.num + number
    }

    /**
     * 暴击率
     * 初始值 (5+敏捷x0.5)%
     */
    getCrit(): number {
        // 状态影响
        let number = (5 + this.property.agility * 0.5) * 100;
        const data = this.status['Curse'];
        number = number * (1 - ((data?.injuring() || 0) / 100));
        return number
    }

    /**
     * 闪避率
     * 初始值 (5+身法x0.5)%
     */
    getEva(): number {
        return (5 + this.property.shenFa * 0.5) * 100
    }

    /**
     * 攻击力 * (攻击力 / ( 攻击力 + 敌方防御力))
     */
    damageCaused(target: PlayerObj): number {
        return this.getAtk() * (this.getAtk() / (this.getAtk() + target.getDef()));
    }

    restoresHealth(vale: number) {
        this.property.hp = Math.max(this.property.hp + vale, this.getMaxHp())
    }


    property: Property;
    /**
     * 武器
     */
    weaponry: any;
    /**
     * 防具
     */
    armor: any;
    /**
     * 武学
     */
    martialArt: any;
    /**
     * 内功
     */
    internalSkill: any;

    status: Map<string, Status> = new Map();

    addStatus(status: Status) {
        const oldStatus = this.status.get(status.type);
        // 中毒、灼烧只叠加强度
        switch (status.type) {
            case "Poisoning":
            case "Scorching":
                if (oldStatus) {
                    status.intensity += oldStatus.intensity;
                }
                break
            default:
                break
        }
        this.status.set(status.type, status);
    }

    /**
     * 清理负面状态
     */
    cleanNegativeStatus() {
        const statuses = Array.from(this.status.values());
        statuses.filter(data => data.isBegative).forEach(data => {
            this.status.delete(data.type)
        })
    }
}

