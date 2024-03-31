import {world} from "../../http/api";
import {CoreContext} from "./CoreContext";
import {SceneObj} from "./SceneObj";
import {CityObj} from "./CityObj";


export interface WorldInterface {
    description: string;
    id: string;
    name: string;

    cityObjList: CityObj[];
}

export class WorldObj implements WorldInterface {
    description: string;
    id: string;
    name: string;

    cityObjList: CityObj[] = [];

    constructor(data: WorldInterface) {
        Object.assign(this, data);
    }

    doSomething(context: CoreContext) {

    }
}


export const worldMap: Map<string, WorldObj> = new Map()
const res = await world.listALl();
res.forEach((data: any) => {
    const obj = new WorldObj(data);
    worldMap.set(obj.id, obj);
})
