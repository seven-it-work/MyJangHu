import {BaseApi} from "@/http/baseApi.js";
import {randomUtil} from "@/random.js";
import worldDb from "@/http/db/worldDb.js";
import peopleDb from "@/http/db/peopleDb.js";
import cityDb from "@/http/db/cityDb.js";
import sceneDb from "@/http/db/sceneDb.js";

class LocalApi extends BaseApi {
    constructor(allDataList) {
        super();
        this.allDataList = allDataList;
    }

    list(current, pageSize) {
        return super.list(current, pageSize).then(() => {
            const totalPages = Math.ceil(this.allDataList.length / pageSize);
            const startIndex = (current - 1) * pageSize;
            return this.allDataList.slice(startIndex, startIndex + pageSize);
        });
    }

    add(data) {
        return super.add(data).then(() => {
            data.id = randomUtil.guid()
            this.allDataList.push(data)
        })
    }

    delete(id) {
        return super.delete(id).then(() => {
            this.allDataList = this.allDataList.filter(item => item.id !== id);
        })
    }

    update(data) {
        return super.update(data).then(() => {
            const findData = this.allDataList.filter(item => item.id === data.id)[0];
            if (findData) {
                Object.assign(findData, data);
            }
        })
    }

    getById(id) {
        return super.getById(id).then(() => {
            return this.allDataList.filter(item => item.id === id)[0];
        })
    }

    listByIds(idList) {
        return super.listByIds(idList).then(() => {
            return this.allDataList.filter(item => idList.includes(item.id));
        })
    }
}

class People extends LocalApi {
}

class World extends LocalApi {
}

class City extends LocalApi {
}

class Scene extends LocalApi {
}

export const people = new People(peopleDb)
export const world = new World(worldDb)
export const city = new City(cityDb)
export const scene = new Scene(sceneDb)
