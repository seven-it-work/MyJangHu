import {PlayerObj} from "@/view/game2/objs/playerObj";

export interface BaseSkill {
    type: "attack" | "gridBlock" | "dodge" | "runAway",
    key: string,
    name: string,
    aiCanUsed: boolean;

    executionAction(playerObj: PlayerObj, targetPlayerObj: PlayerObj): number,
}

export const percentageCalculation = (molecules: number, denominator: number, decimalPlace: number = 1): string => {
    return (molecules / denominator * 100).toFixed(decimalPlace);
}

export const defaultSkills = (): Map<string, BaseSkill> => {
    return new Map(Object.entries({
        HandAttack: new HandAttack(),
        FootAttack: new FootAttack(),
        GridBlock: new GridBlock(),
        Dodge: new Dodge(),
        runAway: new RunAway(),
    }))
}

export class HandAttack implements BaseSkill {
    type: "attack" | "gridBlock" | "dodge" = "attack";
    key: string = "HandAttack";
    name: string = "手部攻击";
    aiCanUsed: boolean = true;

    /**
     * 臂力影响伤害
     * @param playerObj
     * @param targetPlayerObj
     */
    executionAction(playerObj: PlayerObj, targetPlayerObj: PlayerObj): number {
        return playerObj.property.armStrength;
    }
}

export class FootAttack implements BaseSkill {
    type: "attack" | "gridBlock" | "dodge" = "attack";
    key: string = "FootAttack";
    name: string = "脚部攻击";

    /**
     * 脚力影响伤害
     * @param playerObj
     * @param targetPlayerObj
     */
    executionAction(playerObj: PlayerObj, targetPlayerObj: PlayerObj): number {
        return playerObj.property.footStrength;
    }

    aiCanUsed: boolean = true;
}

export class GridBlock implements BaseSkill {
    type: "attack" | "gridBlock" | "dodge" = "gridBlock";
    key: string = "GridBlock";
    name: string = "格挡";

    /**
     * 定力影响伤害
     * @param playerObj
     * @param targetPlayerObj
     */
    executionAction(playerObj: PlayerObj, targetPlayerObj: PlayerObj): number {
        return playerObj.property.fixedForce;
    }

    aiCanUsed: boolean = true;
}

export class Dodge implements BaseSkill {
    type: "attack" | "gridBlock" | "dodge" = "dodge";
    key: string = "Dodge";
    name: string = "躲避";

    /**
     * 敏捷影响伤害
     * @param playerObj
     * @param targetPlayerObj
     */
    executionAction(playerObj: PlayerObj, targetPlayerObj: PlayerObj): number {
        return playerObj.property.agility;
    }

    aiCanUsed: boolean = true;
}

export class RunAway implements BaseSkill {
    type: "attack" | "gridBlock" | "dodge" | "runAway" = "runAway";
    key: string = "RunAway";
    name: string = "逃跑";

    /**
     * 敏捷影响伤害
     * @param playerObj
     * @param targetPlayerObj
     */
    executionAction(playerObj: PlayerObj, targetPlayerObj: PlayerObj): number {
        return playerObj.property.agility;
    }

    aiCanUsed: boolean = false;
}
