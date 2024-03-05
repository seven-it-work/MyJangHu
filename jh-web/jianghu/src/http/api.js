import service from "@/http/request.js";

class Zsgc {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    list(current, pageSize,selectCity=false) {
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
}

class World extends Zsgc {

    constructor() {
        super('/world');
    }
}
class City extends Zsgc {

    constructor() {
        super('/city');
    }

    listAllCityByWordId(id) {
        return service({
            url: this.baseUrl + '/listAllCityByWordId/' + id,
            method: 'get',
        })
    }
}

export const world = new World();
export const city = new City();


