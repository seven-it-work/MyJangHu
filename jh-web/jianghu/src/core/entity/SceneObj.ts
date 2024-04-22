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
    worldObj: WorldObj;
    cityId: string;
    cityObj: CityObj;
    remark: string;
    fixedPeopleIdList: string[];
    fixedPeopleObjList: Map<string, PeopleObj>;
    peopleIdList: string[];
    peopleObjList: Map<string, PeopleObj>;

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
    worldObj: WorldObj;
    cityId: string;
    cityObj: CityObj;
    remark: string;
    fixedPeopleIdList: string[];
    fixedPeopleObjList: Map<string, PeopleObj> = new Map();
    peopleIdList: string[];
    peopleObjList: Map<string, PeopleObj> = new Map();

    currentLingLiValue: number = 10;
    maxLingLiValue: number = 10;
    produceLingLiValue: number = 1;

    currentSilverValue: number = 10;
    maxSilverValue: number = 10;
    produceSilverValue: number = 1;

    currentGoldValue: number = 10;
    maxGoldValue: number = 10;
    produceGoldValue: number = 1;


    constructor(data: SceneInterface) {
        Object.assign(this, data);
    }

    consumeLingLi(value: number): number {
        if (this.currentLingLiValue < value) {
            value = this.currentLingLiValue
        }
        this.currentLingLiValue -= value;
        return value
    }

    peopleMoveOut(people: PeopleObj) {
        // console.log(`${people.getName()}离开了${this.worldObj.name}=>${this.cityObj.name}=>${this.name}`)
        this.peopleObjList.delete(people.id)
        people.currentSceneObj = undefined;
        people.currentCityObj = undefined;
        people.currentWorldObj = undefined;
    }

    peopleMoveIn(people: PeopleObj) {
        // console.log(`${people.getName()}进入了${this.worldObj.name}=>${this.cityObj.name}=>${this.name}`)
        this.peopleObjList.set(people.id, people)
        people.currentSceneObj = this;
        people.currentCityObj = this.cityObj;
        people.currentWorldObj = this.worldObj;
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
    const obj = new SceneObj(data);
    sceneMap.set(obj.id, obj);
})


