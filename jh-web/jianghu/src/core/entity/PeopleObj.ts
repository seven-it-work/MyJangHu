import {people, world} from "../../http/api";
import {CoreContext} from "./CoreContext";
import {ProbabilisticActuators} from "../ProbabilisticActuators";

export interface PeopleInterface {
    description: string;
    id: string;
    name: string;
}

export class PeopleObj implements PeopleInterface {
    description: string;
    id: string;
    name: string;


    constructor(data: PeopleInterface) {
        Object.assign(this, data);
    }

    performSocializing() {
        ProbabilisticActuators.run([
            {
                weight: 10, action: () => {
                    // 什么都不做
                }
            },
            {
                weight: 30, action: () => {
                    // 问候
                }
            },
            {
                weight: 20, action: () => {
                    // 讨好
                }
            },
            {
                weight: 20, action: () => {
                    // 辱骂
                }
            },
            {
                weight: 10, action: () => {
                    // 表白
                }
            },
            {
                weight: 10, action: () => {
                    // 分手
                }
            },
            {
                weight: 10, action: () => {
                    // 求婚
                }
            },
            {
                weight: 10, action: () => {
                    // 离婚
                }
            },
        ])
    }

    doSomething(context: CoreContext) {
        ProbabilisticActuators.run([
            {
                weight: 10, action: () => {
                    // 社交
                    this.performSocializing()
                }
            },
            {
                weight: 10, action: () => {
                    // 打工挣钱
                }
            },
            {
                weight: 10, action: () => {
                    // 休息
                }
            },
            {
                weight: 10, action: () => {
                    // 吸收灵气
                }
            },
        ])
    }
}

export const peopleMap: Map<string, PeopleObj> = new Map()

const res = await people.listALl();
res.forEach((data: any) => {
    console.log(data)
    const obj = new PeopleObj(data);
    peopleMap.set(obj.id, obj);
})

