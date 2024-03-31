import {city} from "../../http/api";
import {WorldObj} from "./WorldObj";
import {CoreContext} from "./CoreContext";
import {ProbabilisticActuators} from "../ProbabilisticActuators";

export interface CityInterface {
    description: string;
    enterSceneId: string;
    id: string;
    name: string;
    worldId: string;
    worldObj: WorldObj;
}

export class CityObj implements CityInterface {
    description: string;
    enterSceneId: string;
    id: string;
    name: string;
    worldId: string;
    worldObj: WorldObj;


    constructor(data: CityInterface) {
        Object.assign(this, data);
    }
    doSomething(context:CoreContext){

    }
}

export const cityMap: Map<string, CityObj> = new Map()

const res = await city.listALl()
res.forEach((data: any) => {
    const obj = new CityObj(data);
    cityMap.set(obj.id, obj);
})


