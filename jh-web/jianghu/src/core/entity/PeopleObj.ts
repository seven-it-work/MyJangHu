import {people, world} from "../../http/api";

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
}

export const peopleMap: Map<string, PeopleObj> = new Map()

const res = await people.listALl();
res.forEach((data: any) => {
    console.log(data)
    const obj = new PeopleObj(data);
    peopleMap.set(obj.id, obj);
})

