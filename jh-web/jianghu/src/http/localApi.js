import {BaseApi} from "@/http/baseApi.js";
import {randomUtil} from "@/random.js";
import worldDb from "@/http/db/worldDb.js";
import peopleDb from "@/http/db/peopleDb.js";
import cityDb from "@/http/db/cityDb.js";
import sceneDb from "@/http/db/sceneDb.js";
import {cloneDeep} from "lodash";

const isDebug = true

class LocalApi extends BaseApi {
    constructor(allDataList) {
        super();
        this.allDataList = allDataList;
    }

    list(current, pageSize) {
        return super.list(current, pageSize).then(() => {
            const totalPages = Math.ceil(this.allDataList.length / pageSize);
            const startIndex = (current - 1) * pageSize;
            const records = cloneDeep(this.allDataList.slice(startIndex, startIndex + pageSize));
            const result = {
                "records": records,
                "total": this.allDataList.length,
                "size": pageSize,
                "current": current,
                "pages": totalPages
            }
            return result
        });
    }

    add(data) {
        return super.add(data).then(() => {
            data.id = randomUtil.guid()
            this.allDataList.push(data)
            if (isDebug) {
                console.log(`模块${this.constructor.name}。序列化对象↓↓↓↓↓↓↓↓↓↓`);
                console.log(`export default ${JSON.stringify(this.allDataList)}`)
                console.log(`模块${this.constructor.name}。↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑`)
            }
        })
    }

    delete(id) {
        return super.delete(id).then(() => {
            this.allDataList = this.allDataList.filter(item => item.id !== id);
            if (isDebug) {
                console.log(`模块${this.constructor.name}。序列化对象↓↓↓↓↓↓↓↓↓↓`);
                console.log(`export default ${JSON.stringify(this.allDataList)}`)
                console.log(`模块${this.constructor.name}。↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑`)
            }
        })
    }

    update(data) {
        return super.update(data).then(() => {
            const findData = this.allDataList.filter(item => item.id === data.id)[0];
            if (findData) {
                Object.assign(findData, data);
                if (isDebug) {
                    console.log(`模块${this.constructor.name}。序列化对象↓↓↓↓↓↓↓↓↓↓`);
                    console.log(`export default ${JSON.stringify(this.allDataList)}`)
                    console.log(`模块${this.constructor.name}。↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑`)
                }
            }
        })
    }

    getById(id) {
        return super.getById(id).then(() => {
            return cloneDeep(this.allDataList.filter(item => item.id === id)[0]);
        })
    }

    listByIds(idList) {
        return super.listByIds(idList).then(() => {
            return cloneDeep(this.allDataList.filter(item => idList.includes(item.id)));
        })
    }

    listALl() {
        return Promise.resolve().then(() => {
            return this.allDataList
        })
    }
}

class People extends LocalApi {
}

class World extends LocalApi {
}

class City extends LocalApi {
    listAllCityByWorldId(id) {
        return this.listALl().then(res => {
            return res.filter(item => item.worldId === id)
        })
    }
}

class Scene extends LocalApi {
    listAllByCityId(id) {
        return this.listALl().then(res => {
            return res.filter(item => item.cityId === id)
        })
    }
}

export const people = new People(peopleDb)
export const world = new World(worldDb)
export const city = new City(cityDb)
export const scene = new Scene(sceneDb)
