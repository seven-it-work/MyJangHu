import service from "@/http/request.js";
import {BaseApi} from "@/http/baseApi.js";


class Zsgc extends BaseApi{
    constructor(baseUrl) {
        super();
        this.baseUrl = baseUrl;
    }

    list(current, pageSize) {
        return service({
            url: this.baseUrl + '/',
            method: 'get',
            params: {
                pageSize,
                current,
            }
        })
    }

    add(data) {
        return service({
            url: this.baseUrl + '/create',
            method: 'post',
            data
        })
    }

    delete(id) {
        return service({
            url: this.baseUrl + '/delete/' + id,
            method: 'post',
        })
    }

    update(data) {
        return service({
            url: this.baseUrl + '/update',
            method: 'post',
            data
        })
    }

    getById(id) {
        return service({
            url: this.baseUrl + '/' + id,
            method: 'get',
        })
    }

    listByIds(idList) {
        return service({
            url: this.baseUrl + '/listByIds',
            method: 'post',
            data: idList
        })
    }
}

class World extends Zsgc {

    constructor() {
        super('/world');
    }


    list(current, pageSize, selectCity = false) {
        return service({
            url: this.baseUrl + '/',
            method: 'get',
            params: {
                pageSize,
                current,
                selectCity
            }
        })
    }

    getById(id, selectCity = false) {
        return service({
            url: this.baseUrl + '/' + id,
            method: 'get',
            params: {selectCity}
        })
    }
}

class City extends Zsgc {

    constructor() {
        super('/city');
    }

    listAllCityByWorldId(id) {
        return service({
            url: this.baseUrl + '/listAllCityByWorldId/' + id,
            method: 'get',
        })
    }
}

class Scene extends Zsgc {

    constructor() {
        super('/scene');
    }

    listAllByCityId(id) {
        return service({
            url: this.baseUrl + '/listAllByCityId/' + id,
            method: 'get',
        })
    }
}


class People extends Zsgc {

    constructor() {
        super('/people');
    }

    list(current, pageSize, params) {
        return service({
            url: this.baseUrl + '/',
            method: 'get',
            params: {
                pageSize,
                current,
                ...params
            }
        })
    }
}


export const world = new World();
export const city = new City();
export const scene = new Scene();
export const people = new People();


