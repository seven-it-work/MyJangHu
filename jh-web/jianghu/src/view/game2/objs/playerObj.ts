import {BaseSkill, defaultSkills, percentageCalculation} from "@/view/game2/objs/baseSkill";
import {probability, randomBool, randomNumber} from "@/random";
import store from "@/view/game2/store"
import dayjs from "dayjs";
import {getName} from "random_chinese_fantasy_names";

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
    health: number,
    maxHealth: number,
    /**
     * 臂力
     * 影响造成的攻击
     */
    armStrength: number,
    /**
     * 脚力
     * 影响造成的攻击
     */
    footStrength: number,
    /**
     * 敏捷
     * 影响躲避
     */
    agility: number,
    /**
     * 定力
     * 影响格挡
     */
    fixedForce: number,
    skillMap: Map<string, BaseSkill>,
}

const level_map = {
    1: {
        agility: {min: 1, max: 5},
        armStrength: {min: 1, max: 10},
        fixedForce: {min: 1, max: 5},
        footStrength: {min: 1, max: 10},
        health: {min: 20, max: 50},
    },
    2: {
        agility: {min: 2, max: 6},
        armStrength: {min: 2, max: 12},
        fixedForce: {min: 2, max: 6},
        footStrength: {min: 2, max: 12},
        health: {min: 30, max: 60},
    },
    3: {
        agility: {min: 3, max: 8},
        armStrength: {min: 3, max: 15},
        fixedForce: {min: 3, max: 8},
        footStrength: {min: 3, max: 15},
        health: {min: 30, max: 80},
    },
}
export const randomPlayerObj = (level = "1"): PlayerObj => {
    const name = getName(1)[0]
    const levelMapElement = level_map[level];
    const health = randomNumber.randomInt(levelMapElement.health.min, levelMapElement.health.max);
    const playerObj = new PlayerObj({
        agility: randomNumber.randomInt(levelMapElement.agility.min, levelMapElement.agility.max),
        armStrength: randomNumber.randomInt(levelMapElement.armStrength.min, levelMapElement.armStrength.max),
        fixedForce: randomNumber.randomInt(levelMapElement.fixedForce.min, levelMapElement.fixedForce.max),
        footStrength: randomNumber.randomInt(levelMapElement.footStrength.min, levelMapElement.footStrength.max),
        health,
        maxHealth: health,
        name: name,
        sex: randomBool() ? "男" : '女',
        skillMap: defaultSkills(),
    });
    playerObj.currentRoundProperties = {
        skill: undefined,
    }
    playerObj.previousRoundProperties = {
        skill: undefined,
    }
    return playerObj;
}

export class PlayerObj {

    constructor(property: Property) {
        this.property = property;
    }

    property: Property;

    // 当前回合属性
    currentRoundProperties: {
        skill: BaseSkill,
    };

    // 上一回合属性
    previousRoundProperties: {
        skill: BaseSkill,
    };


    executing(targetPlayerObj: PlayerObj): "RunAwaySuccess" | undefined {
        const currentSkill: BaseSkill = this.currentRoundProperties.skill;
        const targetCurrentSkill: BaseSkill = targetPlayerObj.currentRoundProperties.skill;
        store.commit("log", `<span style="color: cornflowerblue">${this.property.name}</span>进行${currentSkill.name}，<span style="color: peru">${targetPlayerObj.property.name}</span>选则进行${targetCurrentSkill.name}`)
        const targetType = targetCurrentSkill.type;
        let successRate = 0;
        // 他人skill数值
        const skillNumber = targetCurrentSkill.executionAction(targetPlayerObj, this);
        switch (currentSkill.type) {
            case "runAway":
                // 成功率=(逃跑方)/(逃跑方+攻击方)/3
                successRate = (this.property.agility) / (skillNumber + this.property.agility) / 3;
                if (probability.calculateTheProbability(successRate)) {
                    store.commit("log", `<span style="color: peru">${targetPlayerObj.property.name}</span>逃跑成功`)
                    return "RunAwaySuccess";
                } else {
                    store.commit("log", `<span style="color: cornflowerblue">${this.property.name}</span>逃跑失败`)
                    switch (targetType) {
                        case "attack":
                            let injuring = targetCurrentSkill.executionAction(targetPlayerObj, this);
                            this.property.health -= injuring
                            store.commit("log", `<span style="color: cornflowerblue">${this.property.name}</span>遭受${injuring}伤害`)
                            break;
                    }
                }
                break;
            case "attack":
                let injuring = currentSkill.executionAction(this, targetPlayerObj);
                switch (targetType) {
                    case "attack":
                        this.property.health -= skillNumber;
                        store.commit("log", `<span style="color: cornflowerblue">${this.property.name}</span>遭受${injuring}伤害`)
                        break;
                    case "dodge":
                        // 躲避成功率=(躲避方-攻击方)/(躲避方+攻击方)/2
                        successRate = (skillNumber - this.property.agility) / (skillNumber + this.property.agility) / 2;
                        if (probability.calculateTheProbability(successRate)) {
                            injuring = 0;
                            store.commit("log", `<span style="color: peru">${targetPlayerObj.property.name}</span>躲避成功`)
                        } else {
                            store.commit("log", `<span style="color: peru">${targetPlayerObj.property.name}</span>躲避失败`)
                        }
                        break;
                    case "gridBlock":
                        // 格挡成功率=(格挡方)/(格挡方+攻击方)/1.5
                        successRate = skillNumber / (skillNumber + this.property.agility) / 1.5;
                        if (probability.calculateTheProbability(successRate)) {
                            // 格挡成功后，重新计算造成伤害，消耗伤害比=格挡值/(伤害+格挡值)
                            injuring = skillNumber / (skillNumber + injuring) * injuring
                            store.commit("log", `<span style="color: peru">${targetPlayerObj.property.name}</span>格挡成功`)
                        } else {
                            store.commit("log", `<span style="color: peru">${targetPlayerObj.property.name}</span>格挡失败`)
                        }
                        break;
                }
                if (injuring > 0) {
                    targetPlayerObj.property.health -= injuring;
                    store.commit("log", `<span style="color: peru">${targetPlayerObj.property.name}</span>遭受${injuring}伤害`)
                }
                break;
            case "gridBlock":
                switch (targetType) {
                    case "attack":
                        let injuring = targetCurrentSkill.executionAction(targetPlayerObj, this);
                        const gridBlockValue = currentSkill.executionAction(this, targetPlayerObj);
                        successRate = gridBlockValue / (gridBlockValue + injuring) / 1.5;
                        if (probability.calculateTheProbability(successRate)) {
                            // 格挡成功后，重新计算造成伤害，消耗伤害比=格挡值/(伤害+格挡值)
                            injuring = gridBlockValue / (gridBlockValue + injuring) * injuring;
                            store.commit("log", `<span style="color: cornflowerblue">${this.property.name}</span>格挡成功`)
                        } else {
                            store.commit("log", `<span style="color: cornflowerblue">${this.property.name}</span>格挡失败`)
                        }
                        this.property.health -= injuring
                        store.commit("log", `<span style="color: cornflowerblue">${this.property.name}</span>遭受${injuring}伤害`)
                        break;
                }
                break
            case "dodge":
                switch (targetType) {
                    case "attack":
                        const injuring = targetCurrentSkill.executionAction(targetPlayerObj, this);
                        const dodgeValue = currentSkill.executionAction(this, targetPlayerObj);
                        // 躲避成功率=(躲避方-攻击方)/(躲避方+攻击方)/2
                        successRate = (dodgeValue - injuring) / (dodgeValue + injuring) / 2;
                        if (probability.calculateTheProbability(successRate)) {
                            // 躲避成功
                            store.commit("log", `<span style="color: cornflowerblue">${this.property.name}</span>躲避成功`)
                        } else {
                            store.commit("log", `<span style="color: cornflowerblue">${this.property.name}</span>躲避失败`)
                        }
                        break;
                }
        }
    }
}

