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

export const randomPlayerObj = (): PlayerObj => {
    const name = getName(1)[0]
    var playerObj = new PlayerObj({
        agility: randomNumber.randomInt(0, 100),
        armStrength: randomNumber.randomInt(0, 100),
        fixedForce: randomNumber.randomInt(0, 100),
        footStrength: randomNumber.randomInt(0, 100),
        health: randomNumber.randomInt(0, 100),
        maxHealth: 100,
        name: name,
        sex: randomBool() ? "男" : '女',
        skillMap: defaultSkills(),
    });
    playerObj.currentRoundProperties={}
    playerObj.previousRoundProperties={}
    return playerObj;
}

export class PlayerObj {

    constructor(property: Property) {
        this.property = property;
    }

    property: Property;

    // 当前回合属性
    currentRoundProperties: {  };

    // 上一回合属性
    previousRoundProperties: {  };



    executing(targetPlayerObj: PlayerObj) {
        debugger
        const currentSkill = this.currentRoundProperties.skill;
        const targetCurrentSkill = targetPlayerObj.currentRoundProperties.skill;
        store.state.player.logs.push({
            time: dayjs().format(),
            html: `${this.property.name}进行${currentSkill.name}，${targetPlayerObj.property.name}选则进行${targetCurrentSkill.name}`
        })
        const targetType = targetCurrentSkill.type;
        let successRate = 0;
        // 他人skill数值
        const skillNumber = targetCurrentSkill.executionAction(targetPlayerObj, this);
        switch (currentSkill.type) {
            case "runAway":
                // 成功率=(逃跑方)/(逃跑方+攻击方)/3
                successRate = (this.property.agility) / (skillNumber + this.property.agility) / 3;
                if (probability.calculateTheProbability(successRate)) {
                    store.state.player.logs.push({
                        time: dayjs().format(),
                        html: `${targetPlayerObj.property.name}逃跑成功`
                    })
                    return;
                }
                break;
            case "attack":
                let injuring = currentSkill.executionAction(this, targetPlayerObj);
                switch (targetType) {
                    case "attack":
                        this.property.health -= skillNumber;
                        store.state.player.logs.push({
                            time: dayjs().format(),
                            html: `${this.property.name}遭受${skillNumber}伤害`
                        })
                        break;
                    case "dodge":
                        // 躲避成功率=(躲避方-攻击方)/(躲避方+攻击方)/2
                        successRate = (skillNumber - this.property.agility) / (skillNumber + this.property.agility) / 2;
                        if (probability.calculateTheProbability(successRate)) {
                            injuring = 0;
                            store.state.player.logs.push({
                                time: dayjs().format(),
                                html: `${targetPlayerObj.property.name}躲避成功`
                            })
                        }
                        break;
                    case "gridBlock":
                        // 格挡成功率=(格挡方)/(格挡方+攻击方)/1.5
                        successRate = skillNumber / (skillNumber + this.property.agility) / 1.5;
                        if (probability.calculateTheProbability(successRate)) {
                            // 格挡成功后，重新计算造成伤害，消耗伤害比=格挡值/(伤害+格挡值)
                            injuring = skillNumber / (skillNumber + injuring) * injuring
                            store.state.player.logs.push({
                                time: dayjs().format(),
                                html: `${targetPlayerObj.property.name}格挡成功`
                            })
                        }
                        break;
                }
                if (injuring > 0) {
                    targetPlayerObj.property.health -= injuring;
                    store.state.player.logs.push({
                        time: dayjs().format(),
                        html: `${targetPlayerObj.property.name}遭受${skillNumber}伤害`
                    })
                }
                break;
            case "gridBlock":
                switch (targetType) {
                    case "attack":
                        const injuring = targetCurrentSkill.executionAction(targetPlayerObj, this);
                        const gridBlockValue = currentSkill.executionAction(this, targetPlayerObj);
                        successRate = gridBlockValue / (gridBlockValue + injuring) / 1.5;
                        if (probability.calculateTheProbability(successRate)) {
                            // 格挡成功后，重新计算造成伤害，消耗伤害比=格挡值/(伤害+格挡值)
                            const health = gridBlockValue / (gridBlockValue + injuring) * injuring;
                            this.property.health -= health
                            store.state.player.logs.push({
                                time: dayjs().format(),
                                html: `${this.property.name}遭受${health}伤害`
                            })
                        }
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
                            store.state.player.logs.push({
                                time: dayjs().format(),
                                html: `${this.property.name}躲避成功`
                            })
                        }
                        break;
                }
        }
    }
}

