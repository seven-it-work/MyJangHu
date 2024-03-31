import {world} from "../../http/api";


export interface WorldInterface {
    description: string;
    id: string;
    name: string;
}

export class WorldObj implements WorldInterface {
    description: string;
    id: string;
    name: string;


    constructor(data:WorldInterface) {
        Object.assign(this, data);
    }
}


export const worldMap: Map<string, WorldObj> = new Map()
const res=await world.listALl();
    res.forEach((data: any) => {
        console.log(data)
        const obj = new WorldObj(data);
        worldMap.set(obj.id, obj);
    })
