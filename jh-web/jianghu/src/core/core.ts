import {cityMap, CityObj} from "./entity/CityObj";
import {sceneMap, SceneObj} from "./entity/SceneObj";
import {worldMap} from "./entity/WorldObj";
import {peopleMap} from "./entity/PeopleObj";
import {ProbabilisticActuators} from "./ProbabilisticActuators";
import {SystemTimeObj} from "./entity/SystemTimeObj";
import {CoreContext} from "./entity/CoreContext";

worldMap.forEach((v, k) => {
})


cityMap.forEach((v, k) => {
    v.worldObj = worldMap.get(v.worldId);
})
sceneMap.forEach((v, k) => {
    v.worldObj = worldMap.get(v.worldId);
    v.cityObj = cityMap.get(v.cityId);
    v.fixedPeopleObjList = v.fixedPeopleIdList?.map(id => peopleMap.get(id)) || []
    v.peopleObjList = v.peopleIdList?.map(id => peopleMap.get(id)) || []
})


peopleMap.forEach((v, k) => {

})

const systemTimeObj = new SystemTimeObj(new Date().getTime());


const context: CoreContext = {
    systemTimeObj,
}

let interval
const stop = () => {
    if (interval) {
        clearInterval(interval)
    }
}
const run = () => {
    stop()
    interval = setInterval(() => {
        systemTimeObj.doSomething(context)
        worldMap.forEach((v) => v.doSomething(context))
        cityMap.forEach((v) => v.doSomething(context))
        sceneMap.forEach((v) => v.doSomething(context))
        peopleMap.forEach((v) => v.doSomething(context))
    }, 5000)
}

export default {
    systemTimeObj, run,
    stop,
}