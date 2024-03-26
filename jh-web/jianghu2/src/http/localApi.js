import {BaseApi} from "@/http/baseApi.js";
import store from "@/vuex/store.js";
import {cloneDeep} from "lodash";
import {randomUtil} from "@/random.js";
 const isDebug = true
class BaseLocalApi extends BaseApi {

    dbMap = {}

    constructor(dbMap) {
        super();
        this.dbMap = dbMap;
    }

    listAll() {
        return cloneDeep(Object.values(this.dbMap));
    }

    list(current, pageSize) {
        const mapDb = Object.values(this.dbMap);
        if (current * pageSize > mapDb.length) {
            return []
        }
        return cloneDeep(mapDb.slice((current - 1) * pageSize, current * pageSize));
    }

    add(data) {
        data.id = randomUtil.guid();
        this.dbMap[data.id] = data
        if (isDebug){
            console.log(`模块${this.constructor.name}。序列化对象↓↓↓↓↓↓↓↓↓↓`);
            console.log(`export default ${JSON.stringify(this.dbMap)}`)
            console.log(`模块${this.constructor.name}。↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑`)
        }
    }

    delete(id) {
        delete this.dbMap[id]
        if (isDebug){
            console.log(`模块${this.constructor.name}。序列化对象↓↓↓↓↓↓↓↓↓↓`);
            console.log(`export default ${JSON.stringify(this.dbMap)}`)
            console.log(`模块${this.constructor.name}。↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑`)
        }
    }

    update(data) {
        this.dbMap[data.id] = data
        if (isDebug){
            console.log(`模块${this.constructor.name} 序列化对象↓↓↓↓↓↓↓↓↓↓`);
            console.log(`export default ${JSON.stringify(this.dbMap)}`)
            console.log(`模块${this.constructor.name} ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑`)
        }
    }

    getById(id) {
        return cloneDeep(this.dbMap[id]);
    }

    listByIds(idList) {
        return cloneDeep(idList.map(id => this.getById(id)))
    }
}

class MapApi extends BaseLocalApi {

    constructor() {
        super(store.state.mapDb);
    }
}

export const mapAPi = new MapApi()
