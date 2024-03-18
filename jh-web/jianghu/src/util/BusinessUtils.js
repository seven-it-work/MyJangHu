import loginPeople from "@/vuex/loginPeople.js";
import {city, people, scene, world} from "@/http/api.js";

export const updateCurrentPeople = (updateData) => {
    if (updateData.id !== loginPeople.state.peopleObj.id) {
        return
    }
   return  people.update(updateData).then(()=>{
       return people.getById(updateData.id).then(async (peopleData) => {
           const peopleObj = peopleData;
           if (peopleObj.currentWorldId) {
               await world.getById(peopleObj.currentWorldId).then(res => {
                   peopleObj.currentWorld = res
               })
           }
           if (peopleObj.currentCityId) {
               await city.getById(peopleObj.currentCityId).then(res => {
                   peopleObj.currentCity = res
               })
           }
           if (peopleObj.currentSceneId) {
               await scene.getById(peopleObj.currentSceneId).then(res => {
                   peopleObj.currentScene = res
               })
           }
           loginPeople.state.peopleObj=peopleObj
       })
    })
}
