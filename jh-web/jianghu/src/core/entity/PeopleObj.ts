import {people, world} from "../../http/api";
import {CoreContext} from "./CoreContext";
import {ProbabilisticActuators} from "../ProbabilisticActuators";
import {SceneObj} from "./SceneObj";
import {randomList, randomUtil} from "../../random";
import {CityObj} from "./CityObj";
import {WorldObj} from "./WorldObj";

export enum SexType {
    MAN = "MAN",
    WOMAN = "WOMAN",
}


export interface PeopleInterface {
    description: string;
    id: string;
    name: string;

    xing: string;
    ming: string;
    sex: SexType;
    remark: string;
    currentSceneObj: SceneObj;
    currentSceneId: string;
    interactionIdList: string;
    peopleType: string;
    currentCityObj: CityObj;
    currentCityId: string;
    currentWorldObj: WorldObj;
    currentWorldId: string;
    eventProcessingTime: number;
    lingLi: number;
    gainLingLiSpeed: number;// 每次获取量
}

export class PeopleObj implements PeopleInterface {
    description: string;
    id: string;
    name: string;

    xing: string;
    ming: string;
    sex: SexType;
    remark: string;
    currentSceneObj: SceneObj;
    private _currentSceneId: string;
    currentCityObj: CityObj;
    private _currentCityId: string;
    currentWorldObj: WorldObj;
    private _currentWorldId: string;
    interactionIdList: string;
    peopleType: string;
    eventProcessingTime: number;

    lingLi: number = 0;
    gainLingLiSpeed: number = 1;// 每次获取量

    processingEfficiency(context: CoreContext) {
        if (this.eventProcessingTime) {
            return Math.max(1, (context.systemTimeObj.gameTime - this.eventProcessingTime) / (1000 * 500))
        }
        return 0;
    }

    getName(): string {
        return this.xing + this.ming
    }

    constructor(data: PeopleInterface) {
        Object.assign(this, data);
    }

    executePerformSocializing(context: CoreContext) {
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

    executeLingLiPower(context: CoreContext) {
        const gainLingLi = this.currentSceneObj?.consumeLingLi(this.processingEfficiency(context) * this.gainLingLiSpeed)
        // console.log(`${this.currentSceneObj?.name} 获取${gainLingLi}`)
        this.lingLi += gainLingLi
    }

    executeMove(context: CoreContext) {
        // if (this.peopleType !== 'AI_PEOPLE') {
        if (this.peopleType !== '1') {
            return
        }
        const moveScene = (sceneObjList: SceneObj[]) => {
            const newSceneObj: SceneObj = randomList.randomFormList(sceneObjList)
            // 重置
            this.eventProcessingTime = context.systemTimeObj.gameTime
            // 原来去掉
            if (this.currentSceneObj) {
                this.currentSceneObj.peopleMoveOut(this)
            }
            if (newSceneObj) {
                newSceneObj.peopleMoveIn(this)
            }
        }
        ProbabilisticActuators.run([
            {
                weight: 30, action: () => {
                    // 当前城市移动(改变节点)
                    moveScene(this.currentCityObj?.sceneObjList)
                }
            },
            {
                weight: 20, action: () => {
                    // 当前世界移动(改变城市)
                    const newCityObj: CityObj = randomList.randomFormList(this.currentWorldObj?.cityObjList)
                    moveScene(newCityObj?.sceneObjList)
                }
            },
            {
                weight: 10, action: () => {
                    // 当前世界移动(改变世界)
                    const newWorldObj: WorldObj = randomList.randomFormList(Array.from(context.worldMap.values()))
                    const newCityObj: CityObj = randomList.randomFormList(newWorldObj?.cityObjList)
                    moveScene(newCityObj?.sceneObjList)
                }
            },
        ])
    }

    doSomething(context: CoreContext) {
        ProbabilisticActuators.run([
            {
                weight: 10, action: () => {
                    // 什么都不做
                }
            },
            {
                weight: 5, action: () => {
                    // 移动
                    this.executeMove(context)
                }
            },
            {
                weight: 10, action: () => {
                    // 社交
                    this.executePerformSocializing(context)
                }
            },
            {
                weight: 20, action: () => {
                    // 打工挣钱
                }
            },
            {
                weight: 20, action: () => {
                    // 休息
                }
            },
            {
                weight: 20, action: () => {
                    // 吸收灵气
                    this.executeLingLiPower(context)
                }
            },
        ])
    }

    get currentSceneId(): string {
        return this.currentSceneObj?.id || this._currentSceneId;
    }

    get currentCityId(): string {
        return this.currentCityObj?.id || this._currentCityId;
    }

    get currentWorldId(): string {
        return this.currentWorldObj?.id || this._currentWorldId;
    }

    set currentSceneId(value: string) {
        this._currentSceneId = value;
    }

    set currentCityId(value: string) {
        this._currentCityId = value;
    }

    set currentWorldId(value: string) {
        this._currentWorldId = value;
    }
}

export const peopleMap: Map<string, PeopleObj> = new Map()

const res = await people.listALl();
res.forEach((data: any) => {
    const obj = new PeopleObj(data);
    peopleMap.set(obj.id, obj);
})

