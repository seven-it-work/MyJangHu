import {CityObj} from "./CityObj";
import {PeopleObj} from "./PeopleObj";
import {WorldObj} from "./WorldObj";
import {scene} from "../../http/api";
import {CoreContext} from "./CoreContext";
import {ProbabilisticActuators} from "../ProbabilisticActuators";
import {randomUtil} from "../../random";

export interface SceneInterface {
    description: string;
    id: string;
    name: string;
    worldId: string;
    worldObj: WorldObj;
    cityId: string;
    cityObj: CityObj;
    remark: string;
    fixedPeopleIdList: string[];
    fixedPeopleObjList: PeopleObj[];
    peopleIdList: string[];
    peopleObjList: PeopleObj[];

    currentLingLiValue: number;
    maxLingLiValue: number;
    produceLingLiValue: number;

    currentSilverValue: number;
    maxSilverValue: number;
    produceSilverValue: number;

    currentGoldValue: number;
    maxGoldValue: number;
    produceGoldValue: number;
}


export class SceneObj implements SceneInterface {
    description: string;
    id: string;
    name: string;
    worldId: string;
    worldObj: WorldObj;
    cityId: string;
    cityObj: CityObj;
    remark: string;
    fixedPeopleIdList: string[];
    fixedPeopleObjList: PeopleObj[];
    peopleIdList: string[];
    peopleObjList: PeopleObj[];

    currentLingLiValue: number;
    maxLingLiValue: number;
    produceLingLiValue: number;

    currentSilverValue: number;
    maxSilverValue: number;
    produceSilverValue: number;

    currentGoldValue: number;
    maxGoldValue: number;
    produceGoldValue: number;


    constructor(data: SceneInterface) {
        Object.assign(this, data);
    }

    doSomething(context: CoreContext) {
        ProbabilisticActuators.run([
            {weight: 10},
            {
                weight: 10, action: () => {
                    // 生产灵力
                    if (this.currentLingLiValue >= this.maxLingLiValue) {
                        return
                    }
                    const value = randomUtil.integer({min: 0, max: this.produceLingLiValue})
                    this.currentLingLiValue += value;
                }
            },
            {
                weight: 10, action: () => {
                    // 生产银矿
                    if (this.currentSilverValue >= this.maxSilverValue) {
                        return
                    }
                    const value = randomUtil.integer({min: 0, max: this.produceSilverValue})
                    this.currentSilverValue += value;
                }
            },
            {
                weight: 10, action: () => {
                    // 生产金矿
                    if (this.currentGoldValue >= this.maxGoldValue) {
                        return
                    }
                    const value = randomUtil.integer({min: 0, max: this.produceGoldValue})
                    this.currentGoldValue += value;
                }
            },
        ])
    }
}

export const sceneMap: Map<string, SceneObj> = new Map()

const res = await scene.listALl()
res.forEach((data: any) => {
    console.log(data)
    const obj = new SceneObj(data);
    sceneMap.set(obj.id, obj);
})


