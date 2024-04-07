import {cityMap, CityObj} from "./entity/CityObj";
import {sceneMap, SceneObj} from "./entity/SceneObj";
import {worldMap} from "./entity/WorldObj";
import {peopleMap} from "./entity/PeopleObj";
import {ProbabilisticActuators} from "./ProbabilisticActuators";
import {SystemTimeObj} from "./entity/SystemTimeObj";
import {CoreContext} from "./entity/CoreContext";
import store from "@/vuex/store";

const speeding=100

worldMap.forEach((v, k) => {
})


cityMap.forEach((v, k) => {
    v.worldObj = worldMap.get(v.worldId);

    v.worldObj.cityObjList.push(v)

})
sceneMap.forEach((v, k) => {
    v.cityObj = cityMap.get(v.cityId);
    v.worldObj = worldMap.get(v.cityObj.worldId);
    v.fixedPeopleIdList?.map(id => peopleMap.get(id)).forEach(value => {
        v.fixedPeopleObjList.set(value.id, value)
    })
    v.cityObj.sceneObjList.push(v)
})


peopleMap.forEach((v, k) => {
    v.currentSceneObj = sceneMap.get(v.currentSceneId);
    v.currentCityObj = cityMap.get(v.currentCityId);
    v.currentWorldObj = worldMap.get(v.currentWorldId);
    if (v.peopleType==='AI_PEOPLE'){
        if (v.currentSceneObj){
            v.currentSceneObj.peopleMoveIn(v)
        }
    }
})

const systemTimeObj = new SystemTimeObj(new Date().getTime());


const context: CoreContext = {
    systemTimeObj,
    worldMap,
    cityMap,
    sceneMap,
    peopleMap,
    time: new Date().getTime(),
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
        // store.commit('updateContext', context)
    }, speeding)
}

export default {
    systemTimeObj,
    run,
    stop,
    context,
}
