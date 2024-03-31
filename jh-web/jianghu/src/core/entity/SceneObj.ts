import {CityObj} from "./CityObj";
import {PeopleObj} from "./PeopleObj";
import {WorldObj} from "./WorldObj";
import {scene} from "../../http/api";

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


    constructor(data: SceneInterface) {
        Object.assign(this, data);
    }
}

export const sceneMap: Map<string, SceneObj> = new Map()

const res = await scene.listALl()
res.forEach((data: any) => {
    console.log(data)
    const obj = new SceneObj(data);
    sceneMap.set(obj.id, obj);
})


