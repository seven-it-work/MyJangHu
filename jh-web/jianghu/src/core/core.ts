import {cityMap, CityObj} from "./entity/CityObj";
import {sceneMap, SceneObj} from "./entity/SceneObj";
import {worldMap} from "./entity/WorldObj";
import {peopleMap} from "./entity/PeopleObj";

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

export default {}